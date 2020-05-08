testcase('Редирект на Главную страницу c csssr.io', () => {
  step('Перейти на страницу csssr.io', () => {
    browser.url('https://csssr.io')
  })
  expected('Редирект на Главную страницу', () => {
    browser.assert.urlEquals('https://csssr.com/en')
  })
})
testcase('Редирект на Главную страницу c csssr.ru', () => {
  step('Перейти на страницу csssr.ru', () => {
    browser.url('https://csssr.ru')
  })
  expected('Редирект на Главную страницу', () => {
    browser.assert.urlEquals('https://csssr.com/en')
  })
})
testcase('Редирект на Главную страницу c csssr.dev', () => {
  step('Перейти на страницу csssr.dev', () => {
    browser.url('https://csssr.dev')
  })
  expected('Редирект на Главную страницу', () => {
    browser.assert.urlEquals('https://csssr.com/en')
  })
})
