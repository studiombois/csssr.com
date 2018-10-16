const sitemap = require('sitemap')

module.exports = sitemap.createSitemap({
  urls: [{
    url: 'https://csssr.com/en/',
    changefreq: 'weekly',
    priority: 1,
    links: [
      {
        lang: 'en',
        url: 'https://csssr.com/en/',
      },
      {
        lang: 'ru',
        url: 'https://csssr.com/ru/',
      },
    ]
  },]
})
