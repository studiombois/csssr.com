const { cont_info } = require('../actions/cont_info')
const { cont_info_modal } = require('../actions/cont_info_modal')

testcase('Отправка заявки из модалки', () => {
  step('Перейти к форме связи в конце страницы', () => {
    browser.setWindowSize(1360, 1024)
    browser.url(browser.launch_url + '/ru#services').pause(1000)
  })
  step('Нажать на плавающую кнопку Нанаять нас', () => {
    browser.click('[data-testid="buttonSelect:button.showModal"]')
  })
  cont_info_modal()
  step('Отметить чекбокс с Политикой конфиденциальности', () => {
    browser.click(
      '[data-testid="contact-modal:field:callbackForm.privacyPolicy.checkbox"]'
    )
  })
  step('Нажать кнопку сабмита формы', () => {
    browser.click('[data-testid="contact-modal:button.callbackForm.submit"]')
  })
  expected('Появилось сообщение об успехе', () => {
    browser.waitForElementPresent('[alt="Submit status icon"]')
    browser.expect
      .element('name="contact-modal"')
      .text.to.equal('Успех! Совсем скоро мы с вами свяжемся.')
  })
  step('Закрыть модалку', () => {
    browser.click('[data-testid="modalForm:button:closeModal"]')
  })

  step('Перейти к форме связи в конце страницы', () => {
    browser.url(browser.launch_url + '/ru#hire-us').pause(1000)
  })
  cont_info()
  step('Отметить чекбокс с Политикой конфиденциальности', () => {
    browser.click(
      '[data-testid="contact:field:callbackForm.privacyPolicy.checkbox"]'
    )
  })
  step('Нажать кнопку сабмита формы', () => {
    browser.click('[data-testid="contact:button.callbackForm.submit"]')
  })
  expected('Появилось сообщение об успехе', () => {
    browser.waitForElementPresent('data-testid="contact:block.btnContainer"')
    browser.expect
      .element('data-testid="contact:text.successMessage"')
      .text.to.equal('Успех! Совсем скоро мы с вами свяжемся.')
  })
})
