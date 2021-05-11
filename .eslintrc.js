module.exports = {
  root: true,

  env: {
    // Проект для браузера
    'browser': true,
    // Включаем возможности ES6
    'es6': true,
    // Добавляем возможности ES2017
    'es2017': true,
    'node': true
  },

  extends: [
    'plugin:vue/recommended',
    '@vue/typescript/recommended'
  ],

  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: '.',
    parser: '@typescript-eslint/parser'
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-trailing-spaces': 0,
    'TypeScriptCheckImport': 0
  },

  'extends': [
    'plugin:vue/recommended',
    '@vue/typescript/recommended',
    '@vue/typescript'
  ]
}
