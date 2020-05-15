import localeDetector from '../locale-detector'

test('/en, no cookie, en-US,en;q=0.9,ru;q=0.8 -> en-US', () => {
  expect(localeDetector('en', undefined, 'en-US,en;q=0.9,ru;q=0.8')).toEqual('en-us')
})

test('/en, no cookie, en-EE,en;q=0.9,ru;q=0.8 -> en-EE', () => {
  expect(localeDetector('en', undefined, 'en-EE,en;q=0.9,ru;q=0.8')).toEqual('en-ee')
})

test('/en, no cookie, en-SG,en;q=0.9,ru;q=0.8 -> en-SG', () => {
  expect(localeDetector('en', undefined, 'en-SG,en;q=0.9,ru;q=0.8')).toEqual('en-sg')
})

test('/ru, no cookie, ru-RU,en;q=0.9,ru;q=0.8 -> ru-RU', () => {
  expect(localeDetector('ru', undefined, 'ru-RU,en;q=0.9,ru;q=0.8')).toEqual('ru-ru')
})

test('/ru, no cookie, ru-EE,en;q=0.9,ru;q=0.8 -> ru-EE', () => {
  expect(localeDetector('ru', undefined, 'ru-EE,en;q=0.9,ru;q=0.8')).toEqual('ru-ee')
})

test('/en, no cookie, ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7 -> en-SG', () => {
  expect(localeDetector('en', undefined, 'ru-RU,ru;q=0.9,en-SG;q=0.8,en;q=0.7')).toEqual('en-sg')
})

test('/ru, no cookie, en-SG,en;q=0.9,ru-EE;q=0.8,en;q=0.7 -> ru-EE', () => {
  expect(localeDetector('ru', undefined, 'en-SG,en;q=0.9,ru-EE;q=0.8,en;q=0.7')).toEqual('ru-ee')
})

test('/en, no cookie, ru-RU,ru;q=0.9,en-SG;q=0.8,en-US;q=0.7 -> en-SG', () => {
  expect(localeDetector('en', undefined, 'ru-RU,ru;q=0.9,en-SG;q=0.8,en-US;q=0.7')).toEqual('en-sg')
})

test('/en, ru-RU, ru-RU,ru;q=0.9,en-SG;q=0.8,en-US;q=0.7 -> en-SG', () => {
  expect(localeDetector('en', 'ru-RU', 'ru-RU,ru;q=0.9,en-SG;q=0.8,en-US;q=0.7')).toEqual('en-sg')
})

test('/ru, ru-RU, ru-RU,ru;q=0.9,en-SG;q=0.8,en-US;q=0.7 -> ru-RU', () => {
  expect(localeDetector('ru', 'ru-RU', 'ru-RU,ru;q=0.9,en-SG;q=0.8,en-US;q=0.7')).toEqual('ru-ru')
})
