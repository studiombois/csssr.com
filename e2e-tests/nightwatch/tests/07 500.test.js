testcase('Отображение стилизованной страницы 500 ошибки (RU)', () => {
	step('Переходим на страницу с 500й', () => {
		browser
			.url(browser.launch_url + '/_error')
			.setWindowSize(1200, 1200)
	})

	expected('Отобразилась стилизованная страница 500', () => {
		browser
			.waitForElementPresent('#__next > main > div > svg > g')
			.assert.screenshotElement(
				'#__next',
				'500я (RU)'
			)
	})
})

testcase('Кликабельный email на странице 500 ошибки (RU)', () => {
	step('Переходим на страницу с 500й', () => {
		browser
			.url(browser.launch_url + '/_error')
			.setWindowSize(1200, 1200)
	})

	expected('Для launch@csssr.com верная ссылка для открытия почтового клиента', () => {
		browser.getAttribute('#__next > main > h2 > a', 'href', function (result) {
			if (result.value !== 'mailto:launch@csssr.com') {
				throw new Error(`Некорректная ссылка для email в футере( ${result.value} )`)
			}
		})
	})
})