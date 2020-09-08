const ANIMATION_DURATION_IN_MS = 800

testcase.skip('Воспроизведение видео при наведении на лого CSSSR (RU)', () => {
  step('Переходим на главную страницу(RU)', () => {
    browser
      .url(browser.launch_url + '/ru')
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Скроллим к футеру', () => {
    browser
      .moveToElement('[data-testid="Footer:link.language-link"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  step('Наводим курсор на лого в футере', () => {
    browser
      .moveToElement('[data-testid="Footer.link.logo"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('По всей ширине верхней части футера отображается видео', () => {
    browser
      .assert.screenshotElement('[data-testid="Footer:block.top-content"]')
  })
})

testcase('Увеличение пинов на карте при наведении на адрес (RU)', () => {
  step('Переходим на главную страницу(RU)', () => {
    browser
      .url(browser.launch_url + '/ru')
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Скроллим к футеру', () => {
    browser
      .moveToElement('[data-testid="Footer:link.language-link"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
      .setWindowSize(1920, 4000)
  })

  step('Наводим курсор на любой адрес в футере', () => {
    browser
      .moveToElement('[data-testid="Footer.text.address-estonia"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('Увеличивается пин на карте справа', () => {
    browser
      .assert.screenshotElement('[data-testid="Footer:block.map"]', 'карта(увеличен пин Эстонии)')
  })
})

testcase('Двойной футер (RU)', () => {
  step('Переходим на главную страницу(RU)', () => {
    browser
      .url(browser.launch_url + '/ru')
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Скроллим к футеру', () => {
    browser
      .moveToElement('[data-testid="Footer:link.language-link"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
      .setWindowSize(1920, 4000)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('Футер состоит из двух разъезжающихся частей', () => {
    browser
      .assert.screenshotElement('[data-testid="Footer:block.top-content"]', 'двойной футер(первая часть)')
      .assert.screenshotElement('[data-testid="Footer:block.double-bottom"]', 'двойной футер(вторая часть)', {
        allowedMisMatchPercentage: 30,
      })
  })
})

testcase('Кликабельный e-mail под лого(проверка атрибута) (RU)', () => {
  step('Переходим на главную страницу(RU)', () => {
    browser
      .url(browser.launch_url + '/ru')
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Скроллим к футеру', () => {
    browser
      .moveToElement('[data-testid="Footer:link.language-link"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('Для launch@csssr.com верная ссылка для открытия почтового клиента', () => {
    browser.getAttribute('[data-testid="Footer.link.email"]', 'href', function (result) {
      if (result.value !== 'mailto:launch@csssr.com') {
        throw new Error(`Некорректная ссылка для email в футере( ${result.value} )`)
      }
    })
  })
})

testcase('Кликабельный e-mail под лого на страницах вакансий(проверка атрибута) (RU)', () => {
  step('Переходим на страницу вакансии(RU)', () => {
    browser
      .url(browser.launch_url + '/ru-ru/jobs')
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Скроллим к футеру', () => {
    browser
      .moveToElement('[data-testid="Footer:link.language-link"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('Для join@csssr.com верная ссылка для открытия почтового клиента', () => {
    browser.getAttribute('[data-testid="Footer.link.email"]', 'href', function (result) {
      if (result.value !== 'mailto:join@csssr.com') {
        throw new Error(`Некорректная ссылка для email в футере( ${result.value} )`)
      }
    })
  })
})

testcase('Кликабельные телефоны(проверка атрибута) (RU)', () => {
  step('Переходим на главную страницу(RU)', () => {
    browser
      .url(browser.launch_url + '/ru')
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Скроллим к футеру', () => {
    browser
      .moveToElement('[data-testid="Footer:link.language-link"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
      .setWindowSize(1920, 4000)
  })

  expected('Для Сингапура верная ссылка для открытия приложения для звонка', () => {
    browser.getAttribute('[data-testid="Footer.link.tel-singapore"]', 'href', function (result) {
      if (result.value !== 'tel:+65 3159 4531') {
        throw new Error(`Некорректный номер телефона в футере( ${result.value} )`)
      }
    })
  })

  expected('Для России верные ссылки для открытия приложения для звонка', () => {
    browser.getAttribute('[data-testid="Footer.link.tel-russia"]', 'href', function (result) {
      if (result.value !== 'tel:+7 (499) 113-16-17') {
        throw new Error(`Некорректный номер телефона в футере( ${result.value} )`)
      }
    })

    browser.getAttribute('[data-testid="Footer.link.tel-russia_2"]', 'href', function (result) {
      if (result.value !== 'tel:+7 (499) 113-16-17') {
        throw new Error(`Некорректный номер телефона в футере( ${result.value} )`)
      }
    })
  })
})

testcase('Отображение времени для офисов (RU)', () => {
  step('Переходим на главную страницу(RU)', () => {
    browser
      .url(browser.launch_url + '/ru')
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Скроллим к футеру', () => {
    browser
      .moveToElement('[data-testid="Footer:link.language-link"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
      .setWindowSize(1920, 4000)
  })

  expected('В футере отображается региональное время для каждого офиса под адресом', () => {
    browser.getText('css selector', 'div.address-item.address_russia > p.time.css-129mrjy-Text.e1rn94vo0', function (result) {
      var time = new Date()
      if (result.value.replace(/^0+/, '') !== time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })) {
        throw new Error(`Некорректный время в футере( ${result.value} )`)
      }
    })

    browser.getText('css selector', 'div.address-item.address_russia_2 > p.time.css-129mrjy-Text.e1rn94vo0', function (result) {
      var time = new Date()
      if (result.value.replace(/^0+/, '') !== time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })) {
        throw new Error(`Некорректный время в футере( ${result.value} )`)
      }
    })

    browser.getText('css selector', 'div.address-item.address_estonia > p.time.css-129mrjy-Text.e1rn94vo0', function (result) {
      var time = new Date()
      if (result.value.replace(/^0+/, '') !== time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })) {
        throw new Error(`Некорректный время в футере( ${result.value} )`)
      }
    })
  })
})

testcase('Переключение языка (RU)', () => {
  step('Переходим на главную страницу(RU)', () => {
    browser
      .url(browser.launch_url + '/ru')
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Скроллим к футеру', () => {
    browser
      .moveToElement('[data-testid="Footer:link.language-link"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  step('Кликамем на кнопку переключения EN', () => {
    browser.click('[data-testid="Footer:link.language-link"]')
  })

  expected('Переход на страницу EN локали', () => {
    browser
      .waitForElementPresent('[data-testid="Header:nav:button.solutions"]')
      .assert.urlEquals(browser.launch_url + '/en')
  })

  expected('На кнопке смены языка отображаются буквы RU', () => {
    browser.assert.containsText(
      '[data-testid="Footer:link.language-link"]',
      'RU'
    )
  })
})

testcase('Отображение контактной информации в футере (RU)', () => {
  step('Переходим на главную страницу(RU)', () => {
    browser
      .url(browser.launch_url + '/ru')
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Скроллим к футеру', () => {
    browser
      .moveToElement('[data-testid="Footer:link.language-link"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
      .setWindowSize(1920, 4000)
  })

  expected('В футере отображаются контактная информация офисов', () => {
    browser
      .assert.containsText(
        '[data-testid="Footer.text.address-singapore"]',
        '68 Circular Road,\n#02-01,\nSingapore, 049422'
      )
      .assert.containsText(
        '[data-testid="Footer.text.address-russia"]',
        `22 Большой Козихинский пер.,\nстр. 2, офис 28,\nг. Москва, 123001,\nРоссия`
      )
      .assert.containsText(
        '[data-testid="Footer.text.address-russia_2"]',
        `30 Лесная ул.,\nстр. 1, офис 303,\nг. Дзержинский, 140090,\nРоссия`
      )
      .assert.containsText(
        '[data-testid="Footer.text.address-estonia"]',
        '26 Majaka St.,\nbld.1, office 14,\nTallinn, 11412,\nEstonia'
      )
      .assert.containsText(
        '[data-testid="Footer.link.tel-singapore"]',
        `+65 3159 4531`
      )
      .assert.containsText(
        '[data-testid="Footer.link.tel-russia"]',
        `+7 (499) 113-16-17`
      )
      .assert.containsText(
        '[data-testid="Footer.link.tel-russia_2"]',
        '+7 (499) 113-16-17'
      )
  })
})

testcase('Отображение иконок социальных сетей в футере (RU)', () => {
  step('Переходим на главную страницу(RU)', () => {
    browser
      .url(browser.launch_url + '/ru')
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Скроллим к футеру', () => {
    browser
      .moveToElement('[data-testid="Footer:link.language-link"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('В футере отображаются иконка Facebook', () => {
    browser
      .waitForElementPresent('[data-testid="Footer:link.social-facebook"]')
  })

  expected('В футере отображаются иконка LinkdIn', () => {
    browser
      .waitForElementPresent('[data-testid="Footer:link.social-linkedin"]')
  })

  expected('В футере отображаются иконка Instagram', () => {
    browser
      .waitForElementPresent('[data-testid="Footer:link.social-instagram"]')
  })

  expected('В футере отображаются иконка YouTube', () => {
    browser
      .waitForElementPresent('[data-testid="Footer:link.social-youtube"]')
  })

  expected('В футере отображаются иконка Sound Cloud', () => {
    browser
      .waitForElementPresent('[data-testid="Footer:link.social-soundcloud"]')
  })

  expected('В футере отображаются иконка Telegram', () => {
    browser
      .waitForElementPresent('[data-testid="Footer:link.social-telegram"]')
  })

  expected('В футере отображаются иконка Twitter', () => {
    browser
      .waitForElementPresent('[data-testid="Footer:link.social-twitter"]')
  })

  expected('В футере отображаются иконка VK', () => {
    browser
      .waitForElementPresent('[data-testid="Footer:link.social-vk"]')
  })
})

testcase('Отображение ссылок (RU)', () => {
  step('Переходим на главную страницу(RU)', () => {
    browser
      .url(browser.launch_url + '/ru')
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Скроллим к футеру', () => {
    browser
      .moveToElement('[data-testid="Footer:link.language-link"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('В футере отображаются соответствующие ссылки', () => {
    browser
      .assert.containsText(
        '[data-testid="Footer:nav:link.outsourcing"]',
        'Aутсорсинг'
      )
      .assert.containsText(
        '[data-testid="Footer:nav:link.mvp"]',
        'MVP'
      )
      .assert.containsText(
        '[data-testid="Footer:nav:link.backend"]',
        'Бэкенд\nи DevOps'
      )
      .assert.containsText(
        '[data-testid="Footer:nav:link.fintech"]',
        'Финтех'
      )
      .assert.containsText(
        '[data-testid="Footer:nav:link.information"]',
        'ИТ компании'
      )
      .assert.containsText(
        '[data-testid="Footer:nav:link.eCommerce"]',
        'Электронная\nкоммерция'
      )
      .assert.containsText(
        '[data-testid="Footer:nav:link.mediaAndMarketing"]',
        'Медиа и маркетинг'
      )
      .assert.containsText(
        '[data-testid="Footer:nav:link.technologies"]',
        'Технологии'
      )
      .assert.containsText(
        '[data-testid="Footer:nav:link.wayOfWork"]',
        'Процессы'
      )
      .assert.containsText(
        '[data-testid="Footer:nav:link.coreValues"]',
        'Ценности'
      )
      .assert.containsText(
        '[data-testid="Footer:nav:link.careers"]',
        'Вакансии'
      )
      .assert.containsText(
        '[data-testid="Footer:nav:link.blog"]',
        'Блог'
      )
      .assert.containsText(
        '[data-testid="Footer:nav:link.contacts"]',
        'Контакты'
      )
  })
})

testcase('Переход по ссылкам (RU)', () => {
  step('Переходим на главную страницу(RU)', () => {
    browser
      .url(browser.launch_url + '/ru')
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Скроллим к футеру', () => {
    browser
      .moveToElement('[data-testid="Footer:link.language-link"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  step('Кликаем на текстовую ссылку «Аутсорс»', () => {
    browser
      .click('[data-testid="Footer:nav:link.outsourcing"]')
  })

  expected('Сработал переход на страницу «Аутсорсинг веб-разработки»', () => {
    browser
      .waitForElementPresent('[data-testid="Outsourcing:button:contactUs.hero"]')
      .assert.urlEquals(browser.launch_url + '/ru/service/outsourcing-front-end')
  })

  step('Кликаем на текстовую ссылку «MVP»', () => {
    browser
      .moveToElement('[data-testid="Footer:link.language-link"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
      .click('[data-testid="Footer:nav:link.mvp"]')
  })

  expected('Сработал переход на страницу «MVP Разработка»', () => {
    browser
      .waitForElementPresent('[data-testid="MVP:button:contactUs"]')
      .assert.urlEquals(browser.launch_url + '/ru/service/mvp-development')
  })

  step('Кликаем на текстовую ссылку «Бэкенд и DevOps»', () => {
    browser
      .moveToElement('[data-testid="Footer:link.language-link"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
      .click('[data-testid="Footer:nav:link.backend"]')
  })

  expected('Сработал переход на страницу «Бэкенд и DevOps»', () => {
    browser
      .waitForElementPresent('[data-testid="BackendAndDevops:button:contactUs"]')
      .assert.urlEquals(browser.launch_url + '/ru/service/back-end-and-devops')
  })

  step('Кликаем на текстовую ссылку «Финтех»', () => {
    browser
      .moveToElement('[data-testid="Footer:link.language-link"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
      .click('[data-testid="Footer:nav:link.fintech"]')
  })

  expected('Сработал переход на страницу «Финтех»', () => {
    browser
      .waitForElementPresent('[data-testid="Industry:button.contactUs"]')
      .assert.urlEquals(browser.launch_url + '/ru/industry/fintech')
  })

  step('Кликаем на текстовую ссылку «ИТ компании»', () => {
    browser
      .moveToElement('[data-testid="Footer:link.language-link"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
      .click('[data-testid="Footer:nav:link.information"]')
  })

  expected('Сработал переход на страницу «ИТ компании»', () => {
    browser
      .waitForElementPresent('[data-testid="Industry:button.contactUs"]')
      .assert.urlEquals(browser.launch_url + '/ru/industry/information-technology')
  })

  step('Кликаем на текстовую ссылку «Электронная коммерция»', () => {
    browser
      .moveToElement('[data-testid="Footer:link.language-link"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
      .click('[data-testid="Footer:nav:link.eCommerce"]')
  })

  expected('Сработал переход на страницу «Электронная коммерция»', () => {
    browser
      .waitForElementPresent('[data-testid="Industry:button.contactUs"]')
      .assert.urlEquals(browser.launch_url + '/ru/industry/ecommerce')
  })

  step('Кликаем на текстовую ссылку «Медиа и Маркетинг»', () => {
    browser
      .moveToElement('[data-testid="Footer:link.language-link"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
      .click('[data-testid="Footer:nav:link.mediaAndMarketing"]')
  })

  expected('Сработал переход на страницу «Медиа и Маркетинг»', () => {
    browser
      .waitForElementPresent('[data-testid="Industry:button.contactUs"]')
      .assert.urlEquals(browser.launch_url + '/ru/industry/media-and-marketing')
  })

  step('Кликаем на текстовую ссылку «Технологии»', () => {
    browser
      .moveToElement('[data-testid="Footer:link.language-link"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
      .click('[data-testid="Footer:nav:link.technologies"]')
  })

  expected('Сработал переход на страницу «Технологии»', () => {
    browser
      .waitForElementPresent('p.javascript.css-1c3td5m-Text.e1rn94vo0')
      .assert.urlEquals(browser.launch_url + '/ru/tech-stack')
  })

  step('Кликаем на текстовую ссылку «Процессы»', () => {
    browser
      .moveToElement('[data-testid="Footer:link.language-link"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
      .click('[data-testid="Footer:nav:link.wayOfWork"]')
  })

  expected('Сработал переход на страницу «Процессы»', () => {
    browser
      .waitForElementPresent('section.css-11btgf3.esejn7q0 > div > div.header > span')
      .assert.urlEquals(browser.launch_url + '/ru/way-of-work')
  })

  step('Кликаем на текстовую ссылку «Ценности»', () => {
    browser
      .moveToElement('[data-testid="Footer:link.language-link"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
      .click('[data-testid="Footer:nav:link.coreValues"]')
  })

  expected('Сработал переход на страницу «Ценности»', () => {
    browser
      .waitForElementPresent('div.ebnw30q0.ux.css-6y39fr-Grid.e1kw6gvb0 img')
      .assert.urlEquals(browser.launch_url + '/ru/core-values')
  })

  step('Кликаем на текстовую ссылку «Вакансии»', () => {
    browser
      .moveToElement('[data-testid="Footer:link.language-link"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
      .click('[data-testid="Footer:nav:link.careers"]')
  })

  expected('Сработал переход на страницу «Вакансии»', () => {
    browser
      .waitForElementPresent('[data-testid="Jobs:list.item-0"]')
      .assert.urlEquals(browser.launch_url + '/ru-ru/jobs')
  })

  step('Кликаем на текстовую ссылку «Контакты»', () => {
    browser
      .moveToElement('[data-testid="Footer:link.language-link"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
      .click('[data-testid="Footer:nav:link.contacts"]')
  })

  expected('Сработал переход на страницу «Контакты»', () => {
    browser
      .waitForElementPresent('[data-testid="contactUs:button.formSubmit"]')
      .assert.urlEquals(browser.launch_url + '/ru/contacts')
  })
})

testcase('Переключение языка (EN)', () => {
  step('Переходим на главную страницу(EN)', () => {
    browser
      .url(browser.launch_url + '/en')
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Скроллим к футеру', () => {
    browser
      .moveToElement('[data-testid="Footer:link.language-link"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  step('Кликамем на кнопку переключения RU', () => {
    browser.click('[data-testid="Footer:link.language-link"]')
  })

  expected('Переход на страницу RU локали', () => {
    browser
      .waitForElementPresent('[data-testid="Home:link.feature2"]')
      .assert.urlEquals(browser.launch_url + '/ru')
  })

  expected('На кнопке смены языка отображаются буквы EN', () => {
    browser.assert.containsText(
      '[data-testid="Footer:link.language-link"]',
      'EN'
    )
  })
})

testcase('Отображение контактной информации в футере (EN)', () => {
  step('Переходим на главную страницу(EN)', () => {
    browser
      .url(browser.launch_url + '/en')
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Скроллим к футеру', () => {
    browser
      .moveToElement('[data-testid="Footer:link.language-link"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
      .setWindowSize(1920, 4000)
  })

  expected('В футере отображаются контактная информация офисов', () => {
    browser
      .assert.containsText(
        '[data-testid="Footer.text.address-singapore"]',
        '68 Circular Road,\n#02-01,\nSingapore, 049422'
      )
      .assert.containsText(
        '[data-testid="Footer.text.address-russia"]',
        `22 Bol'shoj Kozihinskij Lane,\nbld. 2, office 28,\nMoscow, 123001,\nRussia`
      )
      .assert.containsText(
        '[data-testid="Footer.text.address-russia_2"]',
        `30 Lesnaya St.,\nbld. 1, office 303,\nDzerzhinsky, 140090,\nRussia`
      )
      .assert.containsText(
        '[data-testid="Footer.text.address-estonia"]',
        '26 Majaka St.,\nbld.1, office 14,\nTallinn, 11412,\nEstonia'
      )
      .assert.containsText(
        '[data-testid="Footer.link.tel-singapore"]',
        `+65 3159 4531`
      )
      .assert.containsText(
        '[data-testid="Footer.link.tel-russia"]',
        `+7 (499) 113-16-17`
      )
      .assert.containsText(
        '[data-testid="Footer.link.tel-russia_2"]',
        '+7 (499) 113-16-17'
      )
  })
})

testcase('Отображение иконок социальных сетей в футере (EN)', () => {
  step('Переходим на главную страницу(EN)', () => {
    browser
      .url(browser.launch_url + '/en')
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Скроллим к футеру', () => {
    browser
      .moveToElement('[data-testid="Footer:link.language-link"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('В футере отображаются иконка Facebook', () => {
    browser
      .waitForElementPresent('[data-testid="Footer:link.social-facebook"]')
  })

  expected('В футере отображаются иконка LinkdIn', () => {
    browser
      .waitForElementPresent('[data-testid="Footer:link.social-linkedin"]')
  })

  expected('В футере отображаются иконка Instagram', () => {
    browser
      .waitForElementPresent('[data-testid="Footer:link.social-instagram"]')
  })

  expected('В футере отображаются иконка YouTube', () => {
    browser
      .waitForElementPresent('[data-testid="Footer:link.social-youtube"]')
  })
})

testcase('Отображение ссылок (EN)', () => {
  step('Переходим на главную страницу(EN)', () => {
    browser
      .url(browser.launch_url + '/en')
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Скроллим к футеру', () => {
    browser
      .moveToElement('[data-testid="Footer:link.language-link"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('В футере отображаются соответствующие ссылки', () => {
    browser
      .assert.containsText(
        '[data-testid="Footer:nav:link.outsourcing"]',
        'Web Development'
      )
      .assert.containsText(
        '[data-testid="Footer:nav:link.express"]',
        'PSD to HTML'
      )
      .assert.containsText(
        '[data-testid="Footer:nav:link.mvp"]',
        'MVP'
      )
      .assert.containsText(
        '[data-testid="Footer:nav:link.backend"]',
        'Back-end\nand DevOps'
      )
      .assert.containsText(
        '[data-testid="Footer:nav:link.fintech"]',
        'Fintech'
      )
      .assert.containsText(
        '[data-testid="Footer:nav:link.information"]',
        'IT companies'
      )
      .assert.containsText(
        '[data-testid="Footer:nav:link.eCommerce"]',
        'E-Commerce'
      )
      .assert.containsText(
        '[data-testid="Footer:nav:link.mediaAndMarketing"]',
        'Media and marketing'
      )
      .assert.containsText(
        '[data-testid="Footer:nav:link.technologies"]',
        'Technologies'
      )
      .assert.containsText(
        '[data-testid="Footer:nav:link.wayOfWork"]',
        'Process'
      )
      .assert.containsText(
        '[data-testid="Footer:nav:link.coreValues"]',
        'Core values'
      )
      .assert.containsText(
        '[data-testid="Footer:nav:link.lms"]',
        'Modular LMS system'
      )
      .assert.containsText(
        '[data-testid="Footer:nav:link.tracker"]',
        'Time-tracking software'
      )
      .assert.containsText(
        '[data-testid="Footer:nav:link.careers"]',
        'Careers'
      )
      .assert.containsText(
        '[data-testid="Footer:nav:link.blog"]',
        'Blog'
      )
      .assert.containsText(
        '[data-testid="Footer:nav:link.contacts"]',
        'Contacts'
      )
  })
})

testcase('Переход по ссылкам (EN)', () => {
  step('Переходим на главную страницу(EN)', () => {
    browser
      .url(browser.launch_url + '/en')
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Скроллим к футеру', () => {
    browser
      .moveToElement('[data-testid="Footer:link.language-link"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  step('Кликаем на текстовую ссылку «Web Development»', () => {
    browser
      .click('[data-testid="Footer:nav:link.outsourcing"]')
  })

  expected('Сработал переход на страницу «Web Development Outsourcing»', () => {
    browser
      .waitForElementPresent('[data-testid="Outsourcing:button:contactUs.hero"]')
      .assert.urlEquals(browser.launch_url + '/en/service/outsourcing-front-end')
  })

  step('Кликаем на текстовую ссылку «PSD to HTML»', () => {
    browser
      .moveToElement('[data-testid="Footer:link.language-link"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
      .click('[data-testid="Footer:nav:link.express"]')
  })

  expected('Сработал переход на страницу «Express Web Development»', () => {
    browser
      .waitForElementPresent('[data-testid="Express:link.greeting"]')
      .assert.urlEquals(browser.launch_url + '/en/service/express-front-end')
  })

  step('Кликаем на текстовую ссылку «MVP»', () => {
    browser
      .moveToElement('[data-testid="Footer:link.language-link"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
      .click('[data-testid="Footer:nav:link.mvp"]')
  })

  expected('Сработал переход на страницу «CSSSR MVP Development»', () => {
    browser
      .waitForElementPresent('[data-testid="MVP:button:contactUs"]')
      .assert.urlEquals(browser.launch_url + '/en/service/mvp-development')
  })

  step('Кликаем на текстовую ссылку «Back-end and DevOps»', () => {
    browser
      .moveToElement('[data-testid="Footer:link.language-link"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
      .click('[data-testid="Footer:nav:link.backend"]')
  })

  expected('Сработал переход на страницу «Back-end and DevOps»', () => {
    browser
      .waitForElementPresent('[data-testid="BackendAndDevops:button:contactUs"]')
      .assert.urlEquals(browser.launch_url + '/en/service/back-end-and-devops')
  })

  step('Кликаем на текстовую ссылку «Fintech»', () => {
    browser
      .moveToElement('[data-testid="Footer:link.language-link"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
      .click('[data-testid="Footer:nav:link.fintech"]')
  })

  expected('Сработал переход на страницу «Fintech»', () => {
    browser
      .waitForElementPresent('[data-testid="Industry:button.contactUs"]')
      .assert.urlEquals(browser.launch_url + '/en/industry/fintech')
  })

  step('Кликаем на текстовую ссылку «IT companies»', () => {
    browser
      .moveToElement('[data-testid="Footer:link.language-link"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
      .click('[data-testid="Footer:nav:link.information"]')
  })

  expected('Сработал переход на страницу «IT companies»', () => {
    browser
      .waitForElementPresent('[data-testid="Industry:button.contactUs"]')
      .assert.urlEquals(browser.launch_url + '/en/industry/information-technology')
  })

  step('Кликаем на текстовую ссылку «E-Commerce»', () => {
    browser
      .moveToElement('[data-testid="Footer:link.language-link"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
      .click('[data-testid="Footer:nav:link.eCommerce"]')
  })

  expected('Сработал переход на страницу «E-Commerce»', () => {
    browser
      .waitForElementPresent('[data-testid="Industry:button.contactUs"]')
      .assert.urlEquals(browser.launch_url + '/en/industry/ecommerce')
  })

  step('Кликаем на текстовую ссылку «Media & Marketing»', () => {
    browser
      .moveToElement('[data-testid="Footer:link.language-link"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
      .click('[data-testid="Footer:nav:link.mediaAndMarketing"]')
  })

  expected('Сработал переход на страницу «Media & Marketing»', () => {
    browser
      .waitForElementPresent('[data-testid="Industry:button.contactUs"]')
      .assert.urlEquals(browser.launch_url + '/en/industry/media-and-marketing')
  })

  step('Кликаем на текстовую ссылку «Technologies»', () => {
    browser
      .moveToElement('[data-testid="Footer:link.language-link"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
      .click('[data-testid="Footer:nav:link.technologies"]')
  })

  expected('Сработал переход на страницу «Technologies»', () => {
    browser
      .waitForElementPresent('p.javascript.css-1c3td5m-Text.e1rn94vo0')
      .assert.urlEquals(browser.launch_url + '/en/tech-stack')
  })

  step('Кликаем на текстовую ссылку «Process»', () => {
    browser
      .moveToElement('[data-testid="Footer:link.language-link"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
      .click('[data-testid="Footer:nav:link.wayOfWork"]')
  })

  expected('Сработал переход на страницу «Process»', () => {
    browser
      .waitForElementPresent('section.css-11btgf3.esejn7q0 > div > div.header > span')
      .assert.urlEquals(browser.launch_url + '/en/way-of-work')
  })

  step('Кликаем на текстовую ссылку «Core values»', () => {
    browser
      .moveToElement('[data-testid="Footer:link.language-link"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
      .click('[data-testid="Footer:nav:link.coreValues"]')
  })

  expected('Сработал переход на страницу «Core values»', () => {
    browser
      .waitForElementPresent('div.ebnw30q0.ux.css-6y39fr-Grid.e1kw6gvb0 img')
      .assert.urlEquals(browser.launch_url + '/en/core-values')
  })

  step('Кликаем на текстовую ссылку «Modular LMS system»', () => {
    browser
      .moveToElement('[data-testid="Footer:link.language-link"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
      .click('[data-testid="Footer:nav:link.lms"]')
  })

  expected('Сработал переход на страницу «Modular LMS system»', () => {
    browser
      .waitForElementPresent('article > div.banner > div > button')
      .assert.urlEquals(browser.launch_url + '/en/solutions/lms')
  })

  step('Кликаем на текстовую ссылку «Careers»', () => {
    browser
      .moveToElement('[data-testid="Footer:link.language-link"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
      .click('[data-testid="Footer:nav:link.careers"]')
  })

  expected('Сработал переход на страницу «Careers»', () => {
    browser
      .waitForElementPresent('[data-testid="Jobs:list.item-0"]')
      .assert.urlEquals(browser.launch_url + '/en-us/jobs')
  })

  step('Кликаем на текстовую ссылку «Contacts»', () => {
    browser
      .moveToElement('[data-testid="Footer:link.language-link"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
      .click('[data-testid="Footer:nav:link.contacts"]')
  })

  expected('Сработал переход на страницу «Contacts»', () => {
    browser
      .waitForElementPresent('[data-testid="contactUs:button.formSubmit"]')
      .assert.urlEquals(browser.launch_url + '/en/contacts')
  })
})

testcase('Переход по ссылке Time-tracking software (EN)', () => {
  step('Переходим на главную страницу(EN)', () => {
    browser
      .url(browser.launch_url + '/en')
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Скроллим к футеру', () => {
    browser
      .moveToElement('[data-testid="Footer:link.language-link"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  step('Кликаем на текстовую ссылку «Time-tracking software»', () => {
    browser.click('[data-testid="Footer:nav:link.tracker"]')
  })

  expected('В новой вкладке открылась страница Трекера', () => {
    browser.windowHandles(function (result) {
      var handle = result.value[1]
      browser.switchWindow(handle)
    })
    browser.assert.urlEquals('https://tracker.csssr.com/')
  })
})

testcase('Переход по ссылке Blog (EN)', () => {
  step('Переходим на главную страницу(EN)', () => {
    browser
      .url(browser.launch_url + '/en')
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Скроллим к футеру', () => {
    browser
      .moveToElement('[data-testid="Footer:link.language-link"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  step('Кликаем на текстовую ссылку «Blog»', () => {
    browser.click('[data-testid="Footer:nav:link.blog"]')
  })

  expected('В новой вкладке открылась главная страница Блога', () => {
    browser.windowHandles(function (result) {
      var handle = result.value[1]
      browser.switchWindow(handle)
    })
    browser.assert.urlEquals('https://blog.csssr.com/en')
  })
})
