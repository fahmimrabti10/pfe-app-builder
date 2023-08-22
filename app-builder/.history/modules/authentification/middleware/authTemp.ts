import { Oauth2Scheme } from '@AUTHENTIFICATION/scheme/customAuth';
import LuigiClient from '@luigi-project/client';

export default defineNuxtPlugin(() => {
  const o = {
    code_challenge_method: 'S256',
    endpoints: {
      logout:
        useNuxtApp().$config.AUTH_PATH +
        '/protocol/openid-connect/logout?redirect_uri=' +
        encodeURIComponent(useNuxtApp().$config.LOGOUT_REDIRECT_URL),
      authorization: useNuxtApp().$config.AUTH_PATH + '/protocol/openid-connect/auth',
    },
    responseType: 'code',
    grantType: 'authorization_code',
    clientId: useNuxtApp().$config.CLIENT_ID,
    scope: [
      'openid',
      'offline_access',
      'email',
      'phone',
      'microprofile-jwt',
      'roles',
      'address',
      'web-origins',
      'profile',
    ],
    redirect: {
      logout: '/authentification/logout',
      callback: '/authentification/redirect',
    },
    codeChallengeMethod: 'S256',
    client_secret: useNuxtApp().$config.CLIENT_SECRET_KEY,
    tokenRequired: true,
    user: {
      autoFetch: false,
    },
  };
  addRouteMiddleware(
    'authentificationAuthTemp',
    async () => {
      useNuxtApp().$auth = new Oauth2Scheme(null, null, o);
      useNuxtApp().$auth.token = useCookie('auth._token.keycloak').value;
      if (!process.server) {
        if (!LuigiClient.isLuigiClientInitialized()) {
          await useNuxtApp().$auth.mounted();
        } else{
          useNuxtApp().$i18n.setLocale(LuigiClient.uxManager().getCurrentLocale());
        }
      }
    },
    { global: true }
  );
});
