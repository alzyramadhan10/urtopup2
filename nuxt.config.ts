// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css' },
        { rel: 'stylesheet', href: 'https://unpkg.com/@phosphor-icons/web@2.1.1/src/thin/style.css' },
        { rel: 'stylesheet', href: 'https://unpkg.com/@phosphor-icons/web@2.1.1/src/light/style.css' },
        { rel: 'stylesheet', href: 'https://unpkg.com/@phosphor-icons/web@2.1.1/src/bold/style.css' },
        { rel: 'stylesheet', href: 'https://unpkg.com/@phosphor-icons/web@2.1.1/src/fill/style.css' },
        { rel: 'stylesheet', href: 'https://unpkg.com/@phosphor-icons/web@2.1.1/src/duotone/style.css' },
      ],
      script: [
        // {
        //   src: '/js/plguins.js',
        //   defer: true,
        // },
        // {
        //   src: '/js/plguins-custom.js',
        //   defer: true,
        // },
        // {
        //   src: '/js/index.js',
        //   defer: true,
        // },
        // {
        //   src: '/js/main.js',
        //   defer: true,
        // },
      ],
    },
  },
  compatibilityDate: '2024-04-03',
  runtimeConfig: {
    apiSecret: '', // can be overridden by NUXT_API_SECRET environment variable
    public: {
      apiBase: '', // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    },
  },
  nitro: {
    devProxy: {
      '/api/v1': {
        target: 'http://localhost:3333/api/v1',
        changeOrigin: true,
      },
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxt/eslint',
  ],
  devtools: { enabled: true },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  vue: {
    compilerOptions: {
      isCustomElement: tag => tag.startsWith('swiper-'),
    },
  },
})
