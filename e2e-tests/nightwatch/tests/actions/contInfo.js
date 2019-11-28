const contInfo = () => {
  step('Заполнить форму', () => {
    browser.setValue('[data-testid="contact:field:callbackForm.name"]', 'Тест')
    browser.setValue(
      '[data-testid="contact:field:callbackForm.phone"]',
      '+7 012 345-67-89'
    )
    browser.setValue(
      '[data-testid="contact:field:callbackForm.email"]',
      'test@csssr.io'
    )
    browser.setValue(
      '[data-testid="contact:field:callbackForm.message"]',
      'Ехал Грека через реку.'
    )
  })
}

module.exports = { contInfo }
