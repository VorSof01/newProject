// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/google-fonts'
    ],
    googleFonts: {
        families: {
            Roboto: [400, 700, 900]
        }
    },
    nitro: {
        routeRules: {
            '/api/**': {
                proxy: 'http://localhost:8106/api/**'
            }
        }
    },
    app: {
        pageTransition: { name: 'page', mode: "out-in" }
    },
})