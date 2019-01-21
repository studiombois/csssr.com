const fetch = require('isomorphic-unfetch')
const sitemap = require('sitemap')

const oneDay = 24 * 60 * 60 * 1000

const cache = (asyncFunc, time) => {
  let cached
  let cachedTs
  return () => {
    const now = Date.now()
    if (cached && now < cachedTs + time) {
      return Promise.resolve(cached)
    }
    return asyncFunc().then(result => {
      cached = result
      cachedTs = Date.now()
      return result
    })

  }
}

const getVacancies = () =>
  // TODO использовать HR_ORIGIN.
  // Сейчас невозможно использовать, потому что этот код выполняется раньше, чем next/config инициализируется
  fetch('http://hr.csssr.ru/api/public/vacancies/active').then(res =>
    res.json().then(vacancies =>
      vacancies.map(vacancy => ({
        url: `https://csssr.com/ru/jobs/${vacancy.pathName}`,
        changefreq: 'weekly',
        priority: 0.8,
      }))
    )
  )

const generateSitemap = () =>
  getVacancies().then(vacanciesUrls =>
    sitemap.createSitemap({
      urls: [{
        url: 'https://csssr.com/en',
        changefreq: 'weekly',
        priority: 1,
        links: [
          {
            lang: 'en',
            url: 'https://csssr.com/en',
          },
          {
            lang: 'ru',
            url: 'https://csssr.com/ru',
          },
        ],
      }, {
        url: 'https://csssr.com/ru',
        changefreq: 'weekly',
        priority: 1,
        links: [
          {
            lang: 'en',
            url: 'https://csssr.com/en',
          },
          {
            lang: 'ru',
            url: 'https://csssr.com/ru',
          },
        ],
      }, {
        url: 'https://csssr.com/ru/html',
        changefreq: 'weekly',
        priority: 1,
        links: [
          {
            lang: 'en',
            url: 'https://csssr.com/en/html',
          },
          {
            lang: 'ru',
            url: 'https://csssr.com/ru/html',
          },
        ],
      }, {
        url: 'https://csssr.com/en/html',
        changefreq: 'weekly',
        priority: 1,
        links: [
          {
            lang: 'en',
            url: 'https://csssr.com/en/html',
          },
          {
            lang: 'ru',
            url: 'https://csssr.com/ru/html',
          },
        ],
      }, {
        url: 'https://csssr.com/en/privacy-policy',
        changefreq: 'weekly',
        priority: 1,
        links: [
          {
            lang: 'en',
            url: 'https://csssr.com/en/privacy-policy',
          },
          {
            lang: 'ru',
            url: 'https://csssr.com/ru/privacy-policy',
          },
        ],
      }, {
        url: 'https://csssr.com/ru/privacy-policy',
        changefreq: 'weekly',
        priority: 1,
        links: [
          {
            lang: 'en',
            url: 'https://csssr.com/en/privacy-policy',
          },
          {
            lang: 'ru',
            url: 'https://csssr.com/ru/privacy-policy',
          },
        ],
      }, {
        url: 'https://csssr.com/en/cookies-polic',
        changefreq: 'weekly',
        priority: 1,
      }, {
        url: 'https://csssr.com/ru/jobs',
        changefreq: 'weekly',
        priority: 1,
      }, {
        url: 'https://csssr.com/ru/school',
        changefreq: 'weekly',
        priority: 1,
      }, ...vacanciesUrls],
    })
  )

module.exports = cache(generateSitemap, oneDay)
