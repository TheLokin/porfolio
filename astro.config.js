import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import vercel from "@astrojs/vercel"
import robotsTxt from "astro-robots-txt"
import { defineConfig } from "astro/config"

export default defineConfig({
  site: "https://thelokin.dev",
  output: "server",
  integrations: [tailwind(), sitemap(), robotsTxt()],
  adapter: vercel({ webAnalytics: { enabled: true } }),
  i18n: {
    defaultLocale: "es",
    locales: ["es", "gl", "en"],
    routing: { prefixDefaultLocale: true },
  },
  devToolbar: { enabled: false },
  experimental: { svg: { mode: "sprite" } },
})
