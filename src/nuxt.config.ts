export default defineNuxtConfig({
  modules: ['@nuxt/test-utils/module', '@nuxt/ui', '@nuxtjs/i18n'],

  $development: {
    devtools: { enabled: true },
    runtimeConfig: {
      public: {
        site: {
          url: 'http://localhost:3000'
        }
      }
    }
  },

  $production: {},

  components: [
    { path: '~/components/ui', extensions: ['vue'], prefix: 'Ui' },
    { path: '~/components/feature', extensions: ['vue'], pathPrefix: false }
  ],

  devtools: { enabled: false },

  css: ['~/assets/css/main.css'],

  ui: {},

  routeRules: {
    '/': { prerender: true }
  },

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2025-01-02',

  typescript: {
    strict: true,
    tsConfig: {
      compilerOptions: {
        types: ['vitest/importMeta']
      }
    }
  },

  i18n: {
    defaultLocale: 'ja'
  }
});
