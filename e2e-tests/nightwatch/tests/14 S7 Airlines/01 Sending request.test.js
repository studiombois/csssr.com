const { modalContInfo } = require('../actions/modalContInfo')
const { bubbleContInfo } = require('../actions/bubbleContInfo')

// Отправка заявок с русской локали

testcase('Send request from header modal form of RU-locales - S7 Airline', () => {
  step('Go to the Fintech industry page', () => {
    browser
      .setWindowSize(1360, 1024)
      .url(browser.launch_url + '/ru/project/s7-personal-account')
  })

  step('Press the button in the header [Нанять нас]', () => {
    browser.click('[data-testid="Header:button.contactUs"]')
  })

  modalContInfo('ru')
})


testcase('Sending request from the form at the end of the page of RU-locales - S7 Airline', () => {
  step('Go to the form at the end of the page', () => {
    browser.url(browser.launch_url + '/ru/project/s7-personal-account')
  })

 bubbleContInfo('ru')
})

// Отправка заявок с английской  страницы

testcase('Send request from header modal form of EN-locales - S7 Airline', () => {
  step('Go to the Fintech industry page', () => {
    browser
      .setWindowSize(1360, 1024)
      .url(browser.launch_url + '/en/project/s7-personal-account')
  })

  step('Press the button in the header [Hire us]', () => {
    browser.click('[data-testid="Header:button.contactUs"]')
  })

  modalContInfo('en')
})


testcase('Sending request from the form at the end of the page of EN-locales - S7 Airline', () => {
  step('Go to the form at the end of the page', () => {
    browser.url(browser.launch_url + '/en/project/s7-personal-account')
  })

  bubbleContInfo('en')
})
