testcase('Роуты', () => {
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
