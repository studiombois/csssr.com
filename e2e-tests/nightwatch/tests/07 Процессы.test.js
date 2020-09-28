const ANIMATION_DURATION_IN_MS = 1800
testcase('Отправка заявки через кнопку связи в хеддере', () => {
	step('Открываем страницу Our Process', () => {
		browser
			.url(browser.launch_url + '/ru/way-of-work')
			.waitForElementPresent('[data-testid="contact:button.callbackForm.submit"]')
			.click('div.css-1ci3dja.e1foxtb90 > button')
	})

	step('Кликаем на кнопку [НАНЯТЬ НАС] в хеддере', () => {
		browser.click('[data-testid="Header:button.contactUs"]')
	})

	expected('Открылась форма связи', () => {
		browser
			.waitForElementPresent('[data-testid="ContactModal:block"]')
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

testcase('Отправка заявки через форму связи в конце страницы', () => {
	step('Открываем страницу Our Process', () => {
		browser
			.url(browser.launch_url + '/ru/way-of-work')
			.waitForElementPresent('[data-testid="contact:button.callbackForm.submit"]')
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
			.assert.containsText('[data-testid="contact:text.status"]', 'Успех!\nСовсем скоро мы с вами свяжемся.')
			.waitForElementPresent('[data-testid="contact:picture.successMessageImg"]')
	})
})

testcase('Отправка заявки через форму связи в конце страницы', () => {
	step('Открываем страницу Our Process', () => {
		browser
			.setWindowSize(1920, 700)
			.url(browser.launch_url + '/ru/way-of-work')
			.waitForElementPresent('[data-testid="contact:button.callbackForm.submit"]')
			.click('div.css-1ci3dja.e1foxtb90 > button')
	})

	step('Скроллим страницу до блока Прозрачность | Transparency', () => {
		browser
			.moveToElement('#main > section.css-1mzg7pg.ey0oet60 > div > div > div > picture.image.css-1bv363l.e1mofdgw0', 1, 1)
			.pause(ANIMATION_DURATION_IN_MS)
	})

	expected('Изначально отображается закрашенным желтый ромб на картинке и около текста', () => {
		browser
			.assert.screenshotElement(
				'picture.image.css-1bv363l.e1mofdgw0',
				'прозрачность (оранжевый ромб)'
			)
	})

	step('Скроллим ко второму текстовому блоку', () => {
		browser
			.moveToElement('#main > section.css-1mzg7pg.ey0oet60 > div > ul > li.listItem.circleItem > span', 1, 1)
			.pause(ANIMATION_DURATION_IN_MS)
	})

	expected('на картинке и около текста сменилась закрашенная фигура(бирюзовый круг)', () => {
		browser
			.assert.screenshotElement(
				'picture.image.css-1bv363l.e1mofdgw0',
				'прозрачность (бирюзовый круг)'
			)
	})

	step('Скроллим к третьему текстовому блоку', () => {
		browser
			.moveToElement('#main > section.css-1mzg7pg.ey0oet60 > div > ul > li.listItem.triangleItem > span', 1, 1)
			.pause(ANIMATION_DURATION_IN_MS)
	})

	expected('на картинке и около текста сменилась закрашенная фигура(синяя дуга)', () => {
		browser
			.assert.screenshotElement(
				'picture.image.css-1bv363l.e1mofdgw0',
				'прозрачность (синяя дуга)'
			)
	})

	step('Скроллим к четвертом текстовому блоку', () => {
		browser
			.moveToElement('#hire-us', 1, 1)
			.pause(ANIMATION_DURATION_IN_MS)
	})

	expected('на картинке и около текста сменилась закрашенная фигура(красный треугольник)', () => {
		browser
			.assert.screenshotElement(
				'picture.image.css-1bv363l.e1mofdgw0',
				'прозрачность (красный треугольник)'
			)
	})
})
