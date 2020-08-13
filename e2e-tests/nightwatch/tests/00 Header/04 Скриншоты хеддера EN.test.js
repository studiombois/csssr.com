const ANIMATION_DURATION_IN_MS = 500

testcase('Хеддер 1920 EN', () => {
  step('Перейти на главную страницу', () => {
    browser
      .setWindowSize(1920, 1024)
      .url(browser.launch_url + '/en')
      .waitForElementVisible('article.ekphzss0.css-1w4ki1n-Grid.e1kw6gvb0 > div')
  })

  expected('Скрин хеддера на 1920', () => {
    browser.assert.screenshotElement('[data-testid="Header:block"]', 'Хеддер на 1920 EN')
  })

})

testcase('Хеддер на странице вакансий без кнопки связи 1920 EN', () => {
  step('Переходим на страницу вакансий', () => {
    browser
      .setWindowSize(1920, 1024)
      .url(browser.launch_url + '/en-sg/jobs')
  })

  expected(
    'Скрин хеддера на странице вакансий без кнопки связи 1920 EN',
    () => {
      browser.assert.screenshotElement(
        '[data-testid="Header:block"]',
        'Хеддер на странице вакансий без кнопки связи 1920 EN'
      )
    }
  )
})

testcase('Дропдаун SERVICES 1920 EN', () => {
  step('Перейти на главную страницу', () => {
    browser
      .setWindowSize(1920, 1024)
      .url(browser.launch_url + '/en')
      .waitForElementVisible('article.ekphzss0.css-1w4ki1n-Grid.e1kw6gvb0 > div')
  })

  step('Навести курсор на SERVICES в хеддере', () => {
    browser
      .moveToElement('[data-testid="Header:nav:button.services"]', 0, 0)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('Скрин дропдауна УСЛУГИ на 1920', () => {
    browser.assert.screenshotElement(
      '[data-testid="Header:nav.dropdown"]',
      'Дропдаун SERVICES 1920 EN'
    )
  })
})

testcase('Дропдаун INDUSTRIES 1920 EN', () => {
  step('Перейти на главную страницу', () => {
    browser
      .setWindowSize(1920, 1024)
      .url(browser.launch_url + '/en')
      .waitForElementVisible('article.ekphzss0.css-1w4ki1n-Grid.e1kw6gvb0 > div')
  })

  step('Навести курсор на INDUSTRIES в хеддере', () => {
    browser
      .moveToElement('[data-testid="Header:nav:button.industries"]', 0, 0).pause(ANIMATION_DURATION_IN_MS)
  })

  expected('Скрин дропдауна INDUSTRIES на 1920', () => {
    browser.assert.screenshotElement(
      '[data-testid="Header:nav.dropdown"]',
      'Дропдаун INDUSTRIES 1920 EN'
    )
  })
})

testcase('Дропдаун HOW WE WORK 1920 EN', () => {
  step('Перейти на главную страницу', () => {
    browser
      .setWindowSize(1920, 1024).url(browser.launch_url + '/en')
      .waitForElementVisible('article.ekphzss0.css-1w4ki1n-Grid.e1kw6gvb0 > div')
  })

  step('Навести курсор на HOW WE WORK в хеддере', () => {
    browser
      .moveToElement('[data-testid="Header:nav:button.howWeWork"]', 0, 0)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('Скрин дропдауна HOW WE WORK на 1920', () => {
    browser.assert.screenshotElement(
      '[data-testid="Header:nav.dropdown"]',
      'Дропдаун HOW WE WORK 1920 EN'
    )
  })
})

testcase('Дропдаун SOLUTIONS 1920 EN', () => {
  step('Перейти на главную страницу', () => {
    browser
      .setWindowSize(1920, 1024)
      .url(browser.launch_url + '/en')
      .waitForElementVisible('article.ekphzss0.css-1w4ki1n-Grid.e1kw6gvb0 > div')
  })

  step('Навести курсор на SOLUTIONS в хеддере', () => {
    browser
      .moveToElement('[data-testid="Header:nav:button.solutions"]', 0, 0)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('Скрин дропдауна SOLUTIONS на 1920', () => {
    browser.assert.screenshotElement(
      '[data-testid="Header:nav.dropdown"]',
      'Дропдаун SOLUTIONS 1920 EN'
    )
  })
})

testcase('Хеддер 1360 EN', () => {
  step('Перейти на главную страницу', () => {
    browser
      .setWindowSize(1360, 1024)
      .url(browser.launch_url + '/en')
      .waitForElementVisible('article.ekphzss0.css-1w4ki1n-Grid.e1kw6gvb0 > div')
  })

  expected('Скрин хеддера на 1360', () => {
    browser.assert.screenshotElement('[data-testid="Header:block"]', 'Хеддер на 1360 EN')
  })
})

testcase('Хеддер на странице вакансий без кнопки связи 1360 EN', () => {
  step('Перейти на главную страницу', () => {
    browser
      .setWindowSize(1360, 1024)
      .url(browser.launch_url + '/en-sg/jobs')
  })

  expected(
    'Скрин хеддера на странице вакансий без кнопки связи 1360 EN',
    () => {
      browser.assert.screenshotElement(
        '[data-testid="Header:block"]',
        'Хеддер на странице вакансий без кнопки связи 1360 EN'
      )
    }
  )
})

testcase('Дропдаун SERVICES 1360 EN', () => {
  step('Перейти на главную страницу', () => {
    browser
      .setWindowSize(1360, 1024)
      .url(browser.launch_url + '/en')
      .waitForElementVisible('article.ekphzss0.css-1w4ki1n-Grid.e1kw6gvb0 > div')
  })

  step('Навести курсор на SERVICES в хеддере', () => {
    browser
      .moveToElement('[data-testid="Header:nav:button.services"]', 0, 0)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('Скрин дропдауна УСЛУГИ на 1360', () => {
    browser.assert.screenshotElement(
      '[data-testid="Header:nav.dropdown"]',
      'Дропдаун SERVICES 1360 EN'
    )
  })
})

testcase('Дропдаун INDUSTRIES 1360 EN', () => {
  step('Перейти на главную страницу', () => {
    browser
      .setWindowSize(1360, 1024)
      .url(browser.launch_url + '/en')
      .waitForElementVisible('article.ekphzss0.css-1w4ki1n-Grid.e1kw6gvb0 > div')
  })

  step('Навести курсор на INDUSTRIES в хеддере', () => {
    browser
      .moveToElement('[data-testid="Header:nav:button.industries"]', 0, 0)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('Скрин дропдауна INDUSTRIES на 1360', () => {
    browser.assert.screenshotElement(
      '[data-testid="Header:nav.dropdown"]',
      'Дропдаун INDUSTRIES 1360 EN'
    )
  })
})

testcase('Дропдаун HOW WE WORK 1360 EN', () => {
  step('Перейти на главную страницу', () => {
    browser
      .setWindowSize(1360, 1024).url(browser.launch_url + '/en')
      .waitForElementVisible('article.ekphzss0.css-1w4ki1n-Grid.e1kw6gvb0 > div')
  })

  step('Навести курсор на HOW WE WORK в хеддере', () => {
    browser
      .moveToElement('[data-testid="Header:nav:button.howWeWork"]', 0, 0)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('Скрин дропдауна HOW WE WORK на 1360', () => {
    browser.assert.screenshotElement(
      '[data-testid="Header:nav.dropdown"]',
      'Дропдаун HOW WE WORK 1360 EN'
    )
  })
})

testcase('Дропдаун SOLUTIONS 1360 EN', () => {
  step('Перейти на главную страницу', () => {
    browser
      .setWindowSize(1360, 1024).url(browser.launch_url + '/en')
      .waitForElementVisible('article.ekphzss0.css-1w4ki1n-Grid.e1kw6gvb0 > div')
  })

  step('Навести курсор на SOLUTIONS в хеддере', () => {
    browser
      .moveToElement('[data-testid="Header:nav:button.solutions"]', 0, 0)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('Скрин дропдауна SOLUTIONS на 1360', () => {
    browser.assert.screenshotElement(
      '[data-testid="Header:nav.dropdown"]',
      'Дропдаун SOLUTIONS 1360 EN'
    )
  })
})

testcase('Хеддер 1280 EN', () => {
  step('Перейти на главную страницу', () => {
    browser
      .setWindowSize(1280, 1024)
      .url(browser.launch_url + '/en')
      .waitForElementVisible('article.ekphzss0.css-1w4ki1n-Grid.e1kw6gvb0 > div')
  })

  expected('Скрин хеддера на 1280', () => {
    browser.assert.screenshotElement('[data-testid="Header:block"]', 'Хеддер на 1280 EN')
  })
})

testcase('Хеддер на странице вакансий без кнопки связи 1280 EN', () => {
  step('Переходим на страницу вакансий', () => {
    browser
      .setWindowSize(1280, 1024)
      .url(browser.launch_url + '/en-sg/jobs')
      .waitForElementVisible('#main > article > ul')
  })

  expected(
    'Скрин хеддера на странице вакансий без кнопки связи 1280 EN',
    () => {
      browser.assert.screenshotElement(
        '[data-testid="Header:block"]',
        'Хеддер на странице вакансий без кнопки связи 1280 EN'
      )
    }
  )
})

testcase('Дропдаун SERVICES 1280 EN', () => {
  step('Перейти на главную страницу', () => {
    browser
      .setWindowSize(1280, 1024).url(browser.launch_url + '/en')
      .waitForElementVisible('article.ekphzss0.css-1w4ki1n-Grid.e1kw6gvb0 > div')
  })

  step('Навести курсор на SERVICES в хеддере', () => {
    browser
      .moveToElement('[data-testid="Header:nav:button.services"]', 0, 0)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('Скрин дропдауна УСЛУГИ на 1280', () => {
    browser.assert.screenshotElement(
      '[data-testid="Header:nav.dropdown"]',
      'Дропдаун SERVICES 1280 EN'
    )
  })
})

testcase('Дропдаун INDUSTRIES 1280 EN', () => {
  step('Перейти на главную страницу', () => {
    browser
      .setWindowSize(1280, 1024).url(browser.launch_url + '/en')
      .waitForElementVisible('article.ekphzss0.css-1w4ki1n-Grid.e1kw6gvb0 > div')
  })

  step('Навести курсор на INDUSTRIES в хеддере', () => {
    browser
      .moveToElement('[data-testid="Header:nav:button.industries"]', 0, 0)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('Скрин дропдауна INDUSTRIES на 1280', () => {
    browser.assert.screenshotElement(
      '[data-testid="Header:nav.dropdown"]',
      'Дропдаун INDUSTRIES 1280 EN'
    )
  })
})

testcase('Дропдаун HOW WE WORK 1280 EN', () => {
  step('Перейти на главную страницу', () => {
    browser
      .setWindowSize(1280, 1024).url(browser.launch_url + '/en')
      .waitForElementVisible('article.ekphzss0.css-1w4ki1n-Grid.e1kw6gvb0 > div')
  })

  step('Навести курсор на HOW WE WORK в хеддере', () => {
    browser
      .moveToElement('[data-testid="Header:nav:button.howWeWork"]', 0, 0)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('Скрин дропдауна HOW WE WORK на 1280', () => {
    browser.assert.screenshotElement(
      '[data-testid="Header:nav.dropdown"]',
      'Дропдаун HOW WE WORK 1280 EN'
    )
  })
})

testcase('Дропдаун SOLUTIONS 1280 EN', () => {
  step('Перейти на главную страницу', () => {
    browser
      .setWindowSize(1280, 1024)
      .url(browser.launch_url + '/en')
      .waitForElementVisible('article.ekphzss0.css-1w4ki1n-Grid.e1kw6gvb0 > div')
  })

  step('Навести курсор на SOLUTIONS в хеддере', () => {
    browser
      .moveToElement('[data-testid="Header:nav:button.solutions"]', 0, 0)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('Скрин дропдауна SOLUTIONS на 1280', () => {
    browser.assert.screenshotElement(
      '[data-testid="Header:nav.dropdown"]',
      'Дропдаун SOLUTIONS 1280 EN'
    )
  })
})

testcase('Хеддер 1024 EN', () => {
  step('Перейти на главную страницу', () => {
    browser
      .setWindowSize(1024, 1024)
      .url(browser.launch_url + '/en')
      .waitForElementVisible('article.ekphzss0.css-1w4ki1n-Grid.e1kw6gvb0 > div')
  })

  expected('Скрин хеддера на 1024', () => {
    browser.assert.screenshotElement('[data-testid="Header:block"]', 'Хеддер на 1024 EN')
  })
})

testcase('Хеддер на странице вакансий без кнопки связи 1024 EN', () => {
  step('Перейти на главную страницу', () => {
    browser
      .setWindowSize(1024, 1024)
      .url(browser.launch_url + '/en-sg/jobs')
  })

  expected(
    'Скрин хеддера на странице вакансий без кнопки связи 1024 EN',
    () => {
      browser.assert.screenshotElement(
        '[data-testid="Header:block"]',
        'Хеддер на странице вакансий без кнопки связи 1024 EN'
      )
    }
  )
})

testcase('Дропдаун SERVICES 1024 EN', () => {
  step('Перейти на главную страницу', () => {
    browser
      .setWindowSize(1024, 1024)
      .url(browser.launch_url + '/en')
      .waitForElementVisible('article.ekphzss0.css-1w4ki1n-Grid.e1kw6gvb0 > div')
  })

  step('Навести курсор на SERVICES в хеддере', () => {
    browser
      .moveToElement('[data-testid="Header:nav:button.services"]', 0, 0)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('Скрин дропдауна УСЛУГИ на 1024', () => {
    browser.assert.screenshotElement(
      '[data-testid="Header:nav.dropdown"]',
      'Дропдаун SERVICES 1024 EN'
    )
  })
})

testcase('Дропдаун INDUSTRIES 1024 EN', () => {
  step('Перейти на главную страницу', () => {
    browser
      .setWindowSize(1024, 1024)
      .url(browser.launch_url + '/en')
      .waitForElementVisible('article.ekphzss0.css-1w4ki1n-Grid.e1kw6gvb0 > div')
  })

  step('Навести курсор на INDUSTRIES в хеддере', () => {
    browser
      .moveToElement('[data-testid="Header:nav:button.industries"]', 0, 0)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('Скрин дропдауна INDUSTRIES на 1024', () => {
    browser.assert.screenshotElement(
      '[data-testid="Header:nav.dropdown"]',
      'Дропдаун INDUSTRIES 1024 EN'
    )
  })
})

testcase('Дропдаун HOW WE WORK 1024 EN', () => {
  step('Перейти на главную страницу', () => {
    browser
      .setWindowSize(1024, 1024)
      .url(browser.launch_url + '/en')
      .waitForElementVisible('article.ekphzss0.css-1w4ki1n-Grid.e1kw6gvb0 > div')
  })

  step('Навести курсор на HOW WE WORK в хеддере', () => {
    browser
      .moveToElement('[data-testid="Header:nav:button.howWeWork"]', 0, 0)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('Скрин дропдауна HOW WE WORK на 1024', () => {
    browser.assert.screenshotElement(
      '[data-testid="Header:nav.dropdown"]',
      'Дропдаун HOW WE WORK 1024 EN'
    )
  })
})

testcase('Дропдаун SOLUTIONS 1024 EN', () => {
  step('Перейти на главную страницу', () => {
    browser
      .setWindowSize(1024, 1024)
      .url(browser.launch_url + '/en')
      .waitForElementVisible('article.ekphzss0.css-1w4ki1n-Grid.e1kw6gvb0 > div')
  })

  step('Навести курсор на SOLUTIONS в хеддере', () => {
    browser
      .moveToElement('[data-testid="Header:nav:button.solutions"]', 0, 0)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('Скрин дропдауна SOLUTIONS на 1024', () => {
    browser.assert.screenshotElement(
      '[data-testid="Header:nav.dropdown"]',
      'Дропдаун SOLUTIONS 1024 EN'
    )
  })
})
