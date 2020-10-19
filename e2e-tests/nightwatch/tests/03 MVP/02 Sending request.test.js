const { contInfo } = require('../actions/contInfo')
const { modalContInfo } = require('../actions/modalContInfo')

// Отправка заявок с русской локали

testcase('Send request from header modal form of RU-locales - MVP', () => {
  step('Go to the MVP page', () => {
    browser
      .setWindowSize(1360, 1024)
      .url(browser.launch_url + '/ru/service/mvp-development')
  })

  step('Press the button in the header [Нанять нас]', () => {
    browser.click('[data-testid="Header:button.contactUs"]')
  })

  modalContInfo('ru')
})

testcase(
  'Send request via the button in the first block of RU-locales - MVP',
  () => {
    step('Go to the MVP page', () => {
      browser
        .setWindowSize(1360, 1024)
        .url(browser.launch_url + '/ru/service/mvp-development')
    })

    step('Press the button [Запустить проект] in the first block', () => {
      browser.click('[data-testid="MVP:button:contactUs"]')
    })

    modalContInfo('ru')
  })

testcase('Sending request from the form at the end of the page of RU-locales - MVP', () => {
  step('Go to the form at the end of the page', () => {
    browser.url(browser.launch_url + '/ru/service/mvp-development')
  })

  contInfo('ru')
})

// Отправка заявок с английской страницы

testcase('Send request from header modal form of EN-locales - MVP', () => {
  step('Go to the MVP page', () => {
    browser
      .setWindowSize(1360, 1024)
      .url(browser.launch_url + '/en/service/mvp-development')
  })

  step('Press the button in the header [Hire us]', () => {
    browser.click('[data-testid="Header:button.contactUs"]')
  })

  modalContInfo('en')
})

testcase(
  'Send request via the button in the first block of EN-locales - MVP',
  () => {
    step('Go to the MVP page', () => {
      browser.setWindowSize(1360, 1024)
      browser.url(browser.launch_url + '/en/service/mvp-development')
    })

    step('Press the button [Start Your Project] in the first block', () => {
      browser.click('[data-testid="MVP:button:contactUs"]')
    })

    modalContInfo('en')
  })

testcase('Sending request from the form at the end of the page of EN-locales - MVP', () => {
  step('Go to the form at the end of the page', () => {
    browser.url(browser.launch_url + '/en/service/mvp-development')
  })

  contInfo('en')
})
