import {
  isNil,
  omitBy,
  isUndefined,
  mapValues,
} from 'lodash'

/**
 * Converts object to search params string
 */
export default (obj) => {
  if (isNil(obj)) {
    return ''
  }

  const transformedObj = mapValues(omitBy(obj, isUndefined), String)
  const params = new URLSearchParams(transformedObj)
  return params.toString()
}
