module.exports = {
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  bracketSpacing: true,
  jsxSingleQuote: true,
  arrowParens: 'avoid',
  printWidth: 100,
  plugins: ['prettier-plugin-organize-imports'],
  overrides: [
    {
      files: '*.tsx',
      options: {
        bracketSameLine: false,
      },
    },
  ],
}
