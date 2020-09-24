const ANIMATION_DURATION_IN_MS = 800

testcase('Анимация в блоке «Custom Design»', () => {
	step('Открываем страницу LMS', () => {
		browser
			.setWindowSize(1920, 1280)
			.url(browser.launch_url + '/en/solutions/lms')
			.waitForElementPresent('article > div.banner > div > button')
			.click('div.css-1ci3dja.e1foxtb90 > button')
	})

	step('Скроллим до блока «Custom Design»', () => {
		browser
			.moveToElement('article > div.banner > div > button', 1, 1)
			.pause(ANIMATION_DURATION_IN_MS)
	})

	step('Наводим курсор на плашку «Font»', () => {
		browser.moveToElement('article > div.design > div > div.design-content > div > div:nth-child(1) > div:nth-child(1)', 1, 1)
	})

	expected('На превью страницы изменился шрифт', () => {
		browser
			.assert.screenshotElement(
				'article > div.design > div > div.design-image',
				'Custom Design(выбран Font)'
			)
	})

	step('Наводим курсор на плашку «Graphic»', () => {
		browser.moveToElement('article > div.design > div > div.design-content > div > div:nth-child(1) > div:nth-child(2)', 1, 1)
	})

	expected('На превью страницы изменился шрифт', () => {
		browser
			.assert.screenshotElement(
				'article > div.design > div > div.design-image',
				'Custom Design(выбран Graphic)'
			)
	})

	step('Наводим курсор на плашку «Theme»', () => {
		browser.moveToElement('article > div.design > div > div.design-content > div > div:nth-child(2) > div:nth-child(1)', 1, 1)
	})

	expected('На превью страницы изменился шрифт', () => {
		browser
			.assert.screenshotElement(
				'article > div.design > div > div.design-image',
				'Custom Design(выбран Theme)'
			)
	})

	step('Наводим курсор на плашку «Color»', () => {
		browser.moveToElement('article > div.design > div > div.design-content > div > div:nth-child(2) > div:nth-child(2)', 1, 1)
	})

	expected('На превью страницы изменился шрифт', () => {
		browser
			.assert.screenshotElement(
				'article > div.design > div > div.design-image',
				'Custom Design(выбран Color)'
			)
	})
})

testcase('Отправка заявки через кнопку в блоке «Need more info?»', () => {
	step('Открываем страницу LMS', () => {
		browser
			.url(browser.launch_url + '/en/solutions/lms')
			.waitForElementPresent('article > div.banner > div > button')
			.click('div.css-1ci3dja.e1foxtb90 > button')
	})

	step('Скроллим до блока «Need more info?»', () => {
		browser
			.moveToElement('article > div.banner > div > button', 1, 1)
			.pause(ANIMATION_DURATION_IN_MS)
	})

	step('Кликаем на кнопку [Request Demo]', () => {
		browser.click('#main > article > div.banner > div > button')
	})

	step('В инпут «Name» вводим «Test»', () => {
		browser.setValue(
			'[data-testid="contact-modal:field:callbackForm.name"]',
			'Test'
		)
	})

	step('В инпут «PHONE» вводим «+7 012 345-67-89»', () => {
		browser.setValue(
			'[data-testid="contact-modal:field:callbackForm.phone"]',
			'+7 012 345-67-89'
		)
	})

	step('В инпут «EMAIL» вводим «test@csssr.io»', () => {
		browser.setValue(
			'[data-testid="contact-modal:field:callbackForm.email"]',
			'test@csssr.io'
		)
	})

	step('Заполняем поле «How can we help?»', () => {
		browser.setValue(
			'[data-testid="contact-modal:field:callbackForm.message"]',
			'Заявка отправлена автотестом'
		)
	})

	step('Кликаем на кнопку [Отправить]', () => {
		browser.click('[data-testid="contact-modal:button.callbackForm.submit"]')
	})

	expected('В модалке отображается сообщение об успехе', () => {
		browser
			.waitForElementPresent('[data-testid="ContactModal:img.success"]')
			.waitForElementPresent('[data-testid="ContactModal:button.status"]')
			.waitForElementPresent('[data-testid="ContactModal:text.success"]')
	})
})

testcase('Переход на страницу «Our Process»', () => {
	step('Открываем страницу LMS', () => {
		browser
			.setWindowSize(1920, 1280)
			.url(browser.launch_url + '/en/solutions/lms')
			.waitForElementPresent('article > div.banner > div > button')
			.click('div.css-1ci3dja.e1foxtb90 > button')
	})

	step('Скроллим до блока «Agile Development Team»', () => {
		browser
			.moveToElement('article > div.team > div:nth-child(3) > p > a:nth-child(2)', 1, 1)
			.pause(ANIMATION_DURATION_IN_MS)
	})

	step('Кликаем на текстовую ссылку «processes»', () => {
		browser.click('article > div.team > div:nth-child(3) > p > a:nth-child(1)')
	})

	expected('Перешли на страницу «Our Processes»', () => {
		browser.windowHandles(function (result) {
			var handle = result.value[1]
			browser.switchWindow(handle)
		})
		browser.assert.urlEquals(browser.launch_url + '/en/way-of-work')
	})
})

testcase('Переход на страницу «Technologies»', () => {
	step('Открываем страницу LMS', () => {
		browser
			.setWindowSize(1920, 1280)
			.url(browser.launch_url + '/en/solutions/lms')
			.waitForElementPresent('article > div.banner > div > button')
			.click('div.css-1ci3dja.e1foxtb90 > button')
	})

	step('Скроллим до блока «Agile Development Team»', () => {
		browser
			.moveToElement('article > div.team > div:nth-child(3) > p > a:nth-child(2)', 1, 1)
			.pause(ANIMATION_DURATION_IN_MS)
	})

	step('Кликаем на текстовую ссылку «technologies»', () => {
		browser.click('article > div.team > div:nth-child(3) > p > a:nth-child(2)')
	})

	expected('Перешли на страницу «CSSSR Technologies»', () => {
		browser.windowHandles(function (result) {
			var handle = result.value[1]
			browser.switchWindow(handle)
		})
		browser.assert.urlEquals(browser.launch_url + '/en/tech-stack')
	})
})

testcase('Анимация в блоке «Advanced Feature Ideas»', () => {
	step('Открываем страницу LMS', () => {
		browser
			.setWindowSize(1920, 1280)
			.url(browser.launch_url + '/en/solutions/lms')
			.waitForElementPresent('article > div.banner > div > button')
			.click('div.css-1ci3dja.e1foxtb90 > button')
	})

	step('Скроллим до блока «Advanced Feature Ideas»', () => {
		browser
			.moveToElement('#hire-us', 1, 1)
			.pause(ANIMATION_DURATION_IN_MS)
	})

	expected('Дефолтное отображение блока - описание карточки «Payment Providers Integration»', () => {
		browser
			.assert.screenshotElement(
				'article > div.advanced-features > div.grid',
				'описание карточки Payment Providers Integration'
			)
	})

	step('Наводим курсор на карточку «Skill-Based Learning System»', () => {
		browser.moveToElement('article > div.advanced-features > div.advanced-feature-buttons > div:nth-child(2) > div > p.font-p-4.title', 1, 1)
	})

	expected('Сменилась картинка и текст в блоке описания', () => {
		browser
			.assert.screenshotElement(
				'article > div.advanced-features > div.grid',
				'описание карточки Skill-Based Learning System'
			)
	})

	step('Наводим курсор на карточку «Rating System»', () => {
		browser.moveToElement('article > div.advanced-features > div.advanced-feature-buttons > div:nth-child(3) > div > p.font-p-4.title', 1, 1)
	})

	expected('Сменилась картинка и текст в блоке описания', () => {
		browser
			.assert.screenshotElement(
				'article > div.advanced-features > div.grid',
				'описание карточки Rating System'
			)
	})

	step('Наводим курсор на карточку «Ecosystem integration»', () => {
		browser.moveToElement('article > div.advanced-features > div.advanced-feature-buttons > div:nth-child(4) > div > p.font-p-4.title', 1, 1)
	})

	expected('Сменилась картинка и текст в блоке описания', () => {
		browser
			.assert.screenshotElement(
				'article > div.advanced-features > div.grid',
				'описание карточки Ecosystem integration'
			)
	})
})

testcase('Отправка заявки через форму связи в конце страницы', () => {
	step('Открываем страницу LMS', () => {
		browser
			.url(browser.launch_url + '/en/solutions/lms')
			.waitForElementPresent('article > div.banner > div > button')
			.click('div.css-1ci3dja.e1foxtb90 > button')
	})

	step('Скроллим страницу до формы связи', () => {
		browser
			.moveToElement('[data-testid="contact:button.callbackForm.submit"]', 1, 1)
			.pause(ANIMATION_DURATION_IN_MS)
	})

	step('В инпут «Name» вводим «Test»', () => {
		browser.setValue(
			'[data-testid="contact:field:callbackForm.name"]',
			'Test'
		)
	})

	step('В инпут «PHONE» вводим «+7 012 345-67-89»', () => {
		browser.setValue(
			'[data-testid="contact:field:callbackForm.phone"]',
			'+7 012 345-67-89'
		)
	})

	step('В инпут «EMAIL» вводим «test@csssr.io»', () => {
		browser.setValue(
			'[data-testid="contact:field:callbackForm.email"]',
			'test@csssr.io'
		)
	})

	step('Заполняем поле «How can we help?»', () => {
		browser.setValue(
			'[data-testid="contact:field:callbackForm.message"]',
			'Заявка отправлена автотестом'
		)
	})

	step('Кликаем на кнопку [Отправить]', () => {
		browser.click('[data-testid="contact:button.callbackForm.submit"]')
	})

	expected('В модалке отображается сообщение об успехе', () => {
		browser
			.waitForElementPresent('#main > div > form > div.button > div')
			.assert.containsText('[data-testid="contact:text.status"]','Success!\nWe will contact you soon')
			.waitForElementPresent('[data-testid="contact:picture.successMessageImg"]')
	})
})