import { supportedLocales } from '../common/locales-settings'

const fetch = require('isomorphic-unfetch')
const sitemap = require('sitemap')
const csssrSpaceOrigin = require('../utils/csssrSpaceOrigin')

const thirtyMinutes = 30 * 60 * 1000

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
  fetch(`${csssrSpaceOrigin}/api/public/vacancies/active`).then(res =>
    res.json().then(vacancies =>
      vacancies.map(vacancy => ({
        url: `https://csssr.com/${vacancy.locale}/jobs/${vacancy.pathName}`,
        changefreq: 'weekly',
        priority: 0.8,
      })),
    ),
  )

const getJobsSitemapUrlsSettings = () => {
  const links = supportedLocales.map(locale => ({
    lang: locale,
    url: `https://csssr.com/${locale}/jobs`,
  }))
  return supportedLocales.map(locale => ({
    url: `https://csssr.com/${locale}/jobs`,
    changefreq: 'weekly',
    priority: 1,
    links,
  }))
}

const sitemapUrlsSettings = [
  {
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
  },
  {
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
  },
  {
    url: 'https://csssr.com/ru/industry/ecommerce',
    changefreq: 'weekly',
    priority: 1,
    links: [
      {
        lang: 'en',
        url: 'https://csssr.com/en/industry/ecommerce',
      },
      {
        lang: 'ru',
        url: 'https://csssr.com/ru/industry/ecommerce',
      },
    ],
  },
  {
    url: 'https://csssr.com/en/industry/ecommerce',
    changefreq: 'weekly',
    priority: 1,
    links: [
      {
        lang: 'en',
        url: 'https://csssr.com/en/industry/ecommerce',
      },
      {
        lang: 'ru',
        url: 'https://csssr.com/ru/industry/ecommerce',
      },
    ],
  },
  {
    url: 'https://csssr.com/ru/industry/fintech',
    changefreq: 'weekly',
    priority: 1,
    links: [
      {
        lang: 'en',
        url: 'https://csssr.com/en/industry/fintech',
      },
      {
        lang: 'ru',
        url: 'https://csssr.com/ru/industry/fintech',
      },
    ],
  },
  {
    url: 'https://csssr.com/en/industry/fintech',
    changefreq: 'weekly',
    priority: 1,
    links: [
      {
        lang: 'en',
        url: 'https://csssr.com/en/industry/fintech',
      },
      {
        lang: 'ru',
        url: 'https://csssr.com/ru/industry/fintech',
      },
    ],
  },
  {
    url: 'https://csssr.com/ru/industry/information-technology',
    changefreq: 'weekly',
    priority: 1,
    links: [
      {
        lang: 'en',
        url: 'https://csssr.com/en/industry/information-technology',
      },
      {
        lang: 'ru',
        url: 'https://csssr.com/ru/industry/information-technology',
      },
    ],
  },
  {
    url: 'https://csssr.com/en/industry/information-technology',
    changefreq: 'weekly',
    priority: 1,
    links: [
      {
        lang: 'en',
        url: 'https://csssr.com/en/industry/information-technology',
      },
      {
        lang: 'ru',
        url: 'https://csssr.com/ru/industry/information-technology',
      },
    ],
  },
  {
    url: 'https://csssr.com/ru/industry/media-and-marketing',
    changefreq: 'weekly',
    priority: 1,
    links: [
      {
        lang: 'en',
        url: 'https://csssr.com/en/industry/media-and-marketing',
      },
      {
        lang: 'ru',
        url: 'https://csssr.com/ru/industry/media-and-marketing',
      },
    ],
  },
  {
    url: 'https://csssr.com/en/industry/media-and-marketing',
    changefreq: 'weekly',
    priority: 1,
    links: [
      {
        lang: 'en',
        url: 'https://csssr.com/en/industry/media-and-marketing',
      },
      {
        lang: 'ru',
        url: 'https://csssr.com/ru/industry/media-and-marketing',
      },
    ],
  },
  {
    url: 'https://csssr.com/ru/core-values',
    changefreq: 'weekly',
    priority: 1,
    links: [
      {
        lang: 'en',
        url: 'https://csssr.com/en/core-values',
      },
      {
        lang: 'ru',
        url: 'https://csssr.com/ru/core-values',
      },
    ],
  },
  {
    url: 'https://csssr.com/en/core-values',
    changefreq: 'weekly',
    priority: 1,
    links: [
      {
        lang: 'en',
        url: 'https://csssr.com/en/core-values',
      },
      {
        lang: 'ru',
        url: 'https://csssr.com/ru/core-values',
      },
    ],
  },
  {
    url: 'https://csssr.com/ru/service/mvp-development',
    changefreq: 'weekly',
    priority: 1,
    links: [
      {
        lang: 'en',
        url: 'https://csssr.com/en/service/mvp-development',
      },
      {
        lang: 'ru',
        url: 'https://csssr.com/ru/service/mvp-development',
      },
    ],
  },
  {
    url: 'https://csssr.com/en/service/mvp-development',
    changefreq: 'weekly',
    priority: 1,
    links: [
      {
        lang: 'en',
        url: 'https://csssr.com/en/service/mvp-development',
      },
      {
        lang: 'ru',
        url: 'https://csssr.com/ru/service/mvp-development',
      },
    ],
  },
  {
    url: 'https://csssr.com/ru/service/outsourcing-front-end',
    changefreq: 'weekly',
    priority: 1,
    links: [
      {
        lang: 'en',
        url: 'https://csssr.com/en/service/outsourcing-front-end',
      },
      {
        lang: 'ru',
        url: 'https://csssr.com/ru/service/outsourcing-front-end',
      },
    ],
  },
  {
    url: 'https://csssr.com/en/service/outsourcing-front-end',
    changefreq: 'weekly',
    priority: 1,
    links: [
      {
        lang: 'en',
        url: 'https://csssr.com/en/service/outsourcing-front-end',
      },
      {
        lang: 'ru',
        url: 'https://csssr.com/ru/service/outsourcing-front-end',
      },
    ],
  },
  {
    url: 'https://csssr.com/en/service/express-front-end',
    changefreq: 'yearly',
    priority: 0.6,
  },
  {
    url: 'https://csssr.com/en/privacy-policy',
    changefreq: 'yearly',
    priority: 0.6,
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
  },
  {
    url: 'https://csssr.com/ru/privacy-policy',
    changefreq: 'yearly',
    priority: 0.6,
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
  },
  {
    url: 'https://csssr.com/en/cookies-policy',
    changefreq: 'yearly',
    priority: 0.6,
  },
  {
    url: 'https://csssr.com/ru/tech-stack',
    changefreq: 'yearly',
    priority: 0.6,
    links: [
      {
        lang: 'en',
        url: 'https://csssr.com/en/tech-stack',
      },
      {
        lang: 'ru',
        url: 'https://csssr.com/ru/tech-stack',
      },
    ],
  },
  {
    url: 'https://csssr.com/en/tech-stack',
    changefreq: 'yearly',
    priority: 0.6,
    links: [
      {
        lang: 'en',
        url: 'https://csssr.com/en/tech-stack',
      },
      {
        lang: 'ru',
        url: 'https://csssr.com/ru/tech-stack',
      },
    ],
  },
  {
    url: 'https://csssr.com/ru/jobs-faq',
    changefreq: 'yearly',
    priority: 0.6,
  },
  {
    url: 'https://csssr.com/ru/way-of-work',
    changefreq: 'yearly',
    priority: 0.6,
    links: [
      {
        lang: 'en',
        url: 'https://csssr.com/en/way-of-work',
      },
      {
        lang: 'ru',
        url: 'https://csssr.com/ru/way-of-work',
      },
    ],
  },
  {
    url: 'https://csssr.com/en/way-of-work',
    changefreq: 'yearly',
    priority: 0.6,
    links: [
      {
        lang: 'en',
        url: 'https://csssr.com/en/way-of-work',
      },
      {
        lang: 'ru',
        url: 'https://csssr.com/ru/way-of-work',
      },
    ],
  },
].concat(getJobsSitemapUrlsSettings())

const generateSitemap = () =>
  getVacancies().then(vacanciesUrls =>
    sitemap.createSitemap({
      urls: [...sitemapUrlsSettings, ...vacanciesUrls],
    }),
  )

const sitemapUrls = sitemapUrlsSettings.map(sitemapUrlSettings => sitemapUrlSettings.url)

module.exports = {
  sitemapUrls,
  generateSitemap: cache(generateSitemap, thirtyMinutes),
}
