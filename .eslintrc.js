module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "next",
    "next/core-web-vitals",
    "prettier",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "prefer-const": "warn",
    "no-undef": "off",
    "import/order": [
      "warn",
      {
        groups: ["builtin", "external", ["parent", "sibling"], "index"],
        "newlines-between": "always",
      },
    ],
    "@typescript-eslint/no-unnecessary-type-constraint": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "@next/next/no-img-element": "off",
    "@typescript-eslint/no-empty-interface": "off",
  },
};
