import createPersistedState from 'vuex-persistedstate'

/**
 * @param {string} module
 * @param {string[]} paths
 */
export default (module, paths) =>
  createPersistedState({
    key: `vuex:${module}`,

    paths: paths?.map(p => [module, p].join('.')) ?? [module],

    filter: (mutation) =>
      mutation.type.startsWith(`${module}/`),

    getState: (key, storage) => {
      const value = storage.getItem(key)
      try {
        const json = JSON.parse(value)
        return json
          ? {
            [module]: json,
          }
          : {}
      } catch {
        return {}
      }
    },

    setState: (key, state, storage) => {
      storage.setItem(key, JSON.stringify(state[module]))
    },
  })
