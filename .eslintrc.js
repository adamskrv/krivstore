module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'no-console': {
      severity: 'warning',
      options: ['log', 'error', 'debug', 'info', 'time', 'timeEnd', 'trace'],
    },
  },
}
