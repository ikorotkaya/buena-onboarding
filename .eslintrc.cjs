const fs = require("fs");
const path = require("path");

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, ".prettierrc"), "utf8"),
);

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended', 
    'plugin:@typescript-eslint/recommended', 
    'plugin:react-hooks/recommended', 
    'plugin:storybook/recommended',
    "plugin:tailwindcss/recommended"
  ],
  ignorePatterns: [
    'dist', 
    '.eslintrc.cjs',
    'tailwind.config.js'    
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier'],
  rules: {
    "prettier/prettier": ["error", prettierOptions],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
