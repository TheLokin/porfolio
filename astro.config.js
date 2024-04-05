import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"
import vercel from "@astrojs/vercel/serverless"
import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  site: "https://thelokin.vercel.app",
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
