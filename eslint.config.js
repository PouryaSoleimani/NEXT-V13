import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import prettier from "eslint-plugin-prettier";
import nextPlugin from "@next/eslint-plugin-next";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  {
    ignores: ["node_modules", ".next", "out", "dist"],
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: import.meta.dirname, // مهم برای ویندوز
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
      import: importPlugin,
      prettier,
      "@next/next": nextPlugin,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      ...importPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,

      // قوانین شخصی
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "no-unused-vars": "off",
      "import/no-unresolved": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "import/order": "off",
      "prettier/prettier": "warn",
    },

    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
