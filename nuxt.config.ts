// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@unocss/nuxt'],
  unocss: {
    attributify: true,
    preflight: true,
  }
})
