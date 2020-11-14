const { modalContInfo } = require('../actions/modalContInfo')


testcase('Send request from header modal form of RU-locales - Main', () => {
  step('Go to Main page', () => {
    browser
      .setWindowSize(1360, 1024)
      .url(browser.launch_url + '/ru')
  })

  step('Press the button in the header [Нанять нас]', () => {
    browser.click('[data-testid="Header:button.contactUs"]')
  })

  modalContInfo('ru')
})

// Отправка заявок с английской локали

testcase('Send request from header modal form of EN-locales - Main', () => {
  step('Go to Main page', () => {
    browser
      .setWindowSize(1360, 1024)
      .url(browser.launch_url + '/en')
  })

  step('Press the button in the header [Hire us]', () => {
    browser.click('[data-testid="Header:button.contactUs"]')
  })

  modalContInfo('en')
})

