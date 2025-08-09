import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', 'nuxt-svgo', '@nuxtjs/color-mode', 'nuxt-umami'],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  components: {
    dirs: [],
  },
  svgo: {
    defaultImport: 'component',
  },
  colorMode: {
    classPrefix: '',
    classSuffix: '',
    storageKey: 'theme',
  },
  umami: {
    host: process.env.NUXT_UMAMI_HOST,
    id: process.env.NUXT_UMAMI_ID,
    domains: process.env.NUXT_DOMAINS?.split('|'),
  },
});
