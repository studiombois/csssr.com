const ANIMATION_DURATION_IN_MS = 500

testcase('Хеддер 1920 RU', () => {
  step('Перейти на главную страницу', () => {
    browser
      .setWindowSize(1920, 1024)
      .url(browser.launch_url + '/ru')
      .waitForElementVisible('article.ekphzss0.css-1w4ki1n-Grid.e1kw6gvb0 > div > div')
  })

  expected('Скрин хеддера на 1920', () => {
    browser.assert.screenshotElement('[data-testid="Header:block"]', 'Хеддер на 1920 RU')
  })
})

testcase('Хеддер на странице вакансий без кнопки связи 1920 RU', () => {
  step('Переходим на страницу вакансии', () => {
    browser
      .setWindowSize(1920, 1024)
      .url(browser.launch_url + '/ru-ru/jobs')
      .waitForElementVisible('#main > article > ul')
  })

  expected('Скрин хеддера на странице вакансий без кнопки связи 1920', () => {
    browser.assert.screenshotElement(
      '[data-testid="Header:block"]',
      'Хеддер на странице вакансий без кнопки связи 1920 RU'
    )
  })
})

testcase('Дропдаун Услуги 1920 RU', () => {
  step('Перейти на главную страницу', () => {
    browser
      .setWindowSize(1920, 1024)
      .url(browser.launch_url + '/ru')
      .waitForElementVisible('article.ekphzss0.css-1w4ki1n-Grid.e1kw6gvb0 > div > div')
  })

  step('Навести курсор на УСЛУГИ в хеддере', () => {
    browser
      .moveToElement('[data-testid="Header:nav:button.services"]', 0, 0)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('Скрин дропдауна УСЛУГИ на 1920', () => {
    browser.assert.screenshotElement(
      '[data-testid="Header:nav.dropdown"]',
      'Дропдаун Услуги 1920 RU'
    )
  })
})

testcase('Дропдаун ИНДУСТРИИ 1920 RU', () => {
  step('Перейти на главную страницу', () => {
    browser
      .setWindowSize(1920, 1024)
      .url(browser.launch_url + '/ru')
      .waitForElementVisible('article.ekphzss0.css-1w4ki1n-Grid.e1kw6gvb0 > div > div')
  })

  step('Навести курсор на ИНДУСТРИИ в хеддере', () => {
    browser
      .moveToElement('[data-testid="Header:nav:button.industries"]', 0, 0)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('Скрин дропдауна ИНДУСТРИИ на 1920', () => {
    browser.assert.screenshotElement(
      '[data-testid="Header:nav.dropdown"]',
      'Дропдаун ИНДУСТРИИ 1920 RU'
    )
  })
})

testcase('Дропдаун КАК МЫ РАБОТАЕМ 1920 RU', () => {
  step('Перейти на главную страницу', () => {
    browser
      .setWindowSize(1920, 1024)
      .url(browser.launch_url + '/ru')
      .waitForElementVisible('article.ekphzss0.css-1w4ki1n-Grid.e1kw6gvb0 > div > div')
  })

  step('Навести курсор на КАК МЫ РАБОТАЕМ в хеддере', () => {
    browser
      .moveToElement('[data-testid="Header:nav:button.howWeWork"]', 0, 0)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('Скрин дропдауна КАК МЫ РАБОТАЕМ на 1920', () => {
    browser.assert.screenshotElement(
      '[data-testid="Header:nav.dropdown"]',
      'Дропдаун КАК МЫ РАБОТАЕМ 1920 RU'
    )
  })
})

testcase('Хеддер 1360 RU', () => {
  step('Перейти на главную страницу', () => {
    browser
      .setWindowSize(1360, 1024)
      .url(browser.launch_url + '/ru')
      .waitForElementVisible('article.ekphzss0.css-1w4ki1n-Grid.e1kw6gvb0 > div > div')
  })

  expected('Скрин хеддера на 1360', () => {
    browser.assert.screenshotElement('[data-testid="Header:block"]', 'Хеддер на 1360 RU')
  })
})

testcase('Хеддер на странице вакансий без кнопки связи 1360 RU', () => {
  step('переходим на страницу вакансии', () => {
    browser
      .setWindowSize(1360, 1024)
      .url(browser.launch_url + '/ru-ru/jobs')
      .waitForElementVisible('#main > article > ul')
  })

  expected('Скрин хеддера на странице вакансий без кнопки связи 1360', () => {
    browser.assert.screenshotElement(
      '[data-testid="Header:block"]',
      'Хеддер на странице вакансий без кнопки связи 1360 RU'
    )
  })
})

testcase('Дропдаун Услуги 1360 RU', () => {
  step('Перейти на главную страницу', () => {
    browser
      .setWindowSize(1360, 1024)
      .url(browser.launch_url + '/ru')
      .waitForElementVisible('article.ekphzss0.css-1w4ki1n-Grid.e1kw6gvb0 > div > div')
  })

  step('Навести курсор на УСЛУГИ в хеддере', () => {
    browser
      .moveToElement('[data-testid="Header:nav:button.services"]', 0, 0)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('Скрин дропдауна УСЛУГИ на 1360', () => {
    browser.assert.screenshotElement(
      '[data-testid="Header:nav.dropdown"]',
      'Дропдаун Услуги 1360 RU'
    )
  })
})

testcase('Дропдаун ИНДУСТРИИ 1360 RU', () => {
  step('Перейти на главную страницу', () => {
    browser
      .setWindowSize(1360, 1024)
      .url(browser.launch_url + '/ru')
      .waitForElementVisible('article.ekphzss0.css-1w4ki1n-Grid.e1kw6gvb0 > div > div')
  })

  step('Навести курсор на ИНДУСТРИИ в хеддере', () => {
    browser
      .moveToElement('[data-testid="Header:nav:button.industries"]', 0, 0)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('Скрин дропдауна ИНДУСТРИИ на 1360', () => {
    browser.assert.screenshotElement(
      '[data-testid="Header:nav.dropdown"]',
      'Дропдаун ИНДУСТРИИ 1360 RU'
    )
  })
})

testcase('Дропдаун КАК МЫ РАБОТАЕМ 1360 RU', () => {
  step('Перейти на главную страницу', () => {
    browser
      .setWindowSize(1360, 1024)
      .url(browser.launch_url + '/ru')
      .waitForElementVisible('article.ekphzss0.css-1w4ki1n-Grid.e1kw6gvb0 > div > div')
  })

  step('Навести курсор на ИНДУСТРИИ в хеддере', () => {
    browser
      .moveToElement('[data-testid="Header:nav:button.howWeWork"]', 0, 0)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('Скрин дропдауна КАК МЫ РАБОТАЕМ на 1360', () => {
    browser.assert.screenshotElement(
      '[data-testid="Header:nav.dropdown"]',
      'Дропдаун КАК МЫ РАБОТАЕМ 1360 RU'
    )
  })
})

testcase('Хеддер 1280 RU', () => {
  step('Перейти на главную страницу', () => {
    browser
      .setWindowSize(1280, 1024)
      .url(browser.launch_url + '/ru')
      .waitForElementVisible('article.ekphzss0.css-1w4ki1n-Grid.e1kw6gvb0 > div > div')
  })

  expected('Скрин хеддера на 1280', () => {
    browser.assert.screenshotElement('[data-testid="Header:block"]', 'Хеддер на 1280 RU')
  })
})

testcase('Хеддер на странице вакансий без кнопки связи 1280 RU', () => {
  step('Переходим на страницу вакансии', () => {
    browser
      .setWindowSize(1280, 1024)
      .url(browser.launch_url + '/ru-ru/jobs')
      .waitForElementVisible('#main > article > ul')
  })

  expected('Скрин хеддера на странице вакансий без кнопки связи 1280', () => {
    browser.assert.screenshotElement(
      '[data-testid="Header:block"]',
      'Хеддер на странице вакансий без кнопки связи 1280 RU'
    )
  })
})

testcase('Дропдаун Услуги 1280 RU', () => {
  step('Перейти на главную страницу', () => {
    browser
      .setWindowSize(1280, 1024)
      .url(browser.launch_url + '/ru')
      .waitForElementVisible('article.ekphzss0.css-1w4ki1n-Grid.e1kw6gvb0 > div > div')
  })

  step('Навести курсор на УСЛУГИ в хеддере', () => {
    browser
      .moveToElement('[data-testid="Header:nav:button.services"]', 0, 0)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('Скрин дропдауна УСЛУГИ на 1280', () => {
    browser.assert.screenshotElement(
      '[data-testid="Header:nav.dropdown"]',
      'Дропдаун Услуги 1280 RU'
    )
  })
})

testcase('Дропдаун ИНДУСТРИИ 1280 RU', () => {
  step('Перейти на главную страницу', () => {
    browser
      .setWindowSize(1280, 1024)
      .url(browser.launch_url + '/ru')
      .waitForElementVisible('article.ekphzss0.css-1w4ki1n-Grid.e1kw6gvb0 > div > div')
  })

  step('Навести курсор на ИНДУСТРИИ в хеддере', () => {
    browser
      .moveToElement('[data-testid="Header:nav:button.industries"]', 0, 0)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('Скрин дропдауна ИНДУСТРИИ на 1280', () => {
    browser.assert.screenshotElement(
      '[data-testid="Header:nav.dropdown"]',
      'Дропдаун ИНДУСТРИИ 1280 RU'
    )
  })
})

testcase('Дропдаун КАК МЫ РАБОТАЕМ 1280 RU', () => {
  step('Перейти на главную страницу', () => {
    browser
      .setWindowSize(1280, 1024)
      .url(browser.launch_url + '/ru')
      .waitForElementVisible('article.ekphzss0.css-1w4ki1n-Grid.e1kw6gvb0 > div > div')
  })

  step('Навести курсор на ИНДУСТРИИ в хеддере', () => {
    browser
      .moveToElement('[data-testid="Header:nav:button.howWeWork"]', 0, 0)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('Скрин дропдауна КАК МЫ РАБОТАЕМ на 1280', () => {
    browser.assert.screenshotElement(
      '[data-testid="Header:nav.dropdown"]',
      'Дропдаун КАК МЫ РАБОТАЕМ 1280 RU'
    )
  })
})

testcase('Хеддер 1024 RU', () => {
  step('Перейти на главную страницу', () => {
    browser
      .setWindowSize(1024, 1024)
      .url(browser.launch_url + '/ru')
      .waitForElementVisible('article.ekphzss0.css-1w4ki1n-Grid.e1kw6gvb0 > div > div')
  })

  expected('Скрин хеддера на 1024', () => {
    browser.assert.screenshotElement('[data-testid="Header:block"]', 'Хеддер на 1024 RU')
  })
})

testcase('Хеддер на странице вакансий без кнопки связи 1024 RU', () => {
  step('Переходим на страницу вакансий', () => {
    browser
      .setWindowSize(1024, 1024)
      .url(browser.launch_url + '/ru-ru/jobs')
      .waitForElementVisible('#main > article > ul')
  })

  expected('Скрин хеддера на странице вакансий без кнопки связи 1024', () => {
    browser.assert.screenshotElement(
      '[data-testid="Header:block"]',
      'Хеддер на странице вакансий без кнопки связи 1360 RU'
    )
  })
})

testcase('Дропдаун Услуги 1024 RU', () => {
  step('Перейти на главную страницу', () => {
    browser
      .setWindowSize(1024, 1024)
      .url(browser.launch_url + '/ru')
      .waitForElementVisible('article.ekphzss0.css-1w4ki1n-Grid.e1kw6gvb0 > div > div')
  })

  step('Навести курсор на УСЛУГИ в хеддере', () => {
    browser
      .moveToElement('[data-testid="Header:nav:button.services"]', 0, 0)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('Скрин дропдауна УСЛУГИ на 1024', () => {
    browser.assert.screenshotElement(
      '[data-testid="Header:nav.dropdown"]',
      'Дропдаун Услуги 1024 RU'
    )
  })
})

testcase('Дропдаун ИНДУСТРИИ 1024 RU', () => {
  step('Перейти на главную страницу', () => {
    browser
      .setWindowSize(1024, 1024)
      .url(browser.launch_url + '/ru')
      .waitForElementVisible('article.ekphzss0.css-1w4ki1n-Grid.e1kw6gvb0 > div > div')
  })

  step('Навести курсор на ИНДУСТРИИ в хеддере', () => {
    browser
      .moveToElement('[data-testid="Header:nav:button.industries"]', 0, 0)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('Скрин дропдауна ИНДУСТРИИ на 1024', () => {
    browser.assert.screenshotElement(
      '[data-testid="Header:nav.dropdown"]',
      'Дропдаун ИНДУСТРИИ 1024 RU'
    )
  })
})

testcase('Дропдаун КАК МЫ РАБОТАЕМ 1024 RU', () => {
  step('Перейти на главную страницу', () => {
    browser
      .setWindowSize(1024, 1024)
      .url(browser.launch_url + '/ru')
      .waitForElementVisible('article.ekphzss0.css-1w4ki1n-Grid.e1kw6gvb0 > div > div')
  })

  step('Навести курсор на ИНДУСТРИИ в хеддере', () => {
    browser
      .moveToElement('[data-testid="Header:nav:button.howWeWork"]', 0, 0)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('Скрин дропдауна КАК МЫ РАБОТАЕМ на 1024', () => {
    browser.assert.screenshotElement(
      '[data-testid="Header:nav.dropdown"]',
      'Дропдаун КАК МЫ РАБОТАЕМ 1024 RU'
    )
  })
})
