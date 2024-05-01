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
    ({ addComponents }) => {
      addComponents({
        ".typography-xs": /* Paragraph P3 */ {
          fontSize: "12px",
          lineHeight: "16px",
          tracking: "2%",
        },
        ".typography-sm": /* Paragraph P1 - Button B2 */ {
          fontSize: "16px",
          lineHeight: "20px",
          tracking: "2%",
        },
        ".typography-base": /* Heading H7 - Button B1 */ {
          fontSize: "20px",
          lineHeight: "24px",
          tracking: "2%",
        },
        ".typography-lg": /* Heading H6 */ {
          fontSize: "16px",
          lineHeight: "20px",
          tracking: "-2%",
        },
        ".typography-xl": /* Heading H5 */ {
          fontSize: "20px",
          lineHeight: "24px",
          tracking: "-2%",
        },
        ".typography-2xl": /* Display (M) - Heading H4 */ {
          fontSize: "24px",
          lineHeight: "28px",
          tracking: "-2%",
        },
        ".typography-3xl": /* Heading H3 */ {
          fontSize: "28px",
          lineHeight: "32px",
          tracking: "-2%",
        },
        ".typography-4xl": /* Heading H2 */ {
          fontSize: "32px",
          lineHeight: "40px",
          tracking: "-2%",
        },
        ".typography-5xl": /* Heading H1 */ {
          fontSize: "36px",
          lineHeight: "44px",
          tracking: "-2%",
        },
        ".typography-6xl": /* Sub Heading */ {
          fontSize: "40px",
          lineHeight: "48px",
          tracking: "-2%",
        },
        ".typography-7xl": {
          fontSize: "44px",
          lineHeight: "52px",
          tracking: "-2%",
        },
        ".typography-8xl": /* Display */ {
          fontSize: "48px",
          lineHeight: "56px",
          tracking: "-2%",
        },
      })
    },
    ({ addVariant }) => {
      addVariant("any-hover", "@media (any-hover: hover) { &:hover }")
    },
  ],
}
