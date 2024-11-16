import { defineConfig } from "astro/config"

import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import vercel from "@astrojs/vercel/serverless"

// https://astro.build/config
export default defineConfig({
  site: "https://thelokin.vercel.app",
  output: "server",
  integrations: [tailwind(), sitemap()],
  devToolbar: {
    enabled: false,
  },
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
})
