const { contInfo } = require('../actions/contInfo')
const { modalContInfo } = require('../actions/modalContInfo')

// Отправка заявок с русской локали

testcase('Отправка заявки из модалки в хеддере RU локали', () => {
  step('Открыть главную страницу', () => {
    browser
      .setWindowSize(1360, 1024)
      .url(browser.launch_url + '/ru')
  })

  step('Нажать на кнопку в хеддере [Нанять нас]', () => {
    browser
      .waitForElementVisible('[data-testid="Header:button.contactUs"]')
      .click('[data-testid="Header:button.contactUs"]')
  })

  modalContInfo()

  step('Отметить чекбокс с Политикой конфиденциальности', () => {
    // Здесь могли бы кликать на лейбл, но из-за того что в нём ссылка
    // происходит переход на другую страницу
    browser.execute(
      function (selector) {
        document.querySelector(selector).click()
      },
      [
        '[data-testid="contact-modal:field:callbackForm.privacyPolicy.checkbox"]',
      ]
    )
  })

  step('Отметить чекбокс с подпиской на рассылку', () => {
    // TODO здесь нужно кликать на лейбл
    browser.click('[for="ConctactModalForm_newsletter"]')
  })

  step('Нажать кнопку сабмита формы', () => {
    browser.click('[testid="contact-modal:button.callbackForm.submit"]')
  })

  expected('Появилось сообщение об успехе', () => {
    // TODO здесь нужно добавить селектор
    browser
      .waitForElementPresent('div > div > p')
      .expect
      .element('[class="font_p16-regular status_text"]')
      .text.to.equal('Успех!' + '\n' + 'Совсем скоро мы с вами свяжемся.')
    browser.expect.element(
      '[src="/_next/static/icons/button_success-3019b6f7.svg"]'
    ).to.be.present
  })

  step('Закрыть модалку', () => {
    browser.click('[data-testid="modalForm:button:closeModal"]')
  })

  expected('Модалка закрылась', () => {
    browser.waitForElementNotPresent('[name="contact-modal"]')
  })
})

testcase('Отправка заявки из формы в конце страницы RU-локали', () => {
  step('Перейти к форме связи в конце страницы', () => {
    browser.url(browser.launch_url + '/ru')
  })

  contInfo()

  step('Отметить чекбокс с Политикой конфиденциальности', () => {
    browser.execute(
      function (selector) {
        document.querySelector(selector).click()
      },
      ['[data-testid="contact:field:callbackForm.privacyPolicy.checkbox"]']
    )
  })

  step('Отправить форму', () => {
    browser.submitForm('form')
  })

  expected('Появилось сообщение об успехе', () => {
    browser
      .waitForElementPresent('[data-testid="contact:text.successMessage"]')
      .expect.element('[data-testid="contact:text.successMessage"]')
      .text.to.equal('Успех!' + '\n' + 'Совсем скоро мы с вами свяжемся.')
    browser.expect.element('[data-testid="contact:picture.successMessageImg"]').to.be.present
  })
})

// Отправка заявок с английской локали

testcase('Отправка заявки из модалки в хеддере EN-локали', () => {
  step('Открыть главную страницу', () => {
    browser
      .setWindowSize(1360, 1024)
      .url(browser.launch_url + '/en')
  })

  step('Нажать на кнопку в хеддере [Contuct us]', () => {
    browser
      .waitForElementVisible('[data-testid="Header:button.contactUs"]')
      .click('[data-testid="Header:button.contactUs"]')
  })

  modalContInfo()

  step('Отметить чекбокс с Политикой конфиденциальности', () => {
    // Здесь могли бы кликать на лейбл, но из-за того что в нём ссылка
    // происходит переход на другую страницу
    browser.execute(
      function (selector) {
        document.querySelector(selector).click()
      },
      [
        '[data-testid="contact-modal:field:callbackForm.privacyPolicy.checkbox"]',
      ]
    )
  })

  step('Отметить чекбокс с подпиской на рассылку', () => {
    // TODO здесь нужно кликать на лейбл
    browser
      .waitForElementVisible('[for="ConctactModalForm_newsletter"]')
      .click('[for="ConctactModalForm_newsletter"]')
  })

  step('Нажать кнопку сабмита формы', () => {
    browser
      .waitForElementVisible('[testid="contact-modal:button.callbackForm.submit"]')
      .click('[testid="contact-modal:button.callbackForm.submit"]')
  })

  expected('Появилось сообщение об успехе', () => {
    // TODO здесь нужно добавить селектор
    browser
      .waitForElementPresent('div > div > p')
      .expect
      .element('[class="font_p16-regular status_text"]')
      .text.to.equal('Success!' + '\n' + 'We will contact you soon')
    browser.expect.element(
      '[src="/_next/static/icons/button_success-3019b6f7.svg"]'
    ).to.be.present
  })

  step('Закрыть модалку', () => {
    browser
      .waitForElementVisible('[data-testid="modalForm:button:closeModal"]')
      .click('[data-testid="modalForm:button:closeModal"]')
  })

  expected('Модалка закрылась', () => {
    browser.waitForElementNotPresent('div.css-1ovvs51.ehl8gh40 > div:nth-child(3) > div > div')
  })
})

testcase('Отправка заявки из формы в конце страницы EN-локали', () => {
  step('Перейти к форме связи в конце страницы', () => {
    browser.url(browser.launch_url + '/en')
  })

  contInfo()

  step('Отметить чекбокс с Политикой конфиденциальности', () => {
    browser.execute(
      function (selector) {
        document.querySelector(selector).click()
      },
      ['[data-testid="contact:field:callbackForm.privacyPolicy.checkbox"]']
    )
  })

  step('Отправить форму', () => {
    browser
      .click('div.css-1ci3dja.e1foxtb90 > button')
      .click('div.button > div')
  })

    expected('Появилось сообщение об успехе', () => {
      browser
        .waitForElementPresent('[data-testid="contact:text.successMessage"]')
        .expect
        .element('[data-testid="contact:text.successMessage"]')
        .text.to.equal('Success!' + '\n' + 'We will contact you soon')
      browser.expect.element('[data-testid="contact:picture.successMessageImg"]')
        .to.be.present
    })
  })
