const modalContInfo = () => {
  step('Заполнить форму', () => {
    browser.setValue(
      '[data-testid="contact-modal:field:callbackForm.name"]',
      'Тест'
    )
    browser.setValue(
      '[data-testid="contact-modal:field:callbackForm.phone"]',
      '+7 012 345-67-89'
    )
    browser.setValue(
      '[data-testid="contact-modal:field:callbackForm.email"]',
      'test@csssr.io'
    )
    browser.setValue(
      '[data-testid="contact-modal:field:callbackForm.message"]',
      'Это тестовая заявка, отправленная из формы связи в модалке.'
    )
  })
}

module.exports = { modalContInfo }
