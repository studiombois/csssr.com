 // Редиректы с express

testcase('Redirect to the Web Development Outsourcing page from «/en-sg/express»', () => {
  step('Переходим на страницу express.csssr.com', () => {
    browser.url(browser.launch_url+'/en-sg/express')
  })

  expected('Redirect to the Web Development Outsourcing page', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url +'/en/service/outsourcing-front-end')
  })
})

testcase('Redirect to the Web Development Outsourcing page from «express.csssr.com»', () => {
  step('Переходим на страницу express.csssr.com', () => {
    browser.url('http://express.csssr.com')
  })

  expected('Redirect to the Web Development Outsourcing page', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url +'/en/service/outsourcing-front-end')
  })
})


testcase('Redirect to the Web Development Outsourcing page from «/service/express-front-end»', () => {
  step('Переходим на страницу express.csssr.com', () => {
    browser.url(browser.launch_url +'/en/service/express-front-end')
  })

  expected('Redirect to the Web Development Outsourcing page', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url +'/en/service/outsourcing-front-end')
  })
})
