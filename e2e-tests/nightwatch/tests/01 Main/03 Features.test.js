const { makeRequest } = require('../actions/vacancies')
const ANIMATION_DURATION_IN_MS = 800

testcase('CSSSR logo animation', () => {
  step('Go to the Main page', () => {
    browser
      .setWindowSize(1920, 1080)
      .url(browser.launch_url + '/ru')
      .waitForElementPresent('[data-testid="Main:block"]')
  })

  step('Hover the cursor over the contour of logo CSSSR', () => {
    browser
      .moveToElement('article.ekphzss0.css-1t1fbwb-Grid.e1kw6gvb0 > div > div', 10, 10)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('CSSSR logo became totally black', () => {
    browser
      .assert.screenshotElement(
        'article.ekphzss0.css-1t1fbwb-Grid.e1kw6gvb0 > div',
        'Logo CSSSR'
      )
  })
})

testcase('Displaying a photo in the heart on a hover on the word «flag»', () => {
  step('Go to the Main page', () => {
    browser
      .setWindowSize(1920, 1080)
      .url(browser.launch_url + '/ru')
      .waitForElementPresent('[data-testid="Main:block"]')
  })

  step('Scroll to the "About Us" block', () => {
    browser
      .moveToElement('[data-testid="Home:text.elbrus"]', 1, 1)
      .click('div.css-tq6n8v.e1foxtb90 > button')
  })

  step('Hover the cursor over the word «flag» in the statistics block', () => {
    browser
      .moveToElement('[data-testid="Home:text.elbrus"]', 10, 10)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('A photo with the flag of SSSSR appeared in the heart', () => {
    browser
      .assert.screenshotElement(
        '[data-testid="Home:img.elbrus"]',
        'Heart with flag of CSSSR'
      )
  })
})

testcase('Displaying hot vacancies on the Main page', () => {
  let vacancies
  let arrayNameVacancies = []
  let arrayIndex = 0

  step('Go to the Main page', () => {
    browser
      .setWindowSize(1920, 1080)
      .url(browser.launch_url + '/ru')
      .waitForElementPresent('[data-testid="Home:block.services"]')
      .perform(
        async (done) => {
          vacancies = await makeRequest('https://csssr.space/api/public/vacancies/active?locale=ru-ru')
          done()
        }
      )
  })

  step('Scroll to the block with vacancies', () => {
    browser
      .moveToElement('[data-testid="Home:block.vacancies"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
      .click('div.css-tq6n8v.e1foxtb90 > button')
  })

  step('In the block with vacancies only the hot vacancies are displayed', () => {
    browser.perform(function () {
      for (var NUMBER_OF_VACANCIES = 0; NUMBER_OF_VACANCIES < vacancies.length; NUMBER_OF_VACANCIES++) {
        if (vacancies[NUMBER_OF_VACANCIES].isHot === true) {
          arrayNameVacancies[arrayIndex] = vacancies[NUMBER_OF_VACANCIES].name
          arrayIndex++
        }
      }
    })
    browser.perform(function () {
      arrayNameVacancies.forEach(() => {
        browser.assert.containsText(`article.industries.eim5yqb0.css-uoijnx-Grid.e1kw6gvb0 > ul > li:nth-child(${arrayIndex}) > a`,
          arrayNameVacancies[arrayIndex - 1])
        arrayIndex--
      })
    })
  })
})
