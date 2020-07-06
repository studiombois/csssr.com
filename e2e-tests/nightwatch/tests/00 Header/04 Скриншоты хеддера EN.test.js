testcase('Хеддер 1920 EN', () => {
  step('Перейти на главную страницу', () => {
    browser.setWindowSize(1920, 1024).url(browser.launch_url + '/en')
  })
  expected('Скрин хеддера на 1920', () => {
    browser.assert.screenshotElement('header', 'Хеддер на 1920 EN')
  })
})

testcase('Хеддер на странице вакансий без кнопки связи 1920 EN', () => {
  step('Перейти на главную страницу', () => {
    browser.setWindowSize(1920, 1024).url(browser.launch_url + '/en-sg/jobs')
  })
  expected(
    'Скрин хеддера на странице вакансий без кнопки связи 1920 EN',
    () => {
      browser.assert.screenshotElement(
        'header',
        'Хеддер на странице вакансий без кнопки связи 1920 EN'
      )
    }
  )
})

testcase('Дропдаун SERVICES 1920 EN', () => {
  step('Перейти на главную страницу', () => {
    browser.setWindowSize(1920, 1024).url(browser.launch_url + '/en')
  })
  step('Навести курсор на SERVICES в хеддере', () => {
    browser.moveToElement('header > div > ul > li:nth-child(1)', 0, 0)
  })
  expected('Скрин дропдауна УСЛУГИ на 1920', () => {
    browser.assert.screenshotElement(
      '#__next > header > div > div',
      'Дропдаун SERVICES 1920 EN'
    )
  })
})

testcase('Дропдаун INDUSTRIES 1920 EN', () => {
  step('Перейти на главную страницу', () => {
    browser.setWindowSize(1920, 1024).url(browser.launch_url + '/en')
  })
  step('Навести курсор на INDUSTRIES в хеддере', () => {
    browser.moveToElement('header > div > ul > li:nth-child(2)', 0, 0)
  })
  expected('Скрин дропдауна INDUSTRIES на 1920', () => {
    browser.assert.screenshotElement(
      '#__next > header > div > div',
      'Дропдаун INDUSTRIES 1920 EN'
    )
  })
})

testcase('Дропдаун HOW WE WORK 1920 EN', () => {
  step('Перейти на главную страницу', () => {
    browser.setWindowSize(1920, 1024).url(browser.launch_url + '/en')
  })
  step('Навести курсор на HOW WE WORK в хеддере', () => {
    browser.moveToElement('header > div > ul > li:nth-child(3)', 0, 0)
  })
  expected('Скрин дропдауна HOW WE WORK на 1920', () => {
    browser.assert.screenshotElement(
      '#__next > header > div > div',
      'Дропдаун HOW WE WORK 1920 EN'
    )
  })
})

testcase('Дропдаун SOLUTIONS 1920 EN', () => {
  step('Перейти на главную страницу', () => {
    browser.setWindowSize(1920, 1024).url(browser.launch_url + '/en')
  })
  step('Навести курсор на SOLUTIONS в хеддере', () => {
    browser.moveToElement('header > div > ul > li:nth-child(4)', 0, 0)
  })
  expected('Скрин дропдауна SOLUTIONS на 1920', () => {
    browser.assert.screenshotElement(
      '#__next > header > div > div',
      'Дропдаун SOLUTIONS 1920 EN'
    )
  })
})

testcase('Хеддер 1360 EN', () => {
  step('Перейти на главную страницу', () => {
    browser.setWindowSize(1360, 1024).url(browser.launch_url + '/en')
  })
  expected('Скрин хеддера на 1360', () => {
    browser.assert.screenshotElement('header', 'Хеддер на 1360 EN')
  })
})

testcase('Хеддер на странице вакансий без кнопки связи 1360 EN', () => {
  step('Перейти на главную страницу', () => {
    browser.setWindowSize(1360, 1024).url(browser.launch_url + '/en-sg/jobs')
  })
  expected(
    'Скрин хеддера на странице вакансий без кнопки связи 1360 EN',
    () => {
      browser.assert.screenshotElement(
        'header',
        'Хеддер на странице вакансий без кнопки связи 1360 EN'
      )
    }
  )
})

testcase('Дропдаун SERVICES 1360 EN', () => {
  step('Перейти на главную страницу', () => {
    browser.setWindowSize(1360, 1024).url(browser.launch_url + '/en')
  })
  step('Навести курсор на SERVICES в хеддере', () => {
    browser.moveToElement('header > div > ul > li:nth-child(1)', 0, 0)
  })
  expected('Скрин дропдауна УСЛУГИ на 1360', () => {
    browser.assert.screenshotElement(
      '#__next > header > div > div',
      'Дропдаун SERVICES 1360 EN'
    )
  })
})

testcase('Дропдаун INDUSTRIES 1360 EN', () => {
  step('Перейти на главную страницу', () => {
    browser.setWindowSize(1360, 1024).url(browser.launch_url + '/en')
  })
  step('Навести курсор на INDUSTRIES в хеддере', () => {
    browser.moveToElement('header > div > ul > li:nth-child(2)', 0, 0)
  })
  expected('Скрин дропдауна INDUSTRIES на 1360', () => {
    browser.assert.screenshotElement(
      '#__next > header > div > div',
      'Дропдаун INDUSTRIES 1360 EN'
    )
  })
})

testcase('Дропдаун HOW WE WORK 1360 EN', () => {
  step('Перейти на главную страницу', () => {
    browser.setWindowSize(1360, 1024).url(browser.launch_url + '/en')
  })
  step('Навести курсор на HOW WE WORK в хеддере', () => {
    browser.moveToElement('header > div > ul > li:nth-child(3)', 0, 0)
  })
  expected('Скрин дропдауна HOW WE WORK на 1360', () => {
    browser.assert.screenshotElement(
      '#__next > header > div > div',
      'Дропдаун HOW WE WORK 1360 EN'
    )
  })
})

testcase('Дропдаун SOLUTIONS 1360 EN', () => {
  step('Перейти на главную страницу', () => {
    browser.setWindowSize(1360, 1024).url(browser.launch_url + '/en')
  })
  step('Навести курсор на SOLUTIONS в хеддере', () => {
    browser.moveToElement('header > div > ul > li:nth-child(4)', 0, 0)
  })
  expected('Скрин дропдауна SOLUTIONS на 1360', () => {
    browser.assert.screenshotElement(
      '#__next > header > div > div',
      'Дропдаун SOLUTIONS 1360 EN'
    )
  })
})

testcase('Хеддер 1280 EN', () => {
  step('Перейти на главную страницу', () => {
    browser.setWindowSize(1280, 1024).url(browser.launch_url + '/en')
  })
  expected('Скрин хеддера на 1280', () => {
    browser.assert.screenshotElement('header', 'Хеддер на 1280 EN')
  })
})

testcase('Хеддер на странице вакансий без кнопки связи 1280 EN', () => {
  step('Перейти на главную страницу', () => {
    browser.setWindowSize(1280, 1024).url(browser.launch_url + '/en-sg/jobs')
  })
  expected(
    'Скрин хеддера на странице вакансий без кнопки связи 1280 EN',
    () => {
      browser.assert.screenshotElement(
        'header',
        'Хеддер на странице вакансий без кнопки связи 1280 EN'
      )
    }
  )
})

testcase('Дропдаун SERVICES 1280 EN', () => {
  step('Перейти на главную страницу', () => {
    browser.setWindowSize(1280, 1024).url(browser.launch_url + '/en')
  })
  step('Навести курсор на SERVICES в хеддере', () => {
    browser.moveToElement('header > div > ul > li:nth-child(1)', 0, 0)
  })
  expected('Скрин дропдауна УСЛУГИ на 1280', () => {
    browser.assert.screenshotElement(
      '#__next > header > div > div',
      'Дропдаун SERVICES 1280 EN'
    )
  })
})

testcase('Дропдаун INDUSTRIES 1280 EN', () => {
  step('Перейти на главную страницу', () => {
    browser.setWindowSize(1280, 1024).url(browser.launch_url + '/en')
  })
  step('Навести курсор на INDUSTRIES в хеддере', () => {
    browser.moveToElement('header > div > ul > li:nth-child(2)', 0, 0)
  })
  expected('Скрин дропдауна INDUSTRIES на 1280', () => {
    browser.assert.screenshotElement(
      '#__next > header > div > div',
      'Дропдаун INDUSTRIES 1280 EN'
    )
  })
})

testcase('Дропдаун HOW WE WORK 1280 EN', () => {
  step('Перейти на главную страницу', () => {
    browser.setWindowSize(1280, 1024).url(browser.launch_url + '/en')
  })
  step('Навести курсор на HOW WE WORK в хеддере', () => {
    browser.moveToElement('header > div > ul > li:nth-child(3)', 0, 0)
  })
  expected('Скрин дропдауна HOW WE WORK на 1280', () => {
    browser.assert.screenshotElement(
      '#__next > header > div > div',
      'Дропдаун HOW WE WORK 1280 EN'
    )
  })
})

testcase('Дропдаун SOLUTIONS 1280 EN', () => {
  step('Перейти на главную страницу', () => {
    browser.setWindowSize(1280, 1024).url(browser.launch_url + '/en')
  })
  step('Навести курсор на SOLUTIONS в хеддере', () => {
    browser.moveToElement('header > div > ul > li:nth-child(4)', 0, 0)
  })
  expected('Скрин дропдауна SOLUTIONS на 1280', () => {
    browser.assert.screenshotElement(
      '#__next > header > div > div',
      'Дропдаун SOLUTIONS 1280 EN'
    )
  })
})

testcase('Хеддер 1024 EN', () => {
  step('Перейти на главную страницу', () => {
    browser.setWindowSize(1024, 1024).url(browser.launch_url + '/en')
  })
  expected('Скрин хеддера на 1024', () => {
    browser.assert.screenshotElement('header', 'Хеддер на 1024 EN')
  })
})

testcase('Хеддер на странице вакансий без кнопки связи 1024 EN', () => {
  step('Перейти на главную страницу', () => {
    browser.setWindowSize(1024, 1024).url(browser.launch_url + '/en-sg/jobs')
  })
  expected(
    'Скрин хеддера на странице вакансий без кнопки связи 1024 EN',
    () => {
      browser.assert.screenshotElement(
        'header',
        'Хеддер на странице вакансий без кнопки связи 1024 EN'
      )
    }
  )
})

testcase('Дропдаун SERVICES 1024 EN', () => {
  step('Перейти на главную страницу', () => {
    browser.setWindowSize(1024, 1024).url(browser.launch_url + '/en')
  })
  step('Навести курсор на SERVICES в хеддере', () => {
    browser.moveToElement('header > div > ul > li:nth-child(1)', 0, 0)
  })
  expected('Скрин дропдауна УСЛУГИ на 1024', () => {
    browser.assert.screenshotElement(
      '#__next > header > div > div',
      'Дропдаун SERVICES 1024 EN'
    )
  })
})

testcase('Дропдаун INDUSTRIES 1024 EN', () => {
  step('Перейти на главную страницу', () => {
    browser.setWindowSize(1024, 1024).url(browser.launch_url + '/en')
  })
  step('Навести курсор на INDUSTRIES в хеддере', () => {
    browser.moveToElement('header > div > ul > li:nth-child(2)', 0, 0)
  })
  expected('Скрин дропдауна INDUSTRIES на 1024', () => {
    browser.assert.screenshotElement(
      '#__next > header > div > div',
      'Дропдаун INDUSTRIES 1024 EN'
    )
  })
})

testcase('Дропдаун HOW WE WORK 1024 EN', () => {
  step('Перейти на главную страницу', () => {
    browser.setWindowSize(1024, 1024).url(browser.launch_url + '/en')
  })
  step('Навести курсор на HOW WE WORK в хеддере', () => {
    browser.moveToElement('header > div > ul > li:nth-child(3)', 0, 0)
  })
  expected('Скрин дропдауна HOW WE WORK на 1024', () => {
    browser.assert.screenshotElement(
      '#__next > header > div > div',
      'Дропдаун HOW WE WORK 1024 EN'
    )
  })
})

testcase('Дропдаун SOLUTIONS 1024 EN', () => {
  step('Перейти на главную страницу', () => {
    browser.setWindowSize(1024, 1024).url(browser.launch_url + '/en')
  })
  step('Навести курсор на SOLUTIONS в хеддере', () => {
    browser.moveToElement('header > div > ul > li:nth-child(4)', 0, 0)
  })
  expected('Скрин дропдауна SOLUTIONS на 1024', () => {
    browser.assert.screenshotElement(
      '#__next > header > div > div',
      'Дропдаун SOLUTIONS 1024 EN'
    )
  })
})
