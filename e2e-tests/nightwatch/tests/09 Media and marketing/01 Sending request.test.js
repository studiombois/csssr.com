const { contInfo } = require('../actions/contInfo')
const { modalContInfo } = require('../actions/modalContInfo')

// Отправка заявок с русской локали

testcase('Send request from header modal form of RU-locales - Media&Marketing', () => {
  step('Go to the Fintech industry page', () => {
    browser
      .setWindowSize(1360, 1024)
      .url(browser.launch_url + '/ru/industry/media-and-marketing')
  })

  step('Press the button in the header [Нанять нас]', () => {
    browser.click('[data-testid="Header:button.contactUs"]')
  })

  modalContInfo('ru')
})

testcase(
  'Send request via the button in the first block of RU-locales - Media&Marketing',
  () => {
    step('Go to the Fintech industry page', () => {
      browser
        .setWindowSize(1360, 1024)
        .url(browser.launch_url + '/ru/industry/media-and-marketing')
    })

    step('Press the button [Нанять нас] in the first block', () => {
      browser.click('[data-testid="Industry:button.contactUs"]')
    })

    modalContInfo('ru')
  })

testcase('Sending request from the form at the end of the page of RU-locales - Media&Marketing', () => {
  step('Go to the form at the end of the page', () => {
    browser.url(browser.launch_url + '/ru/industry/media-and-marketing')
  })

  contInfo('ru')
})

// Отправка заявок с английской страницы

testcase('Send request from header modal form of EN-locales - Media&Marketing', () => {
  step('Go to the Fintech industry page', () => {
    browser
      .setWindowSize(1360, 1024)
      .url(browser.launch_url + '/en/industry/media-and-marketing')
  })

  step('Press the button in the header [Hire us]', () => {
    browser.click('[data-testid="Header:button.contactUs"]')
  })

  modalContInfo('en')
})

testcase(
  'Send request via the button in the first block of EN-locales - Media&Marketing',
  () => {
    step('Go to the Fintech industry page', () => {
      browser.setWindowSize(1360, 1024)
      browser.url(browser.launch_url + '/en/industry/media-and-marketing')
    })

    step('Press the button [Hire us] in the first block', () => {
      browser.click('[data-testid="Industry:button.contactUs"]')
    })

    modalContInfo('en')
  })

testcase('Sending request from the form at the end of the page of EN-locales - Media&Marketing', () => {
  step('Go to the form at the end of the page', () => {
    browser.url(browser.launch_url + '/en/industry/media-and-marketing')
  })

  contInfo('en')
})
