testcase('Редирект на Главную страницу RU c ru/express', () => {
  step('Перейти на страницу ru/express', () => {
    browser.url(browser.launch_url + '/ru/express')
  })
  expected('Редирект на Главную страницу RU', () => {
    browser.assert.urlEquals(browser.launch_url + '/ru')
  })
})

// Редиректы с csssr.express

testcase('Редирект на страницу Express Development c csssr.express + http', () => {
  step('Перейти на страницу csssr.express', () => {
    browser.url('http://csssr.express')
  })
  expected('Редирект на страницу Express Development', () => {
    browser.assert.urlEquals('https://csssr.com/en/service/express-front-end')
  })
})

testcase('Редирект на страницу Express Development c csssr.express + https', () => {
  step('Перейти на страницу csssr.express', () => {
    browser.url('https://csssr.express')
  })
  expected('Редирект на страницу Express Development', () => {
    browser.assert.urlEquals('https://csssr.com/en/service/express-front-end')
  })
})

// Редиректы с express.csssr.com

testcase('Редирект на страницу Express Development c express.csssr.com + http', () => {
  step('Перейти на страницу express.csssr.com', () => {
    browser.url('http://express.csssr.com')
  })
  expected('Редирект на страницу Express Development', () => {
    browser.assert.urlEquals('https://csssr.com/en/service/express-front-end')
  })
})

testcase('Редирект на страницу Express Development c express.csssr.com + https', () => {
  step('Перейти на страницу express.csssr.com', () => {
    browser.url('https://express.csssr.com')
  })
  expected('Редирект на страницу Express Development', () => {
    browser.assert.urlEquals('https://csssr.com/en/service/express-front-end')
  })
})
