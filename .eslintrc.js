module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true
  },
  extends: [
    'airbnb-base',
    'plugin:vue/recommended'
  ],
  rules: {
    'comma-dangle': 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
