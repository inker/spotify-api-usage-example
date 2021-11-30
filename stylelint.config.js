module.exports = {
  extends: [
    'stylelint-config-standard',
  ],
  syntax: 'scss',
  plugins: [
    'stylelint-scss',
  ],
  rules: {
    'comment-empty-line-before': null,
    'selector-list-comma-newline-after': null,
    'no-descending-specificity': null,
    'at-rule-no-unknown': null,
    'block-closing-brace-newline-before': 'always',
    'block-opening-brace-newline-after': 'always',
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: [
          'v-deep',
        ],
      },
    ],
    'property-no-vendor-prefix': [
      true,
      {
        ignoreProperties: [
          'appearance',
        ],
      },
    ],
    'value-no-vendor-prefix': [
      true,
    ],
    'at-rule-no-vendor-prefix': [
      true,
    ],
    indentation: [
      2,
      {
        baseIndentLevel: 0,
      },
    ],
  },
}
