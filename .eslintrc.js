module.exports = {
    env: {
      commonjs: true,
      es6: true,
      node: true,
    },
    extends: ['prettier', 'airbnb-base'],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
    },
    rules: {
      'prettier/prettier': 'error',
      'class-methods-use-this': 'off',
      'no-underscore-dangle': 'off',
      'comma-dangle': 'off',
      'consistent-return': 'off',
      'no-multi-spaces': 'off',
      'operator-linebreak': 'off',
      'max-classes-per-file': 'off',
    },
    plugins: ['prettier'],
  };
  