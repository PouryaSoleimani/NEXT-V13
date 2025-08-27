/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname, // خیلی مهم برای ویندوز
  },
  plugins: ["@typescript-eslint", "react", "react-hooks", "jsx-a11y", "import"],
  extends: [
    "next/core-web-vitals", // کانفیگ Next.js
    "plugin:@typescript-eslint/recommended", // قوانین تایپ‌اسکریپت
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier", // اگه Prettier داری
  ],
  rules: {
    // قوانین دلخواه (میتونی تغییر بدی)
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "react/react-in-jsx-scope": "off", // نیازی به import React نیست توی Next.js
    "react/prop-types": "off", // چون TS داریم
    "import/order": [
      "warn",
      {
        groups: ["builtin", "external", "internal", ["parent", "sibling", "index"]],
        "newlines-between": "always",
      },
    ],
  },
};
