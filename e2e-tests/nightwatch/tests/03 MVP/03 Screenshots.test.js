// Скриншоты целой страницы для английской локали MVP вкл

testcase('MVP-on 1920 En', () => {
  step('Go to MVP page', () => {
    browser
      .setWindowSize(1920, 10000)
      .url(browser.launch_url + '/en/service/mvp-development')
      .waitForElementPresent('footer')
  })

  expected('Screen of the whole page of MVP-on - 1920 EN', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'MVP-on 1920 EN',
      { hideSelectors: ['[data-testid="Header:block"]'] })
  })
})

testcase('MVP-on 1360 En', () => {
  step('Go to MVP page', () => {
    browser
      .setWindowSize(1360, 8600)
      .url(browser.launch_url + '/en/service/mvp-development')
      .waitForElementPresent('footer')
  })

  expected('Screen of the whole page of MVP-on - 1360 EN', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'MVP-on 1360 EN',
      { hideSelectors: ['[data-testid="Header:block"]'] })
  })
})

testcase('MVP-on 1280 En', () => {
  step('Go to MVP page', () => {
    browser
      .setWindowSize(1280, 9300)
      .url(browser.launch_url + '/en/service/mvp-development')
      .waitForElementPresent('footer')
  })

  expected('Screen of the whole page of MVP-on - 1280 EN', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'MVP-on 1280 EN',
      { hideSelectors: ['[data-testid="Header:block"]'] })
  })
})

testcase('MVP-on 1024 En', () => {
  step('Go to MVP page', () => {
    browser
      .setWindowSize(1024, 6700)
      .url(browser.launch_url + '/en/service/mvp-development')
      .waitForElementPresent('footer')
  })

  expected('Screen of the whole page of MVP-on - 1024 EN', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'MVP-on 1024 EN',
      { hideSelectors: ['[data-testid="Header:block"]'] })
  })
})

testcase('MVP-on 360 En', () => {
  step('Go to MVP page', () => {
    browser
      .setWindowSize(360, 7000)
      .url(browser.launch_url + '/en/service/mvp-development')
      .waitForElementPresent('footer')
  })

  expected('Screen of the whole page of MVP-on - 360 EN', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'MVP-on 360 EN',
      { hideSelectors: ['[data-testid="Header:block"]'] })
  })
})

// Скриншоты целой страницы для английской локали MVP вкл

testcase('MVP-on 1920 RU', () => {
  step('Go to MVP page', () => {
    browser
      .setWindowSize(1920, 10000)
      .url(browser.launch_url + '/ru/service/mvp-development')
      .waitForElementPresent('footer')
  })

  expected('Screen of the whole page of MVP-on - 1920 RU', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'MVP-on 1920 RU',
      { hideSelectors: ['[data-testid="Header:block"]'] })
  })
})

testcase('MVP-on 1360 RU', () => {
  step('Go to MVP page', () => {
    browser
      .setWindowSize(1360, 8500)
      .url(browser.launch_url + '/ru/service/mvp-development')
      .waitForElementPresent('footer')
  })

  expected('Screen of the whole page of MVP-on - 1360 RU', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'MVP-on 1360 RU',
      { hideSelectors: ['[data-testid="Header:block"]'] })
  })
})

testcase('MVP-on 1280 RU', () => {
  step('Go to MVP page', () => {
    browser
      .setWindowSize(1280, 8500)
      .url(browser.launch_url + '/ru/service/mvp-development')
      .waitForElementPresent('footer')
  })

  expected('Screen of the whole page of MVP-on - 1280 RU', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'MVP-on 1280 RU',
      { hideSelectors: ['[data-testid="Header:block"]'] })
  })
})

testcase('MVP-on 1024 RU', () => {
  step('Go to MVP page', () => {
    browser
      .setWindowSize(1024, 6700)
      .url(browser.launch_url + '/ru/service/mvp-development')
      .waitForElementPresent('footer')
  })

  expected('Screen of the whole page of MVP-on - 1024 RU', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'MVP-on 1024 RU',
      { hideSelectors: ['[data-testid="Header:block"]'] })
  })
})

testcase('MVP-on 360 RU', () => {
  step('Go to MVP page', () => {
    browser
      .setWindowSize(360, 7000)
      .url(browser.launch_url + '/ru/service/mvp-development')
      .waitForElementPresent('footer')
  })

  expected('Screen of the whole page of MVP-on - 360 RU', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'MVP-on 360 RU',
      { hideSelectors: ['[data-testid="Header:block"]'] })
  })
})


// Скриншоты целой страницы для английской локали MVP выкл

testcase('MVP-off 1920 En', () => {
  step('Go to MVP page', () => {
    browser
      .setWindowSize(1920, 10000)
      .url(browser.launch_url + '/en/service/mvp-development')
      .waitForElementPresent('footer')
  })

  step('Switch offClicked on the switch-off toggle ', () => {
    browser
      .click('[data-testid="MVP:button:aboutMvp.off"]')
  })

  expected('Screen of the whole page of MVP-off - 1920 EN', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'MVP-off 1920 EN',
      { hideSelectors: ['[data-testid="Header:block"]'] })
  })
})

testcase('MVP-off 1360 En', () => {
  step('Go to MVP page', () => {
    browser
      .setWindowSize(1360, 8600)
      .url(browser.launch_url + '/en/service/mvp-development')
      .waitForElementPresent('footer')
  })

  step('Switch offClicked on the switch-off toggle ', () => {
    browser
      .click('[data-testid="MVP:button:aboutMvp.off"]')
  })

  expected('Screen of the whole page of MVP-off - 1360 EN', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'MVP-off 1360 EN',
      { hideSelectors: ['[data-testid="Header:block"]'] })
  })
})

testcase('MVP-off 1280 En', () => {
  step('Go to MVP page', () => {
    browser
      .setWindowSize(1280, 9300)
      .url(browser.launch_url + '/en/service/mvp-development')
      .waitForElementPresent('footer')
  })

  step('Switch offClicked on the switch-off toggle ', () => {
    browser
      .click('[data-testid="MVP:button:aboutMvp.off"]')
  })

  expected('Screen of the whole page of MVP-off - 1280 EN', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'MVP-off 1280 EN',
      { hideSelectors: ['[data-testid="Header:block"]'] })
  })
})

testcase('MVP-off 1024 En', () => {
  step('Go to MVP page', () => {
    browser
      .setWindowSize(1024, 6700)
      .url(browser.launch_url + '/en/service/mvp-development')
      .waitForElementPresent('footer')
  })

  step('Switch offClicked on the switch-off toggle ', () => {
    browser
      .click('[data-testid="MVP:button:aboutMvp.off"]')
  })

  expected('Screen of the whole page of MVP-off - 1024 EN', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'MVP-off 1024 EN',
      { hideSelectors: ['[data-testid="Header:block"]'] })
  })
})

testcase('MVP-off 360 En', () => {
  step('Go to MVP page', () => {
    browser
      .setWindowSize(360, 7000)
      .url(browser.launch_url + '/en/service/mvp-development')
      .waitForElementPresent('footer')
  })

  step('Switch offClicked on the switch-off toggle ', () => {
    browser
      .click('[data-testid="MVP:button:aboutMvp.off"]')
  })

  expected('Screen of the whole page of MVP-off - 360 EN', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'MVP-off 360 EN',
      { hideSelectors: ['[data-testid="Header:block"]'] })
  })
})

// Скриншоты целой страницы для российской локали MVP выкл

testcase('MVP-off 1920 RU', () => {
  step('Go to MVP page', () => {
    browser
      .setWindowSize(1920, 10000)
      .url(browser.launch_url + '/ru/service/mvp-development')
      .waitForElementPresent('footer')
  })

  step('Switch offClicked on the switch-off toggle ', () => {
    browser
      .click('[data-testid="MVP:button:aboutMvp.off"]')
  })

  expected('Screen of the whole page of MVP-off - 1920 RU', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'MVP-off 1920 RU',
      { hideSelectors: ['[data-testid="Header:block"]'] })
  })
})

testcase('MVP-off 1360 RU', () => {
  step('Go to MVP page', () => {
    browser
      .setWindowSize(1360, 8600)
      .url(browser.launch_url + '/ru/service/mvp-development')
      .waitForElementPresent('footer')
  })

  step('Switch offClicked on the switch-off toggle ', () => {
    browser
      .click('[data-testid="MVP:button:aboutMvp.off"]')
  })

  expected('Screen of the whole page of MVP-off - 1360 RU', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'MVP-off 1360 RU',
      { hideSelectors: ['[data-testid="Header:block"]'] })
  })
})

testcase('MVP-off 1280 RU', () => {
  step('Go to MVP page', () => {
    browser
      .setWindowSize(1280, 9300)
      .url(browser.launch_url + '/ru/service/mvp-development')
      .waitForElementPresent('footer')
  })

  step('Switch offClicked on the switch-off toggle ', () => {
    browser
      .click('[data-testid="MVP:button:aboutMvp.off"]')
  })

  expected('Screen of the whole page of MVP-off - 1280 RU', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'MVP-off 1280 RU',
      { hideSelectors: ['[data-testid="Header:block"]'] })
  })
})

testcase('MVP-off 1024 RU', () => {
  step('Go to MVP page', () => {
    browser
      .setWindowSize(1024, 6700)
      .url(browser.launch_url + '/ru/service/mvp-development')
      .waitForElementPresent('footer')
  })

  step('Switch offClicked on the switch-off toggle ', () => {
    browser
      .click('[data-testid="MVP:button:aboutMvp.off"]')
  })

  expected('Screen of the whole page of MVP-off - 1024 RU', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'MVP-off 1024 RU',
      { hideSelectors: ['[data-testid="Header:block"]'] })
  })
})

testcase('MVP-off 360 RU', () => {
  step('Go to MVP page', () => {
    browser
      .setWindowSize(360, 7000)
      .url(browser.launch_url + '/ru/service/mvp-development')
      .waitForElementPresent('footer')
  })

  step('Switch offClicked on the switch-off toggle ', () => {
    browser
      .click('[data-testid="MVP:button:aboutMvp.off"]')
  })

  expected('Screen of the whole page of MVP-off - 360 RU', () => {
    browser.assert.screenshotElement('[data-testid="Main:block"]', 'MVP-off 360 RU',
      { hideSelectors: ['[data-testid="Header:block"]'] })
  })
})
