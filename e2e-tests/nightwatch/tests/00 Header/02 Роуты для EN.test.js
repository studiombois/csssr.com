//Mеню SERVICES

testcase('Переход на страницу Outsourcing Front-end из хеддера', () => {
  step('Перешли на главную страницу', () => {
    browser.url(browser.launch_url + '/en')
  })

  step('Навели курсор на SERVICES в хеддере', () => {
    browser.moveToElement('[data-testid="Header:nav:button.services"]', 0, 0)
  })

  step('В дропдауне выбрали Outsourcing Front-end', () => {
    browser
      .waitForElementVisible('[data-testid="Header:nav:link.outsourcing"]')
      .click('[data-testid="Header:nav:link.outsourcing"]')
  })

  expected('Открылась страница Outsourcing Front-end', () => {
    browser
      .waitForElementPresent('[id="main"]')
      .assert.urlEquals(
        browser.launch_url + '/en/service/outsourcing-front-end'
      )
  })
})

testcase('Переход на страницу Express Front-end из хеддера', () => {
  step('Перешли на главную страницу', () => {
    browser.url(browser.launch_url + '/en')
  })

  step('Навели курсор на SERVICES в хеддере', () => {
    browser.moveToElement('[data-testid="Header:nav:button.services"]', 0, 0)
  })

  step('В дропдауне выбрали Express Front-end', () => {
    browser
      .waitForElementVisible('[data-testid="Header:nav:link.express"]')
      .click('[data-testid="Header:nav:link.express"]')
  })

  expected('Открылась страница Express Front-end', () => {
    browser
      .waitForElementPresent('[id="main"]')
      .assert.urlEquals(
        browser.launch_url + '/en/service/express-front-end'
      )
  })
})

testcase('Переход на страницу MVP Development из хеддера', () => {
  step('Перешли на главную страницу', () => {
    browser.url(browser.launch_url + '/en')
  })

  step('Навели курсор на SERVICES в хеддере', () => {
    browser.moveToElement('[data-testid="Header:nav:button.services"]', 0, 0)
  })

  step('В дропдауне выбрали MVP Development', () => {
    browser
      .waitForElementVisible('[data-testid="Header:nav:link.mvp"]')
      .click('[data-testid="Header:nav:link.mvp"]')
  })

  expected('Открылась страница MVP Development', () => {
    browser
      .waitForElementPresent('[id="main"]')
      .assert.urlEquals(browser.launch_url + '/en/service/mvp-development')
  })
})

testcase('Переход на страницу Express Back-end & DevOps из хеддера', () => {
  step('Перешли на главную страницу', () => {
    browser.url(browser.launch_url + '/en')
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
    browser
      .waitForElementPresent('[id="main"]')
      .assert.urlEquals(
        browser.launch_url + '/en/service/back-end-and-devops'
      )
  })
})

//Меню INDUSTRIES

testcase('Переход на страницу FINTECH из хеддера', () => {
  step('Перешли на главную страницу', () => {
    browser.url(browser.launch_url + '/en')
  })

  step('Навели курсор на INDUSTRIES в хеддере', () => {
    browser.moveToElement('[data-testid="Header:nav:button.industries"]', 0, 0)
  })

  step('В дропдауне выбрали Fintech', () => {
    browser
      .waitForElementVisible('[data-testid="Header:nav:link.fintech"]')
      .click('[data-testid="Header:nav:link.fintech"]')
  })

  expected('Открылась страница Fintecch', () => {
    browser
      .waitForElementPresent('[id="main"]')
      .assert.urlEquals(browser.launch_url + '/en/industry/fintech')
  })
})

testcase('Переход на страницу E-Commerce из хеддера', () => {
  step('Перешли на главную страницу', () => {
    browser.url(browser.launch_url + '/en')
  })

  step('Навели курсор на INDUSTRIES в хеддере', () => {
    browser.moveToElement('[data-testid="Header:nav:button.industries"]', 0, 0)
  })

  step('В дропдауне выбрали E-Commerce', () => {
    browser
      .waitForElementVisible('[data-testid="Header:nav:link.eCommerce"]')
      .click('[data-testid="Header:nav:link.eCommerce"]')
  })

  expected('Открылась страница E-Commerce', () => {
    browser
      .waitForElementPresent('[id="main"]')
      .assert.urlEquals(browser.launch_url + '/en/industry/ecommerce')
  })
})

testcase('Переход на страницу Information Technology из хеддера', () => {
  step('Перешли на главную страницу', () => {
    browser.url(browser.launch_url + '/en')
  })

  step('Навели курсор на INDUSTRIES в хеддере', () => {
    browser.moveToElement('[data-testid="Header:nav:button.industries"]', 0, 0)
  })

  step('В дропдауне выбрали IT', () => {
    browser
      .waitForElementVisible('[data-testid="Header:nav:link.information"]')
      .click('[data-testid="Header:nav:link.information"]')
  })

  expected('Открылась страница Information Technology', () => {
    browser
      .waitForElementPresent('[id="main"]')
      .assert.urlEquals(
        browser.launch_url + '/en/industry/information-technology'
      )
  })
})

testcase('Переход на страницу Media & Marketing из хеддера', () => {
  step('Перешли на главную страницу', () => {
    browser.url(browser.launch_url + '/en')
  })

  step('Навели курсор на INDUSTRIES в хеддере', () => {
    browser.moveToElement('[data-testid="Header:nav:button.industries"]', 0, 0)
  })

  step('В дропдауне выбрали Media & Marketing', () => {
    browser
      .waitForElementVisible('[data-testid="Header:nav:link.mediaAndMarketing"]')
      .click('[data-testid="Header:nav:link.mediaAndMarketing"]')
  })

  expected('Открылась страница Media & Marketing', () => {
    browser
      .waitForElementPresent('[id="main"]')
      .assert.urlEquals(
        browser.launch_url + '/en/industry/media-and-marketing'
      )
  })
})

//Меню SOLUTIONS

testcase('Переход на страницу LMS Platform из хеддера', () => {
  step('Перешли на главную страницу', () => {
    browser.url(browser.launch_url + '/en')
  })

  step('Навели курсор на SOLUTIONS в хеддере', () => {
    browser.moveToElement('[data-testid="Header:nav:button.solutions"]', 0, 0)
  })

  step('В дропдауне выбрали LMS Platform', () => {
    browser
      .waitForElementVisible('[data-testid="Header:nav:link.lms"]')
      .click('[data-testid="Header:nav:link.lms"]')
  })

  expected('Открылась страница LMS Platform', () => {
    browser
      .waitForElementPresent('[id="main"]')
      .assert.urlEquals(browser.launch_url + '/en/solutions/lms')
  })
})

testcase('Ссылка на страницу Time-tracking Software из хеддера', () => {
  step('Перешли на главную страницу', () => {
    browser.url(browser.launch_url + '/en')
  })

  step('Навели курсор на SOLUTIONS в хеддере', () => {
    browser.moveToElement('[data-testid="Header:nav:button.solutions"]', 0, 0)
  })

  step('В дропдауне выбрали Time-tracking Software', () => {
    browser.click(
      '[data-testid="Header:nav:link.tracker"]')
  })

  expected('В новой вкладке открылась страница Трекера', () => {
    browser.windowHandles(function (result) {
      var handle = result.value[1]
      browser.switchWindow(handle)
    })

    browser
      .waitForElementPresent('[id="__next"]')
      .assert.urlEquals('https://tracker.csssr.com/')
  })
})

// Кнопки справа

testcase('Переход на страницу Contacts', () => {
  step('Перешли на главную страницу', () => {
    browser.url(browser.launch_url + '/en')
  })

  step('Нажали на ссылку Контакты в хеддере', () => {
    browser.click('[data-testid="Header:link.contacts"]')
  })

  expected('Открылась страница Контактов', () => {
    browser
      .waitForElementPresent('[id="main"]')
      .assert.urlEquals(browser.launch_url + '/en/contacts')
  })
})

testcase('Ссылка на Блог из хеддера', () => {
  step('Перешли на главную страницу', () => {
    browser.url(browser.launch_url + '/en')
  })

  step('Нажали на ссылку Блог в хеддере', () => {
    browser.click('[data-testid="Header:link.Blog"]')
  })

  expected('В новой вкладке открылась главная страница Блога', () => {
    browser.windowHandles(function (result) {
      var handle = result.value[1]
      browser.switchWindow(handle)
    })

    browser
      .waitForElementPresent('[id="main"]')
      .assert.urlEquals('https://blog.csssr.com/en')
  })
})
testcase('Переход на страницу Careers', () => {
  step('Перешли на главную страницу', () => {
    browser.url(browser.launch_url + '/en')
  })

  step('Кликнуть на Careers в хеддере', () => {
    browser.click('[data-testid="Header:link.jobs"]')
  })

  expected('Открылась страница Careers', () => {
    browser
      .waitForElementPresent('[id="main"]')
      .assert.urlEquals(browser.launch_url + '/en-us/jobs')
  })
})

testcase('Открытие модалки', () => {
  step('Перешли на главную страницу', () => {
    browser.url(browser.launch_url + '/en')
  })

  step('Кликнуть на кнопку [HIRE US] в хеддере', () => {
    browser.click('[data-testid="Header:button.contactUs"]')
  })

  expected('Открылась модалка с формой связи', () => {
    browser.expect.element('[name="contact-modal"]').to.be.present
  })
})
