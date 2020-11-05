const { switchLanguage } = require('../actions/switchLanguage')

// Роуты для EN-локали

testcase('Rout to the QAcademy page-EN', () => {
  step('Go to the QAcademy page', () => {
    browser.url(browser.launch_url + '/en/project/qmarketing')
  })

  step('Clicked on the link under the title', () => {
    browser.click('[data-testid="Project:link.project-site"]')
  })

  expected('The QAcademy project page has been opened in a new tab ', () => {
    browser.windowHandles(function (result) {
      var handle = result.value[1]
      browser.switchWindow(handle)
    })

    browser.waitForElementPresent('[class="t-body"]')
    .assert.urlEquals('https://qacademy.ru/')
  })
})

testcase('Language Switching-EN', () => {
  step('Go to the QAcademy page', () => {
    browser.url(browser.launch_url + '/en/project/qmarketing')
  })

  switchLanguage()

  expected('The English version of the project page was opened', () => {
    browser.waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(
        browser.launch_url + '/ru/project/qmarketing'
      )
  })
})


// Роуты для RU-локали

testcase('Rout to the QAcademy page-RU', () => {
  step('Go to the QAcademy page', () => {
    browser.url(browser.launch_url + '/ru/project/qmarketing')
  })

  step('Clicked on the link under the title', () => {
    browser.click('[data-testid="Project:link.project-site"]')
  })

  expected('The QAcademy project page has been opened in a new tab ', () => {
    browser.windowHandles(function (result) {
      var handle = result.value[1]
      browser.switchWindow(handle)
    })

    browser.waitForElementPresent('[class="t-body"]')
    .assert.urlEquals('https://qacademy.ru/')
  })
})

testcase('Language Switching-RU', () => {
  step('Go to the QAcademy page', () => {
    browser.url(browser.launch_url + '/ru/project/qmarketing')
  })

  switchLanguage()

  expected('The English version of the project page was opened', () => {
    browser.waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(
        browser.launch_url + '/en/project/qmarketing'
      )
  })
})
