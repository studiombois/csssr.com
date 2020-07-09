testcase('Редирект на русскую MVP со старой страницы /mvp', () => {
  step('Перейти на страницу ru/mvp', () => {
    browser.url(browser.launch_url + '/ru/mvp')
  })
  expected('Редирект на русскую страницу MVP в разделе Сервисов', () => {
    browser.assert.urlEquals(browser.launch_url +'/ru/service/mvp-development')
  })
})

testcase('Редирект на английскую MVP со старой страницы /mvp', () => {
  step('Перейти на страницу en/mvp', () => {
    browser.url(browser.launch_url +'/en/mvp')
  })
  expected('Редирект на английскую страницу MVP в разделе Сервисов', () => {
    browser.assert.urlEquals(browser.launch_url +'/en/service/mvp-development')
  })
})
