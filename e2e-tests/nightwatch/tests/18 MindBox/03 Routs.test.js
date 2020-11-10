const { switchLanguage } = require('../actions/switchLanguage')

// Роуты для EN-локали

testcase('Rout to the Mindbox page-EN', () => {
  step('Go to the Mindbox page', () => {
    browser.url(browser.launch_url + '/en/project/mindbox')
  })

  step('Clicked on the link under the title', () => {
    browser.click('[data-testid="Project:link.project-site"]')
  })

  expected('The Mindbox project page has been opened in a new tab ', () => {
    browser.windowHandles(function (result) {
      var handle = result.value[1]
      browser.switchWindow(handle)
    })

    browser.waitForElementPresent('[id="mainpage"]')
      .assert.urlEquals('https://mindbox.ru/')
  })
})

testcase('Language Switching-EN', () => {
  step('Go to the Mindbox page', () => {
    browser.url(browser.launch_url + '/en/project/mindbox')
  })

  switchLanguage()

  expected('The English version of the project page was opened', () => {
    browser.waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(
        browser.launch_url + '/ru/project/mindbox'
      )
  })
})


// Роуты для RU-локали

testcase('Rout to the Mindbox page-RU', () => {
  step('Go to the Mindbox page', () => {
    browser.url(browser.launch_url + '/ru/project/mindbox')
  })

  step('Clicked on the link under the title', () => {
    browser.click('[data-testid="Project:link.project-site"]')
  })

  expected('The Mindbox project page has been opened in a new tab ', () => {
    browser.windowHandles(function (result) {
      var handle = result.value[1]
      browser.switchWindow(handle)
    })

    browser.waitForElementPresent('[id="mainpage"]')
      .assert.urlEquals('https://mindbox.ru/')
  })
})

testcase('Language Switching-RU', () => {
  step('Go to the Mindbox page', () => {
    browser.url(browser.launch_url + '/ru/project/mindbox')
  })

  switchLanguage()

  expected('The English version of the project page was opened', () => {
    browser.waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(
        browser.launch_url + '/en/project/mindbox'
      )
  })
})
