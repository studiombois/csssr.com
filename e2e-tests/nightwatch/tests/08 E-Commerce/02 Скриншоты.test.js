// Скриншоты целой страницы E-commerce для английской локали

testcase('E-commerce 1920 En', () => {
  step('Перейти на страницу E-commerce', () => {
    browser
      .setWindowSize(1920, 7200)
      .url(browser.launch_url + '/en/industry/ecommerce')
      .waitForElementPresent('footer')
  })
  expected('Скрин целой страницы E-commerce на 1920 EN', () => {
    browser.assert.screenshotElement('[id="main"]', 'E-commerce 1920 EN')
  })
})

testcase('E-commerce 1360 En', () => {
  step('Перейти на страницу E-commerce', () => {
    browser
      .setWindowSize(1360, 7100)
      .url(browser.launch_url + '/en/industry/ecommerce')
      .waitForElementPresent('footer')
  })
  expected('Скрин целой страницы E-commerce на 1360 EN', () => {
    browser.assert.screenshotElement('[id="main"]', 'E-commerce 1360 EN')
  })
})

testcase('E-commerce 1280 En', () => {
  step('Перейти на страницу E-commerce', () => {
    browser
      .setWindowSize(1280, 6700)
      .url(browser.launch_url + '/en/industry/ecommerce')
      .waitForElementPresent('footer')
  })
  expected('Скрин целой страницы E-commerce на 1280 EN', () => {
    browser.assert.screenshotElement('[id="main"]', 'E-commerce 1280 EN')
  })
})

testcase('E-commerce 1024 En', () => {
  step('Перейти на страницу E-commerce', () => {
    browser
      .setWindowSize(1024, 5700)
      .url(browser.launch_url + '/en/industry/ecommerce')
      .waitForElementPresent('footer')
  })
  expected('Скрин целой страницы E-commerce на 1024 EN', () => {
    browser.assert.screenshotElement('[id="main"]', 'E-commerce 1024 EN')
  })
})

testcase('E-commerce 360 En', () => {
  step('Перейти на страницу E-commerce', () => {
    browser
      .setWindowSize(360, 7400)
      .url(browser.launch_url + '/en/industry/ecommerce')
      .waitForElementPresent('footer')
  })
  expected('Скрин целой страницы E-commerce на 360 EN', () => {
    browser.assert.screenshotElement('[id="main"]', 'E-commerce 360 EN')
  })
})

// Скриншоты целой страницы E-commerce для русской локали

testcase('Индустрии E-commerce 1920 RU', () => {
  step('Перейти на страницу индустрии E-commerce', () => {
    browser
      .setWindowSize(1920, 7200)
      .url(browser.launch_url + '/ru/industry/ecommerce')
      .waitForElementPresent('footer')
  })
  expected('Скрин целой страницы индустрии E-commerce на 1920 RU', () => {
    browser.assert.screenshotElement('[id="main"]', 'E-commerce 1920 RU')
  })
})

testcase('Индустрии E-commerce 1360 RU', () => {
  step('Перейти на страницу индустрии E-commerce', () => {
    browser
      .setWindowSize(1360, 7100)
      .url(browser.launch_url + '/ru/industry/ecommerce')
      .waitForElementPresent('footer')
  })
  expected('Скрин целой страницы индустрии E-commerce на 1360 RU', () => {
    browser.assert.screenshotElement('[id="main"]', 'E-commerce 1360 RU')
  })
})

testcase('Индустрии E-commerce 1280 RU', () => {
  step('Перейти на страницу индустрии E-commerce', () => {
    browser
      .setWindowSize(1280, 6700)
      .url(browser.launch_url + '/ru/industry/ecommerce')
      .waitForElementPresent('footer')
  })
  expected('Скрин целой страницы индустрии E-commerce на 1280 RU', () => {
    browser.assert.screenshotElement('[id="main"]', 'E-commerce 1280 RU')
  })
})

testcase('Индустрии E-commerce 1024 RU', () => {
  step('Перейти на страницу индустрии E-commerce', () => {
    browser
      .setWindowSize(1024, 5700)
      .url(browser.launch_url + '/ru/industry/ecommerce')
      .waitForElementPresent('footer')
  })
  expected('Скрин целой страницы индустрии E-commerce на 1024 RU', () => {
    browser.assert.screenshotElement('[id="main"]', 'E-commerce 1024 RU')
  })
})

testcase('Индустрии E-commerce 360 RU', () => {
  step('Перейти на страницу индустрии E-commerce', () => {
    browser
      .setWindowSize(360, 7400)
      .url(browser.launch_url + '/ru/industry/ecommerce')
      .waitForElementPresent('footer')
  })
  expected('Скрин целой страницы индустрии E-commerce на 360 RU', () => {
    browser.assert.screenshotElement('[id="main"]', 'E-commerce 360 RU')
  })
})
