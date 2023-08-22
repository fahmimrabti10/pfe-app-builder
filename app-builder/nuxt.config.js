import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import { resolve, basename } from 'pathe';
import localeEN from './locales/en.json';
import localeFR from './locales/fr.json';
const baseFolder = basename(resolve(__dirname));
export default defineNuxtConfig({
  ssr: false,
  app: {
    rootId: '__app',
    buildAssetsDir: '/src/',
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v2' }],
    },
  },
  alias: {
    '@BASE': resolve(__dirname),
  },
  runtimeConfig: {
    public: {
      DEBUG: process.env.DEBUG,
      API: process.env.NODE_ENV !== 'production' && !process.env.DEBUG ? process.env.API_MOCK : process.env.API,
      API_COMMON:
        process.env.NODE_ENV !== 'production' && !process.env.DEBUG
          ? process.env.API_COMMON_MOCK
          : process.env.API_COMMON,

           REALMS: process.env.REALMS,

 AUTH_PATH:

process.env.KEYCLOAK_BASE_URL + "/realms/" + process.env.REALMS,
 CLIENT_SECRET_KEY: process.env.CLIENT_SECRET_KEY,

LOGOUT_REDIRECT_URL: process.env.LOGOUT_REDIRECT_URL,

      CLIENT_ID: process.env.CLIENT_ID,
 WS_ADD_MEDIA : '8096/api/asset-command/assets/add-asset/'
    },
  },
  hooks: {
    'vite:extendConfig': (config, { isClient }) => {
      if (isClient) {
        config.resolve.alias.vue = 'vue/dist/vue.esm-bundler.js';
      }
    },
  },
  devtools: true,
  vite: {
    server: {
      fs: {
        allow: ['C:'],
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          async: false,
          env: 'development',
          javascriptEnabled: true,
          modifyVars: {
            'heading-color': 'rgba(0, 0, 0, 0.85)',
            'text-color': '#383333',
            'text-color-secondary': '#786d6d',
            'disabled-color': 'rgba(0, 0, 0, 0.3)',
            'border-radius-base': '4px',
            'border-color-base': '#d9d9d9',
            'btn-border-radius-base': '26px',
            'menu-item-active-border-width': '0',
            'menu-item-boundary-margin': '1.5rem',
            'menu-item-font-size': '17px',
            'table-row-hover-bg': '#F2F6F7',
            'table-header-bg': '#ffffff',
            'table-header-color': '#707070',
            'input-hover-border-color': '#786d6d',
            'input-outline-offset': '0 0 0 0',
          },
        },
      },
    },
    plugins: [
      Components({
        // add option {resolveIcons: true} as parameter for resolving problem with icons
        resolvers: [AntDesignVueResolver({ resolveIcons: true, importStyle: false })],
      }),
    ],
  },
  modules: [
    // app modules
    `../${baseFolder}/modules/home`,
    `../${baseFolder}/modules/ui`,
    `../${baseFolder}/modules/config`,
    `../${baseFolder}/modules/language`,
    `../${baseFolder}/modules/products`,
    `../${baseFolder}/modules/apps`,
    // `../${baseFolder}/modules/home1`,
   `../${baseFolder}/modules/authentification`,


    
    // npm module
    '@pinia/nuxt',
    '@nuxtjs/i18n', // keep last
   
  ],
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  i18n: {
    locales: ['en', 'fr'],
    dynamicRouteParams: true,
    strategy: 'prefix',
    baseUrl: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        ['en']: localeEN,
        ['fr']: localeFR,
      },
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
    },
  },
});
