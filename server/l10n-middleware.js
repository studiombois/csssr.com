import loadAllTranslations from './load-all-translations'
import localeDetector from './locale-detector'
import { ONE_YEAR } from '../utils/timePeriods'
import getLanguageFromLocale from '../common/get-language-from-locale'

export default ({ loadPath, ignorePaths, lookupCookieName }) => {
  const allTranslationsPromise = loadAllTranslations(loadPath)

  return async (req, res, next) => {
    const allTranslations = await allTranslationsPromise
    const path = req.path

    const shouldIgnorePath = ignorePaths.reduce((acc, pattern) => acc || pattern.test(path), false)
    if (shouldIgnorePath) {
      return next()
    }

    const [, localeFromPath] = req.path.split('/')
    const localeFromCookie = req.cookies[lookupCookieName]
    const acceptLanguageHeader = req.headers['accept-language']

    const locale = localeDetector(localeFromPath, localeFromCookie, acceptLanguageHeader)

    const normalizedLocale = locale.toLowerCase()

    res.cookie(lookupCookieName, normalizedLocale, { maxAge: ONE_YEAR, httpOnly: true })

    res.locals.l10n = {
      language: getLanguageFromLocale(normalizedLocale),
      locale: normalizedLocale,
      translations: allTranslations[getLanguageFromLocale(normalizedLocale)],
    }

    next()
  }
}
