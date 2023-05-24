module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "prettier",
    "plugin:prettier/recommended"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh','prettier'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    "react/prop-types": "off",
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    '@typescript-eslint/no-var-requires': 'error',
    'no-unused-vars': 'error',
    '@typescript-eslint/no-unused-vars': 'off',
  },
}
