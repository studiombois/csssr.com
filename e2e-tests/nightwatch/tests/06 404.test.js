testcase('Страница 404 (RU)', () => {
	step('Переходим на главную страницу', () => {
		browser
			.url(browser.launch_url + '/ru')
			.setWindowSize(1200, 1200)
	})

	step('Добавляем в урл «qwe12»', () => {
		browser.url(browser.launch_url + '/ruqwe12')
	})

	expected('Отобразилась стилизованная страница 404', () => {
		browser
			.waitForElementPresent('#__next > div > main > div.code-wrapper')
			.assert.screenshotElement(
				'[data-testid="ErrorPage"]',
				'404я (RU)'
			)
	})
})

testcase('Отображение ссылок (RU)', () => {
	step('Переходим на 404ю страницу', () => {
		browser.url(browser.launch_url + '/ru/qwe12')
	})

	expected('На странице отображаются ссылки на разделы с дев части хеддера', () => {
		browser
			.assert.containsText('[data-testid="ErrorPage:menu:link.outsourcing"]', 'ФРОНТЕНД АУТСОРСИНГ')
			.assert.containsText('[data-testid="ErrorPage:menu:link.mvp"]', 'РАЗРАБОТКА MVP')
			.assert.containsText('[data-testid="ErrorPage:menu:link.backend"]', 'БЭКЕНД И DEVOPS')
			.assert.containsText('[data-testid="ErrorPage:menu:link.fintech"]', 'ФИНТЕХ')
			.assert.containsText('[data-testid="ErrorPage:menu:link.eCommerce"]', 'E-COMMERCE')
			.assert.containsText('[data-testid="ErrorPage:menu:link.information"]', 'ИНФОРМАЦИОННЫЕ ТЕХНОЛОГИИ')
			.assert.containsText('[data-testid="ErrorPage:menu:link.mediaAndMarketing"]', 'МЕДИА И МАРКЕТИНГ')
			.assert.containsText('[data-testid="ErrorPage:menu:link.technologies"]', 'ТЕХНОЛОГИИ')
			.assert.containsText('[data-testid="ErrorPage:menu:link.processes"]', 'ПРОЦЕССЫ')
	})
})

testcase('Переход на главную страницу по клику на лого (RU)', () => {
	step('Переходим на 404ю страницу', () => {
		browser.url(browser.launch_url + '/ru/qwe12')
	})

	step('Кликаем на лого СSSSR', () => {
		browser.click('[data-testid="ErrorPage:link.logo"]')
	})

	expected('Перешли на главную страницу', () => {
		browser
			.waitForElementPresent('[data-testid="Home:link.feature2"]')
			.assert.urlEquals(browser.launch_url + '/ru')
	})
})

testcase('Переход на страницу «ФРОНТЕНД АУТСОРСИНГ»', () => {
	step('Переходим на 404ю страницу', () => {
		browser.url(browser.launch_url + '/ru/qwe12')
	})

	step('Кликаем на текстовую ссылку «ФРОНТЕНД АУТСОРСИНГ»', () => {
		browser.click('[data-testid="ErrorPage:menu:link.outsourcing"]')
	})

	expected('Переход на страницу ФРОНТЕНД АУТСОРСИНГ', () => {
		browser
			.waitForElementPresent('[data-testid="Outsourcing:button:contactUs.hero"]')
			.assert.urlEquals(browser.launch_url + '/ru/service/outsourcing-front-end')
	})
})

testcase('Переход на страницу «РАЗРАБОТКА MVP»', () => {
	step('Переходим на 404ю страницу', () => {
		browser.url(browser.launch_url + '/ru/qwe12')
	})

	step('Кликаем на текстовую ссылку «РАЗРАБОТКА MVP»', () => {
		browser.click('[data-testid="ErrorPage:menu:link.mvp"]')
	})

	expected('Переход на страницу РАЗРАБОТКА MVP', () => {
		browser
			.waitForElementPresent('[data-testid="MVP:button:contactUs"]')
			.assert.urlEquals(browser.launch_url + '/ru/service/mvp-development')
	})
})

testcase('Переход на страницу «БЭКЕНД И DEVOPS»', () => {
	step('Переходим на 404ю страницу', () => {
		browser.url(browser.launch_url + '/ru/qwe12')
	})

	step('Кликаем на текстовую ссылку «БЭКЕНД И DEVOPS»', () => {
		browser.click('[data-testid="ErrorPage:menu:link.backend"]')
	})

	expected('Переход на страницу БЭКЕНД И DEVOPS', () => {
		browser
			.waitForElementPresent('[data-testid="BackendAndDevops:button:contactUs"]')
			.assert.urlEquals(browser.launch_url + '/ru/service/back-end-and-devops')
	})
})

testcase('Переход на страницу «ФИНТЕХ»', () => {
	step('Переходим на 404ю страницу', () => {
		browser.url(browser.launch_url + '/ru/qwe12')
	})

	step('Кликаем на текстовую ссылку «ФИНТЕХ»', () => {
		browser.click('[data-testid="ErrorPage:menu:link.fintech"]')
	})

	expected('Переход на страницу ФИНТЕХ', () => {
		browser
			.waitForElementPresent('[data-testid="Industry:button.contactUs"]')
			.assert.urlEquals(browser.launch_url + '/ru/industry/fintech')
	})
})

testcase('Переход на страницу «E-COMMERCE»', () => {
	step('Переходим на 404ю страницу', () => {
		browser.url(browser.launch_url + '/ru/qwe12')
	})

	step('Кликаем на текстовую ссылку «E-COMMERCE»', () => {
		browser.click('[data-testid="ErrorPage:menu:link.eCommerce"]')
	})

	expected('Переход на страницу E-COMMERCE', () => {
		browser
			.waitForElementPresent('[data-testid="Industry:button.contactUs"]')
			.assert.urlEquals(browser.launch_url + '/ru/industry/ecommerce')
	})
})

testcase('Переход на страницу «ИНФОРМАЦИОННЫЕ ТЕХНОЛОГИИ»', () => {
	step('Переходим на 404ю страницу', () => {
		browser.url(browser.launch_url + '/ru/qwe12')
	})

	step('Кликаем на текстовую ссылку «ИНФОРМАЦИОННЫЕ ТЕХНОЛОГИИ»', () => {
		browser.click('[data-testid="ErrorPage:menu:link.information"]')
	})

	expected('Переход на страницу ИНФОРМАЦИОННЫЕ ТЕХНОЛОГИИ', () => {
		browser
			.waitForElementPresent('[data-testid="Industry:button.contactUs"]')
			.assert.urlEquals(browser.launch_url + '/ru/industry/information-technology')
	})
})

testcase('Переход на страницу «МЕДИА И МАРКЕТИНГ»', () => {
	step('Переходим на 404ю страницу', () => {
		browser.url(browser.launch_url + '/ru/qwe12')
	})

	step('Кликаем на текстовую ссылку «МЕДИА И МАРКЕТИНГ»', () => {
		browser.click('[data-testid="ErrorPage:menu:link.mediaAndMarketing"]')
	})

	expected('Переход на страницу МЕДИА И МАРКЕТИНГ', () => {
		browser
			.waitForElementPresent('[data-testid="Industry:button.contactUs"]')
			.assert.urlEquals(browser.launch_url + '/ru/industry/media-and-marketing')
	})
})

testcase('Переход на страницу «ТЕХНОЛОГИИ»', () => {
	step('Переходим на 404ю страницу', () => {
		browser
			.url(browser.launch_url + '/ru/qwe12')
			.setWindowSize(1200, 1200)
	})

	step('Кликаем на текстовую ссылку «ТЕХНОЛОГИИ»', () => {
		browser.click('[data-testid="ErrorPage:menu:link.technologies"]')
	})

	expected('Переход на страницу ТЕХНОЛОГИИ', () => {
		browser
			.waitForElementPresent('[data-testid="contact:button.callbackForm.submit"]')
			.assert.urlEquals(browser.launch_url + '/ru/tech-stack')
	})
})

testcase('Переход на страницу «ПРОЦЕССЫ»', () => {
	step('Переходим на 404ю страницу', () => {
		browser
			.url(browser.launch_url + '/ru/qwe12')
			.setWindowSize(1200, 1200)
	})

	step('Кликаем на текстовую ссылку «ПРОЦЕССЫ»', () => {
		browser.click('[data-testid="ErrorPage:menu:link.processes"]')
	})

	expected('Переход на страницу ПРОЦЕССЫ', () => {
		browser
			.waitForElementPresent('[data-testid="contact:button.callbackForm.submit"]')
			.assert.urlEquals(browser.launch_url + '/ru/way-of-work')
	})
})

testcase('Страница 404 (EN)', () => {
	step('Переходим на главную страницу (EN)', () => {
		browser
			.url(browser.launch_url + '/en')
			.setWindowSize(1200, 1200)
	})

	step('Добавляем в урл «qwe12»', () => {
		browser.url(browser.launch_url + '/ruqwe12')
	})

	expected('Отобразилась стилизованная страница 404', () => {
		browser
			.waitForElementPresent('#__next > div > main > div.code-wrapper')
			.assert.screenshotElement(
				'[data-testid="ErrorPage"]',
				'404я (EN)'
			)
	})
})

testcase('Отображение ссылок (EN)', () => {
	step('Переходим на 404ю страницу', () => {
		browser.url(browser.launch_url + '/en/qwe12')
	})

	expected('На странице отображаются ссылки на разделы с дев части хеддера', () => {
		browser
			.assert.containsText('[data-testid="ErrorPage:menu:link.outsourcing"]', 'WEB DEVELOPMENT')
			.assert.containsText('[data-testid="ErrorPage:menu:link.express"]', 'PSD TO HTML CONVERSION')
			.assert.containsText('[data-testid="ErrorPage:menu:link.mvp"]', 'MVP DEVELOPMENT')
			.assert.containsText('[data-testid="ErrorPage:menu:link.backend"]', 'BACK-END AND DEVOPS')
			.assert.containsText('[data-testid="ErrorPage:menu:link.fintech"]', 'FINTECH')
			.assert.containsText('[data-testid="ErrorPage:menu:link.eCommerce"]', 'E-COMMERCE')
			.assert.containsText('[data-testid="ErrorPage:menu:link.information"]', 'INFORMATION TECHNOLOGY')
			.assert.containsText('[data-testid="ErrorPage:menu:link.mediaAndMarketing"]', 'MEDIA & MARKETING')
			.assert.containsText('[data-testid="ErrorPage:menu:link.technologies"]', 'TECHNOLOGIES')
			.assert.containsText('[data-testid="ErrorPage:menu:link.processes"]', 'OUR PROCESS')
			.assert.containsText('[data-testid="ErrorPage:menu:link.lms"]', 'MODULAR LMS PLATFORM')
			.assert.containsText('[data-testid="ErrorPage:menu:link.tracker"]', 'TIME-TRACKING SOFTWARE')
	})
})

testcase('Переход на страницу «Web Development Outsourcing»', () => {
	step('Переходим на 404ю страницу', () => {
		browser.url(browser.launch_url + '/ruqwe12')
	})

	step('Кликаем на текстовую ссылку «WEB DEVELOPMENT»', () => {
		browser.click('[data-testid="ErrorPage:menu:link.outsourcing"]')
	})

	expected('Переход на страницу Web Development Outsourcing', () => {
		browser
			.waitForElementPresent('[data-testid="Outsourcing:button:contactUs.hero"]')
			.assert.urlEquals(browser.launch_url + '/en/service/outsourcing-front-end')
	})
})

testcase('Переход на страницу «PSD TO HTML CONVERSION»', () => {
	step('Переходим на 404ю страницу', () => {
		browser.url(browser.launch_url + '/ruqwe12')
	})

	step('Кликаем на текстовую ссылку «PSD TO HTML CONVERSION»', () => {
		browser.click('[data-testid="ErrorPage:menu:link.express"]')
	})

	expected('Переход на страницу Express Web Development', () => {
		browser
			.waitForElementPresent('[data-testid="Express:link.greeting"]')
			.assert.urlEquals(browser.launch_url + '/en/service/express-front-end')
	})
})

testcase('Переход на страницу «CSSSR MVP Development»', () => {
	step('Переходим на 404ю страницу', () => {
		browser.url(browser.launch_url + '/ruqwe12')
	})

	step('Кликаем на текстовую ссылку «MVP DEVELOPMENT»', () => {
		browser.click('[data-testid="ErrorPage:menu:link.mvp"]')
	})

	expected('Переход на страницу CSSSR MVP Development', () => {
		browser
			.waitForElementPresent('[data-testid="MVP:button:contactUs"]')
			.assert.urlEquals(browser.launch_url + '/en/service/mvp-development')
	})
})

testcase('Переход на страницу «BACK-END AND DEVOPS»', () => {
	step('Переходим на 404ю страницу', () => {
		browser.url(browser.launch_url + '/ruqwe12')
	})

	step('Кликаем на текстовую ссылку «BACK-END AND DEVOPS»', () => {
		browser.click('[data-testid="ErrorPage:menu:link.backend"]')
	})

	expected('Переход на страницу BACK-END AND DEVOPS', () => {
		browser
			.waitForElementPresent('[data-testid="BackendAndDevops:button:contactUs"]')
			.assert.urlEquals(browser.launch_url + '/en/service/back-end-and-devops')
	})
})

testcase('Переход на страницу «FINTECH»', () => {
	step('Переходим на 404ю страницу', () => {
		browser.url(browser.launch_url + '/ruqwe12')
	})

	step('Кликаем на текстовую ссылку «FINTECH»', () => {
		browser.click('[data-testid="ErrorPage:menu:link.fintech"]')
	})

	expected('Переход на страницу FINTECH', () => {
		browser
			.waitForElementPresent('[data-testid="Industry:button.contactUs"]')
			.assert.urlEquals(browser.launch_url + '/en/industry/fintech')
	})
})

testcase('Переход на страницу «E-COMMERCE»', () => {
	step('Переходим на 404ю страницу', () => {
		browser.url(browser.launch_url + '/ruqwe12')
	})

	step('Кликаем на текстовую ссылку «E-COMMERCE»', () => {
		browser.click('[data-testid="ErrorPage:menu:link.eCommerce"]')
	})

	expected('Переход на страницу E-COMMERCE', () => {
		browser
			.waitForElementPresent('[data-testid="Industry:button.contactUs"]')
			.assert.urlEquals(browser.launch_url + '/en/industry/ecommerce')
	})
})

testcase('Переход на страницу «INFORMATION TECHNOLOGY»', () => {
	step('Переходим на 404ю страницу', () => {
		browser.url(browser.launch_url + '/ruqwe12')
	})

	step('Кликаем на текстовую ссылку «INFORMATION TECHNOLOGY»', () => {
		browser.click('[data-testid="ErrorPage:menu:link.information"]')
	})

	expected('Переход на страницу INFORMATION TECHNOLOGY', () => {
		browser
			.waitForElementPresent('[data-testid="Industry:button.contactUs"]')
			.assert.urlEquals(browser.launch_url + '/en/industry/information-technology')
	})
})

testcase('Переход на страницу «MEDIA & MARKETING»', () => {
	step('Переходим на 404ю страницу', () => {
		browser.url(browser.launch_url + '/ruqwe12')
	})

	step('Кликаем на текстовую ссылку «MEDIA & MARKETING»', () => {
		browser.click('[data-testid="ErrorPage:menu:link.mediaAndMarketing"]')
	})

	expected('Переход на страницу MEDIA & MARKETING', () => {
		browser
			.waitForElementPresent('[data-testid="Industry:button.contactUs"]')
			.assert.urlEquals(browser.launch_url + '/en/industry/media-and-marketing')
	})
})

testcase('Переход на страницу «TECHNOLOGIES»', () => {
	step('Переходим на 404ю страницу', () => {
		browser
			.url(browser.launch_url + '/ruqwe12')
			.setWindowSize(1200, 1200)
	})

	step('Кликаем на текстовую ссылку «TECHNOLOGIES»', () => {
		browser.click('[data-testid="ErrorPage:menu:link.technologies"]')
	})

	expected('Переход на страницу TECHNOLOGIES', () => {
		browser
			.waitForElementPresent('[data-testid="contact:button.callbackForm.submit"]')
			.assert.urlEquals(browser.launch_url + '/en/tech-stack')
	})
})

testcase('Переход на страницу «Process»', () => {
	step('Переходим на 404ю страницу', () => {
		browser
			.url(browser.launch_url + '/ruqwe12')
			.setWindowSize(1200, 1200)
	})

	step('Кликаем на текстовую ссылку «OUR PROCESS»', () => {
		browser.click('[data-testid="ErrorPage:menu:link.processes"]')
	})

	expected('Переход на страницу Process', () => {
		browser
			.waitForElementPresent('[data-testid="contact:button.callbackForm.submit"]')
			.assert.urlEquals(browser.launch_url + '/en/way-of-work')
	})
})

testcase('Переход на страницу «Modular LMS system»', () => {
	step('Переходим на 404ю страницу', () => {
		browser
			.url(browser.launch_url + '/ruqwe12')
			.setWindowSize(1200, 1200)
	})

	step('Кликаем на текстовую ссылку «MMODULAR LMS PLATFORM»', () => {
		browser.click('[data-testid="ErrorPage:menu:link.lms"]')
	})

	expected('Переход на страницу Modular LMS system', () => {
		browser
			.waitForElementPresent('article > div.banner > div > button')
			.assert.urlEquals(browser.launch_url + '/en/solutions/lms')
	})
})

testcase('Переход на страницу «TIME-TRACKING SOFTWARE»', () => {
	step('Переходим на 404ю страницу', () => {
		browser
			.url(browser.launch_url + '/ruqwe12')
			.setWindowSize(1200, 1200)
	})

	step('Кликаем на текстовую ссылку «TIME-TRACKING SOFTWARE»', () => {
		browser.click('[data-testid="ErrorPage:menu:link.tracker"]')
	})

	expected('В новой вкладке открылась страница Трекера', () => {
		browser.windowHandles(function (result) {
			var handle = result.value[1]
			browser.switchWindow(handle)
		})
		browser.assert.urlEquals('https://tracker.csssr.com/')
	})
})