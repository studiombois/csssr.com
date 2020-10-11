// Скриншоты целой страницы для английской локали

testcase('Technologies 1920 En', () => {
  step('Go to Technology page', () => {
    browser
      .setWindowSize(1920, 7200)
      .url(browser.launch_url + '/en/tech-stack')
      .waitForElementPresent('footer')
  })

  expected('Screen of the whole page of  Technologies - 1920 EN', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'Technologies 1920 EN')
  })
})

testcase('Technologies 1360 En', () => {
  step('Go to Technology page', () => {
    browser
      .setWindowSize(1360, 7100)
      .url(browser.launch_url + '/en/tech-stack')
      .waitForElementPresent('footer')
  })

  expected('Screen of the whole page of  Technologies - 1360 EN', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'Technologies 1360 EN')
  })
})

testcase('Technologies 1280 En', () => {
  step('Go to Technology page', () => {
    browser
      .setWindowSize(1280, 6700)
      .url(browser.launch_url + '/en/tech-stack')
      .waitForElementPresent('footer')
  })

  expected('Screen of the whole page of  Technologies - 1280 EN', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'Technologies 1280 EN')
  })
})

testcase('Technologies 1024 En', () => {
  step('Go to Technology page', () => {
    browser
      .setWindowSize(1024, 5700)
      .url(browser.launch_url + '/en/tech-stack')
      .waitForElementPresent('footer')
  })

  expected('Screen of the whole page of  Technologies - 1024 EN', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'Technologies 1024 EN')
  })
})

testcase('Technologies 360 En', () => {
  step('Go to Technology page', () => {
    browser
      .setWindowSize(360, 7400)
      .url(browser.launch_url + '/en/tech-stack')
      .waitForElementPresent('footer')
  })

  expected('Screen of the whole page of  Technologies - 360 EN', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'Technologies 360 EN')
  })
})

// Скриншоты целой страницы для английской локали

testcase('Technologies 1920 RU', () => {
  step('Go to Technology page', () => {
    browser
      .setWindowSize(1920, 7200)
      .url(browser.launch_url + '/ru/tech-stack')
      .waitForElementPresent('footer')
  })

  expected('Screen of the whole page of  Technologies - 1920 RU', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'Technologies 1920 RU')
  })
})

testcase('Technologies 1360 RU', () => {
  step('Go to Technology page', () => {
    browser
      .setWindowSize(1360, 7100)
      .url(browser.launch_url + '/ru/tech-stack')
      .waitForElementPresent('footer')
  })

  expected('Screen of the whole page of  Technologies - 1360 RU', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'Technologies 1360 RU')
  })
})

testcase('Technologies 1280 RU', () => {
  step('Go to Technology page', () => {
    browser
      .setWindowSize(1280, 7300)
      .url(browser.launch_url + '/ru/tech-stack')
      .waitForElementPresent('footer')
  })

  expected('Screen of the whole page of  Technologies - 1280 RU', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'Technologies 1280 RU')
  })
})

testcase('Technologies 1024 RU', () => {
  step('Go to Technology page', () => {
    browser
      .setWindowSize(1024, 5700)
      .url(browser.launch_url + '/ru/tech-stack')
      .waitForElementPresent('footer')
  })

  expected('Screen of the whole page of  Technologies - 1024 RU', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'Technologies 1024 RU')
  })
})

testcase('Technologies 360 RU', () => {
  step('Go to Technology page', () => {
    browser
      .setWindowSize(360, 7400)
      .url(browser.launch_url + '/ru/tech-stack')
      .waitForElementPresent('footer')
  })

  expected('Screen of the whole page of  Technologies - 360 RU', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'Technologies 360 RU')
  })
})
