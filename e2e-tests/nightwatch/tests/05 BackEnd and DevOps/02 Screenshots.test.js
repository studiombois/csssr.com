// Скриншоты целой страницы для английской локали

testcase('Back-end and DevOps 1920 En', () => {
  step('Go to Back-end and DevOps page', () => {
    browser
      .setWindowSize(1920, 6500)
      .url(browser.launch_url + '/en/service/back-end-and-devops')
      .waitForElementPresent('footer')
  })

  expected('Screen of the whole page of Back-end and DevOps - 1920 EN', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'Back-end and DevOps 1920 EN',
      { hideSelectors: ['[data-testid="Header:block"]'] })
  })
})

testcase('Back-end and DevOps 1360 En', () => {
  step('Go to Back-end and DevOps page', () => {
    browser
      .setWindowSize(1360, 6500)
      .url(browser.launch_url + '/en/service/back-end-and-devops')
      .waitForElementPresent('footer')
  })

  expected('Screen of the whole page of Back-end and DevOps - 1360 EN', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'Back-end and DevOps 1360 EN',
      { hideSelectors: ['[data-testid="Header:block"]'] })
  })
})

testcase('Back-end and DevOps 1280 En', () => {
  step('Go to Back-end and DevOps page', () => {
    browser
      .setWindowSize(1280, 6500)
      .url(browser.launch_url + '/en/service/back-end-and-devops')
      .waitForElementPresent('footer')
  })

  expected('Screen of the whole page of Back-end and DevOps - 1280 EN', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'Back-end and DevOps 1280 EN',
      { hideSelectors: ['[data-testid="Header:block"]'] })
  })
})

testcase('Back-end and DevOps 1024 En', () => {
  step('Go to Back-end and DevOps page', () => {
    browser
      .setWindowSize(1024, 5500)
      .url(browser.launch_url + '/en/service/back-end-and-devops')
      .waitForElementPresent('footer')
  })

  expected('Screen of the whole page of Back-end and DevOps - 1024 EN', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'Back-end and DevOps 1024 EN',
      { hideSelectors: ['[data-testid="Header:block"]'] })
  })
})

testcase('Back-end and DevOps 360 En', () => {
  step('Go to Back-end and DevOps page', () => {
    browser
      .setWindowSize(360, 6300)
      .url(browser.launch_url + '/en/service/back-end-and-devops')
      .waitForElementPresent('footer')
  })

  expected('Screen of the whole page of Back-end and DevOps - 360 EN', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'Back-end and DevOps 360 EN',
      { hideSelectors: ['[data-testid="Header:block"]'] })
  })
})

// Скриншоты целой страницы для английской локали Back-end and DevOps вкл

testcase('Back-end and DevOps 1920 RU', () => {
  step('Go to Back-end and DevOps page', () => {
    browser
      .setWindowSize(1920, 6500)
      .url(browser.launch_url + '/ru/service/back-end-and-devops')
      .waitForElementPresent('footer')
  })

  expected('Screen of the whole page of Back-end and DevOps - 1920 RU', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'Back-end and DevOps 1920 RU',
      { hideSelectors: ['[data-testid="Header:block"]'] })
  })
})

testcase('Back-end and DevOps 1360 RU', () => {
  step('Go to Back-end and DevOps page', () => {
    browser
      .setWindowSize(1360, 6500)
      .url(browser.launch_url + '/ru/service/back-end-and-devops')
      .waitForElementPresent('footer')
  })

  expected('Screen of the whole page of Back-end and DevOps - 1360 RU', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'Back-end and DevOps 1360 RU',
      { hideSelectors: ['[data-testid="Header:block"]'] })
  })
})

testcase('Back-end and DevOps 1280 RU', () => {
  step('Go to Back-end and DevOps page', () => {
    browser
      .setWindowSize(1280, 6500)
      .url(browser.launch_url + '/ru/service/back-end-and-devops')
      .waitForElementPresent('footer')
  })

  expected('Screen of the whole page of Back-end and DevOps - 1280 RU', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'Back-end and DevOps 1280 RU',
      { hideSelectors: ['[data-testid="Header:block"]'] })
  })
})

testcase('Back-end and DevOps 1024 RU', () => {
  step('Go to Back-end and DevOps page', () => {
    browser
      .setWindowSize(1024, 5500)
      .url(browser.launch_url + '/ru/service/back-end-and-devops')
      .waitForElementPresent('footer')
  })

  expected('Screen of the whole page of Back-end and DevOps - 1024 RU', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'Back-end and DevOps 1024 RU',
      { hideSelectors: ['[data-testid="Header:block"]'] })
  })
})

testcase('Back-end and DevOps 360 RU', () => {
  step('Go to Back-end and DevOps page', () => {
    browser
      .setWindowSize(360, 6300)
      .url(browser.launch_url + '/ru/service/back-end-and-devops')
      .waitForElementPresent('footer')
  })

  expected('Screen of the whole page of Back-end and DevOps - 360 RU', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'Back-end and DevOps 360 RU',
      { hideSelectors: ['[data-testid="Header:block"]'] })
  })
})
