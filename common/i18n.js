import i18n from 'i18next'
import allNamespaces from './all-namespaces'
import { supportedLanguages, supportedLocales } from './locales-settings'

if (process.browser) {
  i18n.init({
    load: 'all',
    whitelist: [...supportedLanguages, ...supportedLocales],
    lowerCaseLng: true,
    ns: allNamespaces,
    defaultNS: 'common',
  })
}

export default i18n
