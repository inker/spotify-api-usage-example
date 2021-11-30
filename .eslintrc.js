module.exports = {
  root: true,

  env: {
    browser: true,
  },

  extends: [
    'plugin:vue/vue3-recommended', // TODO: remove after upgrade to vue v3
    '@calipsa/eslint-config-vue',
  ],

  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf',
      },
    },
  },

  rules: {
    'no-return-await': 0,
    'vue/no-unregistered-components': [2, {
      ignorePatterns: [
        'fragment',
        'router-link',
        'router-view',
        'notifications',
      ],
    }],
    'import/order': [2, {
      'newlines-between': 'always-and-inside-groups',
      groups: [
        'builtin',
        'external',
        'internal',
        'parent',
        'sibling',
        'index',
      ],
      pathGroups: [
        {
          pattern: 'vue',
          group: 'external',
          position: 'before',
        },
        {
          pattern: 'lodash',
          group: 'external',
          position: 'after',
        },
        {
          pattern: 'App/**',
          group: 'internal',
          position: 'before',
        },
      ],
    }],
    'import/dynamic-import-chunkname': [2, {
      webpackChunknameFormat: '([a-z0-9-/]|\\[request\\])+',
    }],
    'inker/module-import-order': [2, [
      {
        name: 'vuex',
        before: [
          'Store',
          'install',
          'createLogger',
          'createNamespacedHelpers',
        ],
        after: [
          'mapState',
          'mapGetters',
          'mapMutations',
          'mapActions',
        ],
      },
    ]],
    'promise/catch-or-return': 0,
    'lodash/prefer-noop': 2,

    // TODO: remove when vuex is supported
    'vue/no-undef-properties': 0,

    // TODO: remove after upgrade to vue v3
    'vue/require-explicit-emits': 0,
    'vue/no-deprecated-destroyed-lifecycle': 0,
    'vue/no-deprecated-dollar-listeners-api': 0,
    'vue/require-slots-as-functions': 0,
    'vue/v-on-event-hyphenation': 0,
  },
}
