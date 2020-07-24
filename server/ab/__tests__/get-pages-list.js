import { getVariantNameForNumber } from '../middleware'

test('test getVariantNameForNumber only 1 possible outcome', () => {
  const variants = [
    {
      name: 'v1',
      weight: 1,
    },
  ]

  expect(getVariantNameForNumber(variants, 0)).toEqual('v1')
})

test('test getVariantNameForNumber 50/50', () => {
  const variants = [
    {
      name: 'v1',
      weight: 1,
    },
    {
      name: 'v2',
      weight: 1,
    },
  ]

  expect(getVariantNameForNumber(variants, 0)).toEqual('v1')
  expect(getVariantNameForNumber(variants, 1)).toEqual('v2')
})

test('test getVariantNameForNumber 30/10/10/40/10', () => {
  const variants = [
    {
      name: 'v1',
      weight: 3,
    },
    {
      name: 'v2',
      weight: 1,
    },
    {
      name: 'v3',
      weight: 1,
    },
    {
      name: 'v4',
      weight: 4,
    },
    {
      name: 'v5',
      weight: 1,
    },
  ]

  expect(getVariantNameForNumber(variants, 0)).toEqual('v1')
  expect(getVariantNameForNumber(variants, 1)).toEqual('v1')
  expect(getVariantNameForNumber(variants, 2)).toEqual('v1')
  expect(getVariantNameForNumber(variants, 3)).toEqual('v2')
  expect(getVariantNameForNumber(variants, 4)).toEqual('v3')
  expect(getVariantNameForNumber(variants, 5)).toEqual('v4')
  expect(getVariantNameForNumber(variants, 6)).toEqual('v4')
  expect(getVariantNameForNumber(variants, 7)).toEqual('v4')
  expect(getVariantNameForNumber(variants, 8)).toEqual('v4')
  expect(getVariantNameForNumber(variants, 9)).toEqual('v5')
})
