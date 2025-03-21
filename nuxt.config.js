// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
	modules: ["@nuxtjs/tailwindcss"],
  nitro: {
    prerender: {
      crawlLinks: false, 
      preset: "node",
      routes: ["/", "/about", "/services"], // Add all valid routes
    }
  }
})