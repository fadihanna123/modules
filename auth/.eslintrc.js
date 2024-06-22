// @ts-check
/**
 * @type { import("eslint").Linter.Config }
 */
const config = {
  env: {
    node: true,
    es2023: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    quotes: ['warn', 'single'],
    semi: ['warn', 'always'],
    '@typescript-eslint/no-explicit-any': 'off',
  },
};

module.exports = config;
