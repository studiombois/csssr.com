const { makeRequest } = require('../tests/actions/vacancies')
const ANIMATION_DURATION_IN_MS = 1500

testcase('Переключение на английскую версию', () => {
  step('Переходим на страницу вакансии', () => {
    browser.url(browser.launch_url + '/ru-ru/jobs/middle-js-developer')
  })

  step('Скроллим до футера', () => {
    browser
      .moveToElement('footer > div.bottom-content > ul > li:nth-child(1) > a > p', 1, 1)
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Кликаем на значок «EN»', () => {
    browser
      .click('footer > div.bottom-content > ul > li:nth-child(1) > a > p')
  })

  expected('Сработал редирект на список вакансий для EN локали', () => {
    browser
      .waitForElementPresent('#main > article > ul > li:nth-child(1) > a')
      .assert.urlEquals(browser.launch_url + '/en-us/jobs')
  })
})

testcase('Страница 404', () => {
  step('Переходим на страницу вакансии', () => {
    browser.url(browser.launch_url + '/ru-ru/jobs/middle-js-developer')
      .setWindowSize(1200, 1200)
  })

  step('Добавляем в урл «wreer»', () => {
    browser.url(browser.launch_url + '/ru-ru/jobs/middle-js-developerwreer')
  })

  expected('Отобразилась стилизованная страница 404', () => {
    browser
      .waitForElementPresent('#__next > main > div.code-wrapper > svg')
      .assert.screenshotElement(
        '#__next',
        '404я'
      )
  })
})

testcase('Ошибка формата файла', () => {
  step('Переходим на страницу вакансии', () => {
    browser.url(browser.launch_url + '/ru-ru/jobs/middle-js-developer')
  })

  step('Заполняем обязательные поля', () => {
    browser
      .click('#__next > div.css-1ci3dja.e1foxtb90 > button')
      .setValue('[name="firstname"]', 'User')
      .setValue('[name="lastname"]', 'Autotest')
      .setValue('[name="location"]', 'Москва')
      .setValue('[name="email"]', 'test@csssr.io')
      .setValue('[name="resume"]', 'https://csssr.com/')
      .moveToElement('div.e7w76vv0.css-trbtch-Grid.e1kw6gvb0 > span > label', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
      .click('div.e7w76vv0.css-trbtch-Grid.e1kw6gvb0 > span > label')
  })

  step('Выбираем файл pdf размером больше 10 мб', () => {
    browser.uploadFile(
      '#file', require('path').resolve(__dirname, '../tests/upload files/больше 10мб.zip')
    )
  })

  step('Кликаем «Отправить»', () => {
    browser
      .moveToElement('form > div:nth-child(7) > div > div.button > div > button', 1, 1)
      .click('form > div:nth-child(7) > div > div.button > div > button')
  })

  expected('Появилась ошибка с текстом «Неверный формат файла«', () => {
    browser
      .waitForElementVisible('#main > form > div.e7w76vv0.css-trbtch-Grid.e1kw6gvb0 > div.seventh-line.css-ye5qvy.e7pkh230 > span')
  })
})

testcase('Список вакансий на странице (ru версия)', () => {
  let vacancies

  step('Переходим на страницу вакансий (RU)', () => {
    browser
      .url(browser.launch_url + '/ru-ru/jobs')
      .perform(
        async (done) => {
          vacancies = await makeRequest('https://csssr.space/api/public/vacancies/active?locale=ru-ru')
          done()
        }
      )
  })

  expected(`На странице отображается соответствующий список вакансий`, () => {
    for (var NUMBER_OF_VACANCIES = 0; NUMBER_OF_VACANCIES < vacancies.length; NUMBER_OF_VACANCIES++) {
      browser.assert.containsText(`#main > article > ul > li:nth-child(${NUMBER_OF_VACANCIES + 1}) > a`, vacancies[NUMBER_OF_VACANCIES].name)
    }
  })
})

testcase('Список вакансий на странице (en версия)', () => {
  let vacancies

  step('Переходим на страницу вакансий (EN)', () => {
    browser
      .url(browser.launch_url + '/en-us/jobs')
      .perform(
        async (done) => {
          vacancies = await makeRequest('https://csssr.space/api/public/vacancies/active?locale=en-us')
          done()
        }
      )
  })

  expected(`На странице отображается соответствующий список вакансий`, () => {
    for (var NUMBER_OF_VACANCIES = 0; NUMBER_OF_VACANCIES < vacancies.length; NUMBER_OF_VACANCIES++) {
      browser.assert.containsText(`#main > article > ul > li:nth-child(${NUMBER_OF_VACANCIES + 1}) > a`, vacancies[NUMBER_OF_VACANCIES].name)
    }
  })
})

testcase('Мини список вакансий на странице вакансии', () => {
  let vacancies

  step('Переходим на страницу вакансий (RU)', () => {
    browser
      .url(browser.launch_url + '/ru-ru/jobs')
      .perform(
        async (done) => {
          vacancies = await makeRequest('https://csssr.space/api/public/vacancies/active?locale=ru-ru')
          done()
        }
      )
  })

  step('Переходим на страницу вакансии', () => {
    browser
      .click(`#main > article > ul > li:nth-child(1) > a`)
      .waitForElementPresent('[name="firstname"]', 'Не открылась страница вакансии')
  })

  expected(`В правом блоке отображается список из всех вакансий`, () => {
    for (var NUMBER_OF_VACANCIES = 0; NUMBER_OF_VACANCIES < vacancies.length; NUMBER_OF_VACANCIES++) {
      browser.assert.containsText(`#main > form > div:nth-child(1) > div.css-d7zljk.e1vf3n0 > ul > li:nth-child(${NUMBER_OF_VACANCIES + 1}) > a`, vacancies[NUMBER_OF_VACANCIES].name)
    }
  })
})

testcase('Отправка заявок по всем вакансиям (ru версия)', () => {
  let vacancies

  step('Переходим на страницу вакансий (RU)', () => {
    browser
      .url(browser.launch_url + '/ru-ru/jobs')
      .click('#__next > div.css-1ci3dja.e1foxtb90 > button')
      .perform(
        async (done) => {
          vacancies = await makeRequest('https://csssr.space/api/public/vacancies/active?locale=ru-ru')
          done()
        }
      )
  })

  expected(`Отправка заявок проходит успешно`, () => {
    for (var NUMBER_OF_VACANCIES = 0; NUMBER_OF_VACANCIES < vacancies.length; NUMBER_OF_VACANCIES++) {
      browser
        .click(`#main > article > ul > li:nth-child(${NUMBER_OF_VACANCIES + 1}) > a`)
        .waitForElementPresent('[name="firstname"]', 'Не открылась страница вакансии')
        .moveToElement('#main > form > div:nth-child(7) > div > div.button > div', 1, 1)
        .pause(ANIMATION_DURATION_IN_MS)
        .setValue('[name="firstname"]', 'User')
        .setValue('[name="lastname"]', 'Autotest')
        .setValue('[name="age"]', '21')
        .setValue('[name="location"]', 'Москва')
        .setValue('[name="email"]', 'test@csssr.io')
      vacancies[NUMBER_OF_VACANCIES].sections.forEach(vacancySection => {
        if (vacancySection.type === 'textField' && vacancySection.required) {
          browser.elements(
            'css selector',
            '[name^="quests"]',
            result => {
              let NUMBER_OF_FIELDS = result.value.length - 1
              while (NUMBER_OF_FIELDS >= 0) {
                browser.setValue(
                  `[name="quests[${NUMBER_OF_FIELDS}].text"]`,
                  'Заполнено атвотестом'
                )
                NUMBER_OF_FIELDS--
              }
            })
        }
        if (['quest', 'questBox'].includes(vacancySection.type)) {
          vacancySection.sections.forEach(innerSection => {
            if (innerSection.type === 'textField' && innerSection.required) {
              browser.elements(
                'css selector',
                '[name^="quests"]',
                result => {
                  let NUMBER_OF_FIELDS = result.value.length - 1
                  while (NUMBER_OF_FIELDS >= 0) {
                    browser.setValue(
                      `[name="quests[${NUMBER_OF_FIELDS}].text"]`,
                      'Заполнено атвотестом'
                    )
                    NUMBER_OF_FIELDS--
                  }
                })
            }
          })
        }
      })
      if (vacancies[NUMBER_OF_VACANCIES].hasResume == true) {
        browser.setValue('[name="resume"]', 'https://csssr.com/')
      }
      if (vacancies[NUMBER_OF_VACANCIES].hasPortfolio == true) {
        browser.setValue('[name="portfolio"]', 'https://csssr.com/')
      }
      if (vacancies[NUMBER_OF_VACANCIES].hasGithub == true) {
        browser.setValue('[name="github"]', 'https://github.com/')
      }
      if (vacancies[NUMBER_OF_VACANCIES].hasFile == true) {
        browser.uploadFile(
          '[name="file"]',
          require('path').resolve(__dirname, '../tests/upload files/pdf.pdf')
        )
      }
      if (vacancies[NUMBER_OF_VACANCIES].hasComment == true) {
        browser.setValue('[name="comment"]', 'Отправлено автотестом')
      }
      browser
        .moveToElement('#main > form  button', 1, 1)
        .pause(ANIMATION_DURATION_IN_MS)
        .click('#main > form > div.e7w76vv0.css-trbtch-Grid.e1kw6gvb0 > span')
        .click('#main > form  button')
        .waitForElementPresent('#main > form div.message', `Заявка для вакансии ${vacancies[NUMBER_OF_VACANCIES].name} не отправилась`)
        .url(browser.launch_url + '/ru-ru/jobs')
        .waitForElementPresent(`#main > article > ul > li:nth-child(1) > a`)
    }
  })
})

testcase('Отправка заявок по всем вакансиям (en версия)', () => {
  let vacancies

  step('Переходим на страницу вакансий (EN)', () => {
    browser
      .url(browser.launch_url + '/en-us/jobs')
      .click('#__next > div.css-1ci3dja.e1foxtb90 > button')
      .perform(
        async (done) => {
          vacancies = await makeRequest('https://csssr.space/api/public/vacancies/active?locale=en-sg')
          done()
        }
      )
  })

  expected(`Отправка заявок проходит успешно`, () => {
    for (var NUMBER_OF_VACANCIES = 0; NUMBER_OF_VACANCIES < vacancies.length; NUMBER_OF_VACANCIES++) {
      browser
        .click(`#main > article > ul > li:nth-child(${NUMBER_OF_VACANCIES + 1}) > a`)
        .waitForElementPresent('[name="firstname"]', 'Не открылась страница вакансии')
        .moveToElement('#main > form > div:nth-child(7) > div > div.button > div', 1, 1)
        .pause(ANIMATION_DURATION_IN_MS)
        .setValue('[name="firstname"]', 'User')
        .setValue('[name="lastname"]', 'Autotest')
        .setValue('[name="age"]', '21')
        .setValue('[name="location"]', 'Москва')
        .setValue('[name="email"]', 'test@csssr.io')
      vacancies[NUMBER_OF_VACANCIES].sections.forEach(vacancySection => {
        if (vacancySection.type === 'textField' && vacancySection.required) {
          browser.elements(
            'css selector',
            '[name^="quests"]',
            result => {
              let NUMBER_OF_FIELDS = result.value.length - 1
              while (NUMBER_OF_FIELDS >= 0) {
                browser.setValue(
                  `[name="quests[${NUMBER_OF_FIELDS}].text"]`,
                  'Заполнено атвотестом'
                )
                NUMBER_OF_FIELDS--
              }
            })
        }
        if (['quest', 'questBox'].includes(vacancySection.type)) {
          vacancySection.sections.forEach(innerSection => {
            if (innerSection.type === 'textField' && innerSection.required) {
              browser.elements(
                'css selector',
                '[name^="quests"]',
                result => {
                  let NUMBER_OF_FIELDS = result.value.length - 1
                  while (NUMBER_OF_FIELDS >= 0) {
                    browser.setValue(
                      `[name="quests[${NUMBER_OF_FIELDS}].text"]`,
                      'Заполнено атвотестом'
                    )
                    NUMBER_OF_FIELDS--
                  }
                })
            }
          })
        }
      })
      if (vacancies[NUMBER_OF_VACANCIES].hasResume == true) {
        browser.setValue('[name="resume"]', 'https://csssr.com/')
      }
      if (vacancies[NUMBER_OF_VACANCIES].hasPortfolio == true) {
        browser.setValue('[name="portfolio"]', 'https://csssr.com/')
      }
      if (vacancies[NUMBER_OF_VACANCIES].hasGithub == true) {
        browser.setValue('[name="github"]', 'https://github.com/')
      }
      if (vacancies[NUMBER_OF_VACANCIES].hasFile == true) {
        browser.uploadFile(
          '[name="file"]',
          require('path').resolve(__dirname, '../tests/upload files/pdf.pdf')
        )
      }
      if (vacancies[NUMBER_OF_VACANCIES].hasComment == true) {
        browser.setValue('[name="comment"]', 'Отправлено автотестом')
      }
      browser
        .moveToElement('#main > form  button', 1, 1)
        .pause(ANIMATION_DURATION_IN_MS)
        .click('#main > form > div.e7w76vv0.css-trbtch-Grid.e1kw6gvb0 > span')
        .click('#main > form  button')
        .waitForElementPresent('#main > form div.message', `Заявка для вакансии ${vacancies[NUMBER_OF_VACANCIES].name} не отправилась`)
        .url(browser.launch_url + '/ru-ru/jobs')
        .waitForElementPresent(`#main > article > ul > li:nth-child(1) > a`)
    }
  })
})

testcase('Валидация обязательных полей Анкеты', () => {
  let vacancies

  step('Переходим на страницу вакансий (RU)', () => {
    browser
      .url(browser.launch_url + '/ru-ru/jobs')
      .click('#__next > div.css-1ci3dja.e1foxtb90 > button')
      .perform(
        async (done) => {
          vacancies = await makeRequest('https://csssr.space/api/public/vacancies/active?locale=ru-ru')
          done()
        }
      )
  })

  step('Переходим на страницу вакансии', () => {
    browser
      .click(`#main > article > ul > li:nth-child(1) > a`)
      .waitForElementPresent('[name="firstname"]', 'Не открылась страница вакансии')
  })

  step('Кликаем на кнопку «Отправить»', () => {
    browser
      .moveToElement('#main > form  button', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
      .click('#main > form  button')
  })

  expected('Отображаются алерты обяательных полей', () => {
    browser.assert.containsText('[name="firstname"] + *', 'ОБЯЗАТЕЛЬНОЕ ПОЛЕ')
    browser.assert.containsText('[name="lastname"] + *', 'ОБЯЗАТЕЛЬНОЕ ПОЛЕ')
    browser.assert.containsText('[name="location"] + *', 'ОБЯЗАТЕЛЬНОЕ ПОЛЕ')
    browser.assert.containsText('[name="email"] + *', 'ОБЯЗАТЕЛЬНОЕ ПОЛЕ')
    if (vacancies[0].hasResume == true) {
      browser.assert.containsText('[name="resume"] + *', 'ОБЯЗАТЕЛЬНОЕ ПОЛЕ')
    }
    if (vacancies[0].hasFile == true) {
      browser.assert.containsText('[for="file"] + *', 'ОБЯЗАТЕЛЬНОЕ ПОЛЕ')
    }
  })
})


