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
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
      },
    },
  },
  plugins: [
    ({ addUtilities, addComponents, addVariant }) => {
      addUtilities({
        ".scrollbar-hide": {
          /* IE and Edge */
          "-ms-overflow-style": "none",

          /* Firefox */
          "scrollbar-width": "none",

          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },

        ".scrollbar-default": {
          /* IE and Edge */
          "-ms-overflow-style": "auto",

          /* Firefox */
          "scrollbar-width": "auto",

          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "block",
          },
        },
      })

      addComponents({
        /* 48px */
        ".typography-6xl": {
          fontSize: "3rem",
          lineHeight: "3.5rem",
          letterSpacing: "-0.025em",
        },

        /* 40px */
        ".typography-5xl": {
          fontSize: "2.5rem",
          lineHeight: "3rem",
          letterSpacing: "-0.025em",
        },

        /* 36px */
        ".typography-4xl": {
          fontSize: "2.25rem",
          lineHeight: "2.75rem",
          letterSpacing: "-0.025em",
        },

        /* 32px */
        ".typography-3xl": {
          fontSize: "2rem",
          lineHeight: "2.5rem",
          letterSpacing: "-0.025em",
        },

        /* 28px */
        ".typography-2xl": {
          fontSize: "1.75rem",
          lineHeight: "2rem",
          letterSpacing: "-0.025em",
        },

        /* 24px */
        ".typography-xl": {
          fontSize: "1.5rem",
          lineHeight: "1.75rem",
          letterSpacing: "-0.025em",
        },

        /* 20px */
        ".typography-lg": {
          fontSize: "1.25rem",
          lineHeight: "1.5rem",
          letterSpacing: "-0.025em",
        },

        /* 16px */
        ".typography-base": {
          fontSize: "1rem",
          lineHeight: "1.25rem",
          letterSpacing: "-0.025em",
        },

        /* 12px */
        ".typography-sm": {
          fontSize: "0.75rem",
          lineHeight: "1rem",
          letterSpacing: "-0.025em",
        },
      })

      addVariant("any-hover", "@media (any-hover: hover) { &:hover }")
    },
  ],
}
