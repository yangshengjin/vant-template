module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended'],

  // add your custom rules here
  //it is base on https://github.com/vuejs/eslint-config-vue
  rules: {
    'vue/prop-name-casing': 0,
    'vue/require-default-prop': 0,
    'vue/name-property-casing': 0,
    'vue/max-attributes-per-line': 0,
    'vue/html-self-closing': 0,
    'vue/order-in-components': 0,
    'no-console': 0,
    'no-case-declarations': 0,
    'vue/require-prop-types': 0,
    'vue/mustache-interpolation-spacing': 0,
    'vue/attributes-order': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/attribute-hyphenation': 0,
    'vue/html-closing-bracket-spacing': 0
  }
}
