const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb'
  ],
  rules: {
    'no-console': isProd ? 'error' : 'off',
    'no-debugger': isProd ? 'error' : 'off',
    'vue/max-attributes-per-line': ['warn', {
      'singleline': 2
    }],
    'comma-dangle': ['error', 'never']
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
