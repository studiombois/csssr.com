const ANIMATION_DURATION_IN_MS = 800

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