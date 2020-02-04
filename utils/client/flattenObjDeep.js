import { chain, type, map, toPairs, fromPairs } from 'ramda'

const go = obj =>
  chain(([key, value]) => {
    if (type(value) === 'Object' || type(value) === 'Array') {
      return map(([k, v]) => [`${key}.${k}`, v], go(value))
    } else {
      return [[key, value]]
    }
  }, toPairs(obj))

const flattenObjDeep = obj => fromPairs(go(obj))

export default flattenObjDeep
export { flattenObjDeep }
