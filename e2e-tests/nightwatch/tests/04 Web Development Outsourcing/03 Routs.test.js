const { switchLanguage } = require('../actions/switchLanguage')
const ANIMATION_DURATION_IN_MS = 800

// Роуты с английской локали

testcase('Rout to Technologies Page-EN', () => {
  step('Go to the Web Development Outsourcing page', () => {
    browser.url(browser.launch_url + '/en/service/outsourcing-front-end')
      .waitForElementVisible('[data-testid="Main:block"]')
  })

  step('Hide the cookie plate', () => {
    browser
      .click('div.css-tq6n8v.e1foxtb90 > button')
  })

  step('Scroll to Technology Block', () => {
    browser.moveToElement('[data-testid="Outsourcing:link:techstack"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  step('Click on the link «Read About Our Tech Stack»', () => {
    browser.click('[data-testid="Outsourcing:link:techstack"]')
  })

  expected('Technologies page opened', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url + '/en/tech-stack')
  })
})

testcase('Rout to  Processes Page-EN', () => {
  step('Go to the Web Development Outsourcing page', () => {
    browser.url(browser.launch_url + '/en/service/outsourcing-front-end')
      .waitForElementVisible('[data-testid="Main:block"]')
  })

  step('Hide the cookie plate', () => {
    browser
      .click('div.css-tq6n8v.e1foxtb90 > button')
  })

  step('Scroll to Process Block', () => {
    browser.moveToElement('[data-testid="Outsourcing:link:ourProcesses"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  step('Click on the link «Read About Our Process»', () => {
    browser.click('[data-testid="Outsourcing:link:ourProcesses"]')
  })

  expected('Processes page opened', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url + '/en/way-of-work')
  })
})

testcase('Rout to Fintech Page-EN', () => {
  step('Go to the Web Development Outsourcing page', () => {
    browser.url(browser.launch_url + '/en/service/outsourcing-front-end')
      .waitForElementVisible('[data-testid="Main:block"]')
  })

  step('Scroll to Industries Block', () => {
    browser.moveToElement('[data-testid="Industries:link:fintech"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  step('Click on the link', () => {
    browser.click('[data-testid="Industries:link:fintech"]')
  })

  expected('Fintech page opened', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url + '/en/industry/fintech')
  })
})

testcase('Rout to E-Commerce Page-EN', () => {
  step('Go to the Web Development Outsourcing page', () => {
    browser.url(browser.launch_url + '/en/service/outsourcing-front-end')
      .waitForElementVisible('[data-testid="Main:block"]')
  })

  step('Scroll to Industries Block', () => {
    browser.moveToElement('[data-testid="Industries:link:eCommerce"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  step('Click on the link', () => {
    browser.click('[data-testid="Industries:link:eCommerce"]')
  })

  expected('E-Commerce page opened', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url + '/en/industry/ecommerce')
  })
})

testcase('Rout to IT Page-EN', () => {
  step('Go to the Web Development Outsourcing page', () => {
    browser.url(browser.launch_url + '/en/service/outsourcing-front-end')
      .waitForElementVisible('[data-testid="Main:block"]')
  })

  step('Scroll to Industries Block', () => {
    browser.moveToElement('[data-testid="Industries:link:information"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  step('Click on the link', () => {
    browser.click('[data-testid="Industries:link:information"]')
  })

  expected('IT page opened', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url + '/en/industry/information-technology')
  })
})

testcase('Rout to Media & Marketing Page-EN', () => {
  step('Go to the Web Development Outsourcing page', () => {
    browser.url(browser.launch_url + '/en/service/outsourcing-front-end')
      .waitForElementVisible('[data-testid="Main:block"]')
  })

  step('Scroll to Industries Block', () => {
    browser.moveToElement('[data-testid="Industries:link:mediaAndMarketing"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  step('Click on the link', () => {
    browser.click('[data-testid="Industries:link:mediaAndMarketing"]')
  })

  expected('Media & Marketing page opened', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url + '/en/industry/media-and-marketing')
  })
})

testcase('Language Switch-EN', () => {
  step('Go to the Web Development Outsourcing page', () => {
    browser.url(browser.launch_url + '/en/service/outsourcing-front-end')
      .waitForElementVisible('[data-testid="Main:block"]')
  })

  switchLanguage()

  expected('The Russian version of the page has been opened', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url + '/ru/service/outsourcing-front-end')
  })
})

// Роуты с русской локали

testcase('Rout to Technologies Page-RU', () => {
  step('Go to the Web Development Outsourcing page', () => {
    browser.url(browser.launch_url + '/ru/service/outsourcing-front-end')
      .waitForElementVisible('[data-testid="Main:block"]')
  })

  step('Hide the cookie plate', () => {
    browser
      .click('div.css-tq6n8v.e1foxtb90 > button')
  })

  step('Scroll to Technology Block', () => {
    browser.moveToElement('[data-testid="Outsourcing:link:techstack"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  step('Click on the link «Read About Our Tech Stack»', () => {
    browser.click('[data-testid="Outsourcing:link:techstack"]')
  })

  expected('Technologies page opened', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url + '/ru/tech-stack')
  })
})

testcase('Rout to  Processes Page-RU', () => {
  step('Go to the Web Development Outsourcing page', () => {
    browser.url(browser.launch_url + '/ru/service/outsourcing-front-end')
      .waitForElementVisible('[data-testid="Main:block"]')
  })

  step('Hide the cookie plate', () => {
    browser
      .click('div.css-tq6n8v.e1foxtb90 > button')
  })

  step('Scroll to Process Block', () => {
    browser.moveToElement('[data-testid="Outsourcing:link:ourProcess"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  step('Click on the link «Read About Our Process»', () => {
    browser.click('[data-testid="Outsourcing:link:ourProcess"]')
  })

  expected('Processes page opened', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url + '/ru/way-of-work')
  })
})

testcase('Rout to Fintech Page-RU', () => {
  step('Go to the Web Development Outsourcing page', () => {
    browser.url(browser.launch_url + '/ru/service/outsourcing-front-end')
      .waitForElementVisible('[data-testid="Main:block"]')
  })

  step('Scroll to Industries Block', () => {
    browser.moveToElement('[data-testid="Industries:link:fintech"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  step('Click on the link', () => {
    browser.click('[data-testid="Industries:link:fintech"]')
  })

  expected('Fintech page opened', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url + '/ru/industry/fintech')
  })
})

testcase('Rout to E-Commerce Page-RU', () => {
  step('Go to the Web Development Outsourcing page', () => {
    browser.url(browser.launch_url + '/ru/service/outsourcing-front-end')
      .waitForElementVisible('[data-testid="Main:block"]')
  })

  step('Scroll to Industries Block', () => {
    browser.moveToElement('[data-testid="Industries:link:eCommerce"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  step('Click on the link', () => {
    browser.click('[data-testid="Industries:link:eCommerce"]')
  })

  expected('E-Commerce page opened', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url + '/ru/industry/ecommerce')
  })
})

testcase('Rout to IT Page-RU', () => {
  step('Go to the Web Development Outsourcing page', () => {
    browser.url(browser.launch_url + '/ru/service/outsourcing-front-end')
      .waitForElementVisible('[data-testid="Main:block"]')
  })

  step('Scroll to Industries Block', () => {
    browser.moveToElement('[data-testid="Industries:link:information"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  step('Click on the link', () => {
    browser.click('[data-testid="Industries:link:information"]')
  })

  expected('IT page opened', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url + '/ru/industry/information-technology')
  })
})

testcase('Rout to Media & Marketing Page-RU', () => {
  step('Go to the Web Development Outsourcing page', () => {
    browser.url(browser.launch_url + '/ru/service/outsourcing-front-end')
      .waitForElementVisible('[data-testid="Main:block"]')
  })

  step('Scroll to Industries Block', () => {
    browser.moveToElement('[data-testid="Industries:link:mediaAndMarketing"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  step('Click on the link', () => {
    browser.click('[data-testid="Industries:link:mediaAndMarketing"]')
  })

  expected('Media & Marketing page opened', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url + '/ru/industry/media-and-marketing')
  })
})

testcase('Language Switch-RU', () => {
  step('Go to the Web Development Outsourcing page', () => {
    browser.url(browser.launch_url + '/ru/service/outsourcing-front-end')
      .waitForElementVisible('[data-testid="Main:block"]')
  })

  switchLanguage()

  expected('The English version of the page has been opened', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url + '/en/service/outsourcing-front-end')
  })
})
