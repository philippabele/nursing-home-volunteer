module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {},
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        // enforce max line width, needs to match .prettierrc
        'vue/max-len': [
          'error',
          {
            code: 100,
            template: 100,
            comments: 100,
            tabWidth: 2,
            ignoreStrings: true,
          },
        ],
        // needed to not mark defineProps, defineEmits etc. as undefined because they are compiler macros
        'no-undef': 'off',
      },
    },
  ],
}
