import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"
import vercel from "@astrojs/vercel/serverless"

export default defineConfig({
  output: "server",
  integrations: [tailwind()],
  devToolbar: {
    enabled: false,
  },
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
})
