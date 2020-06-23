const path = require('path')
const Sentry = require('@sentry/node')
const express = require('express')
const expressStaticGzip = require('express-static-gzip')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const next = require('next')
const { pick } = require('ramda')
const submitForm = require('./submit-form')
const submitCalculatorForm = require('./submit-calculator-form')
const generateSitemap = require('./generate-sitemap').generateSitemap
const { isDevelopment, isProduction } = require('../utils/app-environment')
import { defaultLocaleByLanguage } from '../common/locales-settings'
import l10nMiddleware from './l10n-middleware'
import getPagesList from './get-pages-list'
import { ONE_YEAR } from '../utils/timePeriods'
import localeDetector from './locale-detector'

require('../utils/sentry')

const port = parseInt(process.env.PORT, 10) || 3000
const app = next({ dev: isDevelopment })
const handle = app.getRequestHandler()

const startApp = async () => {
  await app.prepare()
  const server = express()
  const lookupCookieName = 'locale'

  // https://expressjs.com/en/api.html#app.locals
  // Доступно по req.app.locals.pagesList
  server.locals.pagesList = await getPagesList()

  server.use(Sentry.Handlers.requestHandler())

  server.use(cookieParser())

  server.get('/:language(ru|en)/jobs', (req, res) => {
    const localeFromPath = req.params.language
    const localeFromCookie = req.cookies[lookupCookieName]
    const acceptLanguageHeader = req.headers['accept-language']
    const locale = localeDetector(localeFromPath, localeFromCookie, acceptLanguageHeader)

    res.redirect(301, `/${locale}/jobs`)
  })

  server.get('/:language(ru|en)/jobs/:jobName', (req, res) => {
    const locale = defaultLocaleByLanguage[req.params.language]
    res.redirect(301, `/${locale}/jobs/${req.params.jobName}`)
  })

  // Отключаем хедер x-powered-by. Зачем разглашать информацию, какой веб-сервер/фреймворк мы используем?
  server.disable('x-powered-by')

  // In production we don't want to serve sourcemaps for anyone
  if (isProduction) {
    const sentryToken = process.env.SENTRY_TOKEN
    server.get(/\.js\.map$/, (req, res, nextHandler) => {
      if (!sentryToken || req.headers['x-sentry-token'] !== sentryToken) {
        return res.sendStatus(404)
      }
      nextHandler()
    })
  }

  server.use((req, res, nextHandler) => {
    const allowedUtmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']
    const utmQueryParams = pick(allowedUtmParams, req.query)

    Object.keys(utmQueryParams).forEach((utmKey) => {
      res.cookie(utmKey, utmQueryParams[utmKey], { maxAge: ONE_YEAR })
    })

    nextHandler()
  })

  // eslint-disable-next-line
  server.use(bodyParser.json())      // to support JSON-encoded bodies
  server.use(
    bodyParser.urlencoded({
      // to support URL-encoded bodies: без этого нельзя будет прочесть что приходит из Amo CRM Webhook'a
      extended: true,
    }),
  )

  // https://expressjs.com/en/api.html#res.locals
  // Добавляет l10n объект ({language, locale, translations}) в res.locals
  server.use(
    l10nMiddleware({
      loadPath: path.join(__dirname, '../static/locales'),
      ignorePaths: [/^\/_next/, /^\/static/],
      lookupCookieName,
    }),
  )

  server.post('/api/submit-form', submitForm)
  server.post('/api/submit-calculator-form', submitCalculatorForm)

  server.get('/', (req, res) => {
    res.redirect(`/${res.locals.l10n.language}`)
  })

  server.get('/en/service/express-front-end', (req, res, nextHandler) => {
    res.setHeader('Content-Language', 'en-SG')
    nextHandler()
  })

  if (!isDevelopment) {
    server.get(/^\/_next\/static\/(fonts|icons|images)\//, (req, res, nextHandler) => {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable')
      nextHandler()
    })

    server.use(
      '/_next',
      expressStaticGzip(path.join(__dirname, '../.next'), {
        enableBrotli: true,
        orderPreference: ['br'],
        setHeaders: (res) => {
          res.setHeader('Cache-Control', 'public, max-age=31536000, immutable')
        },
      }),
    )
  }

  server.get('/robots.txt', (req, res) => {
    res.type('text/plain')
    if (isProduction) {
      res.send(
        'User-agent: *\nDisallow: /cdn-cgi/l/email-protection\nClean-param: utm&name&gclid&quests&amp&nm\nSitemap: https://csssr.com/sitemap.xml',
      )
    } else {
      res.send('User-agent: *\nDisallow: /\nSitemap: https://csssr.com/sitemap.xml')
    }
  })

  server.use(
    '/yandex_3ecce01745a58936.html',
    express.static(path.join(__dirname, '../yandex_3ecce01745a58936.html')),
  )

  server.get('/sitemap.xml', (req, res) => {
    generateSitemap().then((sitemap) => {
      const xml = sitemap.toXML()
      res.header('Content-Type', 'application/xml')
      res.send(xml)
    })
  })

  /* eslint-disable no-prototype-builtins */
  server.get('/:locale/jobs/:jobPathName', (req, res) => {
    const params = {
      jobPathName: req.params.jobPathName,
      preview: req.query.hasOwnProperty('preview'),
    }

    return app.render(req, res, `/${req.params.locale}/job`, params)
  })
  /* eslint-enable no-prototype-builtins */

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.use(Sentry.Handlers.errorHandler())

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
}

startApp()
