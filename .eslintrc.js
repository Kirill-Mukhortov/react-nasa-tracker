module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    semi: ['error', 'never'],
    'no-console': 'off',
    'max-len': ['error', { code: 250 }],
    'no-param-reassign': 'off',
    'react/jsx-props-no-spreading': ['off'],
    'no-nested-ternary': ['off'],
    'react/prop-types': 'off',
    'react/destructuring-assignment': 'off',
  },
}
