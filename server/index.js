import path from 'path'
import express from 'express'
import next from 'next'

import i18nextMiddleware from 'i18next-express-middleware'
import i18nextNodeFsBackend from 'i18next-node-fs-backend'
import i18n from '../common/i18n'

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
    ns: ['common', 'dev', 'recruitment', 'menu'],
    detection: {
      order: ['path', 'cookie', 'header'],
      lookupCookie: 'language',
      lookupFromPathIndex: 0,
      caches: ['cookie'],
    },
    backend: {
      loadPath: path.join(__dirname, '../locales/{{lng}}/{{ns}}.json'),
      adath: path.join(__dirname, '../locales/{{lng}}/{{ns}}.missing.json'),
    },
  }, () => {
    app.prepare()
      .then(() => {
        const server = express()

        // TODO
        // Добавить раздачу статики из static
        // Добавить favicon

        server.use(i18nextMiddleware.handle(i18n))

        server.get('/', function (req, res) {
          const language = i18n.services.languageUtils.getLanguagePartFromCode(req.i18n.language)
          res.redirect(`/${language}`)
        })

        server.use('/locales', express.static(path.join(__dirname, '../locales')))

        server.post('/locales/add/:lng/:ns', i18nextMiddleware.missingKeyHandler(i18n))

        server.get('*', (req, res) => {
          return handle(req, res)
        })

        server.listen(port, err => {
          if (err) throw err
          console.log(`> Ready on http://localhost:${port}`)
        })
      })
  })
