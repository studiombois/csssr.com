module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: '@csssr/eslint-config-core',
  plugins: ['react-hooks'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        useTabs: false,
        printWidth: 100,
        semi: false,
        singleQuote: true,
        jsxSingleQuote: false,
        trailingComma: 'all',
        bracketSpacing: true,
      },
    ],
    'react/prop-types': 'off',
    'react/jsx-no-target-blank': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/display-name': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
