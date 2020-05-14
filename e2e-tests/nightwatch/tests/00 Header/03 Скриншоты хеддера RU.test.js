testcase('Хеддер 1920 RU', () => {
  step('Перейти на главную страницу', () => {
    browser.setWindowSize(1920, 1024).url(browser.launch_url + '/ru')
  })
  expected('Скрин хеддера на 1920', () => {
    browser.assert.screenshotElement('header', 'Хеддер на 1920 RU')
  })
})

testcase('Хеддер на странице вакансий без кнопки связи 1920 RU', () => {
  step('Перейти на главную страницу', () => {
    browser.setWindowSize(1920, 1024).url(browser.launch_url + '/ru-ru/jobs')
  })
  expected('Скрин хеддера на странице вакансий без кнопки связи 1920', () => {
    browser.assert.screenshotElement(
      'header',
      'Хеддер на странице вакансий без кнопки связи 1920 RU'
    )
  })
})

testcase('Дропдаун Услуги 1920 RU', () => {
  step('Перейти на главную страницу', () => {
    browser.setWindowSize(1920, 1024).url(browser.launch_url + '/ru')
  })
  step('Навести курсор на УСЛУГИ в хеддере', () => {
    browser.moveToElement('header > div > ul > li:nth-child(1)', 0, 0)
  })
  expected('Скрин дропдауна УСЛУГИ на 1920', () => {
    browser.assert.screenshotElement(
      '#__next > header > div > div',
      'Дропдаун Услуги 1920 RU'
    )
  })
})

testcase('Дропдаун ИНДУСТРИИ 1920 RU', () => {
  step('Перейти на главную страницу', () => {
    browser.setWindowSize(1920, 1024).url(browser.launch_url + '/ru')
  })
  step('Навести курсор на ИНДУСТРИИ в хеддере', () => {
    browser.moveToElement('header > div > ul > li:nth-child(2)', 0, 0)
  })
  expected('Скрин дропдауна ИНДУСТРИИ на 1920', () => {
    browser.assert.screenshotElement(
      '#__next > header > div > div',
      'Дропдаун ИНДУСТРИИ 1920 RU'
    )
  })
})

testcase('Дропдаун КАК МЫ РАБОТАЕМ 1920 RU', () => {
  step('Перейти на главную страницу', () => {
    browser.setWindowSize(1920, 1024).url(browser.launch_url + '/ru')
  })
  step('Навести курсор на ИНДУСТРИИ в хеддере', () => {
    browser.moveToElement('header > div > ul > li:nth-child(3)', 0, 0)
  })
  expected('Скрин дропдауна КАК МЫ РАБОТАЕМ на 1920', () => {
    browser.assert.screenshotElement(
      '#__next > header > div > div',
      'Дропдаун КАК МЫ РАБОТАЕМ 1920 RU'
    )
  })
})

testcase('Хеддер 1360 RU', () => {
  step('Перейти на главную страницу', () => {
    browser.setWindowSize(1360, 1024).url(browser.launch_url + '/ru')
  })
  expected('Скрин хеддера на 1360', () => {
    browser.assert.screenshotElement('header', 'Хеддер на 1360 RU')
  })
})

testcase('Хеддер на странице вакансий без кнопки связи 1360 RU', () => {
  step('Перейти на главную страницу', () => {
    browser.setWindowSize(1360, 1024).url(browser.launch_url + '/ru-ru/jobs')
  })
  expected('Скрин хеддера на странице вакансий без кнопки связи 1360', () => {
    browser.assert.screenshotElement(
      'header',
      'Хеддер на странице вакансий без кнопки связи 1360 RU'
    )
  })
})

testcase('Дропдаун Услуги 1360 RU', () => {
  step('Перейти на главную страницу', () => {
    browser.setWindowSize(1360, 1024).url(browser.launch_url + '/ru')
  })
  step('Навести курсор на УСЛУГИ в хеддере', () => {
    browser.moveToElement('header > div > ul > li:nth-child(1)', 0, 0)
  })
  expected('Скрин дропдауна УСЛУГИ на 1360', () => {
    browser.assert.screenshotElement(
      '#__next > header > div > div',
      'Дропдаун Услуги 1360 RU'
    )
  })
})

testcase('Дропдаун ИНДУСТРИИ 1360 RU', () => {
  step('Перейти на главную страницу', () => {
    browser.setWindowSize(1360, 1024).url(browser.launch_url + '/ru')
  })
  step('Навести курсор на ИНДУСТРИИ в хеддере', () => {
    browser.moveToElement('header > div > ul > li:nth-child(2)', 0, 0)
  })
  expected('Скрин дропдауна ИНДУСТРИИ на 1360', () => {
    browser.assert.screenshotElement(
      '#__next > header > div > div',
      'Дропдаун ИНДУСТРИИ 1360 RU'
    )
  })
})

testcase('Дропдаун КАК МЫ РАБОТАЕМ 1360 RU', () => {
  step('Перейти на главную страницу', () => {
    browser.setWindowSize(1360, 1024).url(browser.launch_url + '/ru')
  })
  step('Навести курсор на ИНДУСТРИИ в хеддере', () => {
    browser.moveToElement('header > div > ul > li:nth-child(3)', 0, 0)
  })
  expected('Скрин дропдауна КАК МЫ РАБОТАЕМ на 1360', () => {
    browser.assert.screenshotElement(
      '#__next > header > div > div',
      'Дропдаун КАК МЫ РАБОТАЕМ 1360 RU'
    )
  })
})

testcase('Хеддер 1280 RU', () => {
  step('Перейти на главную страницу', () => {
    browser.setWindowSize(1280, 1024).url(browser.launch_url + '/ru')
  })
  expected('Скрин хеддера на 1280', () => {
    browser.assert.screenshotElement('header', 'Хеддер на 1280 RU')
  })
})

testcase('Хеддер на странице вакансий без кнопки связи 1280 RU', () => {
  step('Перейти на главную страницу', () => {
    browser.setWindowSize(1280, 1024).url(browser.launch_url + '/ru-ru/jobs')
  })
  expected('Скрин хеддера на странице вакансий без кнопки связи 1280', () => {
    browser.assert.screenshotElement(
      'header',
      'Хеддер на странице вакансий без кнопки связи 1280 RU'
    )
  })
})

testcase('Дропдаун Услуги 1280 RU', () => {
  step('Перейти на главную страницу', () => {
    browser.setWindowSize(1280, 1024).url(browser.launch_url + '/ru')
  })
  step('Навести курсор на УСЛУГИ в хеддере', () => {
    browser.moveToElement('header > div > ul > li:nth-child(1)', 0, 0)
  })
  expected('Скрин дропдауна УСЛУГИ на 1280', () => {
    browser.assert.screenshotElement(
      '#__next > header > div > div',
      'Дропдаун Услуги 1280 RU'
    )
  })
})

testcase('Дропдаун ИНДУСТРИИ 1280 RU', () => {
  step('Перейти на главную страницу', () => {
    browser.setWindowSize(1280, 1024).url(browser.launch_url + '/ru')
  })
  step('Навести курсор на ИНДУСТРИИ в хеддере', () => {
    browser.moveToElement('header > div > ul > li:nth-child(2)', 0, 0)
  })
  expected('Скрин дропдауна ИНДУСТРИИ на 1280', () => {
    browser.assert.screenshotElement(
      '#__next > header > div > div',
      'Дропдаун ИНДУСТРИИ 1280 RU'
    )
  })
})

testcase('Дропдаун КАК МЫ РАБОТАЕМ 1280 RU', () => {
  step('Перейти на главную страницу', () => {
    browser.setWindowSize(1280, 1024).url(browser.launch_url + '/ru')
  })
  step('Навести курсор на ИНДУСТРИИ в хеддере', () => {
    browser.moveToElement('header > div > ul > li:nth-child(3)', 0, 0)
  })
  expected('Скрин дропдауна КАК МЫ РАБОТАЕМ на 1280', () => {
    browser.assert.screenshotElement(
      '#__next > header > div > div',
      'Дропдаун КАК МЫ РАБОТАЕМ 1280 RU'
    )
  })
})

testcase('Хеддер 1024 RU', () => {
  step('Перейти на главную страницу', () => {
    browser.setWindowSize(1024, 1024).url(browser.launch_url + '/ru')
  })
  expected('Скрин хеддера на 1024', () => {
    browser.assert.screenshotElement('header', 'Хеддер на 1024 RU')
  })
})

testcase('Хеддер на странице вакансий без кнопки связи 1024 RU', () => {
  step('Перейти на главную страницу', () => {
    browser.setWindowSize(1024, 1024).url(browser.launch_url + '/ru-ru/jobs')
  })
  expected('Скрин хеддера на странице вакансий без кнопки связи 1024', () => {
    browser.assert.screenshotElement(
      'header',
      'Хеддер на странице вакансий без кнопки связи 1360 RU'
    )
  })
})

testcase('Дропдаун Услуги 1024 RU', () => {
  step('Перейти на главную страницу', () => {
    browser.setWindowSize(1024, 1024).url(browser.launch_url + '/ru')
  })
  step('Навести курсор на УСЛУГИ в хеддере', () => {
    browser.moveToElement('header > div > ul > li:nth-child(1)', 0, 0)
  })
  expected('Скрин дропдауна УСЛУГИ на 1024', () => {
    browser.assert.screenshotElement(
      '#__next > header > div > div',
      'Дропдаун Услуги 1024 RU'
    )
  })
})

testcase('Дропдаун ИНДУСТРИИ 1024 RU', () => {
  step('Перейти на главную страницу', () => {
    browser.setWindowSize(1024, 1024).url(browser.launch_url + '/ru')
  })
  step('Навести курсор на ИНДУСТРИИ в хеддере', () => {
    browser.moveToElement('header > div > ul > li:nth-child(2)', 0, 0)
  })
  expected('Скрин дропдауна ИНДУСТРИИ на 1024', () => {
    browser.assert.screenshotElement(
      '#__next > header > div > div',
      'Дропдаун ИНДУСТРИИ 1024 RU'
    )
  })
})

testcase('Дропдаун КАК МЫ РАБОТАЕМ 1024 RU', () => {
  step('Перейти на главную страницу', () => {
    browser.setWindowSize(1024, 1024).url(browser.launch_url + '/ru')
  })
  step('Навести курсор на ИНДУСТРИИ в хеддере', () => {
    browser.moveToElement('header > div > ul > li:nth-child(3)', 0, 0)
  })
  expected('Скрин дропдауна КАК МЫ РАБОТАЕМ на 1024', () => {
    browser.assert.screenshotElement(
      '#__next > header > div > div',
      'Дропдаун КАК МЫ РАБОТАЕМ 1024 RU'
    )
  })
})
