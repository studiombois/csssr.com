testcase('Redirect /products -> /solutions', () => {
  step('Go to en/products/lms', () => {
    browser.url(browser.launch_url + '/en/products/lms')
  })
  
  expected('Redirect to /solutions', () => {
    browser.assert.urlEquals(browser.launch_url + '/en/solutions/lms')
  })
})
