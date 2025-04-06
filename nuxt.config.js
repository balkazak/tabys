// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	css: ["~/assets/css/main.css"],
	generate: { subFolders: true },
	router: { base: "/tabys/" },
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	modules: ["@nuxtjs/tailwindcss"],

	nitro: {
		prerender: {
			crawlLinks: false,
			preset: "node",
			failOnError: false, // Ignore errors during prerendering
			routes: ["/", "/about", "/services", "/investments", "/contacts", "/blog"], // Add all valid routes
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
		head: {
			title: "TABYS Trading LTD",
			meta: [
				{ charset: "utf-8" },
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				{ hid: "description", name: "description", content: "TABYS Trading LTD - Ваш надежный партнер в бизнесе между Казахстаном и Южной Кореей" },
			],
			link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
		},
	},

	compatibilityDate: "2025-03-22",
});
