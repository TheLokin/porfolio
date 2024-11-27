/** @type {import('prettier').Config} */

export default {
  semi: false,
  printWidth: 100,
  endOfLine: "auto",
  quoteProps: "consistent",
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  tailwindFunctions: ["cva", "cn"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
}
