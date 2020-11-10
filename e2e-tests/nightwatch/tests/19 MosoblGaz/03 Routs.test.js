const { switchLanguage } = require('../actions/switchLanguage')

// Роуты для EN-локали

testcase('Rout to the Mosoblgaz page-EN', () => {
  step('Go to the Mosoblgaz page', () => {
    browser.url(browser.launch_url + '/en/project/mosoblgaz')
  })

  step('Clicked on the link under the title', () => {
    browser.click('[data-testid="Project:link.project-site"]')
  })

  expected('The Mosoblgaz project page has been opened in a new tab ', () => {
    browser.windowHandles(function (result) {
      var handle = result.value[1]
      browser.switchWindow(handle)
    })

    browser.waitForElementPresent('[class="content-wrapper"]')
      .assert.urlEquals('https://mosoblgaz.ru/')
  })
})

testcase('Language Switching-EN', () => {
  step('Go to the Mosoblgaz page', () => {
    browser.url(browser.launch_url + '/en/project/mosoblgaz')
  })

  switchLanguage()

  expected('The English version of the project page was opened', () => {
    browser.waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(
        browser.launch_url + '/ru/project/mosoblgaz'
      )
  })
})


// Роуты для RU-локали

testcase('Rout to the Mosoblgaz page-RU', () => {
  step('Go to the Mosoblgaz page', () => {
    browser.url(browser.launch_url + '/ru/project/mosoblgaz')
  })

  step('Clicked on the link under the title', () => {
    browser.click('[data-testid="Project:link.project-site"]')
  })

  expected('The Mosoblgaz project page has been opened in a new tab ', () => {
    browser.windowHandles(function (result) {
      var handle = result.value[1]
      browser.switchWindow(handle)
    })

    browser.waitForElementPresent('[class="content-wrapper"]')
      .assert.urlEquals('https://mosoblgaz.ru/')
  })
})

testcase('Language Switching-RU', () => {
  step('Go to the Mosoblgaz page', () => {
    browser.url(browser.launch_url + '/ru/project/mosoblgaz')
  })

  switchLanguage()

  expected('The English version of the project page was opened', () => {
    browser.waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(
        browser.launch_url + '/en/project/mosoblgaz'
      )
  })
})
