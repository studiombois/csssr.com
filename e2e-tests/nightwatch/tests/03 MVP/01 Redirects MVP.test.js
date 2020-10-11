testcase('Redirect to MVP-RU from the old page', () => {
  step('Go to the MVP-RU page', () => {
    browser.url(browser.launch_url + '/ru/mvp')
  })

  expected('The redirect to the Russian page of MVP in the Services section', () => {
    browser.assert.urlEquals(browser.launch_url + '/ru/service/mvp-development')
  })
})

testcase('Redirect to MVP-EN from the old page ', () => {
  step('Go to the MVP-EN page', () => {
    browser.url(browser.launch_url + '/en/mvp')
  })

  expected('The redirect to the English page of MVP in the Services section', () => {
    browser.assert.urlEquals(browser.launch_url + '/en/service/mvp-development')
  })
})
