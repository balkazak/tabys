// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },
	generate: { subFolders: true },
	router: { base: "/tabys/" },

	modules: ["@nuxt/icon", "@nuxt/fonts", "@nuxt/content", "@nuxt/image", "@nuxt/ui", "@nuxt/scripts", "@nuxtjs/tailwindcss"],
	nitro: {
		prerender: {
			crawlLinks: false,
			preset: "node",
      failOnError: false, // Ignore errors during prerendering

			routes: ["/", "/about", "/services", "/blog", "/investments", "/contacts"], // Add all valid routes
		},
		publicAssets: [
			{
				dir: "public",
				baseURL: "/tabys/",
			},
		],
	},
	app: {
		baseURL: "/tabys/", // Add your GitHub repo name
	},
});
