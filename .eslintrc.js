module.exports = {
  root: true,
  'extends': [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  rules: {
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'max-len': 0,
    'arrow-body-style': 0,
    // Change these last 3's to 1 when project is complete :)
    'no-alert': 0,
    'no-console': 0,
    'no-debugger': 0,
  },
}