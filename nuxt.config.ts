import { defineNuxtConfig } from "nuxt";
import { IntlifyModuleOptions } from "@intlify/nuxt3";
import UnpluginComponentsVite from "unplugin-vue-components/vite";
import IconsResolver from "unplugin-icons/resolver";

declare module "@nuxt/schema" {
  interface NuxtConfig {
    intlify?: IntlifyModuleOptions;
  }
}

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    transpile: ["@headlessui/vue"],
  },

  css: [
    // "~/assets/scss/tailwind.scss",
    "~/assets/sass/app.scss",
    "~/assets/css/app.css",
  ],

  modules: [["@nuxtjs/svg"]],

  intlify: {
    localeDir: "locales", // set the `locales` directory at source directory of your Nuxt application
    vueI18n: {
      locale: "en",
      fallbackLocale: "en",
      availableLocales: ["en", "tr", "de"],
    },
  },

  buildModules: [
    "nuxt-windicss",
    "@nuxtjs/eslint-module",
    "unplugin-icons/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/svg",
    "@intlify/nuxt3",
  ],

  runtimeConfig: {
    public: {
      url: "http://localhost:3000",
    },
  },

  app: {
    head: {
      meta: [
        {
          name: "title",
          content: "Hey",
        },
        {
          name: "description",
          content: "Auto paginated job information display system",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          ref: "/favicon.png",
        },
      ],
    },
  },

  meta: {
    title: "Seri Yap",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Nuxt 3 Awesome Starter",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
  },

  components: true,

  // vite plugins
  vite: {
    plugins: [
      UnpluginComponentsVite({
        dts: true,
        resolvers: [
          IconsResolver({
            prefix: "Icon",
          }),
        ],
      }),
    ],
  },

  vueuse: {
    ssrHandlers: true,
  },

  
  windicss: {
    analyze: {
      analysis: {
        interpretUtilities: false,
      },
      server: {
        port: 3000,
        open: false,
      },
    },
    scan: {
      dirs: ["./"],
      exclude: ["node_modules", "dist"],
    },
  },
});
