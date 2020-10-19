function switchLanguage() {

  const ANIMATION_DURATION_IN_MS = 800

  step('Hide the cookie plate', () => {
    browser
      .click('div.css-tq6n8v.e1foxtb90 > button')
  })

  step('Scrolling to the footer', () => {
    browser
      .moveToElement('[data-testid="Footer:link.language-link"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  step('Сlicked on the button to change the language.', () => {
    browser
      .click('[data-testid="Footer:link.language-link"]')
  })
}

module.exports = { switchLanguage }
