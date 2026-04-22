// import globals from 'globals';

export default [
  // {
  //   ignores: ['eslint.config.js'], // ✅ ignore config file
  // },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
      // globals: globals.node
    },
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
    },
  },
];