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
