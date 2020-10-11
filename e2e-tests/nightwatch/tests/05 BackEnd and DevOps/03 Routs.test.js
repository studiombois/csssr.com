const { switchLanguage } = require('../actions/switchLanguage')
const ANIMATION_DURATION_IN_MS = 800

// Роуты с английской локали

testcase('Rout to Process Page-EN', () => {
  step('Go to the MVP page', () => {
    browser.url(browser.launch_url + '/en/service/mvp-development')
      .waitForElementVisible('[data-testid="Main:block"]')
  })

  step('Hide the cookie plate', () => {
    browser
      .click('div.css-tq6n8v.e1foxtb90 > button')
  })

  step('Scroll to Transparency Block', () => {
    browser.moveToElement('[data-testid="MVP:link:advantages.transparency"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  step('Click on the link «Read about how we work»', () => {
    browser.click('[data-testid="MVP:link:advantages.transparency"]')
  })

  expected('Processes page opened', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url + '/en/way-of-work')
  })
})

testcase('Rout to Core Values Page-EN', () => {
  step('Go to the MVP page', () => {
    browser.url(browser.launch_url + '/en/service/mvp-development')
      .waitForElementVisible('[data-testid="Main:block"]')
  })

  step('Hide the cookie plate', () => {
    browser
      .click('div.css-tq6n8v.e1foxtb90 > button')
  })

  step('Scroll to Flexibility Block', () => {
    browser.moveToElement('[data-testid="MVP:link:advantages.flexibility"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  step('Click on the link «Read about our core values»', () => {
    browser.click('[data-testid="MVP:link:advantages.flexibility"]')
  })

  expected('Core Values page opened', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url + '/en/core-values')
  })
})

testcase('Rout to Technologies Page-EN', () => {
  step('Go to the MVP page', () => {
    browser.url(browser.launch_url + '/en/service/mvp-development')
      .waitForElementVisible('[data-testid="Main:block"]')
  })

  step('Hide the cookie plate', () => {
    browser
      .click('div.css-tq6n8v.e1foxtb90 > button')
  })

  step('Scroll to Development Block', () => {
    browser.moveToElement('[data-testid="MVP:link:process.development"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  step('Click on the link «technology stack»', () => {
    browser.click('[data-testid="MVP:link:process.development"]')
  })

  expected('Technologies page opened', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url + '/en/tech-stack')
  })
})

testcase('Language Switch-EN', () => {
  step('Go to the MVP page', () => {
    browser.url(browser.launch_url + '/en/service/mvp-development')
      .waitForElementVisible('[data-testid="Main:block"]')
  })

  switchLanguage()

  expected('The Russian version of the page has been opened', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url + '/ru/service/mvp-development')
  })
})

// Роуты с русской локали

testcase('Rout to Process Page-RU', () => {
  step('Go to the MVP page', () => {
    browser.url(browser.launch_url + '/ru/service/mvp-development')
      .waitForElementVisible('[data-testid="Main:block"]')
  })

  step('Hide the cookie plate', () => {
    browser
      .click('div.css-tq6n8v.e1foxtb90 > button')
  })

  step('Scroll to Transparency Block', () => {
    browser.moveToElement('#main > section.eq9mfaa0.css-wm0kej-Grid.e1kw6gvb0 > div:nth-child(3) > div:nth-child(2) > a', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  step('Click on the link «О том, как мы работаем»', () => {
    browser.click('#main > section.eq9mfaa0.css-wm0kej-Grid.e1kw6gvb0 > div:nth-child(3) > div:nth-child(2) > a')
  })

  expected('Processes page opened', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url + '/ru/way-of-work')
  })
})

testcase('Rout to Core Values Page-RU', () => {
  step('Go to the MVP page', () => {
    browser.url(browser.launch_url + '/ru/service/mvp-development')
      .waitForElementVisible('[data-testid="Main:block"]')
  })

  step('Hide the cookie plate', () => {
    browser
      .click('div.css-tq6n8v.e1foxtb90 > button')
  })

  step('Scroll to Flexibility Block', () => {
    browser.moveToElement('section.eq9mfaa0.css-wm0kej-Grid.e1kw6gvb0 > div:nth-child(2) > div:nth-child(2) > a', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  step('Click on the link «О наших принципах»', () => {
    browser.click('section.eq9mfaa0.css-wm0kej-Grid.e1kw6gvb0 > div:nth-child(2) > div:nth-child(2) > a')
  })

  expected('Core Values page opened', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url + '/ru/core-values')
  })
})


testcase('Language Switch-RU', () => {
  step('Go to the MVP page', () => {
    browser.url(browser.launch_url + '/ru/service/mvp-development')
      .waitForElementVisible('[data-testid="Main:block"]')
  })

  switchLanguage()

  expected('The English version of the page has been opened', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url + '/en/service/mvp-development')
  })
})
