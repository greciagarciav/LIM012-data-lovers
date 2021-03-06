module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "linebreak-style": 0,
    'no-nested-ternary': 0,
    'import/extensions': 0,
    'import/slides-no-duplicates': 0,
    'max-len': 0,
    'object-curly-newline':0,
  },
};
