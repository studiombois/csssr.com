// Скриншоты целой страницы ФИНТЕХ для английской локали

testcase('Fintech 1920 En', () => {
  step('Перейти на страницу Fintech', () => {
    browser
      .setWindowSize(1920, 7200)
      .url(browser.launch_url + '/en/industry/fintech')
      .waitForElementPresent('footer')
  })
  expected('Скрин целой страницы Fintech на 1920 EN', () => {
    browser.assert.screenshotElement('[id="main"]', 'Fintech 1920 EN')
  })
})

testcase('Fintech 1360 En', () => {
  step('Перейти на страницу Fintech', () => {
    browser
      .setWindowSize(1360, 7100)
      .url(browser.launch_url + '/en/industry/fintech')
      .waitForElementPresent('footer')
  })
  expected('Скрин целой страницы Fintech на 1360 EN', () => {
    browser.assert.screenshotElement('[id="main"]', 'Fintech 1360 EN')
  })
})

testcase('Fintech 1280 En', () => {
  step('Перейти на страницу Fintech', () => {
    browser
      .setWindowSize(1280, 6700)
      .url(browser.launch_url + '/en/industry/fintech')
      .waitForElementPresent('footer')
  })
  expected('Скрин целой страницы Fintech на 1280 EN', () => {
    browser.assert.screenshotElement('[id="main"]', 'Fintech 1280 EN')
  })
})

testcase('Fintech 1024 En', () => {
  step('Перейти на страницу Fintech', () => {
    browser
      .setWindowSize(1024, 5700)
      .url(browser.launch_url + '/en/industry/fintech')
      .waitForElementPresent('footer')
  })
  expected('Скрин целой страницы Fintech на 1024 EN', () => {
    browser.assert.screenshotElement('[id="main"]', 'Fintech 1024 EN')
  })
})

testcase('Fintech 360 En', () => {
  step('Перейти на страницу Fintech', () => {
    browser
      .setWindowSize(360, 7400)
      .url(browser.launch_url + '/en/industry/fintech')
      .waitForElementPresent('footer')
  })
  expected('Скрин целой страницы Fintech на 360 EN', () => {
    browser.assert.screenshotElement('[id="main"]', 'Fintech 360 EN')
  })
})

// Скриншоты целой страницы ФИНТЕХ для русской локали

testcase('Индустрии Финтех 1920 RU', () => {
  step('Перейти на страницу индустрии Финтех', () => {
    browser
      .setWindowSize(1920, 7200)
      .url(browser.launch_url + '/ru/industry/fintech')
      .waitForElementPresent('footer')
  })
  expected('Скрин целой страницы индустрии Финтех на 1920 RU', () => {
    browser.assert.screenshotElement('[id="main"]', 'Индустрии Финтех 1920 RU')
  })
})

testcase('Индустрии Финтех 1360 RU', () => {
  step('Перейти на страницу индустрии Финтех', () => {
    browser
      .setWindowSize(1360, 7100)
      .url(browser.launch_url + '/ru/industry/fintech')
      .waitForElementPresent('footer')
  })
  expected('Скрин целой страницы индустрии Финтех на 1360 RU', () => {
    browser.assert.screenshotElement('[id="main"]', 'Индустрии Финтех 1360 RU')
  })
})

testcase('Индустрии Финтех 1280 RU', () => {
  step('Перейти на страницу индустрии Финтех', () => {
    browser
      .setWindowSize(1280, 6700)
      .url(browser.launch_url + '/ru/industry/fintech')
      .waitForElementPresent('footer')
  })
  expected('Скрин целой страницы индустрии Финтех на 1280 RU', () => {
    browser.assert.screenshotElement('[id="main"]', 'Индустрии Финтех 1280 RU')
  })
})

testcase('Индустрии Финтех 1024 RU', () => {
  step('Перейти на страницу индустрии Финтех', () => {
    browser
      .setWindowSize(1024, 5700)
      .url(browser.launch_url + '/ru/industry/fintech')
      .waitForElementPresent('footer')
  })
  expected('Скрин целой страницы индустрии Финтех на 1024 RU', () => {
    browser.assert.screenshotElement('[id="main"]', 'Индустрии Финтех 1024 RU')
  })
})

testcase('Индустрии Финтех 360 RU', () => {
  step('Перейти на страницу индустрии Финтех', () => {
    browser
      .setWindowSize(360, 7400)
      .url(browser.launch_url + '/ru/industry/fintech')
      .waitForElementPresent('footer')
  })
  expected('Скрин целой страницы индустрии Финтех на 360 RU', () => {
    browser.assert.screenshotElement('[id="main"]', 'Индустрии Финтех 360 RU')
  })
})
