const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': isProd ? 'error' : 'off',
    'no-debugger': isProd ? 'error' : 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
