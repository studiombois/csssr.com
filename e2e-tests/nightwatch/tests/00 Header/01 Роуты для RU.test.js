//Меню УСЛУГИ

testcase('Переход на страницу Фронтенд-Аутсорс из хеддера', () => {
  step('Перешли на главную страницу', () => {
    browser.url(browser.launch_url + '/ru')
  })

  step('Навели курсор на УСЛУГИ в хеддере', () => {
    browser.moveToElement('[data-testid="Header:nav:button.services"]', 0, 0)
  })

  step('В дропдауне выбрали Фронтенд аутсорсинг', () => {
    browser
      .waitForElementVisible('[data-testid="Header:nav:link.outsourcing"]')
      .click('[data-testid="Header:nav:link.outsourcing"]')
  })

  expected('Открылась страница Фронтенд аутсорсинг', () => {
    browser
      .waitForElementPresent('[id="main"]')
      .assert.urlEquals(
        browser.launch_url + '/ru/service/outsourcing-front-end'
      )
  })
})

testcase('Переход на страницу MVP', () => {
  step('Перешли на главную страницу', () => {
    browser.url(browser.launch_url + '/ru')
  })

  step('Навели курсор на УСЛУГИ в хеддере', () => {
    browser.moveToElement('[data-testid="Header:nav:button.services"]', 0, 0)
  })

  step('В дропдауне выбрали Разработка MVP', () => {
    browser
      .waitForElementVisible('[data-testid="Header:nav:link.mvp"]')
      .click('[data-testid="Header:nav:link.mvp"]')
  })

  expected('Открылась страница Разработка MVP', () => {
    browser
      .waitForElementPresent('[id="main"]')
      .assert.urlEquals(browser.launch_url + '/ru/service/mvp-development')
  })
})

testcase('Переход на страницу Бекэнд и DevOps', () => {
  step('Перешли на главную страницу', () => {
    browser.url(browser.launch_url + '/ru')
  })

  step('Навели курсор на SERVICES в хеддере', () => {
    browser.moveToElement('[data-testid="Header:nav:button.services"]', 0, 0)
  })

  step('В дропдауне выбрали Back-end & DevOps', () => {
    browser
      .waitForElementVisible('[data-testid="Header:nav:link.backend"]')
      .click('[data-testid="Header:nav:link.backend"]')
  })

  expected('Открылась страница Back-end & DevOps', () => {
    browser.waitForElementPresent('[id="main"]')
          .assert.urlEquals(
      browser.launch_url + '/ru/service/back-end-and-devops'
    )
  })
})


//Меню ИНДУСТРИИ

testcase('Переход на страницу Финтех', () => {
  step('Перешли на главную страницу', () => {
    browser.url(browser.launch_url + '/ru')
  })

  step('Навели курсор на ИНДУСТРИИ в хеддере', () => {
    browser.moveToElement('[data-testid="Header:nav:button.industries"]', 0, 0)
  })

  step('В дропдауне выбрали Финтех', () => {
    browser
      .waitForElementVisible('[data-testid="Header:nav:link.fintech"]')
      .click('[data-testid="Header:nav:link.fintech"]')
  })

  expected('Открылась страница Финтех', () => {
    browser
      .waitForElementPresent('[id="main"]')
      .assert.urlEquals(browser.launch_url + '/ru/industry/fintech')
  })
})

testcase('Переход на страницу ИТ', () => {
  step('Перешли на главную страницу', () => {
    browser.url(browser.launch_url + '/ru')
  })

  step('Навели курсор на ИНДУСТРИИ в хеддере', () => {
    browser.moveToElement('[data-testid="Header:nav:button.industries"]', 0, 0)
  })

  step('В дропдауне выбрали ИТ', () => {
    browser
      .waitForElementVisible('[data-testid="Header:nav:link.information"]')
      .click('[data-testid="Header:nav:link.information"]')
  })

  expected('Открылась страница ИТ', () => {
    browser
      .waitForElementPresent('[id="main"]')
      .assert.urlEquals(
      browser.launch_url + '/ru/industry/information-technology'
    )
  })
})

testcase('Переход на страницу E-Commerce', () => {
  step('Перешли на главную страницу', () => {
    browser.url(browser.launch_url + '/ru')
  })

  step('Навели курсор на ИНДУСТРИИ в хеддере', () => {
    browser.moveToElement('[data-testid="Header:nav:button.industries"]', 0, 0)
  })

  step('В дропдауне выбрали E-Commerce', () => {
    browser
      .waitForElementVisible('[data-testid="Header:nav:link.eCommerce"]')
      .click('[data-testid="Header:nav:link.eCommerce"]')
  })

  expected('Открылась страница E-Commere', () => {
    browser
      .waitForElementPresent('[id="main"]')
      .assert.urlEquals(browser.launch_url + '/ru/industry/ecommerce')
  })
})

testcase('Переход на страницу Медиа и Маркетинг', () => {
  step('Перешли на главную страницу', () => {
    browser.url(browser.launch_url + '/ru')
  })

  step('Навели курсор на ИНДУСТРИИ в хеддере', () => {
    browser.moveToElement('[data-testid="Header:nav:button.industries"]', 0, 0)
  })

  step('В дропдауне выбрали Медиа и Маркетинг', () => {
    browser
      .waitForElementVisible('[data-testid="Header:nav:link.mediaAndMarketing"]')
      .click('[data-testid="Header:nav:link.mediaAndMarketing"]')
  })

  expected('Открылась страница Медиа и Маркетинг', () => {
    browser
      .waitForElementPresent('[id="main"]')
      .assert.urlEquals(
      browser.launch_url + '/ru/industry/media-and-marketing'
    )
  })
})

//Меню КАК МЫ РАБОТАЕМ

testcase('Переход на страницу Технологии', () => {
  step('Перешли на главную страницу', () => {
    browser.url(browser.launch_url + '/ru')
  })

  step('Навели курсор на КАК МЫ РАБОТАЕМ в хеддере', () => {
    browser.moveToElement('[data-testid="Header:nav:button.howWeWork"]', 0, 0)
  })

  step('В дропдауне выбрали Технологии', () => {
    browser
      .waitForElementVisible('[data-testid="Header:nav:link.technologies"]')
      .click('[data-testid="Header:nav:link.technologies"]')
  })

  expected('Открылась страница Технологии', () => {
    browser
      .waitForElementPresent('[id="main"]')
      .assert.urlEquals(browser.launch_url + '/ru/tech-stack')
  })
})

testcase('Переход на страницу Процессы', () => {
  step('Перешли на главную страницу', () => {
    browser.url(browser.launch_url + '/ru')
  })

  step('Навели курсор на КАК МЫ РАБОТАЕМ в хеддере', () => {
    browser
      .moveToElement('[data-testid="Header:nav:button.howWeWork"]', 0, 0)
  })

  step('В дропдауне выбрали Процессы', () => {
    browser
      .waitForElementVisible('[data-testid="Header:nav:link.processes"]')
      .click('[data-testid="Header:nav:link.processes"]')
  })

  expected('Открылась страница Процессы', () => {
    browser
      .waitForElementPresent('[id="main"]')
      .assert.urlEquals(browser.launch_url + '/ru/way-of-work')
  })
})

// Кнопки справа

testcase('Переход на страницу Вакансии', () => {
  step('Перешли на главную страницу', () => {
    browser.url(browser.launch_url + '/ru')
  })

  step('Кликнуть на Вакансии в хеддере', () => {
    browser.click('[data-testid="Header:link.jobs"]')
  })

  expected('Открылась страница Вакансий', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url + '/ru-ru/jobs')
  })
})

testcase('Переход на страницу Контакты', () => {
  step('Перешли на главную страницу', () => {
    browser.url(browser.launch_url + '/ru')
  })

  step('Нажали на ссылку Контакты в хеддере', () => {
    browser.click('[data-testid="Header:link.contacts"]')
  })

  expected('Открылась страница Контактов', () => {
    browser
      .waitForElementPresent('[id="main"]')
      .assert.urlEquals(browser.launch_url + '/ru/contacts')
  })
})

testcase('Переход на страницу Блога', () => {
  step('Перешли на главную страницу', () => {
    browser.url(browser.launch_url + '/ru')
  })

  step('Нажали на ссылку Блог в хеддере', () => {
    browser.click('[data-testid="Header:link.Блог"]')
  })

  expected('В новой вкладке открылась главная страница Блога', () => {
    browser.windowHandles(function (result) {
      var handle = result.value[1]
      browser.switchWindow(handle)
    })

    browser
      .waitForElementPresent('[id="main"]')
      .assert.urlEquals('https://blog.csssr.com/ru')
  })
})

testcase('Открытие модалки', () => {
  step('Перешли на главную страницу', () => {
    browser.url(browser.launch_url + '/ru')
  })

  step('Нажали на кнопку [НАНЯТЬ НАС] в хеддере', () => {
    browser.click('[data-testid="Header:button.contactUs"]')
  })

  expected('Появилась модалка с формой связи', () => {
    browser.expect.element('[name="contact-modal"]').to.be.present
  })
})
