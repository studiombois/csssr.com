//Mеню SERVICES

testcase('Переход на страницу Outsourcing Front-end из хеддера', () => {
  step('Перейти на главную страницу', () => {
    browser.url(browser.launch_url + '/en')
  })
  step('Навести курсор на SERVICES в хеддере', () => {
    browser.moveToElement('header > div > ul > li:nth-child(1)', 0, 0)
  })
  step('В дропдауне выбрать  Outsourcing Front-end', () => {
    browser
      .moveToElement(
        'header > div.css-cfpi11.eddnnqq0.with_hidden_menu > div > nav > ul > li:nth-child(1)',
        0,
        0
      )
      .mouseButtonClick('left')
  })
  expected('Переход на страницу  Outsourcing Front-end', () => {
    browser.assert.urlEquals(
      browser.launch_url + '/en/service/outsourcing-front-end'
    )
  })
})

testcase('Переход на страницу FINTECH из хеддера', () => {
  step('Перейти на главную страницу', () => {
    browser.url(browser.launch_url + '/en')
  })
  step('Навести курсор на INDUSTRIES в хеддере', () => {
    browser.moveToElement('header > div > ul > li:nth-child(2)', 0, 0)
  })
  step('В дропдауне выбрать  Fintech', () => {
    browser
      .moveToElement(
        'header > div.css-cfpi11.eddnnqq0.with_hidden_menu > div > nav > ul > li:nth-child(1) > a',
        0,
        0
      )
      .mouseButtonClick('left')
  })
  expected('Переход на страницу Fintecch', () => {
    browser.assert.urlEquals(browser.launch_url + '/en/industry/fintech')
  })
})

testcase('Переход на страницу MVP Development из хеддера', () => {
  step('Перейти на главную страницу', () => {
    browser.url(browser.launch_url + '/en')
  })
  step('Навести курсор на SERVICES в хеддере', () => {
    browser.moveToElement('header > div > ul > li:nth-child(1)', 0, 0)
  })
  step('В дропдауне выбрать  MVP Development', () => {
    browser
      .moveToElement(
        'header > div.css-cfpi11.eddnnqq0.with_hidden_menu > div > nav > ul > li:nth-child(3)',
        0,
        0
      )
      .mouseButtonClick('left')
  })
  expected('Переход на страницу MVP Development', () => {
    browser.assert.urlEquals(browser.launch_url + '/en/service/mvp-development')
  })
})

testcase('Переход на страницу Express Front-end из хеддера', () => {
  step('Перейти на главную страницу', () => {
    browser.url(browser.launch_url + '/en')
  })
  step('Навести курсор на SERVICES в хеддере', () => {
    browser.moveToElement('header > div > ul > li:nth-child(1)', 0, 0)
  })
  step('В дропдауне выбрать  Express Front-end', () => {
    browser
      .moveToElement(
        'header > div.css-cfpi11.eddnnqq0.with_hidden_menu > div > nav > ul > li:nth-child(2)',
        0,
        0
      )
      .mouseButtonClick('left')
  })
  expected('Переход на страницу  Express Front-end', () => {
    browser.assert.urlEquals(
      browser.launch_url + '/en/service/express-front-end'
    )
  })
})

//Меню INDUSTRIES

testcase('Переход на страницу FINTECH из хеддера', () => {
  step('Перейти на главную страницу', () => {
    browser.url(browser.launch_url + '/en')
  })
  step('Навести курсор на INDUSTRIES в хеддере', () => {
    browser.moveToElement('header > div > ul > li:nth-child(2)', 0, 0)
  })
  step('В дропдауне выбрать  Fintech', () => {
    browser
      .moveToElement(
        'header > div.css-cfpi11.eddnnqq0.with_hidden_menu > div > nav > ul > li:nth-child(1) > a',
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
    browser.moveToElement('header > div > ul > li:nth-child(2)', 0, 0)
  })
  step('В дропдауне выбрать  E-Commerce', () => {
    browser
      .moveToElement(
        'header > div.css-cfpi11.eddnnqq0.with_hidden_menu > div > nav > ul > li:nth-child(2) > a',
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
    browser.moveToElement('header > div > ul > li:nth-child(2)', 0, 0)
  })
  step('В дропдауне выбрать IT', () => {
    browser
      .moveToElement(
        'header > div.css-cfpi11.eddnnqq0.with_hidden_menu > div > nav > ul > li:nth-child(3) > a',
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
    browser.moveToElement('header > div > ul > li:nth-child(2)', 0, 0)
  })
  step('В дропдауне выбрать Media & Marketing', () => {
    browser
      .moveToElement(
        'header > div.css-cfpi11.eddnnqq0.with_hidden_menu > div > nav > ul > li:nth-child(4) > a',
        0,
        0
      )
      .mouseButtonClick('left')
  })
  expected('Переход на страницу Media & Marketing', () => {
    browser.assert.urlEquals(
      browser.launch_url + '/en/industry/media-and-marketing'
    )
  })
})

//Меню PRODUCTS

testcase('Переход на страницу LMS Platform из хеддера', () => {
  step('Перейти на главную страницу', () => {
    browser.url(browser.launch_url + '/en')
  })
  step('Навести курсор на PRODUCTS в хеддере', () => {
    browser.moveToElement('header > div > ul > li:nth-child(4)', 0, 0)
  })
  step('В дропдауне выбрать LMS Platform', () => {
    browser
      .moveToElement(
        'header > div.css-cfpi11.eddnnqq0.with_hidden_menu > div > nav > ul > li:nth-child(1) > a',
        0,
        0
      )
      .mouseButtonClick('left')
  })
  expected('Переход на страницу LMS Platform', () => {
    browser.assert.urlEquals(browser.launch_url + '/en/products/lms')
  })
})

testcase('Ссылка на страницу Time-tracking Software из хеддера', () => {
  step('Перейти на главную страницу', () => {
    browser.url(browser.launch_url + '/en')
  })
  step('Навести курсор на PRODUCTS в хеддере', () => {
    browser.moveToElement('header > div > ul > li:nth-child(4)', 0, 0)
  })
  step('В дропдауне выбрать Time-tracking Software', () => {
    browser.moveToElement(
      'header > div.css-cfpi11.eddnnqq0.with_hidden_menu > div > nav > ul > li:nth-child(2) > a',
      0,
      0
    )
  })

  expected('У селекта Tracker есть атрибут ссылкой на страницу трекера', () => {
    browser.assert.attributeEquals(
      'header > div.css-cfpi11.eddnnqq0.with_hidden_menu > div > nav > ul > li:nth-child(2) > a',
      'href',
      'https://tracker.csssr.com/'
    )
  })
  expected('У ссылки на Tracker есть свойство target="_blank"', () => {
    browser.assert.attributeEquals(
      'header > div.css-cfpi11.eddnnqq0.with_hidden_menu > div > nav > ul > li:nth-child(2) > a',
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
      'header > ul > li:nth-child(1) > a',
      'href',
      'https://blog.csssr.com/en'
    )
  })
  expected('У ссылки на Tracker есть свойство target="_blank"', () => {
    browser.assert.attributeEquals(
      'header > ul > li:nth-child(1) > a',
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
    browser.click('header > ul > li:nth-child(2) > a')
  })
  expected('Переход на страницу Careers', () => {
    browser.assert.urlEquals(browser.launch_url + '/en-sg/jobs')
  })
})

testcase('Открытие модалки', () => {
  step('Перейти на главную страницу', () => {
    browser.url(browser.launch_url + '/en')
  })

  step('Кликнуть на кнопку [HIRE US] в хеддере', () => {
    browser.click('header > button')
  })
  expected('Открылась модалка с формой связи', () => {
    browser.expect.element('[name="contact-modal"]').to.be.present
  })
})
