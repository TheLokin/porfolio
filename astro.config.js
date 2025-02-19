import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import vercel from "@astrojs/vercel"
import { defineConfig } from "astro/config"

export default defineConfig({
  site: "https://thelokin.dev",
  output: "static",
  integrations: [tailwind(), sitemap()],
  adapter: vercel({ webAnalytics: { enabled: true } }),
  i18n: {
    defaultLocale: "es",
    locales: ["es", "gl", "en"],
  },
  devToolbar: { enabled: false },
  experimental: { svg: { mode: "sprite" } },
})
