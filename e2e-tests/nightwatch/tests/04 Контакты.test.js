testcase('Переключение табов с регионами', () => {
  step('Переходим на страницу contacts', () => {
    browser
      .url(browser.launch_url + '/ru/contacts')
      .waitForElementPresent('[data-testid="contactUs:button.formSubmit"]')
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  expected('По умолчанию подсвечивается таб «‎Россия»', () => {
    browser
      .assert.screenshotElement(
        '[data-testid="Contacts:tab.ru"]',
        'активный таб(Россия)'
      )
  })

  expected('По умолчанию в плашке адрес российских офисов', () => {
    browser
      .assert.containsText(
        '[data-testid="Contacts:text:address.moscow"]',
        '22 БОЛЬШОЙ КОЗИХИНСКИЙ ПЕР., СТР. 2, ОФИС 28, Г. МОСКВА, 123001, РОССИЯ'
      )
      .assert.containsText(
        '[data-testid="Contacts:text:address.dzerzhinsky"]',
        '30 ЛЕСНАЯ УЛ., СТР. 1, ОФИС 303, Г. ДЗЕРЖИНСКИЙ, 140090, РОССИЯ'
      )
  })

  expected('Отображается кнопка бронирования звонка', () => {
    browser
      .waitForElementPresent('[data-testid="contactUs:button:bookACall.call"]')
  })

  expected('По умолчанию менеджер Анастасия Внученко', () => {
    browser
      .assert.containsText(
        '[data-testid="contactUs:text:bookACall:name"]',
        'Анастасия Внученко'
      )
      .assert.containsText(
        '[data-testid="contactUs:text:bookACall:position"]',
        'Региональный менеджер'
      )
      .assert.containsText(
        '[data-testid="contactUs:link:bookACall:email"]',
        'launch@csssr.com'
      )
      .assert.screenshotElement(
        '[data-testid="contactUs:picture:bookACall.avatar"]',
        'аватар(Анастасия Внученко)'
      )
  })

  step('Кликаем на таб Сингапур', () => {
    browser
      .click('[data-testid="Contacts:tab.sg"]')
  })

  expected('Подсветился таб «‎Сингапур»', () => {
    browser
      .assert.screenshotElement(
        '[data-testid="Contacts:tab.sg"]',
        'активный таб(Сингапур)'
      )
  })

  expected('В плашке отображается адрес головного офиса в Сингапуре', () => {
    browser
      .assert.containsText(
        '[data-testid="Contacts:text:address.singapore"]',
        '68 CIRCULAR ROAD,\n#02-01,\nSINGAPORE, 049422'
      )
  })

  expected('Не отображается кнопка бронирования звонка', () => {
    browser
      .waitForElementNotPresent('[data-testid="contactUs:button:bookACall.call"]')
  })

  expected('По умолчанию менеджер Анастасия Игнатенко', () => {
    browser
      .assert.containsText(
        '[data-testid="contactUs:text:bookACall:name"]',
        'Анастасия Игнатенко'
      )
      .assert.containsText(
        '[data-testid="contactUs:text:bookACall:position"]',
        'Региональный менеджер'
      )
      .assert.containsText(
        '[data-testid="contactUs:link:bookACall:email"]',
        'launch@csssr.com'
      )
      .assert.screenshotElement(
        '[data-testid="contactUs:picture:bookACall.avatar"]',
        'аватар(Анастасия Игнатенко)'
      )
  })

  step('Кликаем на таб «Эстония‎»', () => {
    browser
      .click('[data-testid="Contacts:tab.ee"]')
  })

  expected('Подсветился таб «Эстония‎»', () => {
    browser
      .assert.screenshotElement(
        '[data-testid="Contacts:tab.ee"]',
        'активный таб(Эстония)'
      )
  })

  expected('В плашке отображается адрес головного офиса в Эстонии', () => {
    browser
      .assert.containsText(
        '[data-testid="Contacts:text:address.estonia"]',
        '26 MAJAKA ST.,\nBLD.1, OFFICE 14,\nTALLINN, 11412, ESTONIA'
      )
  })

  expected('Не отображается кнопка бронирования звонка', () => {
    browser
      .waitForElementNotPresent('[data-testid="contactUs:button:bookACall.call"]')
  })

  expected('По умолчанию менеджер Анастасия Внученко', () => {
    browser
      .assert.containsText(
        '[data-testid="contactUs:text:bookACall:name"]',
        'Анастасия Внученко'
      )
      .assert.containsText(
        '[data-testid="contactUs:text:bookACall:position"]',
        'Региональный менеджер'
      )
      .assert.containsText(
        '[data-testid="contactUs:link:bookACall:email"]',
        'launch@csssr.com'
      )
      .assert.screenshotElement(
        '[data-testid="contactUs:picture:bookACall.avatar"]',
        'аватар(Анастасия Внученко)'
      )
  })
})

testcase('Смена типа запроса', () => {
  step('Переходим на страницу contacts', () => {
    browser
      .url(browser.launch_url + '/ru/contacts')
      .waitForElementPresent('[data-testid="contactUs:button.formSubmit"]')
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Кликаем на «‎Новый проект» в форме «‎Что бы вы хотели обсудить»', () => {
    browser.click('div:nth-child(1) > div > button')
  })

  expected('Открылся дропдаун', () => {
    browser.assert.screenshotElement(
      'section div.popup',
      'раскрытый дропдаун формы Что бы вы хотели обсудить'
    )
  })

  step('Выбираем пункт «Работа у нас» в дробдауне', () => {
    browser.click('[data-testid="Contacts:dropdownOption.job"]')
  })

  expected('В строке отображается тип запроса «Работа у нас»', () => {
    browser.assert.containsText(
      '[data-testid="Contacts:dropdown"]',
      'Работа у нас'
    )
  })

  expected('Отображается менеджер Виктория Зубарева', () => {
    browser
      .assert.containsText(
        '[data-testid="contactUs:text:bookACall:name"]',
        'Виктория Зубарева'
      )
      .assert.containsText(
        '[data-testid="contactUs:text:bookACall:position"]',
        'HR директор'
      )
      .assert.containsText(
        '[data-testid="contactUs:link:bookACall:email"]',
        'join@csssr.com'
      )
      .assert.screenshotElement(
        '[data-testid="contactUs:picture:bookACall.avatar"]',
        'аватар(Виктория Зубарева)'
      )
  })
})

testcase('Отправка заявки для Сингапура', () => {
  step('Переходим на страницу contacts', () => {
    browser
      .url(browser.launch_url + '/ru/contacts')
      .waitForElementPresent('[data-testid="contactUs:button.formSubmit"]')
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Кликаем на таб Сингапур', () => {
    browser
      .click('[data-testid="Contacts:tab.sg"]')
  })

  step('В форму вводим e-mail «test@csssr.io»', () => {
    browser.setValue('[data-testid="contactUs:field:contacts.email"]', 'test@csssr.io')
  })

  step('Вводим телефон «+0 123 456-78-90»', () => {
    browser.setValue('[data-testid="contactUs:field:contacts.phone"]', '+0 123 456-78-90')
  })

  step('Заполняем поле «Напишите нам пару строк»', () => {
    browser.setValue('[data-testid="contactUs:field:contacts.message"]', 'Отправлено автотестом')
  })

  step('Кликаем на кнопку «ОТПРАВИТЬ»', () => {
    browser.click('[data-testid="contactUs:button.formSubmit"]')
  })

  expected('Отображается сообщение об успехе отправки заявки', () => {
    browser
      .waitForElementPresent('[data-testid="contactUs:button.formSubmit"]')
      .waitForElementPresent('[data-testid="contactUs:text.successMessage"]')
      .assert.containsText(
        '[data-testid="contactUs:text.successMessage"]',
        'Успех!\nСовсем скоро мы с вами свяжемся.'
      )
  })
})

testcase('Отправка заявки для Эстонии', () => {
  step('Переходим на страницу contacts', () => {
    browser
      .url(browser.launch_url + '/ru/contacts')
      .waitForElementPresent('[data-testid="contactUs:button.formSubmit"]')
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Кликаем на таб Эстония', () => {
    browser
      .click('[data-testid="Contacts:tab.ee"]')
  })

  step('В форму вводим e-mail «test@csssr.io»', () => {
    browser.setValue('[data-testid="contactUs:field:contacts.email"]', 'test@csssr.io')
  })

  step('Вводим телефон «+0 123 456-78-90»', () => {
    browser.setValue('[data-testid="contactUs:field:contacts.phone"]', '+0 123 456-78-90')
  })

  step('Заполняем поле «Напишите нам пару строк»', () => {
    browser.setValue('[data-testid="contactUs:field:contacts.message"]', 'Отправлено автотестом')
  })

  step('Кликаем на кнопку «ОТПРАВИТЬ»', () => {
    browser.click('[data-testid="contactUs:button.formSubmit"]')
  })

  expected('Отображается сообщение об успехе отправки заявки', () => {
    browser
      .waitForElementPresent('[data-testid="contactUs:button.formSubmit"]')
      .waitForElementPresent('[data-testid="contactUs:text.successMessage"]')
      .assert.containsText(
        '[data-testid="contactUs:text.successMessage"]',
        'Успех!\nСовсем скоро мы с вами свяжемся.'
      )
  })
})

testcase('Отправка заявки для России', () => {
  step('Переходим на страницу contacts', () => {
    browser
      .url(browser.launch_url + '/ru/contacts')
      .waitForElementPresent('[data-testid="contactUs:button.formSubmit"]')
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  expected('По умолчанию выбран таб «‎Россия»', () => {
    browser
      .assert.screenshotElement(
        '[data-testid="Contacts:tab.ru"]',
        'активный таб(Россия)'
      )
  })

  step('В форму вводим e-mail «test@csssr.io»', () => {
    browser.setValue('[data-testid="contactUs:field:contacts.email"]', 'test@csssr.io')
  })

  step('Вводим телефон «+0 123 456-78-90»', () => {
    browser.setValue('[data-testid="contactUs:field:contacts.phone"]', '+0 123 456-78-90')
  })

  step('Заполняем поле «Напишите нам пару строк»', () => {
    browser.setValue('[data-testid="contactUs:field:contacts.message"]', 'Отправлено автотестом')
  })

  step('Кликаем на кнопку «ОТПРАВИТЬ»', () => {
    browser.click('[data-testid="contactUs:button.formSubmit"]')
  })

  expected('Отображается сообщение об успехе отправки заявки', () => {
    browser
      .waitForElementPresent('[data-testid="contactUs:button.formSubmit"]')
      .waitForElementPresent('[data-testid="contactUs:text.successMessage"]')
      .assert.containsText(
        '[data-testid="contactUs:text.successMessage"]',
        'Успех!\nСовсем скоро мы с вами свяжемся.'
      )
  })
})

testcase('Забронировать звонок для Россия', () => {
  step('Переходим на страницу contacts', () => {
    browser
      .setWindowSize(1920, 1080)
      .url(browser.launch_url + '/ru/contacts')
      .waitForElementPresent('[data-testid="contactUs:button.formSubmit"]')
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  expected('По умолчанию выбран таб «‎Россия»', () => {
    browser
      .assert.screenshotElement(
        '[data-testid="Contacts:tab.ru"]',
        'активный таб(Россия)'
      )
  })

  step('Кликаем на кнопку [Забронировать звонок] в блоке с менеджером', () => {
    browser.click('[data-testid="contactUs:button:bookACall.call"]')
  })

  expected('Открылся попап Calendly', () => {
    browser.waitForElementPresent('div.calendly-popup iframe')
  })
})

testcase('Оправка заявки для HR', () => {
  step('Переходим на страницу contacts', () => {
    browser
      .url(browser.launch_url + '/ru/contacts')
      .waitForElementPresent('[data-testid="contactUs:button.formSubmit"]')
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  expected('По умолчанию выбран таб «‎Россия»', () => {
    browser
      .assert.screenshotElement(
        '[data-testid="Contacts:tab.ru"]',
        'активный таб(Россия)'
      )
  })

  step('Кликаем на «‎Новый проект» в форме «‎Что бы вы хотели обсудить»', () => {
    browser.click('div:nth-child(1) > div > button')
  })

  expected('Открылся дропдаун', () => {
    browser.assert.screenshotElement(
      'section div.popup',
      'раскрытый дропдаун формы Что бы вы хотели обсудить'
    )
  })

  step('Выбираем пункт «Работа у нас» в дробдауне', () => {
    browser.click('[data-testid="Contacts:dropdownOption.job"]')
  })

  step('В форму вводим e-mail «test@csssr.io»', () => {
    browser.setValue('[data-testid="contactUs:field:contacts.email"]', 'test@csssr.io')
  })

  step('Вводим телефон «+0 123 456-78-90»', () => {
    browser.setValue('[data-testid="contactUs:field:contacts.phone"]', '+0 123 456-78-90')
  })

  step('Заполняем поле «Напишите нам пару строк»', () => {
    browser.setValue('[data-testid="contactUs:field:contacts.message"]', 'Отправлено автотестом')
  })

  step('Кликаем на кнопку «ОТПРАВИТЬ»', () => {
    browser.click('[data-testid="contactUs:button.formSubmit"]')
  })

  expected('Отображается сообщение об успехе отправки заявки', () => {
    browser
      .waitForElementPresent('[data-testid="contactUs:button.formSubmit"]')
      .waitForElementPresent('[data-testid="contactUs:text.successMessage"]')
      .assert.containsText(
        '[data-testid="contactUs:text.successMessage"]',
        'Успех!\nСовсем скоро мы с вами свяжемся.'
      )
  })
})

testcase('Валидация обязательных полей', () => {
  step('Переходим на страницу contacts', () => {
    browser
      .url(browser.launch_url + '/ru/contacts')
      .waitForElementPresent('[data-testid="contactUs:button.formSubmit"]')
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  expected('По умолчанию выбран таб «‎Россия»', () => {
    browser.assert.screenshotElement(
      '[data-testid="Contacts:tab.ru"]',
      'активный таб(Россия)'
    )
  })

  step('Кликаем на кнопку «ОТПРАВИТЬ»', () => {
    browser.click('[data-testid="contactUs:button.formSubmit"]')
  })

  expected('Отображается алерт для обязательного поля', () => {
    browser.waitForElementPresent('form > div:nth-child(1) > label')
  })
})
