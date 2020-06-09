//Скриншоты целой страницы для английской локали

testcase('Core Values 1920 En', () => {
  step('Перейти на страницу Core Values', () => {
    browser
      .setWindowSize(1920, 7200)
      .url(browser.launch_url + '/en/core-values')
      .waitForElementPresent('footer')
  })
  expected('Скрин целой страницы Core Values на 1920 EN', () => {
    browser.assert.screenshotElement('[id="main"]', 'Core Values 1920 EN')
  })
})

testcase('Core Values 1360 En', () => {
  step('Перейти на страницу Core Values', () => {
    browser
      .setWindowSize(1360, 7100)
      .url(browser.launch_url + '/en/core-values')
      .waitForElementPresent('footer')
  })
  expected('Скрин целой страницы Core Values на 1360 EN', () => {
    browser.assert.screenshotElement('[id="main"]', 'Core Values 1360 EN')
  })
})

testcase('Core Values 1280 En', () => {
  step('Перейти на страницу Core Values', () => {
    browser
      .setWindowSize(1280, 6700)
      .url(browser.launch_url + '/en/core-values')
      .waitForElementPresent('footer')
  })
  expected('Скрин целой страницы Core Values на 1280 EN', () => {
    browser.assert.screenshotElement('[id="main"]', 'Core Values 1280 EN')
  })
})

testcase('Core Values 1024 En', () => {
  step('Перейти на страницу Core Values', () => {
    browser
      .setWindowSize(1024, 5700)
      .url(browser.launch_url + '/en/core-values')
      .waitForElementPresent('footer')
  })
  expected('Скрин целой страницы Core Values на 1024 EN', () => {
    browser.assert.screenshotElement('[id="main"]', 'Core Values 1024 EN')
  })
})

testcase('Core Values 360 En', () => {
  step('Перейти на страницу Core Values', () => {
    browser
      .setWindowSize(360, 7400)
      .url(browser.launch_url + '/en/core-values')
      .waitForElementPresent('footer')
  })
  expected('Скрин целой страницы Core Values на 360 EN', () => {
    browser.assert.screenshotElement('[id="main"]', 'Core Values 360 EN')
  })
})

//Скриншоты целой страницы для русской локали

testcase('Наши ценности 1920 RU', () => {
  step('Перейти на страницу Наши ценности', () => {
    browser
      .setWindowSize(1920, 7200)
      .url(browser.launch_url + '/ru/core-values')
      .waitForElementPresent('footer')
  })
  expected('Скрин целой страницы Наши ценности на 1920 RU', () => {
    browser.assert.screenshotElement('[id="main"]', 'Наши ценности 1920 RU')
  })
})

testcase('Наши ценности 1360 RU', () => {
  step('Перейти на страницу Наши ценности', () => {
    browser
      .setWindowSize(1360, 7100)
      .url(browser.launch_url + '/ru/core-values')
      .waitForElementPresent('footer')
  })
  expected('Скрин целой страницы Наши ценности на 1360 RU', () => {
    browser.assert.screenshotElement('[id="main"]', 'Наши ценности 1360 RU')
  })
})

testcase('Наши ценности 1280 RU', () => {
  step('Перейти на страницу Наши ценности', () => {
    browser
      .setWindowSize(1280, 6700)
      .url(browser.launch_url + '/ru/core-values')
      .waitForElementPresent('footer')
  })
  expected('Скрин целой страницы Наши ценности на 1280 RU', () => {
    browser.assert.screenshotElement('[id="main"]', 'Наши ценности 1280 RU')
  })
})

testcase('Наши ценности 1024 RU', () => {
  step('Перейти на страницу Наши ценности', () => {
    browser
      .setWindowSize(1024, 5700)
      .url(browser.launch_url + '/ru/core-values')
      .waitForElementPresent('footer')
  })
  expected('Скрин целой страницы Наши ценности на 1024 RU', () => {
    browser.assert.screenshotElement('[id="main"]', 'Наши ценности 1024 RU')
  })
})

testcase('Наши ценности 360 RU', () => {
  step('Перейти на страницу Наши ценности', () => {
    browser
      .setWindowSize(360, 7400)
      .url(browser.launch_url + '/ru/core-values')
      .waitForElementPresent('footer')
  })
  expected('Скрин целой страницы Наши ценности на 360 RU', () => {
    browser.assert.screenshotElement('[id="main"]', 'Наши ценности 360 RU')
  })
})
