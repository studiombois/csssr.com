const { contInfo } = require('../actions/contInfo')
const { modalContInfo } = require('../actions/modalContInfo')

// Отправка заявок с русской локали

testcase('Отправка заявки из модалки в хеддере RU-локали - ИТ', () => {
  step('Перейти на страницу индустрии ИТ', () => {
    browser.setWindowSize(1360, 1024)
    browser.url(browser.launch_url + '/ru/industry/information-technology')
  })

  step('Нажать на кнопку в хеддере [Нанять нас]', () => {
    browser.click('[data-testid="Header:button.contactUs"]')
  })

  modalContInfo()

  step('Отметить чекбокс с подпиской на рассылку', () => {
    // TODO здесь нужно кликать на лейбл
    browser.click('[for="ConctactModalForm_newsletter"]')
  })

  step('Нажать кнопку отправки формы', () => {
    browser.click('[testid="contact-modal:button.callbackForm.submit"]')
  })

  expected('Появилось сообщение об успехе', () => {
    // TODO здесь нужно добавить селектор
    browser.waitForElementPresent('div > div > p')
      .expect.element('[class="font_p16-regular status_text"]')
      .text.to.equal('Успех!' + '\n' + 'Совсем скоро мы с вами свяжемся.')
    browser.expect.element(
      '[src="/_next/static/icons/button_success-3019b6f7.svg"]'
    ).to.be.present
  })

  step('Закрыть модалку', () => {
    browser.click('[data-testid="modalForm:button:closeModal"]')
  })

  expected('Модалка закрылась', () => {
    browser.waitForElementNotPresent('div.css-1ovvs51.ehl8gh40 > div:nth-child(3) > div > div')
  })
})

testcase(
  'Отправка заявки через кнопку в первом блоке на странице RU-локали - ИТ',
  () => {
    step('Перейти на страницу индустрий ИТ', () => {
      browser
        .setWindowSize(1360, 1024)
        .url(browser.launch_url + '/ru/industry/information-technology')
    })

    step('Нажать на кнопку [Hire us] на странице', () => {
      browser.click('#greeting > button')
    })

    modalContInfo()

    step('Отметить чекбокс с подпиской на рассылку', () => {
      // TODO здесь нужно кликать на лейбл
      browser.click('[for="ConctactModalForm_newsletter"]')
    })

    step('Нажать кнопку отправки формы', () => {
      browser.click('[testid="contact-modal:button.callbackForm.submit"]')
    })

    expected('Появилось сообщение об успехе', () => {
      // TODO здесь нужно добавить селектор
      browser
        .waitForElementPresent('div > div > p')
        .expect.element('[class="font_p16-regular status_text"]')
        .text.to.equal('Успех!' + '\n' + 'Совсем скоро мы с вами свяжемся.')
      browser.expect.element(
        '[src="/_next/static/icons/button_success-3019b6f7.svg"]'
      ).to.be.present
    })

    step('Закрыть модалку', () => {
      browser.click('[data-testid="modalForm:button:closeModal"]')
    })

    expected('Модалка закрылась', () => {
      browser.waitForElementNotPresent('div.css-1ovvs51.ehl8gh40 > div:nth-child(3) > div > div')
    })
  }
)

testcase('Отправка заявки из формы в конце страницы RU-локали - ИТ', () => {
  step('Перейти к форме связи в конце страницы ИТ', () => {
    browser.url(browser.launch_url + '/ru/industry/information-technology')
  })

  contInfo()

  step('Отметить чекбокс согласия на рассылку', () => {
    browser.execute(
      function (selector) {
        document.querySelector(selector).click()
      },
      ['[for="newsletter"]']
    )
  })

  step('Отправить форму', () => {
    browser.click('[testid="contact:button.callbackForm.submit"]')
  })

  expected('Появилось сообщение об успехе', () => {
    browser
      .waitForElementPresent('[data-testid="contact:text.successMessage"]')
      .expect.element('[data-testid="contact:text.successMessage"]')
      .text.to.equal('Успех!' + '\n' + 'Совсем скоро мы с вами свяжемся.')
    browser.expect.element('[data-testid="contact:picture.successMessageImg"]')
      .to.be.present
  })
})

// Отправка заявок с английской страницы

testcase('Отправка заявки из модалки в хеддере EN-локали - ИТ', () => {
  step('Перейти на страницу индустрии IT', () => {
    browser
      .setWindowSize(1360, 1024)
      .url(browser.launch_url + '/en/industry/information-technology')
  })

  step('Нажать на кнопку в хеддере [Contuct us]', () => {
    browser.click('[data-testid="Header:button.contactUs"]')
  })

  modalContInfo()

  step('Отметить чекбокс с подпиской на рассылку', () => {
    // TODO здесь нужно кликать на лейбл
    browser.click('[for="ConctactModalForm_newsletter"]')
  })

  step('Нажать кнопку отправки формы', () => {
    browser.click('[testid="contact-modal:button.callbackForm.submit"]')
  })

  expected('Появилось сообщение об успехе', () => {
    // TODO здесь нужно добавить селектор
    browser
      .waitForElementPresent('div > div > div > p')
      .expect.element('[class="font_p16-regular status_text"]')
      .text.to.equal('Success!' + '\n' + 'We will contact you soon')
    browser.expect.element(
      '[src="/_next/static/icons/button_success-3019b6f7.svg"]'
    ).to.be.present
  })

  step('Закрыть модалку', () => {
    browser.click('[data-testid="modalForm:button:closeModal"]')
  })

  expected('Модалка закрылась', () => {
    browser.waitForElementNotPresent('div.css-1ovvs51.ehl8gh40 > div:nth-child(3) > div > div')
  })
})

testcase(
  'Отправка заявки через кнопку в первом блоке на странице EN-локали - ИТ',
  () => {
    step('Перейти на страницу индустрий IT', () => {
      browser
        .setWindowSize(1360, 1024)
        .url(browser.launch_url + '/en/industry/information-technology')
    })

    step('Нажать на кнопку [Hire us] на странице', () => {
      browser.click('[data-testid="Industry:button.contactUs"]')
    })

    modalContInfo()

    step('Отметить чекбокс с подпиской на рассылку', () => {
      // TODO здесь нужно кликать на лейбл
      browser.click('[for="ConctactModalForm_newsletter"]')
    })

    step('Нажать кнопку отправки формы', () => {
      browser.click('[testid="contact-modal:button.callbackForm.submit"]')
    })

    expected('Появилось сообщение об успехе', () => {
      // TODO здесь нужно добавить селектор
      browser
        .waitForElementPresent('div > div > p')
        .expect.element('[class="font_p16-regular status_text"]')
        .text.to.equal('Success!' + '\n' + 'We will contact you soon')
      browser.expect.element(
        '[src="/_next/static/icons/button_success-3019b6f7.svg"]'
      ).to.be.present
    })

    step('Закрыть модалку', () => {
      browser.click('[data-testid="modalForm:button:closeModal"]')
    })

    expected('Модалка закрылась', () => {
      browser.waitForElementNotPresent('div.css-1ovvs51.ehl8gh40 > div:nth-child(3) > div > div')
    })
  }
)

testcase('Отправка заявки из формы в конце страницы EN-локали - ИТ', () => {
  step('Перейти к форме связи в конце страницы IT', () => {
    browser.url(browser.launch_url + '/en/industry/information-technology')
  })

  contInfo()

  step('Отметить чекбокс согласия на рассылку', () => {
    browser.execute(
      function (selector) {
        document.querySelector(selector).click()
      },
      ['[for="newsletter"]']
    )
  })

  step('Отправить форму', () => {
    browser.click('[testid="contact:button.callbackForm.submit"]')
  })

  expected('Появилось сообщение об успехе', () => {
    browser
      .waitForElementPresent('[data-testid="contact:text.successMessage"]')
      .expect.element('[data-testid="contact:text.successMessage"]')
      .text.to.equal('Success!' + '\n' + 'We will contact you soon')
    browser.expect.element('[data-testid="contact:picture.successMessageImg"]')
      .to.be.present
  })
})
