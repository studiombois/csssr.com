import formatTime from '../formatTime'

test('positive timezone, ru, before noon', () => {
  expect(formatTime(new Date('2020-12-17T03:24:02.742Z'), 8, 'ru')).toEqual('11:24')
})

test('positive timezone, en, before noon', () => {
  expect(formatTime(new Date('2020-12-17T03:24:02.742Z'), 8, 'en')).toEqual('11:24 AM')
})

test('positive timezone, ru, after noon', () => {
  expect(formatTime(new Date('2020-12-17T13:24:02.742Z'), 8, 'ru')).toEqual('21:24')
})

test('positive timezone, en, after noon', () => {
  expect(formatTime(new Date('2020-12-17T13:24:02.742Z'), 8, 'en')).toEqual('09:24 PM')
})

test('positive timezone, ru, cross noon', () => {
  expect(formatTime(new Date('2020-12-31T11:24:02.742Z'), 3, 'ru')).toEqual('14:24')
})

test('positive timezone, en, cross noon', () => {
  expect(formatTime(new Date('2020-12-31T11:24:02.742Z'), 3, 'en')).toEqual('02:24 PM')
})

test('positive timezone, ru, next day/year', () => {
  expect(formatTime(new Date('2020-12-31T22:24:02.742Z'), 3, 'ru')).toEqual('01:24')
})

test('positive timezone, en, next day/year', () => {
  expect(formatTime(new Date('2020-12-31T22:24:02.742Z'), 3, 'en')).toEqual('01:24 AM')
})

test('negative timezone, ru, before noon', () => {
  expect(formatTime(new Date('2020-12-17T03:24:02.742Z'), -2, 'ru')).toEqual('01:24')
})

test('negative timezone, en, before noon', () => {
  expect(formatTime(new Date('2020-12-17T03:24:02.742Z'), -2, 'en')).toEqual('01:24 AM')
})

test('negative timezone, ru, previous day/year', () => {
  expect(formatTime(new Date('2020-01-01T03:24:02.742Z'), -4, 'ru')).toEqual('23:24')
})

test('negative timezone, en, previous day/year', () => {
  expect(formatTime(new Date('2020-01-01T03:24:02.742Z'), -4, 'en')).toEqual('11:24 PM')
})

test('UTC, ru', () => {
  expect(formatTime(new Date('2020-01-01T03:24:02.742Z'), 0, 'ru')).toEqual('03:24')
})

test('UTC, en', () => {
  expect(formatTime(new Date('2020-01-01T03:24:02.742Z'), 0, 'en')).toEqual('03:24 AM')
})
