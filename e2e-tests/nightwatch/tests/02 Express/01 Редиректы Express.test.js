const ANIMATION_DURATION_IN_MS = 800

testcase('Редирект на Главную страницу RU c ru/express', () => {
  step('Переходим на страницу ru/express', () => {
    browser.url(browser.launch_url + '/ru/express')
  })

  expected('Сработал редирект на Главную страницу RU', () => {
    browser
      .waitForElementPresent('[testid="contact:button.callbackForm.submit"]')
      .assert.urlEquals(browser.launch_url + '/ru')
  })
})

testcase('Редирект на страницу Express Development c csssr.com/en-sg/express + https', () => {
  step('Переходим на страницу express.csssr.com', () => {
    browser.url('https://csssr.com/en-sg/express')
  })

  expected('Сработал редирект на страницу Express Development', () => {
    browser
      .waitForElementPresent('[data-testid="Express:link.greeting"]')
      .assert.urlEquals('https://csssr.com/en/service/express-front-end')
  })
})

testcase('Отправка заявки через кнопку связи в хеддере(en/service/express-front-end)', () => {
  step('Переходим на страницу express-front-end', () => {
    browser
      .setWindowSize(1920, 1080)
      .url(browser.launch_url + '/en/service/express-front-end')
      .waitForElementPresent('[data-testid="Express:link.greeting"]')
  })

  step('Кликаем на кнопку [Contact us] в хеддере', () => {
    browser
      .click('[data-testid="Header:button.contactUs"]')
  })

  expected('Открылась форма связи', () => {
    browser
      .waitForElementPresent('[name="contact-modal"]')
      .assert.screenshotElement(
        '[name="contact-modal"]',
        'форма нанять нас(пустая)'
      )
  })

  step('В инпут «YOUR NAME» вводим «Test»', () => {
    browser.setValue('[data-testid="contact-modal:field:callbackForm.name"]', 'Test')
  })

  step('В инпут «PHONE (OPTIONAL)» вводим «+0 123 456 78 90»', () => {
    browser.setValue('[data-testid="contact-modal:field:callbackForm.phone"]', '+0 123 456 78 90')
  })

  step('В инпут «E-MAIL» вводим «test@csssr.io»', () => {
    browser.setValue('[data-testid="contact-modal:field:callbackForm.email"]', 'test@csssr.io')
  })

  step('Заполняем поле «MESSENGER (OPTIONAL)»', () => {
    browser.setValue('[data-testid="contact-modal:field:callbackForm.message"]', 'Заявка отправленная автотестом')
  })

  step.skip('Отмечаем чекбокс «I agree to my personal data being stored and used for the purposes stated in the Privacy Policy»', () => {
    browser.click('[for="ConctactModalForm_privacyPolicy"]')
  })

  step('Отмечаем чекбокс «I agree to receive information and commercial offers project»', () => {
    browser.click('[for="ConctactModalForm_newsletter"]')
  })

  step('Кликаем на кнопку [Submit]', () => {
    browser.click('[testid="contact-modal:button.callbackForm.submit"]')
  })

  expected('В модалке отобразилось сообщение об успехе', () => {
    browser
      .waitForElementPresent('[alt="Submit status icon"]')
      .assert.screenshotElement(
        '#main > div.css-23xn4k.ehl8gh40 > div:nth-child(3) > div > div',
        'попап успешной отправки формы нанять нас(eng)'
      )
  })
})

testcase('Отправка заявки через кнопку форму в конце страницы', () => {
  step('Переходим на страницу express-front-end', () => {
    browser
      .setWindowSize(1920, 1080)
      .url(browser.launch_url + '/en/service/express-front-end')
      .waitForElementPresent('[data-testid="Express:link.greeting"]')
  })

  step('Скролим в конец страницы', () => {
    browser
      .moveToElement('footer > div.bottom-content > ul > li:nth-child(2) > a:nth-child(1) > p', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  step('В инпут «NAME» вводим «Test»', () => {
    browser.setValue('[data-testid="contact:field:callbackForm.name"]', 'Test')
  })

  step('В инпут «PHONE» вводим «+0 123 456 78 90»', () => {
    browser.setValue('[data-testid="contact:field:callbackForm.phone"]', '+0 123 456 78 90')
  })

  step('В инпут «E-MAIL» вводим «test@csssr.io»', () => {
    browser.setValue('[data-testid="contact:field:callbackForm.email"]', 'test@csssr.io')
  })

  step('Заполняем поле «How can we help?»', () => {
    browser.setValue('[data-testid="contact:field:callbackForm.message"]', 'Заявка отправленная автотестом')
  })

  step('Отмечаем чекбокс «I agree to my personal data being stored and used for the purposes stated in the Privacy Policy»', () => {
    browser.click('[for="privacyPolicy"]')
  })

  step('Кликаем на кнопку [Submit]', () => {
    browser
      .moveToElement('footer > div.bottom-content > ul > li:nth-child(2) > a:nth-child(1) > p', 1, 1)
      .click('[testid="contact:button.callbackForm.submit"]')
  })

  expected('Отобразилось сообщение об успехе', () => {
    browser
      .waitForElementPresent('[data-testid="contact:picture.successMessageImg"]')
      .moveToElement('[data-testid="contact:picture.successMessageImg"]', 1, 1)
      .assert.screenshotElement(
        'div.css-17aeca1.e1xb6bza0',
        'попап успешной отправки формы в конце страницы'
      )
  })
})

testcase('Якорь к блоку с калькулятором по клику на ссылку «our Calculator»', () => {
  step('Переходим на страницу express-front-end', () => {
    browser
      .setWindowSize(1920, 1280)
      .url(browser.launch_url + '/en/service/express-front-end')
      .waitForElementPresent('[data-testid="Express:link.ourCalculator"]')
  })

  step('Скроллим до блока «Two Days to Start»', () => {
    browser.moveToElement('[data-testid="Express:link.ourCalculator"]', 1, 1)
    browser.pause(ANIMATION_DURATION_IN_MS)
  })

  step('Кликаем на "our Calculator"', () => {
    browser
      .click('[data-testid="Express:link.ourCalculator"]')
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('Якорь сработал к заголовку "Have an Idea for a Web Project?"', () => {
    browser
      .assert.screenshotElement(
        '[data-testid="Calculator:block"]',
        'форма калькулятора(после клика на якорь)'
      )
  })
})

testcase('Кнопка «Get a quote» якорь к калькулятору', () => {
  step('Переходим на страницу express-front-end', () => {
    browser
      .setWindowSize(1920, 1280)
      .url(browser.launch_url + '/en/service/express-front-end')
      .waitForElementPresent('[data-testid="Express:link.ourCalculator"]')
  })

  step('Кликаем на "Get a quote"', () => {
    browser
      .click('[data-testid="Express:link.greeting"]')
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('Якорь сработал к заголовку "Have an Idea for a Web Project?"', () => {
    browser
      .assert.screenshotElement(
        '[data-testid="Calculator:block"]',
        'форма калькулятора(после клика на якорь)'
      )
  })
})

testcase('Страница «Privacy policy» из футера', () => {
  step('Переходим на страницу express-front-end', () => {
    browser
      .setWindowSize(1920, 1080)
      .url(browser.launch_url + '/en/service/express-front-end')
      .waitForElementPresent('[data-testid="Express:link.ourCalculator"]')
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Кликаем на «Privacy policy» в футере', () => {
    browser
      .moveToElement('footer > div.bottom-content > ul > li:nth-child(2) > a:nth-child(1) > p', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
      .click('footer > div.bottom-content > ul > li:nth-child(2) > a:nth-child(1) > p')
  })

  expected('Открылась страница Privacy policy в текущей вкладке', () => {
    browser.assert.urlEquals(
      browser.launch_url + '/en/privacy-policy'
    )
  })
})

testcase('Страница «Privacy policy» из чекбокса', () => {
  step('Переходим на страницу express-front-end', () => {
    browser
      .setWindowSize(1920, 1080)
      .url(browser.launch_url + '/en/service/express-front-end')
      .waitForElementPresent('[data-testid="Express:link.ourCalculator"]')
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Кликаем на «Privacy policy» в форме заявки', () => {
    browser
      .moveToElement('footer > div.bottom-content > ul > li:nth-child(2) > a:nth-child(1) > p', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
      .click('[data-testid="contact:link:callbackForm.privacyPolicy"]')
  })

  expected('Открылась страница Privacy policy в новой вкладке', () => {
    browser.windowHandles(function (result) {
      var handle = result.value[1]
      browser.switchWindow(handle)
    })
    browser.assert.urlEquals(
      browser.launch_url + '/en/privacy-policy'
    )
  })
})

// Редиректы с csssr.express

testcase('Редирект на страницу Express Development c csssr.express + http', () => {
  step('Переходим на страницу csssr.express', () => {
    browser.url('http://csssr.express')
  })

  expected('Сработал редирект на страницу Express Development', () => {
    browser
      .waitForElementPresent('[data-testid="Express:link.greeting"]')
      .assert.urlEquals('https://csssr.com/en/service/express-front-end')
  })
})

testcase('Редирект на страницу Express Development c csssr.express + https', () => {
  step('Переходим на страницу csssr.express', () => {
    browser.url('https://csssr.express')
  })

  expected('Сработал редирект на страницу Express Development', () => {
    browser
      .waitForElementPresent('[data-testid="Express:link.greeting"]')
      .assert.urlEquals('https://csssr.com/en/service/express-front-end')
  })
})

// Редиректы с express.csssr.com

testcase('Редирект на страницу Express Development c express.csssr.com + http', () => {
  step('Переходим на страницу express.csssr.com', () => {
    browser.url('http://express.csssr.com')
  })

  expected('Редирект на страницу Express Development', () => {
    browser.assert.urlEquals('https://csssr.com/en/service/express-front-end')
  })
})

testcase('Редирект на страницу Express Development c express.csssr.com + https', () => {
  step('Переходим на страницу express.csssr.com', () => {
    browser.url('https://express.csssr.com')
  })

  expected('Сработал редирект на страницу Express Development', () => {
    browser
      .waitForElementPresent('[data-testid="Express:link.greeting"]')
      .assert.urlEquals('https://csssr.com/en/service/express-front-end')
  })
})

testcase('Калькулятор. Отображение поля «additional browsers to be supported»', () => {
  step('Переходим на страницу express-front-end', () => {
    browser
      .setWindowSize(1920, 1280)
      .url(browser.launch_url + '/en/service/express-front-end')
      .waitForElementPresent('[data-testid="Express:link.ourCalculator"]')
  })

  step('Кликаем на «our Calculator»', () => {
    browser
      .click('[data-testid="Express:link.ourCalculator"]')
      .pause(ANIMATION_DURATION_IN_MS)
  })

  step('Кликаем на «Other requriments»', () => {
    browser
      .click('div.checkbox-browser.checkbox-browser_other.css-170ioao.esnby3d0')
  })

  expected('Отобразился инпут «additional browsers to be supported»', () => {
    browser.waitForElementVisible('[data-testid="Calculator:input.otherRequirements"]')
  })

  expected('Отобразилася надпись «Please enter any additional browsers that you want to be supported»', () => {
    browser.waitForElementVisible('[data-testid="Calculator:text.otherRequirements"]')
  })
})

testcase('Калькулятор. Обязательные поля', () => {
  step('Переходим на страницу express-front-end', () => {
    browser
      .setWindowSize(1920, 1280)
      .url(browser.launch_url + '/en/service/express-front-end')
      .waitForElementPresent('[data-testid="Express:link.ourCalculator"]')
      .moveToElement('[data-testid="calculator:button:animatedButton"]', 1, 1)
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Кликаем на поле «YOUR NAME»', () => {
    browser
      .click('[data-testid="calculator:field:name"]')
  })

  step('Кликаем на поле «EMAIL»', () => {
    browser
      .click('[data-testid="calculator:field:email"]')
  })

  step('Кликаем на поле «Link to your design»', () => {
    browser
      .click('[data-testid="calculator:field:design"]')
  })

  step('Кликаем на кнопку «Get a quote»', () => {
    browser
      .click('[data-testid="calculator:field:phone"]')
  })

  expected('Отобразился алерт поля «YOUR NAME»', () => {
    browser.waitForElementVisible('div.input-wrapper > div:nth-child(1) > div')
  })

  expected('Отобразился алерт поля «EMAIL»', () => {
    browser.waitForElementVisible('div.input-wrapper > div:nth-child(2) > div')
  })

  expected('Отобразился алерт поля «Link to your design»', () => {
    browser.waitForElementVisible('div.input-wrapper > div:nth-child(5) > div')
  })
})

testcase('Калькулятор. Успешно отправить оценку', () => {
  step('Переходим на страницу express-front-end', () => {
    browser
      .setWindowSize(1920, 1280)
      .url(browser.launch_url + '/en/service/express-front-end')
      .waitForElementPresent('[data-testid="Express:link.ourCalculator"]')
      .moveToElement('[data-testid="calculator:button:animatedButton"]', 1, 1)
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Кликаем на «+» у «Number of pages»', () => {
    browser
      .moveToElement('[data-testid="calculator:button:basic.increment"]', 1, 1)
      .click('[data-testid="calculator:button:basic.increment"]')
  })

  step('Кликаем на «+» у «Design per page»', () => {
    browser
      .moveToElement('[data-testid="calculator:button:layout.increment"]', 1, 1)
      .click('[data-testid="calculator:button:layout.increment"]')
  })

  step('Выбираем «Hot project»', () => {
    browser
      .moveToElement('div.css-170ioao.esnby3d0', 1, 1)
      .click('div.css-170ioao.esnby3d0')
  })

  step('Выбираем «Internet Explorer 11»', () => {
    browser
      .moveToElement('[data-testid="calculator:field:checkbox.other"]', 1, 1)
      .click('[data-testid="calculator:text:price.ie11"]')
  })

  step('Выбираем «Internet Explorer 9»', () => {
    browser.click('[data-testid="calculator:text:price.ie9"]')
  })

  step('Выбираем «Other requirements»', () => {
    browser.click('div.checkbox-browser.checkbox-browser_other.css-170ioao.esnby3d0')
  })

  step('Выбираем «Internet Explorer 10»', () => {
    browser.click('[data-testid="calculator:text:price.ie10"]')
  })

  step('Выбираем «Android Default Browsers»', () => {
    browser.click('[data-testid="calculator:text:price.androidBrowser"]')
  })

  step('Выбираем «iOS Google Chrome»', () => {
    browser.click('[data-testid="calculator:text:price.iosChromeBrowser"]')
  })

  step('Вводим «test» в поле «additional browsers to be supported»', () => {
    browser.setValue('[data-testid="Calculator:input.otherRequirements"]', 'test')
  })

  step('Выбираем «+ Photos»', () => {
    browser
      .moveToElement('[data-testid="calculator:text:label.retina_3"]', 1, 1)
      .click('[data-testid="calculator:text:label.retina_3"]')
  })

  step('Выбираем «Advanced»', () => {
    browser
      .moveToElement('[data-testid="calculator:text:label.additional-option_3"]', 1, 1)
      .click('[data-testid="calculator:text:label.additional-option_3"]')
  })

  step('Заполняем поле «Project brief»', () => {
    browser.setValue('[data-testid="calculator:field:brief"]', 'отправлено автотестом')
  })

  step('Заполняем поле «Your name»', () => {
    browser.setValue('[data-testid="calculator:field:name"]', 'Autotest')
  })

  step('Заполняем поле «email»', () => {
    browser.setValue('[data-testid="calculator:field:email"]', 'test@csssr.io')
  })

  step('Заполняем поле «phone»', () => {
    browser.setValue('[data-testid="calculator:field:phone"]', '+0 123 456 78 90')
  })

  step('Заполняем поле «messenger»', () => {
    browser.setValue('[data-testid="calculator:field:messenger"]', 'autotest')
  })

  step('Заполняем поле «Link to your design»', () => {
    browser.setValue('[data-testid="calculator:field:design"]', 'https://csssr.com/')
  })

  step('Кликаем на кнопку «Get a quote»', () => {
    browser
      .moveToElement('[data-testid="calculator:button:animatedButton"]', 1, 1)
      .click('[data-testid="calculator:button:animatedButton"]')
  })

  expected('Заявка отправилась успешно', () => {
    browser
      .waitForElementVisible('[data-testid="calculator:button:animatedButton"]')
      .assert.containsText(
        'div.css-10bhpit.e1cv05580 p',
        'Success!\nWe will contact you soon'
      )
  })
})

testcase('Калькулятор. Значения по умолчанию в форме', () => {
  step('Переходим на страницу express-front-end', () => {
    browser
      .setWindowSize(1920, 1280)
      .url(browser.launch_url + '/en/service/express-front-end')
      .waitForElementPresent('[data-testid="Express:link.ourCalculator"]')
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Скролим до «Retina»', () => {
    browser
      .moveToElement('[data-testid="calculator:text:label.retina_1"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('По умолчанию выбрано «None»', () => {
    browser
      .assert.screenshotElement(
        'fieldset.retina > div',
        'по умолчанию выбрано None у retina'
      )
  })

  step('Скролим до «Interactivity Options»', () => {
    browser
      .moveToElement('[data-testid="calculator:text:label.additional-option_1"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('По умолчанию выбрано «None»', () => {
    browser
      .assert.screenshotElement(
        'fieldset.additional-options',
        'по умолчанию выбрано None у Interactivity Options'
      )
  })

  expected('Прайс по умолчанию 200$', () => {
    browser.assert.screenshotElement(
      '#fixed-element > div.text-price',
      'прайс по умолчанию 200$'
    )
  })

  expected('В инпуте «Number of pages» по умолчанию отображается 1', () => {
    browser.assert.screenshotElement(
      '[data-testid="calculator:field:basic.value"]',
      'в инпуте Number of pages по умолчанию отображается 1'
    )
  })
})

testcase('Калькулятор. Прибавление к стоимости цены одной страницы', () => {
  step('Переходим на страницу express-front-end', () => {
    browser
      .setWindowSize(1920, 1280)
      .url(browser.launch_url + '/en/service/express-front-end')
      .waitForElementPresent('[data-testid="Express:link.ourCalculator"]')
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Кликаем на «+» у «Number of pages»', () => {
    browser
      .moveToElement('[data-testid="calculator:button:basic.increment"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
      .click('[data-testid="calculator:button:basic.increment"]')
  })

  expected('Прайс изменился 400$', () => {
    browser.assert.screenshotElement(
      '#fixed-element > div.text-price',
      'прайс изменился 400$'
    )
  })
})

testcase('Калькулятор. Расчет стоимости при выборе Hot Project', () => {
  step('Переходим на страницу express-front-end', () => {
    browser
      .setWindowSize(1920, 1280)
      .url(browser.launch_url + '/en/service/express-front-end')
      .waitForElementPresent('[data-testid="Express:link.ourCalculator"]')
      .moveToElement('[data-testid="calculator:button:animatedButton"]', 1, 1)
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Выбираем «Internet Explorer 11»', () => {
    browser
      .moveToElement('[data-testid="calculator:field:checkbox.other"]', 1, 1)
      .click('[data-testid="calculator:text:price.ie11"]')
  })

  step('Выбираем «Internet Explorer 9»', () => {
    browser.click('[data-testid="calculator:text:price.ie9"]')
  })

  step('Выбираем «Internet Explorer 10»', () => {
    browser.click('[data-testid="calculator:text:price.ie10"]')
  })

  step('Выбираем «Android Default Browsers»', () => {
    browser.click('[data-testid="calculator:text:price.androidBrowser"]')
  })

  step('Выбираем «iOS Google Chrome»', () => {
    browser.click('[data-testid="calculator:text:price.iosChromeBrowser"]')
  })

  step('Выбираем «+ Photos»', () => {
    browser
      .moveToElement('[data-testid="calculator:text:label.retina_3"]', 1, 1)
      .click('[data-testid="calculator:text:label.retina_3"]')
  })

  step('Выбираем «Advanced»', () => {
    browser
      .moveToElement('[data-testid="calculator:text:label.additional-option_3"]', 1, 1)
      .click('[data-testid="calculator:text:label.additional-option_3"]')
  })

  step('Кликаем на «+» у «Design per page»', () => {
    browser
      .moveToElement('[data-testid="calculator:button:layout.increment"]', 1, 1)
      .click('[data-testid="calculator:button:layout.increment"]')
  })

  step('Кликаем на «+» у «Number of pages»', () => {
    browser
      .moveToElement('[data-testid="calculator:button:basic.increment"]', 1, 1)
      .click('[data-testid="calculator:button:basic.increment"]')
  })

  step('Выбираем «Hot project»', () => {
    browser
      .moveToElement('div.css-170ioao.esnby3d0', 1, 1)
      .click('div.css-170ioao.esnby3d0')
  })

  expected('Прайс изменился 1632$', () => {
    browser.assert.screenshotElement(
      '#fixed-element > div.text-price',
      'прайс изменился 1632$'
    )
  })
})

testcase('Калькулятор. Увеличение конечной стоимости при увеличении кол-ва макетов на страницу', () => {
  step('Переходим на страницу express-front-end', () => {
    browser
      .setWindowSize(1920, 1280)
      .url(browser.launch_url + '/en/service/express-front-end')
      .waitForElementPresent('[data-testid="Express:link.ourCalculator"]')
      .moveToElement('[data-testid="calculator:button:animatedButton"]', 1, 1)
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Кликаем на «+» у «Design per page»', () => {
    browser
      .moveToElement('[data-testid="calculator:button:layout.increment"]', 1, 1)
      .click('[data-testid="calculator:button:layout.increment"]')
  })

  expected('Прайс изменился 230$', () => {
    browser.assert.screenshotElement(
      '#fixed-element > div.text-price',
      'прайс изменился 230$'
    )
  })
})

testcase('Калькулятор. Расчет стоимости при увеличении кол-ва макетов(не учитывается Browser Support - Retina - Interactivity Options', () => {
  step('Переходим на страницу express-front-end', () => {
    browser
      .setWindowSize(1920, 1280)
      .url(browser.launch_url + '/en/service/express-front-end')
      .waitForElementPresent('[data-testid="Express:link.ourCalculator"]')
      .moveToElement('[data-testid="calculator:button:animatedButton"]', 1, 1)
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Выбираем «Internet Explorer 11»', () => {
    browser
      .moveToElement('[data-testid="calculator:field:checkbox.other"]', 1, 1)
      .click('[data-testid="calculator:text:price.ie11"]')
  })

  step('Выбираем «Internet Explorer 9»', () => {
    browser.click('[data-testid="calculator:text:price.ie9"]')
  })

  step('Выбираем «Internet Explorer 10»', () => {
    browser.click('[data-testid="calculator:text:price.ie10"]')
  })

  step('Выбираем «Android Default Browsers»', () => {
    browser.click('[data-testid="calculator:text:price.androidBrowser"]')
  })

  step('Выбираем «iOS Google Chrome»', () => {
    browser.click('[data-testid="calculator:text:price.iosChromeBrowser"]')
  })

  step('Выбираем «+ Photos»', () => {
    browser
      .moveToElement('[data-testid="calculator:text:label.retina_3"]', 1, 1)
      .click('[data-testid="calculator:text:label.retina_3"]')
  })

  step('Выбираем «Advanced»', () => {
    browser
      .moveToElement('[data-testid="calculator:text:label.additional-option_3"]', 1, 1)
      .click('[data-testid="calculator:text:label.additional-option_3"]')
  })

  step('Кликаем на «+» у «Design per page»', () => {
    browser
      .moveToElement('[data-testid="calculator:button:layout.increment"]', 1, 1)
      .click('[data-testid="calculator:button:layout.increment"]')
  })

  expected('Прайс изменился 1025$', () => {
    browser.assert.screenshotElement(
      '#fixed-element > div.text-price',
      'прайс изменился 1025$'
    )
  })
})

testcase('Калькулятор. Our recommendations выбран по умолчанию', () => {
  step('Переходим на страницу express-front-end', () => {
    browser
      .setWindowSize(1920, 1280)
      .url(browser.launch_url + '/en/service/express-front-end')
      .waitForElementPresent('[data-testid="Express:link.ourCalculator"]')
      .moveToElement('[data-testid="calculator:button:animatedButton"]', 1, 1)
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('скроллим к калькулятору', () => {
    browser
      .moveToElement('[data-testid="calculator:field:checkbox.recommendations"]', 1, 1)
  })

  expected('Our recommendations выбран по умолчанию и имеет значение Free', () => {
    browser.assert.screenshotElement(
      'fieldset.browser-support > div.checkbox-item.css-170ioao.esnby3d0',
      'our recommendations по-умолчанию'
    )
  })
})

testcase('Калькулятор. Прибавка к стоимости при выборе Internet Explorer 11', () => {
  step('Переходим на страницу express-front-end', () => {
    browser
      .setWindowSize(1920, 1280)
      .url(browser.launch_url + '/en/service/express-front-end')
      .waitForElementPresent('[data-testid="Express:link.ourCalculator"]')
      .moveToElement('[data-testid="calculator:button:animatedButton"]', 1, 1)
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Выбираем «Internet Explorer 11»', () => {
    browser
      .moveToElement('[data-testid="calculator:field:checkbox.other"]', 1, 1)
      .click('[data-testid="calculator:text:price.ie11"]')
  })

  expected('Прайс изменился 230$', () => {
    browser.assert.screenshotElement(
      '#fixed-element > div.text-price',
      'прайс изменился 230$'
    )
  })
})

testcase('Калькулятор. Прибавка к стоимости при выборе Internet Explorer 9', () => {
  step('Переходим на страницу express-front-end', () => {
    browser
      .setWindowSize(1920, 1280)
      .url(browser.launch_url + '/en/service/express-front-end')
      .waitForElementPresent('[data-testid="Express:link.ourCalculator"]')
      .moveToElement('[data-testid="calculator:button:animatedButton"]', 1, 1)
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Выбираем «Internet Explorer 9»', () => {
    browser
      .moveToElement('[data-testid="calculator:field:checkbox.other"]', 1, 1)
      .click('[data-testid="calculator:text:price.ie9"]')
  })

  expected('Прайс изменился 260$', () => {
    browser.assert.screenshotElement(
      '#fixed-element > div.text-price',
      'прайс изменился 260$'
    )
  })
})

testcase('Калькулятор. Прибавка к стоимости при выборе Internet Explorer 10', () => {
  step('Переходим на страницу express-front-end', () => {
    browser
      .setWindowSize(1920, 1280)
      .url(browser.launch_url + '/en/service/express-front-end')
      .waitForElementPresent('[data-testid="Express:link.ourCalculator"]')
      .moveToElement('[data-testid="calculator:button:animatedButton"]', 1, 1)
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Выбираем «Internet Explorer 10»', () => {
    browser
      .moveToElement('[data-testid="calculator:field:checkbox.other"]', 1, 1)
      .click('[data-testid="calculator:text:price.ie10"]')
  })

  expected('Прайс изменился 245$', () => {
    browser.assert.screenshotElement(
      '#fixed-element > div.text-price',
      'прайс изменился 245$'
    )
  })
})

testcase('Калькулятор. Прибавка к стоимости при выборе Android Default Browsers', () => {
  step('Переходим на страницу express-front-end', () => {
    browser
      .setWindowSize(1920, 1280)
      .url(browser.launch_url + '/en/service/express-front-end')
      .waitForElementPresent('[data-testid="Express:link.ourCalculator"]')
      .moveToElement('[data-testid="calculator:button:animatedButton"]', 1, 1)
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Выбираем «Android Default Browsers»', () => {
    browser
      .moveToElement('[data-testid="calculator:field:checkbox.other"]', 1, 1)
      .click('[data-testid="calculator:text:price.androidBrowser"]')
  })

  expected('Прайс изменился 230$', () => {
    browser.assert.screenshotElement(
      '#fixed-element > div.text-price',
      'прайс изменился 230$'
    )
  })
})

testcase('Калькулятор. Прибавка к стоимости при выборе iOS Google Chrome', () => {
  step('Переходим на страницу express-front-end', () => {
    browser
      .setWindowSize(1920, 1280)
      .url(browser.launch_url + '/en/service/express-front-end')
      .waitForElementPresent('[data-testid="Express:link.ourCalculator"]')
      .moveToElement('[data-testid="calculator:button:animatedButton"]', 1, 1)
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Выбираем «iOS Google Chrome»', () => {
    browser
      .moveToElement('[data-testid="calculator:field:checkbox.other"]', 1, 1)
      .click('[data-testid="calculator:text:price.iosChromeBrowser"]')
  })

  expected('Прайс изменился 230$', () => {
    browser.assert.screenshotElement(
      '#fixed-element > div.text-price',
      'прайс изменился 230$'
    )
  })
})

testcase('Калькулятор. Открывается поле additional browsers to be supported при нажатии на Other requriments', () => {
  step('Переходим на страницу express-front-end', () => {
    browser
      .setWindowSize(1920, 1280)
      .url(browser.launch_url + '/en/service/express-front-end')
      .waitForElementPresent('[data-testid="Express:link.ourCalculator"]')
      .moveToElement('[data-testid="calculator:button:animatedButton"]', 1, 1)
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Кликаем на «Other requriments»', () => {
    browser
      .moveToElement('[data-testid="calculator:field:checkbox.other"]', 1, 1)
      .click('div.checkbox-browser.checkbox-browser_other.css-170ioao.esnby3d0 > label > div')
  })

  expected('Открылось поле «additional browsers to be supported»', () => {
    browser.waitForElementPresent('[name="additional_browsers"]')
  })
})

testcase('Калькулятор. Наценка при выборе Vector only', () => {
  step('Переходим на страницу express-front-end', () => {
    browser
      .setWindowSize(1920, 1280)
      .url(browser.launch_url + '/en/service/express-front-end')
      .waitForElementPresent('[data-testid="Express:link.ourCalculator"]')
      .moveToElement('[data-testid="calculator:button:animatedButton"]', 1, 1)
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Выбираем «Vector only»', () => {
    browser
      .moveToElement('[data-testid="calculator:field:radioButton.retina_2"]', 1, 1)
      .click('fieldset.retina > div > div:nth-child(2) > label > div')
  })

  expected('Прайс изменился 250$', () => {
    browser.assert.screenshotElement(
      '#fixed-element > div.text-price',
      'прайс изменился 250$'
    )
  })
})

testcase('Калькулятор. Наценка при выборе +Photos', () => {
  step('Переходим на страницу express-front-end', () => {
    browser
      .setWindowSize(1920, 1280)
      .url(browser.launch_url + '/en/service/express-front-end')
      .waitForElementPresent('[data-testid="Express:link.ourCalculator"]')
      .moveToElement('[data-testid="calculator:button:animatedButton"]', 1, 1)
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Выбираем «+Photos»', () => {
    browser
      .moveToElement('[data-testid="calculator:field:radioButton.retina_2"]', 1, 1)
      .click('fieldset.retina > div > div:nth-child(3) > label > div')
  })

  expected('Прайс изменился 300$', () => {
    browser.assert.screenshotElement(
      '#fixed-element > div.text-price',
      'прайс изменился 300$'
    )
  })
})

testcase('Калькулятор. Наценка при выборе Basic', () => {
  step('Переходим на страницу express-front-end', () => {
    browser
      .setWindowSize(1920, 1280)
      .url(browser.launch_url + '/en/service/express-front-end')
      .waitForElementPresent('[data-testid="Express:link.ourCalculator"]')
      .moveToElement('[data-testid="calculator:button:animatedButton"]', 1, 1)
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Выбираем «+Photos»', () => {
    browser
      .moveToElement('[data-testid="calculator:field:radioButton.additional-option_2"]', 1, 1)
      .click('div.radio-wrapper.css-1tthtf3.e16x2n6s0 > div:nth-child(2) > label > div')
  })

  expected('Прайс изменился 450$', () => {
    browser.assert.screenshotElement(
      '#fixed-element > div.text-price',
      'прайс изменился 450$'
    )
  })
})

testcase('Калькулятор. Невозможно выбрать меньше 1 страницы Number of pages', () => {
  step('Переходим на страницу express-front-end', () => {
    browser
      .setWindowSize(1920, 1280)
      .url(browser.launch_url + '/en/service/express-front-end')
      .waitForElementPresent('[data-testid="Express:link.ourCalculator"]')
      .moveToElement('[data-testid="calculator:button:animatedButton"]', 1, 1)
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Кликаем на «-» у Number of pages', () => {
    browser
      .moveToElement('[data-testid="calculator:button:basic.increment"]', 1, 1)
      .moveToElement('[data-testid="calculator:button:basic.decrement"]', 1, 1)
      .mouseButtonClick(0)
      .moveToElement('[data-testid="calculator:button:basic.increment"]', 1, 1)
  })

  expected('Кол-во страниц не уменьшилось', () => {
    browser.assert.screenshotElement(
      '[data-testid="calculator:field:basic.value"]',
      'в инпуте Number of pages по умолчанию отображается 1'
    )
  })
})

testcase('Калькулятор. Невозможно выбрать меньше 1 макета на страницу Design per page', () => {
  step('Переходим на страницу express-front-end', () => {
    browser
      .setWindowSize(1920, 1280)
      .url(browser.launch_url + '/en/service/express-front-end')
      .waitForElementPresent('[data-testid="Express:link.ourCalculator"]')
      .moveToElement('[data-testid="calculator:button:animatedButton"]', 1, 1)
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Кликаем на «-» у Design per page', () => {
    browser
      .moveToElement('[data-testid="calculator:button:layout.increment"]', 1, 1)
      .moveToElement('[data-testid="calculator:button:layout.decrement"]', 1, 1)
      .mouseButtonClick(0)
      .moveToElement('[data-testid="calculator:button:layout.increment"]', 1, 1)
  })

  expected('Кол-во страниц не уменьшилось', () => {
    browser.assert.screenshotElement(
      '[data-testid="calculator:field:layout.value"]',
      'в инпуте Design per page по умолчанию отображается 1'
    )
  })
})

testcase('Калькулятор. Нельзя отправить пустую заявку на расчет', () => {
  step('Переходим на страницу express-front-end', () => {
    browser
      .setWindowSize(1920, 1280)
      .url(browser.launch_url + '/en/service/express-front-end')
      .waitForElementPresent('[data-testid="Express:link.ourCalculator"]')
      .moveToElement('[data-testid="calculator:button:animatedButton"]', 1, 1)
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Кликаем на кнопку «Get a quote»', () => {
    browser
      .moveToElement('[data-testid="calculator:button:animatedButton"]', 1, 1)
      .click('[data-testid="calculator:button:animatedButton"]')
  })

  expected('Заявка не отправлена', () => {
    browser
      .waitForElementNotPresent('div.css-10bhpit.e1cv05580 p')
  })
})

testcase('Калькулятор. Невозможно отправить заявку на расчет с неверным форматом ссылки', () => {
  step('Переходим на страницу express-front-end', () => {
    browser
      .setWindowSize(1920, 1280)
      .url(browser.launch_url + '/en/service/express-front-end')
      .waitForElementPresent('[data-testid="Express:link.ourCalculator"]')
      .moveToElement('[data-testid="calculator:button:animatedButton"]', 1, 1)
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Заполняем поле «Your name»', () => {
    browser.setValue('[data-testid="calculator:field:name"]', 'Autotest')
  })

  step('Заполняем поле «email» qweqweqweqwe', () => {
    browser.setValue('[data-testid="calculator:field:email"]', 'qwewqeqweqe')
  })

  step('Заполняем поле «Link to your design»', () => {
    browser.setValue('[data-testid="calculator:field:design"]', 'https://csssr.com/')
  })

  step('Кликаем на кнопку «Get a quote»', () => {
    browser
      .moveToElement('[data-testid="calculator:button:animatedButton"]', 1, 1)
      .click('[data-testid="calculator:button:animatedButton"]')
  })

  expected('Заявка не отправлена', () => {
    browser
      .waitForElementNotPresent('div.css-10bhpit.e1cv05580 p')
  })

  expected('Отображается алерт у поля EMAIL', () => {
    browser.waitForElementPresent('#fixed-element > div.input-wrapper > div:nth-child(2) > div')
  })
})