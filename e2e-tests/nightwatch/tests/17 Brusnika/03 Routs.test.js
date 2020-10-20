const { switchLanguage } = require('../actions/switchLanguage')

// Роуты для EN-локали

testcase('Rout to the Brusnika page-EN', () => {
  step('Go to the Brusnika page', () => {
    browser.url(browser.launch_url + '/en/project/brusnika')
  })

  step('Clicked on the link under the title', () => {
    browser.click('[data-testid="Project:link.project-site"]')
  })

  expected('The Brusnika project page has been opened in a new tab ', () => {
    browser.windowHandles(function (result) {
      var handle = result.value[1]
      browser.switchWindow(handle)
    })

    browser.waitForElementPresent('[id="app-container"]')
    .assert.urlEquals('https://moskva.brusnika.ru/')
  })
})

testcase('Language Switching-EN', () => {
  step('Go to the Brusnika page', () => {
    browser.url(browser.launch_url + '/en/project/brusnika')
  })

  switchLanguage()

  expected('The English version of the project page was opened', () => {
    browser.waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(
        browser.launch_url + '/ru/project/brusnika'
      )
  })
})


// Роуты для RU-локали

testcase('Rout to the Brusnika page-RU', () => {
  step('Go to the Brusnika page', () => {
    browser.url(browser.launch_url + '/ru/project/brusnika')
  })

  step('Clicked on the link under the title', () => {
    browser.click('[data-testid="Project:link.project-site"]')
  })

  expected('The Brusnika project page has been opened in a new tab ', () => {
    browser.windowHandles(function (result) {
      var handle = result.value[1]
      browser.switchWindow(handle)
    })

    browser.waitForElementPresent('[id="app-container"]')
    .assert.urlEquals('https://moskva.brusnika.ru/')
  })
})

testcase('Language Switching-RU', () => {
  step('Go to the Brusnika page', () => {
    browser.url(browser.launch_url + '/ru/project/brusnika')
  })

  switchLanguage()

  expected('The English version of the project page was opened', () => {
    browser.waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(
        browser.launch_url + '/en/project/brusnika'
      )
  })
})
