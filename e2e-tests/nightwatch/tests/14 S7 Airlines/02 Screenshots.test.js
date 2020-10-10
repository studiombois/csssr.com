// Скриншоты целой страницы S7 Airlines для английской локали

testcase('Screen full page of S7 Airlines 1920 En', () => {
  step('Go to the S7 Airlines page', () => {
    browser
      .setWindowSize(1920, 4950)
      .url(browser.launch_url + '/en/project/s7-personal-account')
      .waitForElementPresent('footer')
  })

  expected('Screen full page of S7 Airlines-1920 EN', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'S7 Airlines 1920 EN',
      { hideSelectors: ['[data-testid="Header:block"]'] })
  })
})

testcase('Screen full page of S7 Airlines 1360 En', () => {
  step('Go to the S7 Airlines page', () => {
    browser
      .setWindowSize(1360, 5300)
      .url(browser.launch_url + '/en/project/s7-personal-account')
      .waitForElementPresent('footer')
  })

  expected('Screen full page of S7 Airlines-1360 EN', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'S7 Airlines 1360 EN',
      { hideSelectors: ['[data-testid="Header:block"]'] })
  })
})

testcase('Screen full page of S7 Airlines 1280 En', () => {
  step('Go to the S7 Airlines page', () => {
    browser
      .setWindowSize(1280, 5300)
      .url(browser.launch_url + '/en/project/s7-personal-account')
      .waitForElementPresent('footer')
  })

  expected('Screen full page of S7 Airlines-1280 EN', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'S7 Airlines 1280 EN',
      { hideSelectors: ['[data-testid="Header:block"]'] })
  })
})

testcase('Screen full page of S7 Airlines 1024 En', () => {
  step('Go to the S7 Airlines page', () => {
    browser
      .setWindowSize(1024, 3800)
      .url(browser.launch_url + '/en/project/s7-personal-account')
      .waitForElementPresent('footer')
  })

  expected('Screen full page of S7 Airlines-1024 EN', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'S7 Airlines 1024 EN',
      { hideSelectors: ['[data-testid="Header:block"]'] })
  })
})

testcase('Screen full page of S7 Airlines 360 En', () => {
  step('Go to the S7 Airlines page', () => {
    browser
      .setWindowSize(360, 4300)
      .url(browser.launch_url + '/en/project/s7-personal-account')
      .waitForElementPresent('footer')
  })

  expected('Screen full page of S7 Airlines-360 EN', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'S7 Airlines 360 EN',
      { hideSelectors: ['[data-testid="Header:block"]'] })
  })
})

// Скриншоты целой страницы S7 Airlines для русской локали

testcase('Screen full page of S7 Airlines 1920 RU', () => {
  step('Go to the S7 Airlines page', () => {
    browser
      .setWindowSize(1920, 4950)
      .url(browser.launch_url + '/ru/project/s7-personal-account')
      .waitForElementPresent('footer')
  })

  expected('Screen full page of S7 Airlines-1920 RU', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'S7 Airlines 1920 RU',
      { hideSelectors: ['[data-testid="Header:block"]'] })
  })
})

testcase('Screen full page of S7 Airlines 1360 RU', () => {
  step('Go to the S7 Airlines page', () => {
    browser
      .setWindowSize(1360, 5300)
      .url(browser.launch_url + '/ru/project/s7-personal-account')
      .waitForElementPresent('footer')
  })

  expected('Screen full page of S7 Airlines-1360 RU', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'S7 Airlines 1360 RU',
      { hideSelectors: ['[data-testid="Header:block"]'] })
  })
})

testcase('Screen full page of S7 Airlines 1280 RU', () => {
  step('Go to the S7 Airlines page', () => {
    browser
      .setWindowSize(1280, 5300)
      .url(browser.launch_url + '/ru/project/s7-personal-account')
      .waitForElementPresent('footer')
  })

  expected('Screen full page of S7 Airlines-1280 RU', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'S7 Airlines 1280 RU',
      { hideSelectors: ['[data-testid="Header:block"]'] })
  })
})

testcase('Screen full page of S7 Airlines 1024 RU', () => {
  step('Go to the S7 Airlines page', () => {
    browser
      .setWindowSize(1024, 3800)
      .url(browser.launch_url + '/ru/project/s7-personal-account')
      .waitForElementPresent('footer')
  })

  expected('Screen full page of S7 Airlines--1024 RU', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'S7 Airlines 1024 RU',
      { hideSelectors: ['[data-testid="Header:block"]'] })
  })
})

testcase('Screen full page of S7 Airlines 360 RU', () => {
  step('Go to the S7 Airlines page', () => {
    browser
      .setWindowSize(360, 4300)
      .url(browser.launch_url + '/ru/project/s7-personal-account')
      .waitForElementPresent('footer')
  })

  expected('Screen full page of S7 Airlines-360 RU', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'S7 Airlines 360 RU',
      { hideSelectors: ['[data-testid="Header:block"]'] })
  })
})
