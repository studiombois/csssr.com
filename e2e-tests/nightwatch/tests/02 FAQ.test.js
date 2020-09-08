testcase('Раскрытие аккордеона', () => {
  step('Переходим на страницу jobs-faq', () => {
    browser
      .setWindowSize(1920, 1280)
      .url(browser.launch_url + '/ru/jobs-faq')
      .waitForElementPresent('#main > div:nth-child(4) > h2')
  })

  step('Кликаем на любую строку с аккордеоном', () => {
    browser
      .click('#main > div:nth-child(4) > h2')
  })

  expected('Раскрылся аккордеон с подробным описанием пункта', () => {
    browser
      .waitForElementVisible('#main > div:nth-child(4) > div > p')
  })
})

testcase('Переход на страницу блога со статьей «И так сойдёт»', () => {
  step('Переходим на страницу jobs-faq', () => {
    browser
      .setWindowSize(1920, 1280)
      .url(browser.launch_url + '/ru/jobs-faq')
      .waitForElementPresent('#main > div:nth-child(4) > h2')
  })

  step('Кликаем на строку «Я хочу работать в CSSSR, с чего мне начать»', () => {
    browser
      .click('#main > div:nth-child(4) > h2')
  })

  expected('Раскрылся аккордеон с подробным описанием пункта', () => {
    browser
      .waitForElementVisible('#main > div:nth-child(4) > div > p')
  })

  step('Кликаем на ссылку «И так сойдёт»', () => {
    browser
      .click('#main > div:nth-child(4) > div > p > a')
  })

  expected('Открылась статья блога', () => {
    browser.windowHandles(function (result) {
      var handle = result.value[1]
      browser.switchWindow(handle)
    })
    browser
      .waitForElementPresent('body > div.site-wrap > div > div > div > h1')
      .assert.urlEquals('https://blog.csssr.ru/2018/08/16/candidates-mistakes')
  })
})

testcase('Переход на видео в ютюбе о кемпе CSSSR в Черногории', () => {
  step('Переходим на страницу jobs-faq', () => {
    browser
      .setWindowSize(1920, 1280)
      .url(browser.launch_url + '/ru/jobs-faq')
      .waitForElementPresent('#main > div:nth-child(4) > h2')
  })

  step('Кликаем на строку «Вы правда все работаете полностью удалённо»', () => {
    browser
      .moveToElement('#main > div:nth-child(20) > h2', 1, 1)
      .click('#main > div:nth-child(12) > h2')
  })

  expected('Раскрылся аккордеон с подробным описанием пункта', () => {
    browser
      .waitForElementVisible('#main > div:nth-child(12) > div > p')
  })

  step('Кликаем на ссылку «в Черногорию»', () => {
    browser
      .click('#main > div:nth-child(12) > div > p > a')
  })

  expected('Открылась страница ютюб CSSSR', () => {
    browser.windowHandles(function (result) {
      var handle = result.value[1]
      browser.switchWindow(handle)
    })
    browser
      .assert.urlEquals('https://www.youtube.com/watch?v=XXvYsebnfhU')
  })
})

testcase('Переход на страницу блога со статьей «Если жизнь на удалёнке»', () => {
  step('Переходим на страницу jobs-faq', () => {
    browser
      .setWindowSize(1920, 1280)
      .url(browser.launch_url + '/ru/jobs-faq')
      .waitForElementPresent('#main > div:nth-child(4) > h2')
  })

  step('Кликаем на строку «У вас гибкий график работы»', () => {
    browser
      .moveToElement('#main > div:nth-child(20) > h2', 1, 1)
      .click('#main > div:nth-child(13) > h2')
  })

  expected('Раскрылся аккордеон с подробным описанием пункта', () => {
    browser
      .waitForElementVisible('#main > div:nth-child(13) > div')
  })

  step('Кликаем на ссылку «Есть ли жизнь на удалёнке»', () => {
    browser
      .click('#main > div:nth-child(13) > div > p:nth-child(4) > a')
  })

  expected('Открылась статья блога', () => {
    browser.windowHandles(function (result) {
      var handle = result.value[1]
      browser.switchWindow(handle)
    })
    browser
      .waitForElementPresent('body > div.site-wrap > div > div > div > h1')
      .assert.urlEquals('https://blog.csssr.ru/2019/06/26/unicorn-busters')
  })
})

testcase('Переход на видео в ютюбе об Оценке и мотивации', () => {
  step('Переходим на страницу jobs-faq', () => {
    browser
      .setWindowSize(1920, 1280)
      .url(browser.launch_url + '/ru/jobs-faq')
      .waitForElementPresent('#main > div:nth-child(4) > h2')
  })

  step('Кликаем на строку «Чем вы лучше других работодателей»', () => {
    browser
      .moveToElement('#main > div.css-l6ld2m.edn40uh0.image-wrapper > div > picture > img', 1, 1)
      .click('#main > div:nth-child(20) > h2')
  })

  expected('Раскрылся аккордеон с подробным описанием пункта', () => {
    browser
      .waitForElementVisible('#main > div:nth-child(20) > div > ul')
  })

  step('Кликаем на ссылку «об оценке и мотивации наших разработчиков»', () => {
    browser
      .click('#main > div:nth-child(20) > div > ul > li:nth-child(3) > a')
  })

  expected('Открылась страница ютюб CSSSR', () => {
    browser.windowHandles(function (result) {
      var handle = result.value[1]
      browser.switchWindow(handle)
    })
    browser
      .assert.urlEquals('https://www.youtube.com/watch?v=tYxyRojj_gA')
  })
})

testcase('Переход на страницу Вакансии', () => {
  step('Переходим на страницу jobs-faq', () => {
    browser
      .setWindowSize(1920, 1280)
      .url(browser.launch_url + '/ru/jobs-faq')
      .waitForElementPresent('#main > div:nth-child(4) > h2')
  })

  step('Кликаем на Вакансии в хеддере', () => {
    browser.click('[data-testid="Header:link.jobs"]')
  })

  expected('Перешли на страницу Вакансии', () => {
    browser.assert.urlEquals(browser.launch_url + '/ru-ru/jobs')
  })
})

testcase('Переход на страницу вакансий EN при смене языка', () => {
  step('Переходим на страницу jobs-faq', () => {
    browser
      .setWindowSize(1920, 1280)
      .url(browser.launch_url + '/ru/jobs-faq')
      .waitForElementPresent('#main > div:nth-child(4) > h2')
  })

  step('Скроллим до футера', () => {
    browser
      .moveToElement('#__next > footer > div.bottom-content > ul > li:nth-child(1) > a', 1, 1)
      .click('#__next > div.css-1ci3dja.e1foxtb90 > button')
  })

  step('Кликаем на кнопку смены языка «EN»', () => {
    browser
      .click('#__next > footer > div.bottom-content > ul > li:nth-child(1) > a')
  })

  expected('Открылась страница со списком активных вакансий для EN', () => {
    browser
      .assert.urlEquals(browser.launch_url + '/en-us/jobs')
  })
})