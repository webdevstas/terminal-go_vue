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
    // Движку нужен проект TS для правил с типами
    'project': 'tsconfig.json',
    'tsconfigRootDir': '.',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-trailing-spaces': 0,
    'TypeScriptCheckImport': 0
  }
}
