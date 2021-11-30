import {
  getMutationName,
  getMutation,
  getMutationEntry,
  getMutations,
} from '../utils'

const vals = [
  'foo',
  'Bar',
  'camelCase',
  '123',
  'BAZ',
  'qu_u_x',
]

describe('Store utils', () => {
  it('should work for getMutationName', () => {
    const names = vals.map(getMutationName)
    expect(names).toMatchSnapshot()
  })

  it('should work for getMutation', () => {
    const mutation = getMutation('foo')
    const state = {
      foo: 'bar',
      other: 'value',
    }
    mutation(state, 'baz')
    expect(state).toMatchSnapshot()
  })

  it('should work for getMutationEntry', () => {
    const [mutationName, mutation] = getMutationEntry('foo')
    expect(mutationName).toBe('setFoo')
    const state = {
      foo: 'bar',
      other: 'value',
    }
    mutation(state, 'baz')
    expect(state).toMatchSnapshot()
  })

  it('should work for getMutations', () => {
    const state = {
      foo: 'bar',
      other: 'value',
    }
    const mutations = getMutations(Object.keys(state))
    mutations.setFoo(state, 'baz')
    expect(state).toMatchSnapshot()
  })
})
