const { contInfo } = require('../actions/contInfo')
const { modalContInfo } = require('../actions/modalContInfo')

// Отправка заявок с русской локали

testcase('Send request from header modal form of RU-locales - Back-end and DevOps', () => {
  step('Go to the Back-end and DevOps page', () => {
    browser
      .setWindowSize(1360, 1024)
      .url(browser.launch_url + '/ru/service/back-end-and-devops')
  })

  step('Press the button in the header [Нанять нас]', () => {
    browser.click('[data-testid="Header:button.contactUs"]')
  })

  modalContInfo('ru')
})

testcase(
  'Send request via the button in the first block of RU-locales - Back-end and DevOps',
  () => {
    step('Go to the Back-end and DevOps page', () => {
      browser
        .setWindowSize(1360, 1024)
        .url(browser.launch_url + '/ru/service/back-end-and-devops')
    })

    step('Press the button [Оставить заявку] in the first block', () => {
      browser.click('[data-testid="BackendAndDevops:button:contactUs"]')
    })

    modalContInfo('ru')
  })

testcase('Sending request from the form at the end of the page of RU-locales - Back-end and DevOps', () => {
  step('Go to the form at the end of the page', () => {
    browser.url(browser.launch_url + '/ru/service/back-end-and-devops')
  })

  contInfo('ru')
})

// Отправка заявок с английской страницы

testcase('Send request from header modal form of EN-locales - Back-end and DevOps', () => {
  step('Go to the Back-end and DevOps page', () => {
    browser
      .setWindowSize(1360, 1024)
      .url(browser.launch_url + '/en/service/back-end-and-devops')
  })

  step('Press the button in the header [Hire us]', () => {
    browser.click('[data-testid="Header:button.contactUs"]')
  })

  modalContInfo('en')
})

testcase(
  'Send request via the button in the first block of EN-locales - Back-end and DevOps',
  () => {
    step('Go to the Back-end and DevOps page', () => {
      browser.setWindowSize(1360, 1024)
      browser.url(browser.launch_url + '/en/service/back-end-and-devops')
    })

    step('Press the button [Let’s Talk] in the first block', () => {
      browser.click('[data-testid="BackendAndDevops:button:contactUs"]')
    })

    modalContInfo('en')
  })

testcase('Sending request from the form at the end of the page of EN-locales - Back-end and DevOps', () => {
  step('Go to the form at the end of the page', () => {
    browser.url(browser.launch_url + '/en/service/back-end-and-devops')
  })

  contInfo('en')
})
