testcase('Редирект на Главную страницу c csssr.io + http', () => {
  step('Перейти на страницу csssr.io', () => {
    browser.url('http://csssr.io')
  })

  expected('Редирект на Главную страницу', () => {
    browser.assert.urlEquals('https://csssr.com/en')
  })

})

testcase('Редирект на Главную страницу c csssr.io + http://www', () => {
  step('Перейти на страницу csssr.io', () => {
    browser.url('http://www.csssr.io')
  })

  expected('Редирект на Главную страницу', () => {
    browser.assert.urlEquals('https://csssr.com/en')
  })
})

testcase('Редирект на Главную страницу c csssr.io + https', () => {
  step('Перейти на страницу csssr.io', () => {
    browser.url('https://csssr.io')
  })

  expected('Редирект на Главную страницу', () => {
    browser.assert.urlEquals('https://csssr.com/en')
  })
})

testcase('Редирект на Главную страницу c csssr.io + https//:www', () => {
  step('Перейти на страницу csssr.io', () => {
    browser.url('https://www.csssr.io')
  })

  expected('Редирект на Главную страницу', () => {
    browser.assert.urlEquals('https://csssr.com/en')
  })
})

testcase('Редирект на Главную страницу c csssr.ru + http', () => {
  step('Перейти на страницу csssr.ru', () => {
    browser.url('http://csssr.ru')
  })

  expected('Редирект на Главную страницу', () => {
    browser.assert.urlEquals('https://csssr.com/en')
  })
})

testcase('Редирект на Главную страницу c csssr.ru + http//:wwww', () => {
  step('Перейти на страницу csssr.ru', () => {
    browser.url('http://www.csssr.ru')
  })

  expected('Редирект на Главную страницу', () => {
    browser.assert.urlEquals('https://csssr.com/en')
  })
})

testcase('Редирект на Главную страницу c csssr.ru + https', () => {
  step('Перейти на страницу csssr.ru', () => {
    browser.url('https://csssr.ru')
  })

  expected('Редирект на Главную страницу', () => {
    browser.assert.urlEquals('https://csssr.com/en')
  })
})

testcase('Редирект на Главную страницу c csssr.ru + https//:wwww', () => {
  step('Перейти на страницу csssr.ru', () => {
    browser.url('https://www.csssr.ru')
  })

  expected('Редирект на Главную страницу', () => {
    browser.assert.urlEquals('https://csssr.com/en')
  })
})

testcase('Редирект на Главную страницу c csssr.dev + http', () => {
  step('Перейти на страницу csssr.dev', () => {
    browser.url('http://csssr.dev')
  })

  expected('Редирект на Главную страницу', () => {
    browser.assert.urlEquals('https://csssr.com/en')
  })
})

testcase('Редирект на Главную страницу c csssr.dev + http//:www', () => {
  step('Перейти на страницу csssr.dev', () => {
    browser.url('http://www.csssr.dev')
  })

  expected('Редирект на Главную страницу', () => {
    browser.assert.urlEquals('https://csssr.com/en')
  })
})

testcase('Редирект на Главную страницу c csssr.dev + https', () => {
  step('Перейти на страницу csssr.dev', () => {
    browser.url('https://csssr.dev')
  })

  expected('Редирект на Главную страницу', () => {
    browser.assert.urlEquals('https://csssr.com/en')
  })
})

testcase('Редирект на Главную страницу c csssr.dev + https//:www', () => {
  step('Перейти на страницу csssr.dev', () => {
    browser.url('https://www.csssr.dev')
  })

  expected('Редирект на Главную страницу', () => {
    browser.assert.urlEquals('https://csssr.com/en')
  })
})

// Редирект со страницы express

testcase('Redirect from ru/express', () => {
  step('Go to  ru/express', () => {
    browser.url(browser.launch_url + '/ru/express')
  })

  expected('The redirect to the Main Page RU', () => {
    browser
      .waitForElementPresent('[data-testid="Header:block"]')
      .assert.urlEquals(browser.launch_url + '/ru')
  })
})
