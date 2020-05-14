//Меню УСЛУГИ

testcase('Переход на страницу Фронтенд-Аутсорс из хеддера', () => {
  step('Перейти на главную страницу', () => {
    browser.url(browser.launch_url + '/ru')
  })
  step('Навести курсор на УСЛУГИ в хеддере', () => {
    browser.moveToElement('header > div > ul > li:nth-child(1)', 0, 0)
  })
  step('В дропдауне выбрать Фронтенд аутсорсинг', () => {
    browser
      .moveToElement('header > div > div > nav > ul > li:nth-child(1)', 0, 0)
      .mouseButtonClick('left')
  })
  expected('Переход на страницу Фронтенд аутсорсинг', () => {
    browser.assert.urlEquals(
      browser.launch_url + '/ru/service/outsourcing-front-end'
    )
  })
})

testcase('Переход на страницу MVP', () => {
  step('Перейти на главную страницу', () => {
    browser.url(browser.launch_url + '/ru')
  })
  step('Навести курсор на УСЛУГИ в хеддере', () => {
    browser.moveToElement('header > div > ul > li:nth-child(1)', 0, 0)
  })
  step('В дропдауне выбрать Разработка MVP', () => {
    browser
      .moveToElement('header > div > div > nav > ul > li:nth-child(2)', 0, 0)
      .mouseButtonClick('left')
  })
  expected('Переход на страницу Разработка MVP', () => {
    browser.assert.urlEquals(browser.launch_url + '/ru/service/mvp-development')
  })
})

//Меню ИНДУСТРИИ

testcase('Переход на страницу Финтех', () => {
  step('Перейти на главную страницу', () => {
    browser.url(browser.launch_url + '/ru')
  })
  step('Навести курсор на ИНДУСТРИИ в хеддере', () => {
    browser.moveToElement('header > div > ul > li:nth-child(2)', 0, 0)
  })
  step('В дропдауне выбрать Финтех', () => {
    browser
      .moveToElement(
        'header > div > div > nav > ul > li:nth-child(1) > a',
        0,
        0
      )
      .mouseButtonClick('left')
  })
  expected('Переход на страницу Финтех', () => {
    browser.assert.urlEquals(browser.launch_url + '/ru/industry/fintech')
  })
})

testcase('Переход на страницу ИТ', () => {
  step('Перейти на главную страницу', () => {
    browser.url(browser.launch_url + '/ru')
  })
  step('Навести курсор на ИНДУСТРИИ в хеддере', () => {
    browser.moveToElement('header > div > ul > li:nth-child(2)', 0, 0)
  })
  step('В дропдауне выбрать ИТ', () => {
    browser
      .moveToElement(
        'header > div > div > nav > ul > li:nth-child(3) > a',
        0,
        0
      )
      .mouseButtonClick('left')
  })
  expected('Переход на страницу ИТ', () => {
    browser.assert.urlEquals(
      browser.launch_url + '/ru/industry/information-technology'
    )
  })
})

testcase('Переход на страницу E-Commerce', () => {
  step('Перейти на главную страницу', () => {
    browser.url(browser.launch_url + '/ru')
  })
  step('Навести курсор на ИНДУСТРИИ в хеддере', () => {
    browser.moveToElement('header > div > ul > li:nth-child(2)', 0, 0)
  })
  step('В дропдауне выбрать E-Commerce', () => {
    browser
      .moveToElement(
        'header > div > div > nav > ul > li:nth-child(2) > a',
        0,
        0
      )
      .mouseButtonClick('left')
  })
  expected('Переход на страницу E-Commere', () => {
    browser.assert.urlEquals(browser.launch_url + '/ru/industry/ecommerce')
  })
})

testcase('Переход на страницу Медиа и Маркетинг', () => {
  step('Перейти на главную страницу', () => {
    browser.url(browser.launch_url + '/ru')
  })
  step('Навести курсор на ИНДУСТРИИ в хеддере', () => {
    browser.moveToElement('header > div > ul > li:nth-child(2)', 0, 0)
  })
  step('В дропдауне выбрать Медиа и Маркетинг', () => {
    browser
      .moveToElement(
        'header > div > div > nav > ul > li:nth-child(4) > a',
        0,
        0
      )
      .mouseButtonClick('left')
  })
  expected('Переход на страницу Медиа и Маркетинг', () => {
    browser.assert.urlEquals(
      browser.launch_url + '/ru/industry/media-and-marketing'
    )
  })
})

//Меню КАК МЫ РАБОТАЕМ

testcase('Переход на страницу Технологии', () => {
  step('Перейти на главную страницу', () => {
    browser.url(browser.launch_url + '/ru')
  })
  step('Навести курсор на КАК МЫ РАБОТАЕМ в хеддере', () => {
    browser.moveToElement('header > div > ul > li:nth-child(3)', 0, 0)
  })
  step('В дропдауне выбрать Технологии', () => {
    browser
      .moveToElement('header > div > div > nav > ul > li:nth-child(1)', 0, 0)
      .mouseButtonClick('left')
  })
  expected('Переход на страницу Технологии', () => {
    browser.assert.urlEquals(browser.launch_url + '/ru/tech-stack')
  })
})

testcase('Переход на страницу Процессы', () => {
  step('Перейти на главную страницу', () => {
    browser.url(browser.launch_url + '/ru')
  })
  step('Навести курсор на КАК МЫ РАБОТАЕМ в хеддере', () => {
    browser
      .moveToElement('header > div > ul > li:nth-child(3)', 0, 0)
      .pause(5000)
  })
  step('В дропдауне выбрать Процессы', () => {
    browser
      .moveToElement('header > div > div > nav > ul > li:nth-child(2)', 0, 0)
      .pause(5000)
      .mouseButtonClick('left')
  })
  expected('Переход на страницу Процессы', () => {
    browser.assert.urlEquals(browser.launch_url + '/ru/way-of-work')
  })
})

// Кнопки справа

testcase('Переход на страницу Вакансии', () => {
  step('Перейти на главную страницу', () => {
    browser.url(browser.launch_url + '/ru')
  })

  step('Кликнуть на Вакансии в хеддере', () => {
    browser.click('header > ul > li > a')
  })
  expected('Переход на страницу Вакансии', () => {
    browser.assert.urlEquals(browser.launch_url + '/ru-ru/jobs')
  })
})

testcase('Открытие модалки', () => {
  step('Перейти на главную страницу', () => {
    browser.url(browser.launch_url + '/ru')
  })

  step('Кликнуть на кнопку [НАНЯТЬ НАС] в хеддере', () => {
    browser.click('header > button')
  })
  expected('Открылась модалка с формой связи', () => {
    browser.expect.element('[name="contact-modal"]').to.be.present
  })
})
