module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  extends: [
    'react-app',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
};
