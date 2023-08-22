import { NuxtModule } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["i18n"]?: typeof import("@nuxtjs/i18n").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["nuxt-config-schema"]?: typeof import("nuxt-config-schema").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@pinia/nuxt", NuxtConfig["pinia"]] | ["@nuxtjs/i18n", NuxtConfig["i18n"]] | ["nuxt-config-schema", NuxtConfig["nuxt-config-schema"]] | ["@nuxt/telemetry", NuxtConfig["telemetry"]])[],
  }
  interface RuntimeConfig {
   WS_APPS_ADD: string,

   WS_PRODUCTS_UPDATE: string,

   WS_PRODUCTS_GET: string,

   WS_PRODUCTS_LIST: string,

   WS_PRODUCTS_COUNT: string,

   WS_PRODUCTS_DELETE: string,

   WS_EXTRA_FIELDS_LIST: string,

   WS_PRODUCTS_ADD: string,

   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },
  }
  interface PublicRuntimeConfig {
   WS_APPS_ADD: string,

   WS_PRODUCTS_UPDATE: string,

   WS_PRODUCTS_GET: string,

   WS_PRODUCTS_LIST: string,

   WS_PRODUCTS_COUNT: string,

   WS_PRODUCTS_DELETE: string,

   WS_EXTRA_FIELDS_LIST: string,

   WS_PRODUCTS_ADD: string,

   DEBUG: string,

   API: string,

   API_COMMON: string,

   REALMS: string,

   AUTH_PATH: string,

   CLIENT_SECRET_KEY: string,

   LOGOUT_REDIRECT_URL: string,

   CLIENT_ID: string,

   WS_ADD_MEDIA: string,
  }
}