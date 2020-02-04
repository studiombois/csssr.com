testcase('Роуты', () => {
  step('Перейти на страницу csssr.express', () => {
    browser.url('https://csssr.express')
  })
  expected('Редирект на csssr.com/en-sg/express', () => {
    browser.assert.urlEquals('https://express.csssr.com/en-sg')
  })
  step('Перейти на страницу ru/express', () => {
    browser.url('https://csssr.com/ru/express')
  })
  expected('Редирект на csssr.com/ru', () => {
    browser.assert.urlEquals('https://csssr.com/ru')
  })
  step('Перейти на страницу express.csssr.com', () => {
    browser.url('https://express.csssr.com')
  })
  expected('Редирект на csssr.com/en-sg/express', () => {
    browser.assert.urlEquals('https://express.csssr.com/en-sg')
  })

  step('Перейти на страницу csssr.store + http', () => {
    browser.url('http://csssr.store')
  })
  expected('Редирект на store.csssr.com ', () => {
    browser.assert.urlEquals('https://store.csssr.com/')
  })

  step('Перейти на страницу csssr.store + https', () => {
    browser.url('https://csssr.store/')
  })
  expected('Редирект на store.csssr.com ', () => {
    browser.assert.urlEquals('https://store.csssr.com/')
  })

  // step('Перейти на страницу space.csssr + http', () => {
  //   browser.url('http://space.csssr.com')
  // })
  // expected('Редирект на csssr.space', () => {
  //   browser.assert.urlEquals('https://csssr.space')
  // })
  // step('Перейти на страницу space.csssr + https', () => {
  //   browser.url('https://space.csssr.com')
  // })
  // expected('Редирект на csssr.space', () => {
  //   browser.assert.urlEquals('https://csssr.space')
  // })
})
