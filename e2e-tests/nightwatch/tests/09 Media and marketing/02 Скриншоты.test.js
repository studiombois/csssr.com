// Скриншоты целой страницы МЕДИА И МАРКЕТИНГ для английской локали

testcase('Media&Marketing 1920 En', () => {
  step('Перейти на страницу Media&Marketing', () => {
    browser
      .setWindowSize(1920, 8000)
      .url(browser.launch_url + '/en/industry/media-and-marketing')
      .waitForElementPresent('footer')
  })

  expected('Скрин целой страницы Media&Marketing на 1920 EN', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'Media&Marketing 1920 EN')
  })
})

testcase(' Media&Marketing 1360 En', () => {
  step('Перейти на страницу  Media&Marketing', () => {
    browser
      .setWindowSize(1360, 8000)
      .url(browser.launch_url + '/en/industry/media-and-marketing')
      .waitForElementPresent('footer')
  })

  expected('Скрин целой страницы Media&Marketing на 1360 EN', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'Media&Marketing 1360 EN')
  })
})

testcase(' Media&Marketing 1280 En', () => {
  step('Перейти на страницу  Media&Marketing', () => {
    browser
      .setWindowSize(1280, 7500)
      .url(browser.launch_url + '/en/industry/media-and-marketing')
      .waitForElementPresent('footer')
  })

  expected('Скрин целой страницы Media&Marketing на 1280 EN', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'Media&Marketing 1280 EN')
  })
})

testcase(' Media&Marketing 1024 En', () => {
  step('Перейти на страницу  Media&Marketing', () => {
    browser
      .setWindowSize(1024, 5700)
      .url(browser.launch_url + '/en/industry/media-and-marketing')
      .waitForElementPresent('footer')
  })

  expected('Скрин целой страницы Media&Marketing на 1024 EN', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'Media&Marketing 1024 EN')
  })
})

testcase(' Media&Marketing 360 En', () => {
  step('Перейти на страницу  Media&Marketing', () => {
    browser
      .setWindowSize(360, 7400)
      .url(browser.launch_url + '/en/industry/media-and-marketing')
      .waitForElementPresent('footer')
  })

  expected('Скрин целой страницы Media&Marketing на 360 EN', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'Media&Marketing 360 EN')
  })
})

// Скриншоты целой страницы МЕДИА и МАРКЕТИНГ для русской локали

testcase('Индустрии Медиа и Маркетинг 1920 RU', () => {
  step('Перейти на страницу индустрии Медиа и Маркетинг', () => {
    browser
      .setWindowSize(1920, 8000)
      .url(browser.launch_url + '/ru/industry/media-and-marketing')
      .waitForElementPresent('footer')
  })

  expected('Скрин целой страницы индустрии Медиа и Маркетинг на 1920 RU', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'Медиа и Маркетинг 1920 RU')
  })
})

testcase('Индустрии Медиа и Маркетинг 1360 RU', () => {
  step('Перейти на страницу индустрии Медиа и Маркетинг', () => {
    browser
      .setWindowSize(1360, 8000)
      .url(browser.launch_url + '/ru/industry/media-and-marketing')
      .waitForElementPresent('footer')
  })

  expected('Скрин целой страницы индустрии Медиа и Маркетинг на 1360 RU', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'Медиа и Маркетинг 1360 RU')
  })
})

testcase('Индустрии Медиа и Маркетинг 1280 RU', () => {
  step('Перейти на страницу индустрии Медиа и Маркетинг', () => {
    browser
      .setWindowSize(1280, 7500)
      .url(browser.launch_url + '/ru/industry/media-and-marketing')
      .waitForElementPresent('footer')
  })

  expected('Скрин целой страницы индустрии Медиа и Маркетинг на 1280 RU', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'Медиа и Маркетинг 1280 RU')
  })
})

testcase('Индустрии Медиа и Маркетинг 1024 RU', () => {
  step('Перейти на страницу индустрии Медиа и Маркетинг', () => {
    browser
      .setWindowSize(1024, 5700)
      .url(browser.launch_url + '/ru/industry/media-and-marketing')
      .waitForElementPresent('footer')
  })

  expected('Скрин целой страницы индустрии Медиа и Маркетинг на 1024 RU', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'Медиа и Маркетинг 1024 RU')
  })
})

testcase('Индустрии Медиа и Маркетинг 360 RU', () => {
  step('Перейти на страницу индустрии Медиа и Маркетинг', () => {
    browser
      .setWindowSize(360, 7400)
      .url(browser.launch_url + '/ru/industry/media-and-marketing')
      .waitForElementPresent('footer')
  })

  expected('Скрин целой страницы индустрии Медиа и Маркетинг на 360 RU', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'Медиа и Маркетинг 360 RU')
  })
})
