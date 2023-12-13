module.exports = {
  extends: ["eslint:recommended", "prettier"],
  env: {
    jest: true,
    node: true,
    es2021: true,
  },
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
    {
      files: ["tests/**/*.js"],
      rules: {
        "max-lines-per-function": "off",
        "no-new": "off",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  rules: {
    semi: ["error", "never"],
    quotes: ["error", "single"],
    "max-depth": ["error", 2],
    "max-lines": ["warn", { max: 15 }],
    "no-process-exit": "error",
  },
};
