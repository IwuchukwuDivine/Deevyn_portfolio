// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  ssr: false,

  vite: {
    plugins: [tailwindcss()],
  },
  components: true,
  app: {
    head: {
      title: "Iwuchukwu Divine's Portfolio",
      meta: [
        {
          name: "description",
          content: "Iwuchukwu Divine's Portfolio as a Software Engineer",
        },
        {
          name: "keywords",
          content: "Portfolio, Software Engineer, Iwuchukwu Divine",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/space.png",
        },
      ],
    },
  },

  typescript: {
    typeCheck: true,
  },

  devServer: {
    port: 3003,
    host: "0.0.0.0",
  },

  css: ["~/assets/css/main.css", "~/assets/css/fonts.css"],
  modules: [
    "nuxt-lucide-icons",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
  ],
});
