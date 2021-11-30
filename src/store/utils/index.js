/**
 * `_.capitalize` cannot be used,
 * because it converts tail to lower case
 *
 * @param {string} s
 */
const capitalize = (s) =>
  `${s[0].toUpperCase()}${s.slice(1)}`

/**
 * @param {string} k
 */
export const getMutationName = (k) =>
  `set${capitalize(k)}`

/**
 * @param {string} k
 */
export const getMutation = (k) =>
  (state, value) => {
    // eslint-disable-next-line no-param-reassign
    state[k] = value
  }

/**
 * @param {string} k
 */
export const getMutationEntry = (k) => [
  getMutationName(k),
  getMutation(k),
]

/**
 * Converts state keys to corresponding mutations
 *
 * @param {string[]} keys
 * @example
 * const mutations = getMutations(['foo', 'barBaz'])
 * // {
 * //   setFoo(state, value) {
 * //     state.foo = value
 * //   },
 * //   setBarBaz(state, value) {
 * //     state.barBaz = value
 * //   },
 * // }
 */
export const getMutations = (keys) =>
  Object.fromEntries(keys.map(getMutationEntry))
