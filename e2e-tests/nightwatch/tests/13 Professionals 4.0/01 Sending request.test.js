const { contInfo } = require('../actions/contInfo')
const { modalContInfo } = require('../actions/modalContInfo')

// Отправка заявок с русской локали

testcase('Send request from header modal form of RU-locales', () => {
  step('Go to Professionals 4.0 page', () => {
    browser
      .setWindowSize(1360, 1024)
      .url(browser.launch_url + '/ru/project/gazprom-neft-professionals-4-0')
  })

  step('Press the button in the header [Нанять нас]', () => {
    browser.click('[data-testid="Header:button.contactUs"]')
  })

  modalContInfo()

  step('Mark subscription checkbox', () => {
    browser.click('[data-testid="contact-modal:field:callbackForm.newsletter.checkbox"]')
  })

  step('Click the submit form button', () => {
    browser.click('[data-testid="contact-modal:button.callbackForm.submit"]')
  })

  expected('The message of success has appeared', () => {
    browser
      .waitForElementPresent('[data-testid="ContactModal:text.success"]')
      .expect
      .element('[data-testid="ContactModal:text.success"]')
      .text.to.equal('Успех!' + '\n' + 'Совсем скоро мы с вами свяжемся.')
    browser.expect.element(
      '[data-testid="ContactModal:img.success"]'
    ).to.be.present
  })

  step('Close the modal form', () => {
    browser.click('[data-testid="modalForm:button:closeModal"]')
  })
})

testcase('Sending request from the form at the end of the page of RU-locales', () => {
  step('Go to the form at the end of the page', () => {
    browser.url(browser.launch_url + '/ru/project/gazprom-neft-professionals-4-0')
  })

  contInfo()

  step('Send the form', () => {
    browser.submitForm('form')
  })

  expected('The message of success has appeared', () => {
    browser
      .waitForElementPresent('[data-testid="contact:text.status"]')
      .expect
      .element('[data-testid="contact:text.status"]')
      .text.to.equal('Успех!' + '\n' + 'Совсем скоро мы с вами свяжемся.')
    browser.expect.element('[data-testid="contact:button.callbackForm.submit"]')
      .to.be.present
    browser.expect.element('[data-testid="contact:picture.successMessageImg"]')
      .to.be.present
  })
})

// Отправка заявок с английской локали

testcase('Send request from header modal form of EN-locales', () => {
  step('Go to Professionals 4.0 page', () => {
    browser
      .setWindowSize(1360, 1024)
      .url(browser.launch_url + '/en/project/gazprom-neft-professionals-4-0')
  })

  step('Press the button in the header [Hire us]', () => {
    browser.click('[data-testid="Header:button.contactUs"]')
  })

  modalContInfo()

  step('Mark subscription checkbox', () => {
    browser.click('[data-testid="contact-modal:field:callbackForm.newsletter.checkbox"]')
  })

  step('Click the submit form button', () => {
    browser.click('[data-testid="contact-modal:button.callbackForm.submit"]')
  })

  expected('The message of success has appeared', () => {
    browser
      .waitForElementPresent('[data-testid="ContactModal:text.success"]')
      .expect
      .element('[data-testid="ContactModal:text.success"]')
      .text.to.equal('Success!' + '\n' + 'We will contact you soon')
    browser.expect.element(
      '[data-testid="ContactModal:img.success"]'
    ).to.be.present
  })

  step('Close the modal form', () => {
    browser.click('[data-testid="modalForm:button:closeModal"]')
  })
})

testcase('Sending request from the form at the end of the page of EN-locales', () => {
  step('Go to the form at the end of the page', () => {
    browser.url(browser.launch_url + '/en/project/gazprom-neft-professionals-4-0')
  })

  contInfo()

  step('Send the form', () => {
    browser.submitForm('form')
  })

  expected('The message of success has appeared', () => {
    browser
      .waitForElementPresent('[data-testid="contact:text.status"]')
      .expect
      .element('[data-testid="contact:text.status"]')
      .text.to.equal('Success!' + '\n' + 'We will contact you soon')
    browser.expect.element('[data-testid="contact:button.callbackForm.submit"]')
      .to.be.present
    browser.expect.element('[data-testid="contact:picture.successMessageImg"]')
      .to.be.present
  })
})
