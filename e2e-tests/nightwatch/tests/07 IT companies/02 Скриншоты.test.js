// Скриншоты целой страницы IT для английской локали

testcase('IT 1920 En', () => {
  step('Перейти на страницу IT', () => {
    browser
      .setWindowSize(1920, 8800)
      .url(browser.launch_url + '/en/industry/information-technology')
      .waitForElementPresent('footer')
  })

  expected('Скрин целой страницы IT на 1920 EN', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'IT 1920 EN')
  })
})

testcase('IT 1360 En', () => {
  step('Перейти на страницу IT', () => {
    browser
      .setWindowSize(1360, 8200)
      .url(browser.launch_url + '/en/industry/information-technology')
      .waitForElementPresent('footer')
  })

  expected('Скрин целой страницы IT на 1360 EN', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'IT 1360 EN')
  })
})

testcase('IT 1280 En', () => {
  step('Перейти на страницу IT', () => {
    browser
      .setWindowSize(1280, 8200)
      .url(browser.launch_url + '/en/industry/information-technology')
      .waitForElementPresent('footer')
  })

  expected('Скрин целой страницы IT на 1280 EN', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'IT 1280 EN')
  })
})

testcase('IT 1024 En', () => {
  step('Перейти на страницу IT', () => {
    browser
      .setWindowSize(1024, 6500)
      .url(browser.launch_url + '/en/industry/information-technology')
      .waitForElementPresent('footer')
  })

  expected('Скрин целой страницы IT на 1024 EN', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'IT 1024 EN')
  })
})

testcase('IT 360 En', () => {
  step('Перейти на страницу IT', () => {
    browser
      .setWindowSize(360, 8200)
      .url(browser.launch_url + '/en/industry/information-technology')
      .waitForElementPresent('footer')
  })

  expected('Скрин целой страницы IT на 360 EN', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'IT 360 EN')
  })
})

// Скриншоты целой страницы ИТ для русской локали

testcase('Индустрии ИТ 1920 RU', () => {
  step('Перейти на страницу индустрии ИТ', () => {
    browser
      .setWindowSize(1920, 8800)
      .url(browser.launch_url + '/ru/industry/information-technology')
      .waitForElementPresent('footer')
  })

  expected('Скрин целой страницы индустрии ИТ на 1920 RU', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'ИТ 1920 RU')
  })
})

testcase('Индустрии ИТ 1360 RU', () => {
  step('Перейти на страницу индустрии ИТ', () => {
    browser
      .setWindowSize(1360, 8200)
      .url(browser.launch_url + '/ru/industry/information-technology')
      .waitForElementPresent('footer')
  })

  expected('Скрин целой страницы индустрии ИТ на 1360 RU', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'ИТ 1360 RU')
  })
})

testcase('Индустрии ИТ 1280 RU', () => {
  step('Перейти на страницу индустрии ИТ', () => {
    browser
      .setWindowSize(1280, 8200)
      .url(browser.launch_url + '/ru/industry/information-technology')
      .waitForElementPresent('footer')
  })

  expected('Скрин целой страницы индустрии ИТ на 1280 RU', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'ИТ 1280 RU')
  })
})

testcase('Индустрии ИТ 1024 RU', () => {
  step('Перейти на страницу индустрии ИТ', () => {
    browser
      .setWindowSize(1024, 6500)
      .url(browser.launch_url + '/ru/industry/information-technology')
      .waitForElementPresent('footer')
  })

  expected('Скрин целой страницы индустрии ИТ на 1024 RU', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'ИТ 1024 RU')
  })
})

testcase('Индустрии ИТ 360 RU', () => {
  step('Перейти на страницу индустрии ИТ', () => {
    browser
      .setWindowSize(360, 8200)
      .url(browser.launch_url + '/ru/industry/information-technology')
      .waitForElementPresent('footer')
  })

  expected('Скрин целой страницы индустрии ИТ на 360 RU', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'ИТ 360 RU')
  })
})
