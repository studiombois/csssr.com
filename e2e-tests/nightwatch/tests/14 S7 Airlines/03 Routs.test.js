const { switchLanguage } = require('../actions/switchLanguage')

// Роуты для EN-локали

testcase('Rout to the S7 page-EN', () => {
  step('Go to the S7 Airlines page', () => {
    browser.url(browser.launch_url + '/en/project/s7-personal-account')
  })

  step('Clicked on the link under the title', () => {
    browser.click('[data-testid="Project:link.project-site"]')
  })

  expected('The S7 project page has been opened in a new tab ', () => {
    browser.windowHandles(function (result) {
      var handle = result.value[1]
      browser.switchWindow(handle)
    })

    browser.assert.urlEquals('https://myprofile.s7.ru/')
  })
})

testcase('Language Switching-EN', () => {
  step('Go to the S7 Airlines page', () => {
    browser.url(browser.launch_url + '/en/project/s7-personal-account')
  })

  switchLanguage()

  expected('The Russian version of the project page was opened', () => {
    browser
      .assert.urlEquals(
        browser.launch_url + '/ru/project/s7-personal-account'
      )
  })
})

// Роуты для RU-локали

testcase('Rout to the S7 page-RU', () => {
  step('Go to the S7 Airlines page', () => {
    browser.url(browser.launch_url + '/ru/project/s7-personal-account')
  })

  step('Clicked on the link under the title', () => {
    browser.click('[data-testid="Project:link.project-site"]')
  })

  expected('The S7 project page has been opened in a new tab ', () => {
    browser.windowHandles(function (result) {
      var handle = result.value[1]
      browser.switchWindow(handle)
    })

    browser.assert.urlEquals('https://myprofile.s7.ru/')
  })
})

testcase('Language Switching-RU', () => {
  step('Go to the S7 Airlines page', () => {
    browser.url(browser.launch_url + '/ru/project/s7-personal-account')
  })

  switchLanguage()

  expected('The English version of the project page was opened', () => {
    browser
      .assert.urlEquals(
        browser.launch_url + '/en/project/s7-personal-account'
      )
  })
})
