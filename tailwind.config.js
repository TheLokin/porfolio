/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,md,mdx,js,jsx,astro,ts,tsx,svelte,vue}"],
  theme: {
    data: {
      open: "state=open",
      closed: "state=closed",
    },
    extend: {
      fontFamily: {
        sora: ["Sora Variable", "system-ui", "sans-serif"],
      },
      colors: {
        primary: "#333",
        secondary: "#ddd",
      },
    },
  },
  plugins: [
    ({ addVariant }) => {
      addVariant("any-hover", "@media (any-hover: hover) { &:hover }")
    },
  ],
}
