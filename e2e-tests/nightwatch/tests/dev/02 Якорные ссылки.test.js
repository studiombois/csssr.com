testcase('Якорные ссылки', () => {
  step('открыть главную', () => {
    browser.url(browser.launch_url + '/ru')
  })
  step('клик на ссылку Услуги в шапке', () => {
    browser
      .click('[data-testid="devHeaderNav:anchorLink.services"]')
      .pause(1000)
  })
  expected('скролл к разделу Услуги', () => {
    browser.assert.urlEquals(`${browser.launch_url}/ru#services`)
  })
  step('Скролл вверх', () => {
    browser.execute('scrollTo(500, 500)').pause(1000)
  })
  step('клик на ссылку Клиенты в шапке', () => {
    browser.click('[data-testid="devHeaderNav:anchorLink.clients"]').pause(1000)
  })
  expected('скролл к разделу Клиенты', () => {
    browser.assert.urlEquals(`${browser.launch_url}/ru#clients`)
  })
  step('Скролл вверх', () => {
    browser.execute('scrollTo(2000, 2000)').pause(1000)
  })
  step('клик на ссылку Нанять нас в шапке', () => {
    browser.click('[data-testid="devHeaderNav:anchorLink.hireUs"]').pause(1000)
  })
  expected('скролл к форме обратной связи', () => {
    browser.assert.urlEquals(`${browser.launch_url}/ru#hire-us`)
  })
})
