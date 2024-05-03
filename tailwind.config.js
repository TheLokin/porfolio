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
    ({ addUtilities, addComponents, addVariant }) => {
      addUtilities(
        {
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
        },
        ["responsive"],
      )

      addComponents({
        /* Paragraph P3 */
        ".typography-xs": {
          fontSize: "12px",
          lineHeight: "16px",
        },

        /* Paragraph P1 - Button B2 */
        ".typography-sm": {
          fontSize: "16px",
          lineHeight: "20px",
        },

        /* Heading H7 - Button B1 */
        ".typography-base": {
          fontSize: "20px",
          lineHeight: "24px",
        },

        /* Heading H6 */
        ".typography-lg": {
          fontSize: "16px",
          lineHeight: "20px",
        },

        /* Heading H5 */
        ".typography-xl": {
          fontSize: "20px",
          lineHeight: "24px",
        },

        /* Display (M) - Heading H4 */
        ".typography-2xl": {
          fontSize: "24px",
          lineHeight: "28px",
        },

        /* Heading H3 */
        ".typography-3xl": {
          fontSize: "28px",
          lineHeight: "32px",
        },

        /* Heading H2 */
        ".typography-4xl": {
          fontSize: "32px",
          lineHeight: "40px",
        },

        /* Heading H1 */
        ".typography-5xl": {
          fontSize: "36px",
          lineHeight: "44px",
        },

        /* Sub Heading */
        ".typography-6xl": {
          fontSize: "40px",
          lineHeight: "48px",
        },

        ".typography-7xl": {
          fontSize: "44px",
          lineHeight: "52px",
        },

        /* Display */
        ".typography-8xl": {
          fontSize: "48px",
          lineHeight: "56px",
        },
      })

      addVariant("any-hover", "@media (any-hover: hover) { &:hover }")
    },
  ],
}
