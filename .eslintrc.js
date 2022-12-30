module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['@react-native-community', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-use-before-define': ['error', {variables: false}],
  },
};
