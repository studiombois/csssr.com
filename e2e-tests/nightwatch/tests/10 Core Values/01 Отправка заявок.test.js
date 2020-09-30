const { contInfo } = require('../actions/contInfo')
const { modalContInfo } = require('../actions/modalContInfo')

// Отправка заявок с русской локали

testcase('Отправка заявки из модалки в хеддере RU-локали', () => {
  step('Открыть главную страницу', () => {
    browser
      .setWindowSize(1360, 1024)
      .url(browser.launch_url + '/ru/core-values')
  })

  step('Нажать на кнопку в хеддере [Нанять нас]', () => {
    browser.click('[data-testid="Header:button.contactUs"]')
  })

  modalContInfo()

  step('Отметить чекбокс с подпиской на рассылку', () => {
    // TODO здесь нужно кликать на лейбл
    browser.click('[data-testid="contact-modal:field:callbackForm.newsletter.checkbox"]')
  })

  step('Нажать кнопку сабмита формы', () => {
    browser.click('[data-testid="contact-modal:button.callbackForm.submit"]')
  })

  expected('Появилось сообщение об успехе', () => {
    // TODO здесь нужно добавить селектор
    browser
      .waitForElementPresent('[data-testid="ContactModal:text.success"]')
      .expect
      .element('[data-testid="ContactModal:text.success"]')
      .text.to.equal('Успех!' + '\n' + 'Совсем скоро мы с вами свяжемся.')
    browser.expect.element(
      '[data-testid="ContactModal:img.success"]'
    ).to.be.present
  })

  step('Закрыть модалку', () => {
    browser.click('[data-testid="modalForm:button:closeModal"]')
  })
})

testcase('Отправка заявки из формы в конце страницы RU-локали', () => {
  step('Перейти к форме связи в конце страницы', () => {
    browser.url(browser.launch_url + '/ru/core-values')
  })

  contInfo()

  step('Отправить форму', () => {
    browser.submitForm('form')
  })

  expected('Появилось сообщение об успехе', () => {
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

// Отправка заявок с английской страницы

testcase('Отправка заявки из модалки в хеддере EN-локали', () => {
  step('Открыть главную страницу', () => {
    browser
      .setWindowSize(1360, 1024)
      .url(browser.launch_url + '/en/core-values')
  })

  step('Нажать на кнопку в хеддере [Contuct us]', () => {
    browser.click('[data-testid="Header:button.contactUs"]')
  })

  modalContInfo()

  step('Отметить чекбокс с подпиской на рассылку', () => {
    // TODO здесь нужно кликать на лейбл
    browser.click('[data-testid="contact-modal:field:callbackForm.newsletter.checkbox"]')
  })

  step('Нажать кнопку сабмита формы', () => {
    browser.click('[data-testid="contact-modal:button.callbackForm.submit"]')
  })

  expected('Появилось сообщение об успехе', () => {
    // TODO здесь нужно добавить селектор
    browser
      .waitForElementPresent('[data-testid="ContactModal:text.success"]')
      .expect
      .element('[data-testid="ContactModal:text.success"]')
      .text.to.equal('Success!' + '\n' + 'We will contact you soon')
    browser.expect.element(
      '[data-testid="ContactModal:img.success"]'
    ).to.be.present
  })

  step('Закрыть модалку', () => {
    browser.click('[data-testid="modalForm:button:closeModal"]')
  })
})

testcase('Отправка заявки из формы в конце страницы EN-локали', () => {
  step('Перейти к форме связи в конце страницы', () => {
    browser.url(browser.launch_url + '/en/core-values')
  })

  contInfo()

    step('Отправить форму', () => {
    browser.submitForm('form')
  })

  expected('Появилось сообщение об успехе', () => {
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
