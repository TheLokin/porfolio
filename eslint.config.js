import antfu from "@antfu/eslint-config"
import eslintPluginPrettier from "eslint-plugin-prettier/recommended"
import eslintPluginTailwindcss from "eslint-plugin-tailwindcss"

export default antfu({
  astro: true,
  stylistic: {
    quotes: "double",
  },
  rules: {
    "import/order": [
      "warn",
      {
        "groups": ["type"],
        "newlines-between": "always",
      },
    ],
    "ts/explicit-function-return-type": "off",
    "node/prefer-global/process": "off",
    "antfu/if-newline": "off",
  },
})
  .append(eslintPluginTailwindcss.configs["flat/recommended"])
  .append(
    eslintPluginPrettier,
    {
      files: ["**/*"],
      rules: {
        "prettier/prettier": "off",
      },
    },
    {
      files: ["**/*.js", "**/*.ts", "**/*.astro"],
      rules: {
        "prettier/prettier": "warn",
      },
    },
    {
      files: ["**/*.astro/*.js", "*.astro/*.js", "**/*.astro/*.ts", "*.astro/*.ts"],
      rules: {
        "prettier/prettier": "off",
      },
    },
  )
