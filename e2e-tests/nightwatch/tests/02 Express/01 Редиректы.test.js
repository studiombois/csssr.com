testcase('Редирект на страницу Express Development c csssr.express', () => {
  step('Перейти на страницу csssr.express', () => {
    browser.url('https://csssr.express')
  })
  expected('Редирект на страницу Express Development', () => {
    browser.assert.urlEquals('https://csssr.com/en/service/express-front-end')
  })
})
testcase('Редирект на Главную страницу RU c ru/express', () => {
  step('Перейти на страницу ru/express', () => {
    browser.url('https://csssr.com/ru/express')
  })
  expected('Редирект на Главную страницу RU', () => {
    browser.assert.urlEquals('https://csssr.com/ru')
  })
})
testcase('Редирект на страницу Express Development c express.csssr.com', () => {
  step('Перейти на страницу express.csssr.com', () => {
    browser.url('https://express.csssr.com')
  })
  expected('Редирект на страницу Express Development', () => {
    browser.assert.urlEquals('https://csssr.com/en/service/express-front-end')
  })
})
