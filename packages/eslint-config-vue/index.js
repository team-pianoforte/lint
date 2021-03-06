const INLINE_ELEMENTS = require('eslint-plugin-vue/lib/utils/inline-non-void-elements.json')
module.exports = {
  extends: [
    '@zakuro9715',
    'plugin:vue/essential',
    'plugin:vue/strongly-recommended',
    'plugin:vue/recommended',
  ],
  parser: 'vue-eslint-parser',
  rules: {
    'node/no-unsupported-features/es-syntax': 'off',
    'vue/singleline-html-element-content-newline': ['error', {
      ignores: [
        'pre',
        'textarea',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'tr',
        'td',
        'th',
        'nuxt-link',
        'router-link',
      ].concat(INLINE_ELEMENTS),
    }],
    'vue/attribute-hyphenation': 'error',
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    'vue/component-name-in-template-casing': ['error', 'PascalCase', {
      registeredComponentsOnly: true,
      ignore: ['/^ion/'],
    }],
    'vue/component-tags-order': ['error', {
      order: ['i18n', 'template', 'script', 'style'],
    }],
    'vue/html-comment-content-newline': 'error',
    'vue/html-comment-content-spacing': 'error',
    'vue/html-comment-indent': 'error',
    'vue/html-closing-bracket-newline': 'error',
    'vue/html-closing-bracket-spacing': 'error',
    'vue/html-end-tags': 'error',
    'vue/html-indent': 'error',
    'vue/html-quotes': 'error',
    'vue/html-self-closing': 'error',
    'vue/match-component-file-name': ['error', {
      extensions: ['js', 'ts', 'jsx', 'tsx', 'vue'],
      shouldMatchCase: true,
    }],
    'vue/mustache-interpolation-spacing': ['error', 'always'],
    'vue/name-property-casing': ['error', 'PascalCase'],
    'vue/no-boolean-default': 'error',
    'vue/no-template-shadow': 'error',
    'vue/no-empty-component-block': 'warn',
    'vue/no-irregular-whitespace': 'error',
    'vue/no-multiple-objects-in-class': 'error',
    'vue/no-potential-component-option-typo': ['error', {
      presets: ['vue', 'nuxt'],
      threshold: 2,
    }],
    'vue/no-reserved-component-names': 'error',
    'vue/no-template-target-blank': 'error',
    'vue/no-unsupported-features': ['error', {
      version: '^2.6.0',
    }],
    'vue/no-unused-properties': ['error', {
      groups: ['props', 'data', 'computed', 'methods'],
    }],
    'vue/no-useless-mustaches': 'error',
    'vue/no-useless-v-bind': 'error',
    'vue/padding-line-between-blocks': 'error',
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/require-default-prop': 'error',
    'vue/require-direct-export': 'error',
    'vue/require-name-property': 'error',
    'vue/require-prop-types': 'error',
    'vue/v-bind-style': 'error',
    'vue/v-slot-style': 'error',
    'vue/v-on-function-call': ['error', 'never'],
    '@typescript-eslint/restrict-template-expressions': 'off', // avoid error when use computed in template.
  },
  overrides: [
    {
      files: ['**/main.js'],
      rules: {
        'vue/require-name-property': 'off',
      },
    },
  ],
}
