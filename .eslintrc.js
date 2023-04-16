module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "prettier",
    "airbnb",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    quotes: [2, "double", { avoidEscape: true }],
    "react/self-closing-comp": [
      "error",
      {
        component: false,
        html: false,
      },
    ],
    "linebreak-style": 0,
    "react/prop-types": "off",
    "react/jsx-no-bind": "off",
    "no-return-assign": "off",
    "no-param-reassign": "off",
    "object-curly-newline": "off",
    "no-underscore-dangle": "off",
    "prefer-promise-reject-errors": "off",
    "class-methods-use-this": "off",
  },
};
