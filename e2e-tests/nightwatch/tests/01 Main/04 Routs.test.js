const { switchLanguage } = require('../actions/switchLanguage')

// Роуты с российской локали

testcase('Rout to the «Фронтенд аутсорс» page', () => {
  step('Go to the Main page', () => {
    browser
      .setWindowSize(1920, 2080)
      .url(browser.launch_url + '/ru')
      .waitForElementPresent('[data-testid="Home:block.services"]')
  })

  step('Scroll to Services block', () => {
    browser
      .moveToElement('[data-testid="Home:block.services"]', 1, 1)
      .click('div.css-tq6n8v.e1foxtb90 > button')
  })

  step('Click on the link «Фронтенд аутсорс»', () => {
    browser
      .click('[data-testid="Services:service.outsourcing.title"]')
  })

  expected('Triggered a route on to the page «Фронтенд аутсорс»', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url + '/ru/service/outsourcing-front-end')
  })
})


testcase('Rout to the «Бэкенд и DevOps» page', () => {
  step('Go to the Main page', () => {
    browser
      .setWindowSize(1920, 1080)
      .url(browser.launch_url + '/ru')
      .waitForElementPresent('[data-testid="Home:block.services"]')
  })

  step('Scroll to Services block', () => {
    browser
      .moveToElement('[data-testid="Services:service.backend.title"]', 1, 1)
      .click('div.css-tq6n8v.e1foxtb90 > button')
  })


  step('Click on the link «Бэкенд и DevOps»', () => {
    browser
      .click('[data-testid="Services:service.backend.title"]')
  })

  expected('Triggered a route on to the page «Бэкенд и DevOps»', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url + '/ru/service/back-end-and-devops')
  })
})

testcase('Rout to the «Разработка MVP» page', () => {
  step('Go to the Main page', () => {
    browser
      .setWindowSize(1920, 1080)
      .url(browser.launch_url + '/ru')
      .waitForElementPresent('[data-testid="Home:block.services"]')
  })

  step('Scroll to Services block', () => {
    browser
      .moveToElement('[data-testid="Services:service.mvp.title"]', 1, 1)
      .click('div.css-tq6n8v.e1foxtb90 > button')
  })

  step('Click on the link «Разработка MVP»', () => {
    browser
      .click('[data-testid="Services:service.mvp.title"]')
  })

  expected('Triggered a route on to the page «Разработка MVP»', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url + '/ru/service/mvp-development')
  })
})

testcase('Rout to the «Professional» project page', () => {
  step('Go to the Main page', () => {
    browser
      .setWindowSize(1920, 1080)
      .url(browser.launch_url + '/ru')
      .waitForElementPresent('[data-testid="Home:block.services"]')
  })

  step('Scroll to the Projects block', () => {
    browser
      .moveToElement('[data-testid="Home:block.link.projects"]', 1, 1)
      .click('div.css-tq6n8v.e1foxtb90 > button')
  })

  step('Click on the link of Gazprom project', () => {
    browser
      .click('[data-testid="Cases:case.gazprom-neft-professionals-4-0"]')
  })

  expected('Triggered a route on to the page of «Professionals 4.0»', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url + '/ru/project/gazprom-neft-professionals-4-0')
  })
})

testcase('Rout to the «Professional» project page', () => {
  step('Go to the Main page', () => {
    browser
      .setWindowSize(1920, 1080)
      .url(browser.launch_url + '/ru')
      .waitForElementPresent('[data-testid="Home:block.services"]')
  })

  step('Scroll to the Projects block', () => {
    browser
      .moveToElement('[data-testid="Home:block.link.projects"]', 1, 1)
      .click('div.css-tq6n8v.e1foxtb90 > button')
  })

  step('Click on the link of S7 project', () => {
    browser
      .click('[data-testid="Cases:case.s7-personal-account"]')
  })

  expected('Triggered a route on to the page of «S7 Airlanes»', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url + '/ru/project/s7-personal-account')
  })
})

testcase('Route to the IT Industry Page', () => {
  step('Go to the Main page', () => {
    browser
      .setWindowSize(1920, 1080)
      .url(browser.launch_url + '/ru')
      .waitForElementPresent('[data-testid="Home:block.services"]')
  })

  step('Scroll to the Projects block', () => {
    browser
      .moveToElement('[data-testid="Home:block.link.projects"]', 1, 1)
      .click('div.css-tq6n8v.e1foxtb90 > button')
  })

  step('Click on the link in the text «информационные технологии»', () => {
    browser
      .click('[data-testid="Home:block.cases.link.inforamationTechnology"]')
  })

  expected('Triggered a route to the IT industry page', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url + '/ru/industry/information-technology')
  })
})

testcase('Route to the Media&Marketing Industry Page', () => {
  step('Go to the Main page', () => {
    browser
      .setWindowSize(1920, 1080)
      .url(browser.launch_url + '/ru')
      .waitForElementPresent('[data-testid="Home:block.services"]')
  })

  step('Scroll to the Projects block', () => {
    browser
      .moveToElement('[data-testid="Home:block.link.projects"]', 1, 1)
      .click('div.css-tq6n8v.e1foxtb90 > button')
  })

  step('Click on the link in the text «медиа и маркетинг»', () => {
    browser
      .click('[data-testid="Home:block.cases.link.mediaAndMarketing"]')
  })

  expected('Triggered a route to the Media&Marketing industry page', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url + '/ru/industry/media-and-marketing')
  })
})

testcase('Route to the Fintech Industry Page', () => {
  step('Go to the Main page', () => {
    browser
      .setWindowSize(1920, 1080)
      .url(browser.launch_url + '/ru')
      .waitForElementPresent('[data-testid="Home:block.services"]')
  })

  step('Scroll to the Projects block', () => {
    browser
      .moveToElement('[data-testid="Home:block.link.projects"]', 1, 1)
      .click('div.css-tq6n8v.e1foxtb90 > button')
  })

  step('Click on the link in the text «финтех»', () => {
    browser
      .click('[data-testid="Home:block.cases.link.fintech"]')
  })

  expected('Triggered a route to the Fintex industry page', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url + '/ru/industry/fintech')
  })
})

testcase('Route to the E-commerce Industry Page', () => {
  step('Go to the Main page', () => {
    browser
      .setWindowSize(1920, 1080)
      .url(browser.launch_url + '/ru')
      .waitForElementPresent('[data-testid="Home:block.services"]')
  })

  step('Scroll to the Projects block', () => {
    browser
      .moveToElement('[data-testid="Home:block.link.projects"]', 1, 1)
      .click('div.css-tq6n8v.e1foxtb90 > button')
  })

  step('Click on the link in the text «электронная коммерция»', () => {
    browser
      .click('[data-testid="Industry:block.cases.link.ecommerce"]')
  })

  expected('Triggered a route to the E-Commerce industry page', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url + '/ru/industry/ecommerce')
  })
})

testcase('Route to page of all projects', () => {
  step('Go to the Main page', () => {
    browser
      .setWindowSize(1920, 1080)
      .url(browser.launch_url + '/ru')
      .waitForElementPresent('[data-testid="Home:block.services"]')
  })

  step('Scroll to the Projects block', () => {
    browser
      .moveToElement('[data-testid="Home:block.link.projects"]', 1, 1)
      .click('div.css-tq6n8v.e1foxtb90 > button')
  })

  step('Click on the button «Просмотреть наши проекты»', () => {
    browser
      .click('[data-testid="Home:block.link.projects"]')
  })

  expected('Triggered a route to page of all projects', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url + '/ru/projects')
  })
})

testcase('Rout to the «Организация процессов» page', () => {
  step('Go to the Main page', () => {
    browser
      .setWindowSize(1920, 1080)
      .url(browser.launch_url + '/ru')
      .waitForElementPresent('[data-testid="Home:block.services"]')
  })

  step('Scroll to process description block', () => {
    browser
      .moveToElement('[data-testid="Home:block.our-features"]', 1, 1)
      .click('div.css-tq6n8v.e1foxtb90 > button')
  })

  step('Click on the text link «Читать о процессах»', () => {
    browser
      .click('[data-testid="Home:link.feature1"]')
  })

  expected('Triggered a route on to the page «Организация процессов»', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url + '/ru/way-of-work')
  })
})


testcase('Rout to the «Стек технологий» page', () => {
  step('Go to the Main page', () => {
    browser
      .setWindowSize(1920, 1080)
      .url(browser.launch_url + '/ru')
      .waitForElementPresent('[data-testid="Home:block.services"]')
  })

  step('Scroll to process description block', () => {
    browser
      .moveToElement('[data-testid="Home:block.our-features"]', 1, 1)
      .click('div.css-tq6n8v.e1foxtb90 > button')
  })

  step('Click on the text link «Читать о технологиях»', () => {
    browser
      .click('[data-testid="Home:link.feature2"]')
  })

  expected('Triggered a route on to the page «Стек текхнологий»', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url + '/ru/tech-stack')
  })
})

testcase('Route to page of CSSSR.Tracker', () => {
  step('Go to the Main page', () => {
    browser
      .setWindowSize(1920, 1080)
      .url(browser.launch_url + '/ru')
      .waitForElementPresent('[data-testid="Home:block.services"]')
  })

  step('Scroll to the Projects block', () => {
    browser
      .moveToElement('[data-testid="Project:tracker.text"]', 1, 1)
      .click('div.css-tq6n8v.e1foxtb90 > button')
  })

  step('Click on the link «CSSSR.Tracker»', () => {
    browser
      .click('[data-testid="Projects:link.tracker"]')
  })

  expected('The Tracker page has opened in a new tab', () => {
    browser.windowHandles(function (result) {
      var handle = result.value[1]
      browser.switchWindow(handle)
    })

    browser
      .waitForElementPresent('section.css-sygdd1.e2y1r200')
      .assert.urlEquals('https://tracker.csssr.com/')
  })
})

testcase('Route to page of CSSSR.School', () => {
  step('Go to the Main page', () => {
    browser
      .setWindowSize(1920, 1080)
      .url(browser.launch_url + '/ru')
      .waitForElementPresent('[data-testid="Home:block.services"]')
  })

  step('Scroll to the Projects block', () => {
    browser
      .moveToElement('[data-testid="Project:tracker.text"]', 1, 1)
      .click('div.css-tq6n8v.e1foxtb90 > button')
  })

  step('Click on the link «CSSSR.School»', () => {
    browser
      .click('[data-testid="Projects:link.school"]')
  })

  expected('The School page has opened in a new tab', () => {
    browser.windowHandles(function (result) {
      var handle = result.value[1]
      browser.switchWindow(handle)
    })

    browser
      .waitForElementPresent('[id="main"]')
      .assert.urlEquals('https://school.csssr.com/ru')
  })
})

testcase('Route to page of CSSSR.Blog', () => {
  step('Go to the Main page', () => {
    browser
      .setWindowSize(1920, 1080)
      .url(browser.launch_url + '/ru')
      .waitForElementPresent('[data-testid="Home:block.services"]')
  })

  step('Scroll to the Projects block', () => {
    browser
      .moveToElement('[data-testid="Projects:link.blog"]', 1, 1)
      .click('div.css-tq6n8v.e1foxtb90 > button')
  })

  step('Click on the link «CSSSR.Blog»', () => {
    browser
      .click('[data-testid="Projects:link.blog"]')
  })

  expected('The School page has opened in a new tab', () => {
    browser.windowHandles(function (result) {
      var handle = result.value[1]
      browser.switchWindow(handle)
    })

    browser
      .waitForElementPresent('[id="main"]')
      .assert.urlEquals('https://blog.csssr.com/ru')
  })
})

testcase('Route to page of CSSSR.Radio', () => {
  step('Go to the Main page', () => {
    browser
      .setWindowSize(1920, 1080)
      .url(browser.launch_url + '/ru')
      .waitForElementPresent('[data-testid="Home:block.services"]')
  })

  step('Scroll to the Projects block', () => {
    browser
      .moveToElement('[data-testid="Project:radio.text"]', 1, 1)
      .click('div.css-tq6n8v.e1foxtb90 > button')
  })

  step('Click on the link «CSSSR.Radio»', () => {
    browser
      .click('[data-testid="Project:radio.title"]')
  })

  expected('The School page has opened in a new tab', () => {
    browser.windowHandles(function (result) {
      var handle = result.value[1]
      browser.switchWindow(handle)
    })

    browser
      .waitForElementPresent('[id="app"]')
      .assert.urlEquals('https://soundcloud.com/csssr')
  })
})

testcase('Route to the page with a list of all active vacancies', () => {
  step('Go to the Main page', () => {
    browser
      .setWindowSize(1920, 1080)
      .url(browser.launch_url + '/ru')
      .waitForElementPresent('[data-testid="Home:block.services"]')
  })

  step('Scroll to the Vacancies block', () => {
    browser
      .moveToElement('[data-testid="Home:link.vacancies"]', 1, 1)
      .click('div.css-tq6n8v.e1foxtb90 > button')
  })

  step('Click on the button «Все наши вакансии»', () => {
    browser
      .click('[data-testid="Home:link.vacancies"]')
  })

  expected('Triggered a route to the page with a list of all vacancies', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url + '/ru-ru/jobs')
  })
})

testcase('Language Switch-RU', () => {
  step('Go to the Main page', () => {
    browser.url(browser.launch_url + '/ru')
      .waitForElementVisible('[data-testid="Main:block"]')
  })

  switchLanguage()

  expected('The English version of the page has been opened', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url + '/en')
  })
})

// Роуты с английской локали

testcase('Rout to the «Web Development Outsourcing» page', () => {
  step('Go to the Main page', () => {
    browser
      .setWindowSize(1920, 2080)
      .url(browser.launch_url + '/en')
      .waitForElementPresent('[data-testid="Home:block.services"]')
  })

  step('Scroll to Services block', () => {
    browser
      .moveToElement('[data-testid="Home:block.services"]', 1, 1)
      .click('div.css-tq6n8v.e1foxtb90 > button')
  })

  step('Click on the link «Web Development Outsourcing»', () => {
    browser
      .click('[data-testid="Services:service.outsourcing.title"]')
  })

  expected('Triggered a route on to the page «Web Development Outsourcing»', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url + '/en/service/outsourcing-front-end')
  })
})


testcase('Rout to the «Back-end&DevOps» page', () => {
  step('Go to the Main page', () => {
    browser
      .setWindowSize(1920, 1080)
      .url(browser.launch_url + '/en')
      .waitForElementPresent('[data-testid="Home:block.services"]')
  })

  step('Scroll to Services block', () => {
    browser
      .moveToElement('[data-testid="Services:service.backend.title"]', 1, 1)
      .click('div.css-tq6n8v.e1foxtb90 > button')
  })


  step('Click on the link «Back-end&DevOps»', () => {
    browser
      .click('[data-testid="Services:service.backend.title"]')
  })

  expected('Triggered a route on to the page «Back-end&DevOps»', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url + '/en/service/back-end-and-devops')
  })
})

testcase('Rout to the «MVP Development» page', () => {
  step('Go to the Main page', () => {
    browser
      .setWindowSize(1920, 1080)
      .url(browser.launch_url + '/en')
      .waitForElementPresent('[data-testid="Home:block.services"]')
  })

  step('Scroll to Services block', () => {
    browser
      .moveToElement('[data-testid="Services:service.mvp.title"]', 1, 1)
      .click('div.css-tq6n8v.e1foxtb90 > button')
  })

  step('Click on the link «MVP Development»', () => {
    browser
      .click('[data-testid="Services:service.mvp.title"]')
  })

  expected('Triggered a route on to the page «MVP Development»', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url + '/en/service/mvp-development')
  })
})

testcase('Rout to the «Professional» project page', () => {
  step('Go to the Main page', () => {
    browser
      .setWindowSize(1920, 1080)
      .url(browser.launch_url + '/en')
      .waitForElementPresent('[data-testid="Home:block.services"]')
  })

  step('Scroll to the Projects block', () => {
    browser
      .moveToElement('[data-testid="Home:block.link.projects"]', 1, 1)
      .click('div.css-tq6n8v.e1foxtb90 > button')
  })

  step('Click on the link of Gazprom project', () => {
    browser
      .click('[data-testid="Cases:case.gazprom-neft-professionals-4-0"]')
  })

  expected('Triggered a route on to the page of «Professionals 4.0»', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url + '/en/project/gazprom-neft-professionals-4-0')
  })
})

testcase('Rout to the «Professional» project page', () => {
  step('Go to the Main page', () => {
    browser
      .setWindowSize(1920, 1080)
      .url(browser.launch_url + '/en')
      .waitForElementPresent('[data-testid="Home:block.services"]')
  })

  step('Scroll to the Projects block', () => {
    browser
      .moveToElement('[data-testid="Home:block.link.projects"]', 1, 1)
      .click('div.css-tq6n8v.e1foxtb90 > button')
  })

  step('Click on the link of S7 project', () => {
    browser
      .click('[data-testid="Cases:case.s7-personal-account"]')
  })

  expected('Triggered a route on to the page of «S7 Airlanes»', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url + '/en/project/s7-personal-account')
  })
})

testcase('Route to the IT Industry Page', () => {
  step('Go to the Main page', () => {
    browser
      .setWindowSize(1920, 1080)
      .url(browser.launch_url + '/en')
      .waitForElementPresent('[data-testid="Home:block.services"]')
  })

  step('Scroll to the Projects block', () => {
    browser
      .moveToElement('[data-testid="Home:block.link.projects"]', 1, 1)
      .click('div.css-tq6n8v.e1foxtb90 > button')
  })

  step('Click on the link in the text «information technology»', () => {
    browser
      .click('[data-testid="Home:block.cases.link.inforamationTechnology"]')
  })

  expected('Triggered a route to the IT industry page', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url + '/en/industry/information-technology')
  })
})

testcase('Route to the Media&Marketing Industry Page', () => {
  step('Go to the Main page', () => {
    browser
      .setWindowSize(1920, 1080)
      .url(browser.launch_url + '/en')
      .waitForElementPresent('[data-testid="Home:block.services"]')
  })

  step('Scroll to the Projects block', () => {
    browser
      .moveToElement('[data-testid="Home:block.link.projects"]', 1, 1)
      .click('div.css-tq6n8v.e1foxtb90 > button')
  })

  step('Click on the link in the text «media and marketing»', () => {
    browser
      .click('[data-testid="Home:block.cases.link.mediaAndMarketing"]')
  })

  expected('Triggered a route to the Media&Marketing industry page', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url + '/en/industry/media-and-marketing')
  })
})

testcase('Route to the Fintech Industry Page', () => {
  step('Go to the Main page', () => {
    browser
      .setWindowSize(1920, 1080)
      .url(browser.launch_url + '/en')
      .waitForElementPresent('[data-testid="Home:block.services"]')
  })

  step('Scroll to the Projects block', () => {
    browser
      .moveToElement('[data-testid="Home:block.link.projects"]', 1, 1)
      .click('div.css-tq6n8v.e1foxtb90 > button')
  })

  step('Click on the link in the text «fintech»', () => {
    browser
      .click('[data-testid="Home:block.cases.link.fintech"]')
  })

  expected('Triggered a route to the Fintex industry page', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url + '/en/industry/fintech')
  })
})

testcase('Route to the E-commerce Industry Page', () => {
  step('Go to the Main page', () => {
    browser
      .setWindowSize(1920, 1080)
      .url(browser.launch_url + '/en')
      .waitForElementPresent('[data-testid="Home:block.services"]')
  })

  step('Scroll to the Projects block', () => {
    browser
      .moveToElement('[data-testid="Home:block.link.projects"]', 1, 1)
      .click('div.css-tq6n8v.e1foxtb90 > button')
  })

  step('Click on the link in the text «e-commerce»', () => {
    browser
      .click('[data-testid="Industry:block.cases.link.ecommerce"]')
  })

  expected('Triggered a route to the E-Commerce industry page', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url + '/en/industry/ecommerce')
  })
})

testcase('Route to page of all projects', () => {
  step('Go to the Main page', () => {
    browser
      .setWindowSize(1920, 1080)
      .url(browser.launch_url + '/en')
      .waitForElementPresent('[data-testid="Home:block.services"]')
  })

  step('Scroll to the Projects block', () => {
    browser
      .moveToElement('[data-testid="Home:block.link.projects"]', 1, 1)
      .click('div.css-tq6n8v.e1foxtb90 > button')
  })

  step('Click on the button «View our projects»', () => {
    browser
      .click('[data-testid="Home:block.link.projects"]')
  })

  expected('Triggered a route to page of all projects', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url + '/en/projects')
  })
})

testcase('Rout to the «Our Processes» page', () => {
  step('Go to the Main page', () => {
    browser
      .setWindowSize(1920, 1080)
      .url(browser.launch_url + '/en')
      .waitForElementPresent('[data-testid="Home:block.services"]')
  })

  step('Scroll to process description block', () => {
    browser
      .moveToElement('[data-testid="Home:block.our-features"]', 1, 1)
      .click('div.css-tq6n8v.e1foxtb90 > button')
  })

  step('Click on the text link «Read about processes»', () => {
    browser
      .click('[data-testid="Home:link.feature1"]')
  })

  expected('Triggered a route on to the page «Our Processes»', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url + '/en/way-of-work')
  })
})


testcase('Rout to the «CSSSR Technologies» page', () => {
  step('Go to the Main page', () => {
    browser
      .setWindowSize(1920, 1080)
      .url(browser.launch_url + '/en')
      .waitForElementPresent('[data-testid="Home:block.services"]')
  })

  step('Scroll to process description block', () => {
    browser
      .moveToElement('[data-testid="Home:block.our-features"]', 1, 1)
      .click('div.css-tq6n8v.e1foxtb90 > button')
  })

  step('Click on the text link «Read about technologies»', () => {
    browser
      .click('[data-testid="Home:link.feature2"]')
  })

  expected('Triggered a route on to the page «CSSSR Technologies»', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url + '/en/tech-stack')
  })
})

testcase('Route to page of CSSSR.Tracker', () => {
  step('Go to the Main page', () => {
    browser
      .setWindowSize(1920, 1080)
      .url(browser.launch_url + '/en')
      .waitForElementPresent('[data-testid="Home:block.services"]')
  })

  step('Scroll to the Solutions block', () => {
    browser
      .moveToElement('[data-testid="Home:block.solution.time-tracker.heading"]', 1, 1)
      .click('div.css-tq6n8v.e1foxtb90 > button')
  })

  step('Click on the link «CSSSR.Tracker»', () => {
    browser
      .click('[data-testid="Home:block.solution.time-tracker.heading"]')
  })

  expected('The Tracker page has opened in a new tab', () => {
    browser.windowHandles(function (result) {
      var handle = result.value[1]
      browser.switchWindow(handle)
    })

    browser
      .waitForElementPresent('section.css-sygdd1.e2y1r200')
      .assert.urlEquals('https://tracker.csssr.com/')
  })
})

testcase('Route to page of LMS', () => {
  step('Go to the Main page', () => {
    browser
      .setWindowSize(1920, 1080)
      .url(browser.launch_url + '/en')
      .waitForElementPresent('[data-testid="Home:block.services"]')
  })

  step('Scroll to the Solutions block', () => {
    browser
      .moveToElement('[data-testid="Home:block.solution.lms.heading"]', 1, 1)
      .click('div.css-tq6n8v.e1foxtb90 > button')
  })

  step('Click on the link «LMS»', () => {
    browser
      .click('[data-testid="Home:block.solution.lms.link"]')
  })

  expected('Triggered a route on to the page «LMS»', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url + '/en/solutions/lms')
  })
})

testcase('Route to page of CSSSR.Blog', () => {
  step('Go to the Main page', () => {
    browser
      .setWindowSize(1920, 1080)
      .url(browser.launch_url + '/en')
      .waitForElementPresent('[data-testid="Home:block.services"]')
  })

  step('Scroll to the Projects block', () => {
    browser
      .moveToElement('[data-testid="Projects:link.blog"]', 1, 1)
      .click('div.css-tq6n8v.e1foxtb90 > button')
  })

  step('Click on the link «CSSSR.Blog»', () => {
    browser
      .click('[data-testid="Projects:link.blog"]')
  })

  expected('The School page has opened in a new tab', () => {
    browser.windowHandles(function (result) {
      var handle = result.value[1]
      browser.switchWindow(handle)
    })

    browser
      .waitForElementPresent('[id="main"]')
      .assert.urlEquals('https://blog.csssr.com/en')
  })
})


testcase('Route to the page with a list of all active vacancies', () => {
  step('Go to the Main page', () => {
    browser
      .setWindowSize(1920, 1080)
      .url(browser.launch_url + '/en')
      .waitForElementPresent('[data-testid="Home:block.services"]')
  })

  step('Scroll to the Vacancies block', () => {
    browser
      .moveToElement('[data-testid="Home:link.vacancies"]', 1, 1)
      .click('div.css-tq6n8v.e1foxtb90 > button')
  })

  step('Click on the button «Все наши вакансии»', () => {
    browser
      .click('[data-testid="Home:link.vacancies"]')
  })

  expected('Triggered a route to the page with a list of all vacancies', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url + '/en-us/jobs')
  })
})

testcase('Language Switch-EN', () => {
  step('Go to the Main page', () => {
    browser.url(browser.launch_url + '/en')
      .waitForElementVisible('[data-testid="Main:block"]')
  })

  switchLanguage()

  expected('The English version of the page has been opened', () => {
    browser
      .waitForElementPresent('[data-testid="Main:block"]')
      .assert.urlEquals(browser.launch_url + '/ru')
  })
})
