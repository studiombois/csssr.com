const { contInfo } = require('../actions/contInfo')
const { modalContInfo } = require('../actions/modalContInfo')

// Отправка заявок с русской локали

testcase('Send request from header modal form of RU-locales - Technologies', () => {
  step('Go to Technology page', () => {
    browser
      .setWindowSize(1360, 1024)
      .url(browser.launch_url + '/ru/tech-stack')
  })

  step('Press the button in the header [Нанять нас]', () => {
    browser.click('[data-testid="Header:button.contactUs"]')
  })

  modalContInfo('ru')
})

testcase('Sending request from the form at the end of the page of RU-locales - Technologies', () => {
  step('Go to the form at the end of the page', () => {
    browser.url(browser.launch_url + '/ru/tech-stack')
  })

  contInfo('ru')
})

// Отправка заявок с английской локали

testcase('Send request from header modal form of EN-locales - Technologies', () => {
  step('Go to Technology page', () => {
    browser
      .setWindowSize(1360, 1024)
      .url(browser.launch_url + '/en/tech-stack')
  })

  step('Press the button in the header [Hire us]', () => {
    browser.click('[data-testid="Header:button.contactUs"]')
  })

  modalContInfo('en')
})

testcase('Sending request from the form at the end of the page of EN-locales - Technologies', () => {
  step('Go to the form at the end of the page', () => {
    browser.url(browser.launch_url + '/en/tech-stack')
  })

  contInfo('en')
})
