// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  ssr: true,

  vite: {
    plugins: [tailwindcss()],
  },
  components: true,

  site: {
    url: "https://deevyn-portfolio.vercel.app",
    name: "Iwuchukwu Divine — Software Engineer",
  },

  nitro: {
    prerender: {
      routes: ["/"],
      crawlLinks: true,
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: "en" },
      title: "Software Engineer & AI Automation Builder",
      titleTemplate: "%s · Iwuchukwu Divine",
      meta: [
        {
          name: "description",
          content:
            "Iwuchukwu Divine — Software Engineer building web apps, mobile apps, drone automation platforms, and AI agents.",
        },
        {
          name: "keywords",
          content:
            "Software Engineer, AI Automation, Vue.js, Nuxt, Drone Automation, Iwuchukwu Divine",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/space.png",
        },
        {
          rel: "preload",
          as: "font",
          type: "font/ttf",
          href: "/fonts/Micro5-Regular.ttf",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          as: "font",
          type: "font/ttf",
          href: "/fonts/Chewy-Regular.ttf",
          crossorigin: "anonymous",
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
    "@nuxtjs/sitemap",
    "@nuxt/image",
  ],
});
