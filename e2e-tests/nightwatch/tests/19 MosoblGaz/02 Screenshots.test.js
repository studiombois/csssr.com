// Скриншоты целой страницы Mosoblgaz для английской локали

testcase('Screen full page of Mosoblgaz 1920 En', () => {
  step('Go to the Mosoblgaz page', () => {
    browser
      .setWindowSize(1920, 4950)
      .url(browser.launch_url + '/en/project/mosoblgaz')
      .waitForElementPresent('footer')
  })

  expected('Screen full page of Mosoblgaz-1920 EN', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'Mosoblgaz 1920 EN',
      { hideSelectors: ['[data-testid="Header:block"]', '[data-testid="projects:button.contactUs"]'] })
  })
})

testcase('Screen full page of Mosoblgaz 1360 En', () => {
  step('Go to the Mosoblgaz page', () => {
    browser
      .setWindowSize(1360, 5300)
      .url(browser.launch_url + '/en/project/mosoblgaz')
      .waitForElementPresent('footer')
  })

  expected('Screen full page of Mosoblgaz-1360 EN', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'Mosoblgaz 1360 EN',
      { hideSelectors: ['[data-testid="Header:block"]', '[data-testid="projects:button.contactUs"]'] })
  })
})

testcase('Screen full page of Mosoblgaz 1280 En', () => {
  step('Go to the Mosoblgaz page', () => {
    browser
      .setWindowSize(1280, 5300)
      .url(browser.launch_url + '/en/project/mosoblgaz')
      .waitForElementPresent('footer')
  })

  expected('Screen full page of Mosoblgaz-1280 EN', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'Mosoblgaz 1280 EN',
      { hideSelectors: ['[data-testid="Header:block"]', '[data-testid="projects:button.contactUs"]'] })
  })
})

testcase('Screen full page of Mosoblgaz 1024 En', () => {
  step('Go to the Mosoblgaz page', () => {
    browser
      .setWindowSize(1024, 3800)
      .url(browser.launch_url + '/en/project/mosoblgaz')
      .waitForElementPresent('footer')
  })

  expected('Screen full page of Mosoblgaz-1024 EN', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'Mosoblgaz 1024 EN',
      { hideSelectors: ['[data-testid="Header:block"]', '[data-testid="projects:button.contactUs"]'] })
  })
})

testcase('Screen full page of Mosoblgaz 360 En', () => {
  step('Go to the Mosoblgaz page', () => {
    browser
      .setWindowSize(360, 5300)
      .url(browser.launch_url + '/en/project/mosoblgaz')
      .waitForElementPresent('footer')
  })

  expected('Screen full page of Mosoblgaz-360 EN', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'Mosoblgaz 360 EN',
      { hideSelectors: ['[data-testid="Header:block"]', '[data-testid="projects:button.contactUs"]'] })
  })
})

// Скриншоты целой страницы Mosoblgaz для русской локали

testcase('Screen full page of Mosoblgaz 1920 RU', () => {
  step('Go to the Mosoblgaz page', () => {
    browser
      .setWindowSize(1920, 4950)
      .url(browser.launch_url + '/ru/project/mosoblgaz')
      .waitForElementPresent('footer')
  })

  expected('Screen full page of Mosoblgaz-1920 RU', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'Mosoblgaz 1920 RU',
      { hideSelectors: ['[data-testid="Header:block"]', '[data-testid="projects:button.contactUs"]'] })
  })
})

testcase('Screen full page of Mosoblgaz 1360 RU', () => {
  step('Go to the Mosoblgaz page', () => {
    browser
      .setWindowSize(1360, 5300)
      .url(browser.launch_url + '/ru/project/mosoblgaz')
      .waitForElementPresent('footer')
  })

  expected('Screen full page of Mosoblgaz-1360 RU', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'Mosoblgaz 1360 RU',
      { hideSelectors: ['[data-testid="Header:block"]', '[data-testid="projects:button.contactUs"]'] })
  })
})

testcase('Screen full page of Mosoblgaz 1280 RU', () => {
  step('Go to the Mosoblgaz page', () => {
    browser
      .setWindowSize(1280, 5300)
      .url(browser.launch_url + '/ru/project/mosoblgaz')
      .waitForElementPresent('footer')
  })

  expected('Screen full page of Mosoblgaz-1280 RU', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'Mosoblgaz 1280 RU',
      { hideSelectors: ['[data-testid="Header:block"]', '[data-testid="projects:button.contactUs"]'] })
  })
})

testcase('Screen full page of Mosoblgaz 1024 RU', () => {
  step('Go to the Mosoblgaz page', () => {
    browser
      .setWindowSize(1024, 3800)
      .url(browser.launch_url + '/ru/project/mosoblgaz')
      .waitForElementPresent('footer')
  })

  expected('Screen full page of Mosoblgaz--1024 RU', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'Mosoblgaz 1024 RU',
      { hideSelectors: ['[data-testid="Header:block"]', '[data-testid="projects:button.contactUs"]'] })
  })
})

testcase('Screen full page of Mosoblgaz 360 RU', () => {
  step('Go to the Mosoblgaz page', () => {
    browser
      .setWindowSize(360, 5300)
      .url(browser.launch_url + '/ru/project/mosoblgaz')
      .waitForElementPresent('footer')
  })

  expected('Screen full page of Mosoblgaz-360 RU', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'Mosoblgaz 360 RU',
      { hideSelectors: ['[data-testid="Header:block"]', '[data-testid="projects:button.contactUs"]', '[data-testid="projects:button.contactUs"]'] })
  })
})
