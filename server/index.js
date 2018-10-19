const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const next = require('next')
const i18nextMiddleware = require('i18next-express-middleware')
const i18nextNodeFsBackend = require('i18next-node-fs-backend')
const i18n = require('../common/i18n')
const submitForm = require('./submit-form')
const sitemap = require('./sitemap')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV === 'development'
const app = next({ dev })
const handle = app.getRequestHandler()

i18n
  .use(i18nextMiddleware.LanguageDetector)
  .use(i18nextNodeFsBackend)
  .init({
    fallbackLng: 'en',
    load: 'languageOnly',
    whitelist: ['en', 'ru', 'de'],
    preload: ['en', 'ru', 'de'],
    ns: ['common', 'dev', 'recruitment'],
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

        server.use(bodyParser.json())

        server.post('/api/submit-form', submitForm)

        server.use(i18nextMiddleware.handle(i18n))

        server.get('/', function (req, res) {
          const language = i18n.services.languageUtils.getLanguagePartFromCode(req.i18n.language)
          res.redirect(`/${language}`)
        })

        server.use('/locales', express.static(path.join(__dirname, '../locales')))

        server.use('/robots.txt', express.static(path.join(__dirname, '../robots.txt')))

        server.get('/sitemap.xml', (req, res) => {
          sitemap.toXML((err, xml) => {
            if (err) {
              return res.status(500).send(err)
            }
            res.header('Content-Type', 'application/xml')
            res.send(xml)
          })
        })

        server.get('*', (req, res) => {
          return handle(req, res)
        })

        server.listen(port, err => {
          if (err) throw err
          console.log(`> Ready on http://localhost:${port}`)
        })
      })
  })
