import { getVariantForNumber } from '../middleware'

test('test getVariantForNumber only 1 possible outcome', () => {
  const variants = [
    {
      name: 'v1',
      weight: 1,
    },
  ]

  expect(getVariantForNumber(variants, 0)).toEqual({ name: 'v1', index: 0 })
})

test('test getVariantForNumber 50/50', () => {
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

  expect(getVariantForNumber(variants, 0)).toEqual({ name: 'v1', index: 0 })
  expect(getVariantForNumber(variants, 1)).toEqual({ name: 'v2', index: 1 })
})

test('test getVariantForNumber 30/10/10/40/10', () => {
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

  expect(getVariantForNumber(variants, 0)).toEqual({ name: 'v1', index: 0 })
  expect(getVariantForNumber(variants, 1)).toEqual({ name: 'v1', index: 0 })
  expect(getVariantForNumber(variants, 2)).toEqual({ name: 'v1', index: 0 })
  expect(getVariantForNumber(variants, 3)).toEqual({ name: 'v2', index: 1 })
  expect(getVariantForNumber(variants, 4)).toEqual({ name: 'v3', index: 2 })
  expect(getVariantForNumber(variants, 5)).toEqual({ name: 'v4', index: 3 })
  expect(getVariantForNumber(variants, 6)).toEqual({ name: 'v4', index: 3 })
  expect(getVariantForNumber(variants, 7)).toEqual({ name: 'v4', index: 3 })
  expect(getVariantForNumber(variants, 8)).toEqual({ name: 'v4', index: 3 })
  expect(getVariantForNumber(variants, 9)).toEqual({ name: 'v5', index: 4 })
})
