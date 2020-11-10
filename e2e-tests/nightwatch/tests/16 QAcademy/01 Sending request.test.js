const { modalContInfo } = require('../actions/modalContInfo')
const { bubbleContInfo } = require('../actions/bubbleContInfo')


// Отправка заявок с русской локали

testcase('Send request from header modal form of RU-locales - QAcademy', () => {
  step('Go to QAcademy page', () => {
    browser
      .setWindowSize(1360, 1024)
      .url(browser.launch_url + '/ru/project/qmarketing')
  })

  step('Press the button in the header [Нанять нас]', () => {
    browser.click('[data-testid="Header:button.contactUs"]')
  })

  modalContInfo('ru')
})

testcase('Sending request from the bubble at the end of the page of RU-locales - QAcademy', () => {
  step('Go to the bubble at the end of the page', () => {
    browser.url(browser.launch_url + '/ru/project/qmarketing')
  })

  bubbleContInfo('ru')
})

// Отправка заявок с английской локали

testcase('Send request from header modal form of EN-locales - QAcademy', () => {
  step('Go to QAcademy page', () => {
    browser
      .setWindowSize(1360, 1024)
      .url(browser.launch_url + '/en/project/qmarketing')
  })

  step('Press the button in the header [Hire us]', () => {
    browser.click('[data-testid="Header:button.contactUs"]')
  })

  modalContInfo('en')
})

testcase('Sending request from the bubble at the end of the page of EN-locales - QAcademy', () => {
  step('Go to the bubble at the end of the page', () => {
    browser.url(browser.launch_url + '/en/project/qmarketing')
  })

  bubbleContInfo('en')
})
