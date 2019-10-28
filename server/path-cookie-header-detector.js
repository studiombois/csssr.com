import acceptLanguageParser from 'accept-language-parser'
import { supportedLocales, supportedLanguages, defaultLocaleByLanguage, defaultLocale } from '../common/locales-settings'
import i18n from '../common/i18n'
import { isDevelopment } from '../utils/app-environment'

const log = (...args) => {
  if (isDevelopment) {
    console.log(...args)
  }
}

// locale = language-REGION; примеры: ru-RU, ru-EE, en-US, en-SG.
//
// Алгоритм определения локали:
// 0. Входные данные:
//       путь в url (path) может быть undefined, en/ru, en-US/ru-EE;
//       кука (cookie) может быть undefined, en/ru, en-US/ru-EE;
//       хедер accept-language (header) может содержать что угодно.
// 1. Если в пути не локаль из whitelist, то идём дальше;
// 2. Если в пути только часть language без региона и этот language в whitelist,
//    то ищем наиболее подходящую локаль, используя значение из cookie;
// 3. Если в cookie не локаль из whitelist, то идём дальше;
// 4. Парсим header, пытаемся найти совпадение с whitelist;
// 5. Если смогли определить ru язык, но локаль не совпала полностью, то ставим ru-RU;
// 6. Если смогли определить en язык, но локаль не совпала полностью, то ставим en-SG;
// 7. Если ничего не подошло, то ставим по умолчанию en-SG.
//
// После определения локаль полностью записывается в куку locale.
//
// Мы поддерживаем следующие локали:
// ru-RU, ru-EE, en-EE, en-SG, en-US

const isLocaleLanguage = locale => locale === i18n.services.languageUtils.getLanguagePartFromCode(locale)
const isLocaleInWhitelist = locale => supportedLocales.includes(i18n.services.languageUtils.formatLanguageCode(locale))
const isLanguageInWhitelist = locale => supportedLanguages.includes(locale)

export default {
  name: 'pathCookieHeader',
  lookup(req, res, options) {
    const [, localeFromPath] = req.path.split('/')

    // 1
    if (isLocaleInWhitelist(localeFromPath)) {
      log(`locale detector: ${localeFromPath} is set from path`)
      return localeFromPath
    }

    const localeFromCookie = req.cookies[options.lookupCookie]

    // 2
    // path=/ru, cookie=ru-EE => ru-EE
    // path=/ru, cookie=ru-AB => ru-RU (by default)
    // path=/ru, cookie=en-US => ru-RU (by default)
    // path=/ru, cookie=undefined => ru-RU (by default)
    // path=/ru, cookie=ru => ru-RU (by default)
    if (isLocaleLanguage(localeFromPath) && isLanguageInWhitelist(localeFromPath)) {
      if (
        !isLocaleLanguage(localeFromCookie) &&
        isLocaleInWhitelist(localeFromCookie) &&
        i18n.services.languageUtils.getLanguagePartFromCode(localeFromCookie) === localeFromPath
      ) {
        log(`locale detector: ${localeFromPath} was found in path, it was parsed as language part of full locale, ${localeFromCookie} was found in cookie, it is in whitelist, so locale was set to ${localeFromCookie}`)
        return defaultLocaleByLanguage[localeFromPath]
      }

      const locale = defaultLocaleByLanguage[localeFromPath]
      log(`locale detector: ${localeFromPath} was found in path, it was parsed as language part of full locale, ${localeFromCookie} was found in cookie, is doesn't match for some reason, so locale was set to ${locale} by default`)
      return defaultLocaleByLanguage[localeFromPath]
    }

    // 3
    if (isLocaleInWhitelist(localeFromCookie)) {
      log(`locale detector: ${localeFromCookie} is set from cookie`)
      return localeFromCookie
    }

    const acceptLanguageHeader = req.headers['accept-language']
    const localeFromHeader = acceptLanguageParser.pick(supportedLocales, acceptLanguageHeader)

    // 4
    if (localeFromHeader) {
      log(`locale detector: ${localeFromHeader} is set from header ${acceptLanguageHeader}`)
      return localeFromHeader
    }

    const detectedLanguages = [
      i18n.services.languageUtils.getLanguagePartFromCode(localeFromPath),
      i18n.services.languageUtils.getLanguagePartFromCode(localeFromCookie),
      acceptLanguageParser.pick(supportedLanguages, req.headers['accept-language']),
    ]

    const whitelistedLanguage = detectedLanguages.reduce((memo, language) => {
      if (!memo && isLanguageInWhitelist(language)) {
        return language
      }
      return memo
    }, undefined)

    // 5, 6
    if (whitelistedLanguage) {
      const locale = defaultLocaleByLanguage[whitelistedLanguage]
      log(`locale detector: ${locale} is set because following languages were detected ${detectedLanguages}`)
      return locale
    }

    // 7
    log(`locale detector: ${defaultLocale} is set by default`)
    return defaultLocale
  },
}
