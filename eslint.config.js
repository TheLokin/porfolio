/* eslint-disable import/no-named-as-default-member */
import eslintPluginAstro from "eslint-plugin-astro"
import eslintPluginImport from "eslint-plugin-import"
import eslintPluginPrettier from "eslint-plugin-prettier/recommended"
import eslintPluginTailwindcss from "eslint-plugin-tailwindcss"
import tseslint from "typescript-eslint"

export default [
  // Ignore directories
  {
    ignores: ["dist", ".astro", ".vercel"],
  },
  // General configuration
  {
    rules: {
      "padding-line-between-statements": [
        "warn",
        {
          blankLine: "always",
          prev: "*",
          next: ["return", "break", "export"],
        },
        {
          blankLine: "always",
          prev: ["const", "let", "var"],
          next: "*",
        },
        {
          blankLine: "any",
          prev: ["const", "let", "var"],
          next: ["const", "let", "var"],
        },
      ],
      "no-console": "warn",
    },
  },
  // TypeScript configuration
  ...[
    ...tseslint.configs.recommended,
    {
      rules: {
        "@typescript-eslint/no-unused-vars": [
          "warn",
          {
            args: "after-used",
            ignoreRestSiblings: false,
            argsIgnorePattern: "^_.*?$",
          },
        ],
      },
    },
    {
      files: ["**/env.d.ts"],
      rules: {
        "@typescript-eslint/triple-slash-reference": "off",
      },
    },
  ],
  // Import configuration
  ...[
    eslintPluginImport.flatConfigs.recommended,
    {
      rules: {
        "import/default": "off",
        "import/named": "off",
        "import/namespace": "off",
        "import/no-unresolved": "off",
        "import/order": [
          "warn",
          {
            "groups": [
              "type",
              "builtin",
              "object",
              "external",
              "internal",
              "parent",
              "sibling",
              "index",
            ],
            "pathGroups": [
              {
                pattern: "~/**",
                group: "external",
                position: "after",
              },
            ],
            "alphabetize": {
              order: "asc",
              caseInsensitive: true,
            },
            "newlines-between": "always",
          },
        ],
      },
      settings: {
        "import/resolver": {
          typescript: true,
          node: true,
        },
      },
    },
  ],
  // Astro configuration
  ...[
    ...eslintPluginAstro.configs["jsx-a11y-recommended"],
    {
      rules: {
        "astro/prefer-class-list-directive": "warn",
        "astro/prefer-object-class-list": "warn",
        "astro/prefer-split-class-list": "warn",
        "astro/sort-attributes": "warn",
      },
    },
  ],
  // Tailwind CSS configuration
  ...eslintPluginTailwindcss.configs["flat/recommended"],
  // Prettier configuration
  ...[
    eslintPluginPrettier,
    {
      rules: {
        "prettier/prettier": [
          "warn",
          {
            tailwindFunctions: ["cva", "cn"],
          },
        ],
      },
    },
    {
      files: ["**/*.astro/*.js", "*.astro/*.js", "**/*.astro/*.ts", "*.astro/*.ts"],
      rules: {
        "prettier/prettier": "off",
      },
    },
  ],
]
