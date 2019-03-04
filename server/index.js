const path = require('path')
const Sentry = require('@sentry/node')
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const next = require('next')
const i18nextMiddleware = require('i18next-express-middleware')
const i18nextNodeFsBackend = require('i18next-node-fs-backend')
const { pick } = require('ramda')
const i18n = require('../common/i18n')
const submitForm = require('./submit-form')
const schoolSubmitForm = require('./school-submit-form')
const generateSitemap = require('./generate-sitemap')
const updateGaDataByAmoHooks = require('./update-ga-data-by-amo-hooks')
const { isDevelopment, isProduction } = require('../utils/app-environment')

require('../utils/sentry')

const port = parseInt(process.env.PORT, 10) || 3000
const app = next({ dev: isDevelopment })
const handle = app.getRequestHandler()

i18n
  .use(i18nextMiddleware.LanguageDetector)
  .use(i18nextNodeFsBackend)
  .init({
    fallbackLng: 'en',
    load: 'languageOnly',
    whitelist: ['en', 'ru'],
    preload: ['en', 'ru'],
    ns: ['common', 'dev', 'sborka', 'jobs', 'job', 'school', 'error', 'privacyPolicy', 'cookiesPolicy'],
    detection: {
      order: ['path', 'cookie', 'header'],
      lookupCookie: 'language',
      lookupFromPathIndex: 0,
      caches: ['cookie'],
    },
    backend: {
      loadPath: path.join(__dirname, '../locales/{{lng}}/{{ns}}.json'),
    },
  }, () => {
    app.prepare()
      .then(() => {
        const server = express()

        server.use(Sentry.Handlers.requestHandler())

        // TODO
        // Добавить favicon

        const oldPaths = [
          '/jobs/index.html',
          '/jobs/pixel-perfectionist/index.html',
          '/jobs/technical-manager/index.html',
          '/thanks/index.html',
          '/company.html',
          '/confidential.html',
          '/de-index.html',
          '/de-thanks.html',
          '/en-index.html',
          '/en-thanks.html',
          '/index.html',
          '/offert.html',
          '/order.html',
          '/outsource.html',
          '/portfolio.html',
          '/thanks.html',
          '/timeline.html',
          '/view-project.html',
        ]
        oldPaths.forEach(url =>
          server.get(url, (req, res) => res.redirect(301, '/'))
        )

        // Отключаем хедер x-powered-by. Зачем разглашать информацию, какой веб-сервер/фреймворк мы используем?
        server.disable('x-powered-by')

        // In production we don't want to serve sourcemaps for anyone
        if (isProduction) {
          const sentryToken = process.env.SENTRY_TOKEN
          server.get(/\.js\.map$/, (req, res, nextHandler) => {
            if (!sentryToken || req.headers['x-sentry-token'] !== sentryToken) {
              return res
                .status(401)
                .send('Authentication access token is required to access the source map.')
            }
            nextHandler()
          })
        }

        server.use((req, res, nextHandler) => {
          const allowedUtmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']
          const utmQueryParams = pick(allowedUtmParams, req.query)

          const ONE_YEAR = 365 * 24 * 60 * 60 * 1000

          Object.keys(utmQueryParams).forEach(utmKey => {
            res.cookie(utmKey, utmQueryParams[utmKey], { maxAge: ONE_YEAR })
          })

          nextHandler()
        })

        // eslint-disable-next-line
        server.use(bodyParser.json())      // to support JSON-encoded bodies
        server.use(bodyParser.urlencoded({ // to support URL-encoded bodies: без этого нельзя будет прочесть что приходит из Amo CRM Webhook'a
          extended: true,
        }))
        server.use(cookieParser())

        server.post('/api/submit-form', submitForm)
        server.post('/api/school-submit-form', schoolSubmitForm)
        server.post('/api/update-ga-data', updateGaDataByAmoHooks)

        server.use(i18nextMiddleware.handle(i18n))

        server.get('/', function (req, res) {
          const language = i18n.services.languageUtils.getLanguagePartFromCode(req.i18n.language)
          res.redirect(`/${language}`)
        })

        if (!isDevelopment) {
          server.get(
            /^\/_next\/static\/(fonts|icons|images)\//,
            (req, res, nextHandler) => {
              res.setHeader('Cache-Control', 'public, max-age=31536000, immutable')
              nextHandler()
            },
          )
        }

        server.use('/locales', express.static(path.join(__dirname, '../locales')))

        server.get('/robots.txt', function (req, res) {
          res.type('text/plain')
          if (isProduction) {
            res.send('User-agent: *\nDisallow: *.js\nSitemap: https://csssr.com/sitemap.xml')
          } else {
            res.send('User-agent: *\nDisallow: /\nSitemap: https://csssr.com/sitemap.xml')
          }
        })

        server.use('/yandex_3ecce01745a58936.html', express.static(path.join(__dirname, '../yandex_3ecce01745a58936.html')))

        server.get('/sitemap.xml', (req, res) => {
          generateSitemap().then(sitemap =>
            sitemap.toXML((err, xml) => {
              if (err) {
                return res.status(500).send(err)
              }
              res.header('Content-Type', 'application/xml')
              res.send(xml)
            })
          )
        })

        server.get('/:language/jobs/:jobPathName', (req, res) => {
          const params = { jobPathName: req.params.jobPathName, preview: req.query.hasOwnProperty('preview') }
          return app.render(req, res, `/${req.params.language}/job`, params)
        })

        server.get('*', (req, res) => {
          return handle(req, res)
        })

        server.use(Sentry.Handlers.errorHandler())

        server.listen(port, err => {
          if (err) throw err
          console.log(`> Ready on http://localhost:${port}`)
        })
      })
  })
