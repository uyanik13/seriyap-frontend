import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  tailwindcss: {
    cssPath: '~/assets/css/index.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: false,
  },
  buildModules: ["@pinia/nuxt", '@intlify/nuxt3', '@nuxtjs/tailwindcss'],
  runtimeConfig: {
		public: {
      url: 'http://localhost:3000',
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
    title: 'Seri Yap',
  },
  target: 'static',
  ssr: false,
  rootDir: '',
});
