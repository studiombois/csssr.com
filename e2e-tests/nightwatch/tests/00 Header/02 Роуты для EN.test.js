//Mеню SERVICES

testcase('Переход на страницу Outsourcing Front-end из хеддера', () => {
  step('Перейти на главную страницу', () => {
    browser.url(browser.launch_url + '/en')
  })
  step('Навести курсор на SERVICES в хеддере', () => {
    browser.moveToElement('[data-testid="Header:nav:button.services"]', 0, 0)
  })
  step('В дропдауне выбрать  Outsourcing Front-end', () => {
    browser
      .moveToElement(
        '[data-testid="Header:nav:link.outsourcing"]', 0, 0)
      .mouseButtonClick('left')
  })
  expected('Переход на страницу  Outsourcing Front-end', () => {
    browser.assert.urlEquals(
      browser.launch_url + '/en/service/outsourcing-front-end'
    )
  })
})

testcase('Переход на страницу Express Front-end из хеддера', () => {
  step('Перейти на главную страницу', () => {
    browser.url(browser.launch_url + '/en')
  })
  step('Навести курсор на SERVICES в хеддере', () => {
    browser.moveToElement('[data-testid="Header:nav:button.services"]', 0, 0)
  })
  step('В дропдауне выбрать  Express Front-end', () => {
    browser
      .moveToElement(
        '[data-testid="Header:nav:link.express"]', 0, 0)
      .mouseButtonClick('left')
  })
  expected('Переход на страницу  Express Front-end', () => {
    browser.assert.urlEquals(
      browser.launch_url + '/en/service/express-front-end'
    )
  })
})

testcase('Переход на страницу MVP Development из хеддера', () => {
  step('Перейти на главную страницу', () => {
    browser.url(browser.launch_url + '/en')
  })
  step('Навести курсор на SERVICES в хеддере', () => {
    browser.moveToElement('[data-testid="Header:nav:button.services"]', 0, 0)
  })
  step('В дропдауне выбрать  MVP Development', () => {
    browser
      .moveToElement(
        '[data-testid="Header:nav:link.mvp"]', 0, 0)
      .mouseButtonClick('left')
  })
  expected('Переход на страницу MVP Development', () => {
    browser.assert.urlEquals(browser.launch_url + '/en/service/mvp-development')
  })
})

testcase('Переход на страницу Express Back-end & DevOps из хеддера', () => {
  step('Перейти на главную страницу', () => {
    browser.url(browser.launch_url + '/en')
  })
  step('Навести курсор на SERVICES в хеддере', () => {
    browser.moveToElement('[data-testid="Header:nav:button.services"]', 0, 0)
  })
  step('В дропдауне выбрать Back-end & DevOps', () => {
    browser
      .moveToElement(
        '[data-testid="Header:nav:link.backend"]', 0, 0)
      .mouseButtonClick('left')
  })
  expected('Переход на страницу Back-end & DevOps', () => {
    browser.assert.urlEquals(
      browser.launch_url + '/en/service/back-end-and-devops'
    )
  })
})

//Меню INDUSTRIES

testcase('Переход на страницу FINTECH из хеддера', () => {
  step('Перейти на главную страницу', () => {
    browser.url(browser.launch_url + '/en')
  })
  step('Навести курсор на INDUSTRIES в хеддере', () => {
    browser.moveToElement('[data-testid="Header:nav:button.industries"]', 0, 0)
  })
  step('В дропдауне выбрать  Fintech', () => {
    browser
      .moveToElement(
        '[data-testid="Header:nav:link.fintech"]',
        0,
        0
      )
      .mouseButtonClick('left')
  })
  expected('Переход на страницу Fintecch', () => {
    browser.assert.urlEquals(browser.launch_url + '/en/industry/fintech')
  })
})

testcase('Переход на страницу E-Commerce из хеддера', () => {
  step('Перейти на главную страницу', () => {
    browser.url(browser.launch_url + '/en')
  })
  step('Навести курсор на INDUSTRIES в хеддере', () => {
    browser.moveToElement('[data-testid="Header:nav:button.industries"]', 0, 0)
  })
  step('В дропдауне выбрать  E-Commerce', () => {
    browser
      .moveToElement(
        '[data-testid="Header:nav:link.eCommerce"]',
        0,
        0
      )
      .mouseButtonClick('left')
  })
  expected('Переход на страницу E-Commerce', () => {
    browser.assert.urlEquals(browser.launch_url + '/en/industry/ecommerce')
  })
})

testcase('Переход на страницу Information Technology из хеддера', () => {
  step('Перейти на главную страницу', () => {
    browser.url(browser.launch_url + '/en')
  })
  step('Навести курсор на INDUSTRIES в хеддере', () => {
    browser.moveToElement('[data-testid="Header:nav:button.industries"]', 0, 0)
  })
  step('В дропдауне выбрать IT', () => {
    browser
      .moveToElement(
        '[data-testid="Header:nav:link.information"]',
        0,
        0
      )
      .mouseButtonClick('left')
  })
  expected('Переход на страницу Information Technology', () => {
    browser.assert.urlEquals(
      browser.launch_url + '/en/industry/information-technology'
    )
  })
})

testcase('Переход на страницу Media & Marketing из хеддера', () => {
  step('Перейти на главную страницу', () => {
    browser.url(browser.launch_url + '/en')
  })
  step('Навести курсор на INDUSTRIES в хеддере', () => {
    browser.moveToElement('[data-testid="Header:nav:button.industries"]', 0, 0)
  })
  step('В дропдауне выбрать Media & Marketing', () => {
    browser
      .moveToElement(
        '[data-testid="Header:nav:link.mediaAndMarketing"]', 0, 0)
      .mouseButtonClick('left')
  })
  expected('Переход на страницу Media & Marketing', () => {
    browser.assert.urlEquals(
      browser.launch_url + '/en/industry/media-and-marketing'
    )
  })
})

//Меню SOLUTIONS

testcase('Переход на страницу LMS Platform из хеддера', () => {
  step('Перейти на главную страницу', () => {
    browser.url(browser.launch_url + '/en')
  })
  step('Навести курсор на SOLUTIONS в хеддере', () => {
    browser.moveToElement('[data-testid="Header:nav:button.solutions"]', 0, 0)
  })
  step('В дропдауне выбрать LMS Platform', () => {
    browser
      .moveToElement(
        '[data-testid="Header:nav:link.lms"]',
        0,
        0
      )
      .mouseButtonClick('left')
  })
  expected('Переход на страницу LMS Platform', () => {
    browser.assert.urlEquals(browser.launch_url + '/en/solutions/lms')
  })
})

testcase('Ссылка на страницу Time-tracking Software из хеддера', () => {
  step('Перейти на главную страницу', () => {
    browser.url(browser.launch_url + '/en')
  })
  step('Навести курсор на SOLUTIONS в хеддере', () => {
    browser.moveToElement('[data-testid="Header:nav:button.solutions"]', 0, 0)
  })
  step('В дропдауне выбрать Time-tracking Software', () => {
    browser.moveToElement(
      '[data-testid="Header:nav:link.tracker"]', 0, 0)
  })

  expected('У селекта Tracker есть атрибут ссылкой на страницу трекера', () => {
    browser.assert.attributeEquals(
      '[data-testid="Header:nav:link.tracker"]', 'href', 'https://tracker.csssr.com/'
    )
  })
  expected('У ссылки на Tracker есть свойство target="_blank"', () => {
    browser.assert.attributeEquals(
      '[data-testid="Header:nav:link.tracker"]',
      'target',
      '_blank'
    )
  })
})

// Кнопки справа

testcase('Ссылка на Блог из хеддера', () => {
  step('Перейти на главную страницу', () => {
    browser.url(browser.launch_url + '/en')
  })
  expected('У кнопки Blog есть атрибут с сылкой на страницу трекера', () => {
    browser.assert.attributeEquals(
      '[data-testid="Header:link.Blog"]',
      'href',
      'https://blog.csssr.com/en'
    )
  })
  expected('У ссылки на Blog есть свойство target="_blank"', () => {
    browser.assert.attributeEquals(
      '[data-testid="Header:link.Blog"]',
      'target',
      '_blank'
    )
  })
})

testcase('Переход на страницу Careers', () => {
  step('Перейти на главную страницу', () => {
    browser.url(browser.launch_url + '/en')
  })

  step('Кликнуть на Careers в хеддере', () => {
    browser.click('[data-testid="Header:link.jobs"]')
  })
  expected('Переход на страницу Careers', () => {
    browser.assert.urlEquals(browser.launch_url + '/en-us/jobs')
  })
})

testcase('Открытие модалки', () => {
  step('Перейти на главную страницу', () => {
    browser.url(browser.launch_url + '/en')
  })

  step('Кликнуть на кнопку [HIRE US] в хеддере', () => {
    browser.click('[data-testid="Header:button.contactUs"]')
  })
  expected('Открылась модалка с формой связи', () => {
    browser.expect.element('[name="contact-modal"]').to.be.present
  })
})
