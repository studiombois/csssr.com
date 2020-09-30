// Переход по ссылкам со страницы RU-локали

testcase('Routing to Professionals 4.0 page', () => {
  step('Go to project page Professionals 4.0', () => {
    browser.url(browser.launch_url + '/ru/project/gazprom-neft-professionals-4-0')
  })

  step('Click on the link under the title', () => {
    browser.click('#hero > div > a')
  })

  expected('The Professionals 4.0 page was opened in a new tab', () => {
    browser.windowHandles(function (result) {
      var handle = result.value[1]
      browser.switchWindow(handle)
    })
    browser
      .waitForElementPresent('[id="__next"]')
      .assert.urlEquals('https://professionals4-0.ru/')
  })
})

testcase('Routing to RSV page', () => {
  step('Go to project page Professionals 4.0', () => {
    browser.url(browser.launch_url + '/ru/project/gazprom-neft-professionals-4-0')
    .setWindowSize(1360, 3000)
  })

  step('Click on the text link АНО «Россия — страна возможностей»', () => {
    browser.click('p:nth-child(3) > a')
  })

  expected('The RSV page was opened in a new tab', () => {
    browser.windowHandles(function (result) {
      var handle = result.value[1]
      browser.switchWindow(handle)
    })
    browser
      .waitForElementPresent('[id="__layout"]')
      .assert.urlEquals('https://rsv.ru/')
  })
})

// Переход по ссылкам со страницы EN-локали

testcase('Routing to Professionals 4.0 page', () => {
  step('Go to project page Professionals 4.0', () => {
    browser.url(browser.launch_url + '/en/project/gazprom-neft-professionals-4-0')
  })

  step('Click on the link under the title', () => {
    browser.click('#hero > div > a')
  })

  expected('The Professionals 4.0 page was opened in a new tab', () => {
    browser.windowHandles(function (result) {
      var handle = result.value[1]
      browser.switchWindow(handle)
    })
    browser
      .waitForElementPresent('[id="__next"]')
      .assert.urlEquals('https://professionals4-0.ru/')
  })
})

testcase('Routing to Sibur page', () => {
  step('Go to project page Professionals 4.0', () => {
    browser.url(browser.launch_url + '/en/project/gazprom-neft-professionals-4-0')
    .setWindowSize(1360, 3000)
  })

  step('Click on the text link Sibur', () => {
    browser.click('p:nth-child(3) > a:nth-child(1)')
  })

  expected('The Sibur page was opened in a new tab', () => {
    browser.windowHandles(function (result) {
      var handle = result.value[1]
      browser.switchWindow(handle)
    })
    browser
      .waitForElementPresent('[id="panel"]')
      .assert.urlEquals('https://www.sibur.ru/en/')
  })
})

testcase('Routing to Rostelecom page', () => {
  step('Go to project page Professionals 4.0', () => {
    browser.url(browser.launch_url + '/en/project/gazprom-neft-professionals-4-0')
      .setWindowSize(1360, 3000)
  })

  step('Click on the text link Rostelecom', () => {
    browser.click('p:nth-child(3) > a:nth-child(2)')
  })

  expected('The Rostelecom page was opened in a new tab', () => {
    browser.windowHandles(function (result) {
      var handle = result.value[1]
      browser.switchWindow(handle)
    })
    browser
      .waitForElementPresent('[class="main main-home main-en"]')
      .assert.urlEquals('https://www.company.rt.ru/en/')
  })
})

testcase('Routing to Skolkovo Innovation Center page', () => {
  step('Go to project page Professionals 4.0', () => {
    browser.url(browser.launch_url + '/en/project/gazprom-neft-professionals-4-0')
      .setWindowSize(1360, 3000)
  })

  step('Click on the text link Skolkovo Innovation Center', () => {
    browser.click('p:nth-child(3) > a:nth-child(3)')
  })

  expected('The Skolkovo Innovation Center page was opened in a new tab', () => {
    browser.windowHandles(function (result) {
      var handle = result.value[1]
      browser.switchWindow(handle)
    })
    browser
      .waitForElementPresent('[class="home-page"]')
      .assert.urlEquals('https://sk.ru/')
  })
})
