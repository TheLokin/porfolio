import node from "@astrojs/node"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import vercel from "@astrojs/vercel/serverless"
import { defineConfig } from "astro/config"
import robotsTxt from "astro-robots-txt"

let adapter = vercel({
  webAnalytics: {
    enabled: true,
  },
})

if (process.argv.includes("--node")) {
  adapter = node({
    mode: "standalone",
  })
}

export default defineConfig({
  site: "https://thelokin.vercel.app",
  output: "server",
  integrations: [tailwind(), sitemap(), robotsTxt()],
  devToolbar: {
    enabled: false,
  },
  adapter,
})
