import { supportedLocales } from '../common/locales-settings'

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
    return asyncFunc().then((result) => {
      cached = result
      cachedTs = Date.now()
      return result
    })
  }
}

const getVacancies = () =>
  fetch(`${csssrSpaceOrigin}/api/public/vacancies/active`).then((res) =>
    res.json().then((vacancies) =>
      vacancies.map((vacancy) => ({
        url: `https://csssr.com/${vacancy.locale}/jobs/${vacancy.pathName}`,
        changefreq: 'weekly',
        priority: 0.8,
      })),
    ),
  )

const getJobsSitemapUrlsSettings = () => {
  const links = supportedLocales.map((locale) => ({
    lang: locale,
    url: `https://csssr.com/${locale}/jobs`,
  }))
  return supportedLocales.map((locale) => ({
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
  // {
  //   url: 'https://csssr.com/ru/our-cases',
  //   changefreq: 'weekly',
  //   priority: 1,
  //   links: [
  //     {
  //       lang: 'en',
  //       url: 'https://csssr.com/en/our-cases',
  //     },
  //     {
  //       lang: 'ru',
  //       url: 'https://csssr.com/ru/our-cases',
  //     },
  //   ],
  // },
  {
    url: 'https://csssr.com/en/our-cases',
    changefreq: 'weekly',
    priority: 1,
    links: [
      {
        lang: 'en',
        url: 'https://csssr.com/en/our-cases',
      },
      {
        lang: 'ru',
        url: 'https://csssr.com/ru/our-cases',
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
    url: 'https://csssr.com/ru/project/s7-personal-account',
    changefreq: 'weekly',
    priority: 1,
    links: [
      {
        lang: 'en',
        url: 'https://csssr.com/en/project/s7-personal-account',
      },
      {
        lang: 'ru',
        url: 'https://csssr.com/ru/project/s7-personal-account',
      },
    ],
  },
  {
    url: 'https://csssr.com/en/project/s7-personal-account',
    changefreq: 'weekly',
    priority: 1,
    links: [
      {
        lang: 'en',
        url: 'https://csssr.com/en/project/s7-personal-account',
      },
      {
        lang: 'ru',
        url: 'https://csssr.com/ru/project/s7-personal-account',
      },
    ],
  },
  {
    url: 'https://csssr.com/ru/project/gazprom-neft-professionals-4-0',
    changefreq: 'weekly',
    priority: 1,
    links: [
      {
        lang: 'en',
        url: 'https://csssr.com/en/project/gazprom-neft-professionals-4-0',
      },
      {
        lang: 'ru',
        url: 'https://csssr.com/ru/project/gazprom-neft-professionals-4-0',
      },
    ],
  },
  {
    url: 'https://csssr.com/en/project/gazprom-neft-professionals-4-0',
    changefreq: 'weekly',
    priority: 1,
    links: [
      {
        lang: 'en',
        url: 'https://csssr.com/en/project/gazprom-neft-professionals-4-0',
      },
      {
        lang: 'ru',
        url: 'https://csssr.com/ru/project/gazprom-neft-professionals-4-0',
      },
    ],
  },
  {
    url: 'https://csssr.com/ru/project/mosoblgaz',
    changefreq: 'weekly',
    priority: 1,
    links: [
      {
        lang: 'en',
        url: 'https://csssr.com/en/project/mosoblgaz',
      },
      {
        lang: 'ru',
        url: 'https://csssr.com/ru/project/mosoblgaz',
      },
    ],
  },
  {
    url: 'https://csssr.com/en/project/mosoblgaz',
    changefreq: 'weekly',
    priority: 1,
    links: [
      {
        lang: 'en',
        url: 'https://csssr.com/en/project/mosoblgaz',
      },
      {
        lang: 'ru',
        url: 'https://csssr.com/ru/project/mosoblgaz',
      },
    ],
  },
  {
    url: 'https://csssr.com/ru/project/brusnika',
    changefreq: 'weekly',
    priority: 1,
    links: [
      {
        lang: 'en',
        url: 'https://csssr.com/en/project/brusnika',
      },
      {
        lang: 'ru',
        url: 'https://csssr.com/ru/project/brusnika',
      },
    ],
  },
  {
    url: 'https://csssr.com/en/project/brusnika',
    changefreq: 'weekly',
    priority: 1,
    links: [
      {
        lang: 'en',
        url: 'https://csssr.com/en/project/brusnika',
      },
      {
        lang: 'ru',
        url: 'https://csssr.com/ru/project/brusnika',
      },
    ],
  },
  {
    url: 'https://csssr.com/ru/project/mindbox',
    changefreq: 'weekly',
    priority: 1,
    links: [
      {
        lang: 'en',
        url: 'https://csssr.com/en/project/mindbox',
      },
      {
        lang: 'ru',
        url: 'https://csssr.com/ru/project/mindbox',
      },
    ],
  },
  {
    url: 'https://csssr.com/en/project/mindbox',
    changefreq: 'weekly',
    priority: 1,
    links: [
      {
        lang: 'en',
        url: 'https://csssr.com/en/project/mindbox',
      },
      {
        lang: 'ru',
        url: 'https://csssr.com/ru/project/mindbox',
      },
    ],
  },
  {
    url: 'https://csssr.com/ru/project/qmarketing',
    changefreq: 'weekly',
    priority: 1,
    links: [
      {
        lang: 'en',
        url: 'https://csssr.com/en/project/qmarketing',
      },
      {
        lang: 'ru',
        url: 'https://csssr.com/ru/project/qmarketing',
      },
    ],
  },
  {
    url: 'https://csssr.com/en/project/qmarketing',
    changefreq: 'weekly',
    priority: 1,
    links: [
      {
        lang: 'en',
        url: 'https://csssr.com/en/project/qmarketing',
      },
      {
        lang: 'ru',
        url: 'https://csssr.com/ru/project/qmarketing',
      },
    ],
  },
  {
    url: 'https://csssr.com/ru/project/flant',
    changefreq: 'weekly',
    priority: 1,
    links: [
      {
        lang: 'en',
        url: 'https://csssr.com/en/project/flant',
      },
      {
        lang: 'ru',
        url: 'https://csssr.com/ru/project/flant',
      },
    ],
  },
  {
    url: 'https://csssr.com/en/project/flant',
    changefreq: 'weekly',
    priority: 1,
    links: [
      {
        lang: 'en',
        url: 'https://csssr.com/en/project/flant',
      },
      {
        lang: 'ru',
        url: 'https://csssr.com/ru/project/flant',
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
    url: 'https://csssr.com/ru/service/back-end-and-devops',
    changefreq: 'weekly',
    priority: 1,
    links: [
      {
        lang: 'en',
        url: 'https://csssr.com/en/service/back-end-and-devops',
      },
      {
        lang: 'ru',
        url: 'https://csssr.com/ru/service/back-end-and-devops',
      },
    ],
  },
  {
    url: 'https://csssr.com/en/service/back-end-and-devops',
    changefreq: 'weekly',
    priority: 1,
    links: [
      {
        lang: 'en',
        url: 'https://csssr.com/en/service/back-end-and-devops',
      },
      {
        lang: 'ru',
        url: 'https://csssr.com/ru/service/back-end-and-devops',
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
  {
    url: 'https://csssr.com/ru/contacts',
    changefreq: 'yearly',
    priority: 0.6,
    links: [
      {
        lang: 'en',
        url: 'https://csssr.com/en/contacts',
      },
      {
        lang: 'ru',
        url: 'https://csssr.com/ru/contacts',
      },
    ],
  },
  {
    url: 'https://csssr.com/en/contacts',
    changefreq: 'yearly',
    priority: 0.6,
    links: [
      {
        lang: 'en',
        url: 'https://csssr.com/en/contacts',
      },
      {
        lang: 'ru',
        url: 'https://csssr.com/ru/contacts',
      },
    ],
  },
  {
    url: 'https://csssr.com/en/solutions/lms',
    changefreq: 'yearly',
    priority: 0.6,
  },
].concat(getJobsSitemapUrlsSettings())

const generateSitemap = () =>
  getVacancies().then((vacanciesUrls) =>
    sitemap.createSitemap({
      urls: [...sitemapUrlsSettings, ...vacanciesUrls],
    }),
  )

const sitemapUrls = sitemapUrlsSettings.map((sitemapUrlSettings) => sitemapUrlSettings.url)

module.exports = {
  sitemapUrls,
  generateSitemap: cache(generateSitemap, thirtyMinutes),
}
