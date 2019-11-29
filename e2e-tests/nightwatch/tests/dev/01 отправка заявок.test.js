const { contInfo } = require('../actions/contInfo')
const { modalContInfo } = require('../actions/modalContInfo')

testcase('Отправка заявки из модалки', () => {
  step('Перейти к блоку Услуги', () => {
    browser.setWindowSize(1360, 1024)
    browser.url(browser.launch_url + '/ru#services').pause(1000)
  })
  step('Нажать на плавающую кнопку Нанять нас', () => {
    browser.click('[data-testid="buttonSelect:button.showModal"]')
  })
  modalContInfo()
  step('Отметить чекбокс с Политикой конфиденциальности', () => {
    // Здесь могли бы кликать на лейбл, но из-за того что в нём ссылка
    // происходит переход на другую страницу
    browser.execute(function (selector) {
      document.querySelector(selector).click()
    }, ['[data-testid="contact-modal:field:callbackForm.privacyPolicy.checkbox"]'])
  })
  step('Отметить чекбокс с подпиской на рассылку', () => {
    // TODO здесь нужно кликать на лейбл
    browser.click('[for="ConctactModalForm_newsletter"]')
  })
  step('Нажать кнопку сабмита формы', () => {
    browser.click('[data-testid="contact-modal:button.callbackForm.submit"]')
  })
  expected('Появилось сообщение об успехе', () => {
    // TODO здесь нужно добавить селектор
    browser.waitForElementPresent('div > div > p')
    browser.expect
      .element('div > div > p')
      .text.to.contain('Успех!', 'Совсем скоро мы с вами свяжемся.')
    browser.expect.element('img.jsx-4001934077').to.be.present
  })
  step('Закрыть модалку', () => {
    browser.click('[data-testid="modalForm:button:closeModal"]')
  })
})
testcase('Отправка заявки из формы в конце страницы', () => {
  step('Перейти к форме связи в конце страницы', () => {
    browser.url(browser.launch_url + '/ru#hire-us').pause(1000)
  })
  contInfo()
  step('Отметить чекбокс с Политикой конфиденциальности', () => {
    browser.execute(function (selector) {
      document.querySelector(selector).click()
    }, ['[data-testid="contact:field:callbackForm.privacyPolicy.checkbox"]'])
  })
  step('Отправить форму', () => {
    browser.submitForm('form')
  })
  expected('Появилось сообщение об успехе', () => {
    browser.waitForElementPresent('[data-testid="contact:text.successMessage"]')
    browser.expect
      .element('[data-testid="contact:text.successMessage"]')
      .text.to.contain('Успех!', 'Совсем скоро мы с вами свяжемся.')
    browser.expect.element('[data-testid="contact:picture.successMessageImg"]')
      .to.be.present
    browser.expect.element('[data-testid="contact:block.btnContainer"]').to.be
      .present
  })
})
