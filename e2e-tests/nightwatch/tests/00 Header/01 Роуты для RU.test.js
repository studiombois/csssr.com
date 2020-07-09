//Меню УСЛУГИ

testcase('Переход на страницу Фронтенд-Аутсорс из хеддера', () => {
  step('Перейти на главную страницу', () => {
    browser.url(browser.launch_url + '/ru')
  })
  step('Навести курсор на УСЛУГИ в хеддере', () => {
    browser.moveToElement('[data-testid="Header:nav:button.services"]', 0, 0)
  })
  step('В дропдауне выбрать Фронтенд аутсорсинг', () => {
    browser
      .moveToElement('[data-testid="Header:nav:link.outsourcing"]', 0, 0)
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
    browser.moveToElement('[data-testid="Header:nav:button.services"]', 0, 0)
  })
  step('В дропдауне выбрать Разработка MVP', () => {
    browser
      .moveToElement('[data-testid="Header:nav:link.mvp"]', 0, 0)
      .mouseButtonClick('left')
  })
  expected('Переход на страницу Разработка MVP', () => {
    browser.assert.urlEquals(browser.launch_url + '/ru/service/mvp-development')
  })
})

testcase('Переход на страницу Бекэнд и DevOps', () => {
  step('Перейти на главную страницу', () => {
    browser.url(browser.launch_url + '/ru')
  })
  step('Навести курсор на УСЛУГИ в хеддере', () => {
    browser.moveToElement('[data-testid="Header:nav:button.services"]', 0, 0)
  })
  step('В дропдауне выбрать Бекенд и DevOps', () => {
    browser
      .moveToElement('[data-testid="Header:nav:link.backend"]', 0, 0)
      .mouseButtonClick('left')
  })
  expected('Переход на страницу Бекенд и DevOps', () => {
    browser.assert.urlEquals(browser.launch_url + '/ru/service/back-end-and-devops')
  })
})

//Меню ИНДУСТРИИ

testcase('Переход на страницу Финтех', () => {
  step('Перейти на главную страницу', () => {
    browser.url(browser.launch_url + '/ru')
  })
  step('Навести курсор на ИНДУСТРИИ в хеддере', () => {
    browser.moveToElement('[data-testid="Header:nav:button.industries"]', 0, 0)
  })
  step('В дропдауне выбрать Финтех', () => {
    browser
      .moveToElement('[data-testid="Header:nav:link.fintech"]', 0, 0)
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
    browser.moveToElement('[data-testid="Header:nav:button.industries"]', 0, 0)
  })
  step('В дропдауне выбрать ИТ', () => {
    browser
      .moveToElement(
        '[data-testid="Header:nav:link.information"]',
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
    browser.moveToElement('[data-testid="Header:nav:button.industries"]', 0, 0)
  })
  step('В дропдауне выбрать E-Commerce', () => {
    browser
      .moveToElement(
        '[data-testid="Header:nav:link.eCommerce"]', 0, 0
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
    browser.moveToElement('[data-testid="Header:nav:button.industries"]', 0, 0)
  })
  step('В дропдауне выбрать Медиа и Маркетинг', () => {
    browser
      .moveToElement(
        '[data-testid="Header:nav:link.mediaAndMarketing"]',
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
    browser.moveToElement('[data-testid="Header:nav:button.howWeWork"]', 0, 0)
  })
  step('В дропдауне выбрать Технологии', () => {
    browser
      .moveToElement('[data-testid="Header:nav:link.technologies"]', 0, 0)
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
      .moveToElement('[data-testid="Header:nav:button.howWeWork"]', 0, 0)

  })
  step('В дропдауне выбрать Процессы', () => {
    browser
      .moveToElement('[data-testid="Header:nav:link.processes"]', 0, 0)

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
    browser.click('[data-testid="Header:link.jobs"]')
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
    browser.click('[data-testid="Header:button.contactUs"]')
  })
  expected('Открылась модалка с формой связи', () => {
    browser.expect.element('[name="contact-modal"]').to.be.present
  })
})
