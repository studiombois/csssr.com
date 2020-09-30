const { makeRequest } = require('../actions/vacancies')
const ANIMATION_DURATION_IN_MS = 800

testcase('Анимация в блоке Услуг', () => {
  step('Открываем главную страницу', () => {
    browser
      .setWindowSize(1920, 1080)
      .url(browser.launch_url + '/ru')
      .waitForElementPresent('[data-testid="Outsourcing:link:information"]')
  })

  step('Скроллим до блока услуг', () => {
    browser
      .moveToElement('article.eguoypa0.css-1m6fr4l-Grid.e1kw6gvb0 li.service.service_backend > h3', 1, 1)
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Наводим курсор на текст «Фронтенд аутсорсинг»', () => {
    browser.moveToElement('article.eguoypa0.css-1m6fr4l-Grid.e1kw6gvb0 li.service.service_outsourcing > h3', 1, 1)
  })

  expected('Цвет текста по ховеру стал голубым', () => {
    browser.assert.screenshotElement(
      'article.eguoypa0.css-1m6fr4l-Grid.e1kw6gvb0 li.service.service_outsourcing > h3',
      'заголовок Фронтенд аутсорсинг(голубой)'
    )
  })

  expected('Кружки около текста и в фигурках справа стали красными', () => {
    browser.assert.screenshotElement(
      'article.eguoypa0.css-1m6fr4l-Grid.e1kw6gvb0 > aside',
      'фигура в блоке услуг(красный кружок)'
    )
  })

  step('Наводим курсор на текст «Разработка MVP»', () => {
    browser.moveToElement('article.eguoypa0.css-1m6fr4l-Grid.e1kw6gvb0 li.service.service_mvp > h3', 1, 1)
  })

  expected('Цвет текста по ховеру стал голубым', () => {
    browser.assert.screenshotElement(
      'article.eguoypa0.css-1m6fr4l-Grid.e1kw6gvb0 li.service.service_mvp > h3',
      'заголовок Разработка MVP(голубой)'
    )
  })

  expected('Четырехугольники около текста и в фигурках справа стали бирюзовыми', () => {
    browser.assert.screenshotElement(
      'article.eguoypa0.css-1m6fr4l-Grid.e1kw6gvb0 > aside',
      'фигура в блоке услуг(бирюзовый квадрат)'
    )
  })

  step('Наводим курсор на текст «Бэкенд и DevOps»', () => {
    browser.moveToElement('article.eguoypa0.css-1m6fr4l-Grid.e1kw6gvb0 li.service.service_backend > h3', 1, 1)
  })

  expected('Цвет текста по ховеру стал голубым', () => {
    browser.assert.screenshotElement(
      'article.eguoypa0.css-1m6fr4l-Grid.e1kw6gvb0 li.service.service_backend > h3',
      'заголовок Бэкенд и DevOps(голубой)'
    )
  })

  expected('Полукруги около текста и в фигурках справа стали синими', () => {
    browser.assert.screenshotElement(
      'article.eguoypa0.css-1m6fr4l-Grid.e1kw6gvb0 > aside',
      'фигура в блоке услуг(синий полукруг)'
    )
  })
})

testcase('Отображение фото в сердечке по ховеру на слово «флаг»', () => {
  step('Открываем главную страницу', () => {
    browser
      .setWindowSize(1920, 1080)
      .url(browser.launch_url + '/ru')
      .waitForElementPresent('[data-testid="Outsourcing:link:information"]')
  })

  step('Скроллим до блока с Человечком', () => {
    browser
      .moveToElement('article.about-us.e14x8phf0.css-13hkdy3-Grid.e1kw6gvb0 > h2', 1, 1)
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Наводим курсор на слово «флаг» в блоке статистики', () => {
    browser
      .moveToElement('article.about-us.e1jpeafj0.css-mdv6u5-Grid.e1kw6gvb0 > div:nth-child(7) > p > span.italic', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('В сердечке появилось фото с флагом СSSSR в горах', () => {
    browser.assert.screenshotElement(
      'picture.picture.picture_love.css-1bv363l.e1mofdgw0',
      'сердечко с флагом csssr'
    )
  })
})

testcase('Переход на страницу «Стек технологий»', () => {
  step('Открываем главную страницу', () => {
    browser
      .setWindowSize(1920, 1080)
      .url(browser.launch_url + '/ru')
      .waitForElementPresent('[data-testid="Outsourcing:link:information"]')
  })

  step('Скроллим до блока описания процессов', () => {
    browser
      .moveToElement('#main > section > a:nth-child(5)', 1, 1)
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Кликаем на текстовую ссылку «Читать о технологиях»', () => {
    browser
      .click('#main > section > a:nth-child(5)')
  })

  expected('Сработал переход на страницу «Стек текхнологий»', () => {
    browser
      .waitForElementPresent('picture.picture.picture_typescript.css-1bv363l.e1mofdgw0 > img')
      .assert.urlEquals(browser.launch_url + '/ru/tech-stack')
  })
})

testcase('Переход на страницу «Процесы»', () => {
  step('Открываем главную страницу', () => {
    browser
      .setWindowSize(1920, 1080)
      .url(browser.launch_url + '/ru')
      .waitForElementPresent('[data-testid="Outsourcing:link:information"]')
  })

  step('Скроллим до блока описания процессов', () => {
    browser
      .moveToElement('#main > section > a:nth-child(2)', 1, 1)
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Кликаем на текстовую ссылку «Читать о процессах»', () => {
    browser
      .click('#main > section > a:nth-child(2)')
  })

  expected('Сработал переход на страницу «Процессы»', () => {
    browser
      .waitForElementPresent('div.skydiverWrap > picture > img')
      .assert.urlEquals(browser.launch_url + '/ru/way-of-work')
  })
})

testcase('Переход на страницу индустрий «Финтех»', () => {
  step('Открываем главную страницу', () => {
    browser
      .setWindowSize(1920, 1080)
      .url(browser.launch_url + '/ru')
      .waitForElementPresent('[data-testid="Outsourcing:link:information"]')
  })

  step('Скроллим до блока «Индустрии»', () => {
    browser
      .moveToElement('[data-testid="Outsourcing:link:information"]', 1, 1)
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Наводим курсор на ссылку «Финтех»', () => {
    browser
      .moveToElement('[data-testid="Outsourcing:link:fintech"]', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected.skip('По ховеру картинка и текст поменяли цвет на синий', () => {
    browser.assert.screenshotElement(
      '[data-testid="Outsourcing:link:fintech"]',
      'финтех(синий оттенок)'
    )
  })

  step('Кликаем на текстовую ссылку «Финтех»', () => {
    browser
      .click('[data-testid="Outsourcing:link:fintech"]')
  })

  expected('Сработал переход на страницу индустрии «Финтех»', () => {
    browser
      .waitForElementPresent('[data-testid="Industry:button.contactUs"]')
      .assert.urlEquals(browser.launch_url + '/ru/industry/fintech')
  })
})

testcase('Переход на страницу индустрий «Информационные технологии»', () => {
  step('Открываем главную страницу', () => {
    browser
      .setWindowSize(1920, 1080)
      .url(browser.launch_url + '/ru')
      .waitForElementPresent('[data-testid="Outsourcing:link:information"]')
  })

  step('Скроллим до блока «Индустрии»', () => {
    browser
      .moveToElement('[data-testid="Outsourcing:link:information"]', 1, 1)
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Наводим курсор на ссылку «Информационные технологии»', () => {
    browser
      .moveToElement('[data-testid="Outsourcing:link:information"]', 1, 1)
  })

  expected.skip('По ховеру картинка и текст поменяли цвет на синий', () => {
    browser.assert.screenshotElement(
      '[data-testid="Outsourcing:link:information"]',
      'информационные технологии(синий оттенок)'
    )
  })

  step('Кликаем на текстовую ссылку «Информационные технологии»', () => {
    browser
      .click('[data-testid="Outsourcing:link:information"]')
  })

  expected('Сработал переход на страницу индустрии «ИТ»', () => {
    browser
      .waitForElementPresent('[data-testid="Industry:button.contactUs"]')
      .assert.urlEquals(browser.launch_url + '/ru/industry/information-technology')
  })
})

testcase('Переход на страницу индустрий «Медиа и Маркетинг»', () => {
  step('Открываем главную страницу', () => {
    browser
      .setWindowSize(1920, 1080)
      .url(browser.launch_url + '/ru')
      .waitForElementPresent('[data-testid="Outsourcing:link:information"]')
  })

  step('Скроллим до блока «Индустрии»', () => {
    browser
      .moveToElement('[data-testid="Outsourcing:link:information"]', 1, 1)
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Наводим курсор на ссылку «Медиа и Маркетинг»', () => {
    browser
      .moveToElement('[data-testid="Outsourcing:link:mediaAndMarketing"]', 1, 1)
  })

  expected.skip('По ховеру картинка и текст поменяли цвет на синий', () => {
    browser.assert.screenshotElement(
      '[data-testid="Outsourcing:link:mediaAndMarketing"]',
      'Медиа и Маркетинг(синий оттенок)'
    )
  })

  step('Кликаем на текстовую ссылку «Медиа и Маркетинг»', () => {
    browser
      .click('[data-testid="Outsourcing:link:mediaAndMarketing"]')
  })

  expected('Сработал переход на страницу индустрии «Медиа и Маркетинг»', () => {
    browser
      .waitForElementPresent('[data-testid="Industry:button.contactUs"]')
      .assert.urlEquals(browser.launch_url + '/ru/industry/media-and-marketing')
  })
})

testcase('Переход на страницу индустрий «E-Commerce»', () => {
  step('Открываем главную страницу', () => {
    browser
      .setWindowSize(1920, 1080)
      .url(browser.launch_url + '/ru')
      .waitForElementPresent('[data-testid="Outsourcing:link:information"]')
  })

  step('Скроллим до блока «Индустрии»', () => {
    browser
      .moveToElement('[data-testid="Outsourcing:link:information"]', 1, 1)
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Наводим курсор на ссылку «E-Commerce»', () => {
    browser
      .moveToElement('[data-testid="Outsourcing:link:eCommerce"]', 1, 1)
  })

  expected.skip('По ховеру картинка и текст поменяли цвет на синий', () => {
    browser.assert.screenshotElement(
      '[data-testid="Outsourcing:link:eCommerce"]',
      'E-Commerce(синий оттенок)'
    )
  })

  step('Кликаем на текстовую ссылку «E-Commerce»', () => {
    browser
      .click('[data-testid="Outsourcing:link:eCommerce"]')
  })

  expected('Сработал переход на страницу индустрии «E-Commerce»', () => {
    browser
      .waitForElementPresent('[data-testid="Industry:button.contactUs"]')
      .assert.urlEquals(browser.launch_url + '/ru/industry/ecommerce')
  })
})

testcase('Отображение горячих вакансий на главной', () => {
  let vacancies
  let arrayNameVacancies = []
  let arrayIndex = 0

  step('Открываем главную страницу', () => {
    browser
      .setWindowSize(1920, 1080)
      .url(browser.launch_url + '/ru')
      .waitForElementPresent('[data-testid="Outsourcing:link:information"]')
      .perform(
        async (done) => {
          vacancies = await makeRequest('https://csssr.space/api/public/vacancies/active?locale=ru-ru')
          done()
        }
      )
  })

  step('Скроллим до блока c вакансиями', () => {
    browser
      .moveToElement('#main > article.industries.eim5yqb0.css-1g9tfl9-Grid.e1kw6gvb0 > a', 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
      .click('div.css-1ci3dja.e1foxtb90 > button')
  })

  step('В блоке с вакансиями отображаются только горячие', () => {
    browser.perform(function () {
      for (var NUMBER_OF_VACANCIES = 0; NUMBER_OF_VACANCIES < vacancies.length; NUMBER_OF_VACANCIES++) {
        if (vacancies[NUMBER_OF_VACANCIES].isHot === true) {
          arrayNameVacancies[arrayIndex] = vacancies[NUMBER_OF_VACANCIES].name
          arrayIndex++
        }
      }
    })
    browser.perform(function () {
      arrayNameVacancies.forEach(() => {
        browser.assert.containsText(`article.industries.eim5yqb0.css-1g9tfl9-Grid.e1kw6gvb0 > ul > li:nth-child(${arrayIndex}) > a`, arrayNameVacancies[arrayIndex - 1])
        arrayIndex--
      })
    })
  })
})