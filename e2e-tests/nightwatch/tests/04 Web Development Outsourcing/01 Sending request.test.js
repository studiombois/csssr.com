const { contInfo } = require('../actions/contInfo')
const { modalContInfo } = require('../actions/modalContInfo')
const ANIMATION_DURATION_IN_MS = 800

// Отправка заявок с русской локали

testcase('Send request from header modal form of RU-locales- Web Development', () => {
  step('Go to the Web Development page', () => {
    browser
      .setWindowSize(1360, 1024)
      .url(browser.launch_url + '/ru/service/outsourcing-front-end')
  })

  step('Press the button in the header [Нанять нас]', () => {
    browser.click('[data-testid="Header:button.contactUs"]')
  })

  modalContInfo('ru')
})

testcase(
  'Send request via the button in the first block of RU-locales- Web Development',
  () => {
    step('Go to the Web Development page', () => {
      browser
        .setWindowSize(1360, 1024)
        .url(browser.launch_url + '/ru/service/outsourcing-front-end')
    })

    step('Press the button [Оставить заявку] in the first block', () => {
      browser.click('[data-testid="Outsourcing:button:contactUs.hero"]')
    })

    modalContInfo('ru')
  })

testcase(
  'Send request via the button in the «Что мы умеем?» block of RU-locales- Web Development',
  () => {
    step('Go to the Web Development page', () => {
      browser
        .setWindowSize(1360, 1024)
        .url(browser.launch_url + '/ru/service/outsourcing-front-end')
    })

    step('Hide the cookie plate', () => {
      browser
        .click('div.css-tq6n8v.e1foxtb90 > button')
    })

    step('Scroll to «Что мы умеем?» Block', () => {
      browser.moveToElement('[data-testid="Outsourcing:button:contactUs.whatWeDo"]', 1, 1)
        .pause(ANIMATION_DURATION_IN_MS)
    })
    step('Press the button [Оставить заявку]', () => {
      browser.click('[data-testid="Outsourcing:button:contactUs.whatWeDo"]')
    })

    modalContInfo('ru')
  })

testcase('Sending request from the form at the end of the page of RU-locales- Web Development Outsourcing', () => {
  step('Go to the form at the end of the page', () => {
    browser.url(browser.launch_url + '/ru/service/outsourcing-front-end')
  })

  contInfo('ru')
})

// Отправка заявок с английской страницы

testcase('Send request from header modal form of EN-locales- Web Development Outsourcing', () => {
  step('Go to the Web Development page', () => {
    browser
      .setWindowSize(1360, 1024)
      .url(browser.launch_url + '/en/service/outsourcing-front-end')
  })

  step('Press the button in the header [Hire us]', () => {
    browser.click('[data-testid="Header:button.contactUs"]')
  })

  modalContInfo('en')
})

testcase(
  'Send request via the button in the first block of EN-locales- Web Development Outsourcing',
  () => {
    step('Go to the Web Development page', () => {
      browser.setWindowSize(1360, 1024)
      browser.url(browser.launch_url + '/en/service/outsourcing-front-end')
    })

    step('Press the button [Let’s Talk] in the first block', () => {
      browser.click('[data-testid="Outsourcing:button:contactUs.hero"]')
    })

    modalContInfo('en')
  })

testcase(
  'Send request via the button in the «Already Have an Idea?» block of EN-locales- Web Development',
  () => {
    step('Go to the Web Development page', () => {
      browser
        .setWindowSize(1360, 1024)
        .url(browser.launch_url + '/en/service/outsourcing-front-end')
    })

    step('Hide the cookie plate', () => {
      browser
        .click('div.css-tq6n8v.e1foxtb90 > button')
    })

    step('Scroll to «Already Have an Idea?» Block', () => {
      browser.moveToElement('[data-testid="Outsourcing:button:contactUs.whatWeDo"]', 1, 1)
        .pause(ANIMATION_DURATION_IN_MS)
    })
    step('Press the button [Let’s Talk]', () => {
      browser.click('[data-testid="Outsourcing:button:contactUs.whatWeDo"]')
    })

    modalContInfo('en')
  })

testcase('Sending request from the form at the end of the page of EN-locales- Web Development Outsourcing', () => {
  step('Go to the form at the end of the page', () => {
    browser.url(browser.launch_url + '/en/service/outsourcing-front-end')
  })

  contInfo('en')
})
