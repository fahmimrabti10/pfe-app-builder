import { nanoid } from 'nanoid';
import requrl from '../lib/requrl';
import { encodeQuery, urlJoin, isUnset, encodeValue } from '../lib/utils';

import BaseScheme from '../lib/_scheme';

const DEFAULTS = {
  name: 'oauth2',
  accessType: null,
  redirectUri: null,
  logoutRedirectUri: null,
  clientId: null,
  audience: null,
  grantType: null,
  responseMode: null,
  acrValues: null,
  autoLogout: false,
  endpoints: {
    logout: '',
    authorization: '',
    token: '',
    userInfo: '',
  },
  scope: [],
  token: {
    property: 'access_token',
    type: 'Bearer',
    name: 'Authorization',
    maxAge: 1800,
    global: true,
    prefix: '_token.',
    expirationPrefix: '_token_expiration.',
  },
  refreshToken: {
    property: 'refresh_token',
    maxAge: 60 * 60 * 24 * 30,
    prefix: '_refresh_token.',
    expirationPrefix: '_refresh_token_expiration.',
  },
  user: {
    property: false,
  },
  responseType: 'token',
  codeChallengeMethod: 'implicit',
  client_secret: null,
};

const pkce_code_verifier = '.pkce_code_verifier';
export class Oauth2Scheme extends BaseScheme {
  constructor($auth, options, ...defaults) {
    super($auth, options, ...defaults, DEFAULTS);
    this.token = null;
    this.loggedIn = false;
  }

  get _scope() {
    return Array.isArray(this.options.scope) ? this.options.scope.join(' ') : this.options.scope;
  }

  get _redirectURI() {
    return this.options.redirectUri || urlJoin(requrl(this.req), this.callback);
  }

  get _logoutRedirectURI() {
    return this.options.logoutRedirectUri || urlJoin(requrl(this.req), this.options.redirect.logout);
  }

  check(checkStatus = false) {
    const response = {
      valid: false,
      tokenExpired: false,
      refreshTokenExpired: false,
      isRefreshable: true,
    };
    // Sync tokens
    // const token = this.token;
    // this.refreshToken.sync();
    // Token is required but not available
    if (!this.token) {
      return response;
    }
    // Check status wasn't enabled, let it pass
    if (!checkStatus) {
      response.valid = true;
      return response;
    }
    // Get status
    const tokenStatus = this.token.status();
    const refreshTokenStatus = this.refreshToken.status();
    // Refresh token has expired. There is no way to refresh. Force reset.
    if (refreshTokenStatus.expired()) {
      response.refreshTokenExpired = true;
      return response;
    }
    // Token has expired, Force reset.
    if (tokenStatus.expired()) {
      response.tokenExpired = true;
      return response;
    }
    response.valid = true;
    return response;
  }

  async mounted() {
    if (useRoute().path == this.options.redirect.logout || (this.token && !this.check().valid)) {
      this.logout();
      return;
    }
    if (!this.token && !useRoute().query.state) {
      this.login();
      return;
    }
    if (this.token) {
      this.loggedIn = true;
      return;
    }
    const cookieVerifier = useCookie(this.name + pkce_code_verifier);
    await useFetch(useNuxtApp().$config.AUTH_PATH + '/protocol/openid-connect/token', {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },

      body: new URLSearchParams({
        code: useRoute().query.code,
        client_id: this.options.clientId,
        redirect_uri: this._redirectURI,
        response_type: 'code',
        audience: '',
        grant_type: this.options.grantType,
        code_verifier: cookieVerifier.value,
        client_secret: this.options.client_secret,
      }),
      onResponse: ({ response }) => {
        // Process the response data
        // return response._data
        if (response._data.token_type && response._data.access_token) {
          this.loggedIn = true;
          const authC = useCookie('auth._token.keycloak', { maxAge: 60 * 60 * 24 * 30 });
          authC.value = encodeURIComponent(response._data.token_type + ' ' + response._data.access_token);
          this.token = authC.value;
          // authC.maxAge = 60 * 60 * 24 * 30;
        }
        if (response._data.refresh_token) {
          const authR = useCookie('auth._refresh_token.keycloak', { maxAge: 60 * 60 * 24 * 30 });
          authR.value = response._data.refresh_token;
          // authR.maxAge =  60 * 60 * 24 * 30;
        }
      },
      onResponseError({ request, response, options }) {
        // Handle the response errors
        console.log(request, options, response);
      },
    });
  }
  // ------------------------------------
  // Universal
  // ------------------------------------
  setUniversal(key, value) {
    // Unset null, undefined
    if (isUnset(value)) {
      return this.removeUniversal(key);
    }
    // Cookies
    const cookie = useCookie(key);
    cookie.value = value;

    // Local Storage
    this.setLocalStorage(key, value);
    // Local state
    // useLoggedInUserStore().state[key]=value
    // this.setState(key, value);
    return value;
  }
  // ------------------------------------
  // Local storage
  // ------------------------------------
  setLocalStorage(key, value) {
    // Unset null, undefined
    if (isUnset(value)) {
      return this.removeLocalStorage(key);
    }
    if (!this.options.localStorage || typeof localStorage === 'undefined') {
      return;
    }
    const _key = this.options.localStorage.prefix + key;
    try {
      localStorage.setItem(_key, encodeValue(value));
    } catch (e) {
      if (!this.options.ignoreExceptions) {
        throw e;
      }
    }
    return value;
  }

  reset() {
    useCookie('auth._token.keycloak').value = null;
    useCookie(this.name + '.state').value = null;
    useCookie(this.name + pkce_code_verifier).value = null;
    useCookie(this.name + '.pkce_state').value = null;
  }

  _generateRandomString() {
    const array = new Uint32Array(28); // this is of minimum required length for servers with PKCE-enabled
    window.crypto.getRandomValues(array);
    return Array.from(array, (dec) => ('0' + dec.toString(16)).substr(-2)).join('');
  }

  _sha256(plain) {
    const encoder = new TextEncoder();
    const data = encoder.encode(plain);
    return window.crypto.subtle.digest('SHA-256', data);
  }

  _base64UrlEncode(str) {
    // Convert the ArrayBuffer to string using Uint8 array to convert to what btoa accepts.
    // btoa accepts chars only within ascii 0-255 and base64 encodes them.
    // Then convert the base64 encoded to base64url encoded
    //   (replace + with -, replace / with _, trim trailing =)
    return btoa(String.fromCharCode.apply(null, new Uint8Array(str)))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
  }

  async _pkceChallengeFromVerifier(v, hashValue) {
    if (hashValue) {
      const hashed = await this._sha256(v);
      return this._base64UrlEncode(hashed);
    }
    return v; // plain is plain - url-encoded by default
  }

  async login(_opts = {}) {
    // this.options= {...this.options, ..._opts}
    if (this.token) {
      return;
    }
    const opts = {
      response_type: this.options.responseType,
      access_type: this.options.accessType,
      client_id: this.options.clientId,
      redirect_uri: this._redirectURI,
      scope: this.options.scope.join(' '),
      // Note: The primary reason for using the state parameter is to mitigate CSRF attacks.
      // https://auth0.com/docs/protocols/oauth2/oauth-state
      state: this.options.state || nanoid(),
      code_challenge_method: this.options.codeChallengeMethod,
      ..._opts.params,
    };

    if (this.options.audience) {
      opts.audience = this.options.audience;
    }
    // Set Nonce Value if response_type contains id_token to mitigate Replay Attacks
    // More Info: https://openid.net/specs/openid-connect-core-1_0.html#NonceNotes
    // More Info: https://tools.ietf.org/html/draft-ietf-oauth-v2-threatmodel-06#section-4.6.2
    if (opts.response_type.includes('id_token')) {
      // nanoid auto-generates an URL Friendly, unique Cryptographic string
      // Recommended by Auth0 on https://auth0.com/docs/api-auth/tutorials/nonce
      opts.nonce = this.options.nonce || nanoid();
    }
    if (opts.code_challenge_method) {
      switch (opts.code_challenge_method) {
        case 'plain':
        case 'S256':
          {
            const state = this._generateRandomString();
            this.setUniversal(this.name + '.pkce_state', state);
            const codeVerifier = this._generateRandomString();
            this.setUniversal(this.name + pkce_code_verifier, codeVerifier);
            const codeChallenge = await this._pkceChallengeFromVerifier(
              codeVerifier,
              opts.code_challenge_method === 'S256'
            );
            opts.code_challenge = window.encodeURIComponent(codeChallenge);
          }
          break;
        case 'implicit':
        default:
          break;
      }
    }
    if (this.options.responseMode) {
      opts.response_mode = this.options.responseMode;
    }
    if (this.options.acrValues) {
      opts.acr_values = this.options.acrValues;
    }
    this.setUniversal(this.name + '.state', opts.state);
    const url = this.options.endpoints.authorization + '?' + encodeQuery(opts);
    window.location.replace(url);
  }

  logout() {
    if (this.options.endpoints.logout) {
      const opts = {
        client_id: this.options.clientId,
        logout_uri: this._logoutRedirectURI,
      };
      const url = this.options.endpoints.logout + '?' + encodeQuery(opts);
      window.location.replace(url);
    }
    return this.reset();
  }
}
