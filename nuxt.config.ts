// https://nuxt.com/docs/api/configuration/nuxt-config

import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  // devtools: { enabled: true },
  ssr: true,
  pages: true,
  build: {
    transpile: ["vuetify", "@nuxtjs/robots", "@nuxtjs/sitemap"],
  },
  hooks: {
    "vite:extendConfig": (config) => {
      config.plugins.push(vuetify({ autoImport: true }));
    },
  },
  components: [
    {
      path: "~/components",
    },
  ],
});
