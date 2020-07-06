testcase('Редирект на русскую MVP со старой страницы /mvp', () => {
  step('Перейти на страницу ru/mvp', () => {
    browser.url('https://csssr.com/ru/mvp')
  })
  expected('Редирект на русскую страницу MVP в разделе Сервисов', () => {
    browser.assert.urlEquals('https://csssr.com/ru/service/mvp-development')
  })
})

testcase('Редирект на английскую MVP со старой страницы /mvp', () => {
  step('Перейти на страницу en/mvp', () => {
    browser.url('https://csssr.com/en/mvp')
  })
  expected('Редирект на английскую страницу MVP в разделе Сервисов', () => {
    browser.assert.urlEquals('https://csssr.com/en/service/mvp-development')
  })
})
