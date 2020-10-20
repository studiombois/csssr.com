// Скриншоты целой страницы Brusnika для английской локали

testcase('Screen full page of Brusnika 1920 En', () => {
  step('Go to the Brusnika page', () => {
    browser
      .setWindowSize(1920, 4950)
      .url(browser.launch_url + '/en/project/brusnika')
      .waitForElementPresent('footer')
  })

  expected('Screen full page of Brusnika-1920 EN', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'Brusnika 1920 EN',
      { hideSelectors: ['[data-testid="Header:block"]', '[data-testid="projects:button.contactUs"]'] })
  })
})

testcase('Screen full page of Brusnika 1360 En', () => {
  step('Go to the Brusnika page', () => {
    browser
      .setWindowSize(1360, 5300)
      .url(browser.launch_url + '/en/project/brusnika')
      .waitForElementPresent('footer')
  })

  expected('Screen full page of Brusnika-1360 EN', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'Brusnika 1360 EN',
      { hideSelectors: ['[data-testid="Header:block"]', '[data-testid="projects:button.contactUs"]'] })
  })
})

testcase('Screen full page of Brusnika 1280 En', () => {
  step('Go to the Brusnika page', () => {
    browser
      .setWindowSize(1280, 5300)
      .url(browser.launch_url + '/en/project/brusnika')
      .waitForElementPresent('footer')
  })

  expected('Screen full page of Brusnika-1280 EN', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'Brusnika 1280 EN',
      { hideSelectors: ['[data-testid="Header:block"]', '[data-testid="projects:button.contactUs"]'] })
  })
})

testcase('Screen full page of Brusnika 1024 En', () => {
  step('Go to the Brusnika page', () => {
    browser
      .setWindowSize(1024, 3800)
      .url(browser.launch_url + '/en/project/brusnika')
      .waitForElementPresent('footer')
  })

  expected('Screen full page of Brusnika-1024 EN', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'Brusnika 1024 EN',
      { hideSelectors: ['[data-testid="Header:block"]', '[data-testid="projects:button.contactUs"]'] })
  })
})

testcase('Screen full page of Brusnika 360 En', () => {
  step('Go to the Brusnika page', () => {
    browser
      .setWindowSize(360, 5300)
      .url(browser.launch_url + '/en/project/brusnika')
      .waitForElementPresent('footer')
  })

  expected('Screen full page of Brusnika-360 EN', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'Brusnika 360 EN',
      { hideSelectors: ['[data-testid="Header:block"]', '[data-testid="projects:button.contactUs"]'] })
  })
})

// Скриншоты целой страницы Brusnika для русской локали

testcase('Screen full page of Brusnika 1920 RU', () => {
  step('Go to the Brusnika page', () => {
    browser
      .setWindowSize(1920, 4950)
      .url(browser.launch_url + '/ru/project/brusnika')
      .waitForElementPresent('footer')
  })

  expected('Screen full page of Brusnika-1920 RU', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'Brusnika 1920 RU',
      { hideSelectors: ['[data-testid="Header:block"]', '[data-testid="projects:button.contactUs"]'] })
  })
})

testcase('Screen full page of Brusnika 1360 RU', () => {
  step('Go to the Brusnika page', () => {
    browser
      .setWindowSize(1360, 5300)
      .url(browser.launch_url + '/ru/project/brusnika')
      .waitForElementPresent('footer')
  })

  expected('Screen full page of Brusnika-1360 RU', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'Brusnika 1360 RU',
      { hideSelectors: ['[data-testid="Header:block"]', '[data-testid="projects:button.contactUs"]'] })
  })
})

testcase('Screen full page of Brusnika 1280 RU', () => {
  step('Go to the Brusnika page', () => {
    browser
      .setWindowSize(1280, 5300)
      .url(browser.launch_url + '/ru/project/brusnika')
      .waitForElementPresent('footer')
  })

  expected('Screen full page of Brusnika-1280 RU', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'Brusnika 1280 RU',
      { hideSelectors: ['[data-testid="Header:block"]', '[data-testid="projects:button.contactUs"]'] })
  })
})

testcase('Screen full page of Brusnika 1024 RU', () => {
  step('Go to the Brusnika page', () => {
    browser
      .setWindowSize(1024, 3800)
      .url(browser.launch_url + '/ru/project/brusnika')
      .waitForElementPresent('footer')
  })

  expected('Screen full page of Brusnika--1024 RU', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'Brusnika 1024 RU',
      { hideSelectors: ['[data-testid="Header:block"]', '[data-testid="projects:button.contactUs"]'] })
  })
})

testcase('Screen full page of Brusnika 360 RU', () => {
  step('Go to the Brusnika page', () => {
    browser
      .setWindowSize(360, 5300)
      .url(browser.launch_url + '/ru/project/brusnika')
      .waitForElementPresent('footer')
  })

  expected('Screen full page of Brusnika-360 RU', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'Brusnika 360 RU',
      { hideSelectors: ['[data-testid="Header:block"]', '[data-testid="projects:button.contactUs"]', '[data-testid="projects:button.contactUs"]'] })
  })
})
