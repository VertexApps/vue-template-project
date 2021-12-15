module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "@vue/airbnb"],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "class-methods-use-this": 0,
    "max-len": [
      "error",
      {
        code: 150,
        ignoreComments: true,
        ignoreUrls: true,
      },
    ],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
  },
  overrides: [
    {
      files: ["./src/**/__tests__/*.spec.{j,t}s", "./src/**/__mock__/*.{j,t}s"],
      env: {
        jest: true,
      },
      rules: {
        "no-unused-expressions": 0,
      },
    },
  ],
};
