import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"
import vercel from "@astrojs/vercel/serverless"
import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
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
