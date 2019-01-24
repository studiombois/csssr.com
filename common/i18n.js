const i18n = require('i18next')
const XHR = require('i18next-xhr-backend')
// const { isDevelopment } = require('../utils/app-environment')

const options = {
  load: 'languageOnly',
  whitelist: ['en', 'ru', 'de'],
  ns: ['common'],
  defaultNS: 'common',
  // debug: isDevelopment, // Потому что его сообщения в терминал мешали работать
  interpolation: {
    escapeValue: false,
    formatSeparator: ',',
  },
}

// for browser use xhr backend to load translations
if (process.browser) {
  i18n.use(XHR)
}

// initialize if not already initialized
if (!i18n.isInitialized) {
  i18n.init(options)
}

// a simple helper to getInitialProps passed on loaded i18n data
i18n.getInitialProps = (req, namespaces) => {
  if (!namespaces) {
    namespaces = i18n.options.defaultNS
  }

  if (typeof namespaces === 'string') {
    namespaces = [namespaces]
  }

  req.i18n.toJSON = () => null // do not serialize i18next instance and send to client

  const initialI18nStore = {}
  req.i18n.languages.forEach(language => {
    initialI18nStore[language] = {}
    namespaces.forEach(ns => {
      initialI18nStore[language][ns] = (req.i18n.services.resourceStore.data[language] || {})[ns] || {}
    })
  })

  return {
    i18n: req.i18n, // use the instance on req - fixed language on request (avoid issues in race conditions with lngs of different users)
    initialI18nStore,
    initialLanguage: req.i18n.language,
  }
}

module.exports = i18n
