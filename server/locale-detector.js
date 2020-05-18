import acceptLanguageParser from 'accept-language-parser'
import {
  defaultEstonianLocale,
  defaultLocale,
  defaultLocaleByLanguage,
  estonianLanguageAndLocale,
  supportedLanguages,
  supportedLocales,
} from '../common/locales-settings'
import { isDevelopment } from '../utils/app-environment'
import getLanguageFromLocale from '../common/get-language-from-locale'

const log = (...args) => {
  if (isDevelopment) {
    console.log(...args)
  }
}

// locale = language-region; примеры: ru-ru, ru-ee, en-us, en-sg.
//
// Алгоритм определения локали:
// 0. Входные данные:
//       путь в url (path) может быть undefined, en/ru, en-us/ru-ee;
//       кука (cookie) может быть undefined, en/ru, en-us/ru-ee;
//       хедер accept-language (header) может содержать что угодно.
// 1. Если в пути не локаль из whitelist, то идём дальше;
// 2. Если в пути только часть language без региона и этот language в whitelist,
//    то ищем наиболее подходящую локаль, используя значение из cookie.
//    Если значение в cookie не найдено или не согласуется с языком в пути:
//      2.1 Определяем возможные поддерживаемые локали для пути (частью какой
//          поддерживаемой локали является путь);
//      2.2 Парсим header accept-language проверяя возможность поддержки локали;
//      2.3 Если поддерживаемая локаль найдена то ставим ее;
//      2.4 Если локаль не найдена то ставим локаль по умолчанию для пути;
// 3. Если в cookie не локаль из whitelist, то идём дальше;
// 4. Парсим header accept-language, если в порядке приоритетов там нашлась эстонская локаль, то ставим en-ee;
// 5. Пытаемся найти совпадение хедера с whitelist;
// 6. Если смогли определить ru язык, но локаль не совпала полностью, то ставим ru-ru;
// 7. Если смогли определить en язык, но локаль не совпала полностью, то ставим en-sg;
// 8. Если ничего не подошло, то ставим по умолчанию en-sg.
//
// После определения локаль полностью записывается в куку locale.
//
// Мы поддерживаем следующие локали:
// ru-ru, ru-ee, en-ee, en-sg, en-us

const isLocaleLanguage = (locale) => locale === getLanguageFromLocale(locale)
const isLocaleInWhitelist = (locale) => supportedLocales.includes(locale)
const isLanguageInWhitelist = (locale) => supportedLanguages.includes(locale)

export default (localeFromPath, localeFromCookie, acceptLanguageHeader) => {
  // 1
  if (isLocaleInWhitelist(localeFromPath)) {
    log(`locale detector: ${localeFromPath} is set from path`)
    return localeFromPath
  }

  // 2
  // path=/ru, cookie=ru-ee => ru-ee
  // path=/ru, cookie=ru-ab => ru-ru (by default)
  // path=/ru, cookie=en-us => ru-ru (by default)
  // path=/ru, cookie=undefined => ru-ru (by default)
  // path=/ru, cookie=ru => ru-ru (by default)
  // path=/ru, cookie=undefined => header accept-language= ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7 => ru-ru
  // path=/en, cookie=undefined => header accept-language= ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7 => en-us
  if (isLocaleLanguage(localeFromPath) && isLanguageInWhitelist(localeFromPath)) {
    if (
      !isLocaleLanguage(localeFromCookie) &&
      isLocaleInWhitelist(localeFromCookie) &&
      getLanguageFromLocale(localeFromCookie) === localeFromPath
    ) {
      log(
        `locale detector: ${localeFromPath} was found in path, it was parsed as language part of full locale, ${localeFromCookie} was found in cookie, it is in whitelist, so locale was set to ${localeFromCookie}`,
      )
      return localeFromCookie
    }
    // 2.1
    const supportedLocalesFromPath = supportedLocales.filter((item) =>
      item.includes(localeFromPath),
    )
    // 2.2
    if (supportedLocalesFromPath) {
      const localeFromLanguageHeader = acceptLanguageParser.pick(
        supportedLocalesFromPath,
        acceptLanguageHeader,
      )
      // 2.3
      if (localeFromLanguageHeader) {
        log(
          `locale detector: ${localeFromPath} was found in path, ${supportedLocalesFromPath} it was parsed as language part of full locales ${localeFromPath}, ${localeFromLanguageHeader} was found in language header: ${acceptLanguageHeader}, so locale was set to ${localeFromLanguageHeader}`,
        )
        return localeFromLanguageHeader
      }
    }
    // 2.4
    const locale = defaultLocaleByLanguage[localeFromPath]
    log(
      `locale detector: ${localeFromPath} was found in path, it was parsed as language part of full locale, ${localeFromCookie} was found in cookie, is doesn't match for some reason, so locale was set to ${locale} by default`,
    )
    return locale
  }

  // 3
  if (isLocaleInWhitelist(localeFromCookie)) {
    log(`locale detector: ${localeFromCookie} is set from cookie`)
    return localeFromCookie
  }

  const localeFromHeader = acceptLanguageParser.pick(
    [...supportedLocales, ...estonianLanguageAndLocale],
    acceptLanguageHeader,
  )

  // 4
  if (estonianLanguageAndLocale.includes(localeFromHeader)) {
    log(
      `locale detector: ${localeFromHeader} was found in header ${acceptLanguageHeader}, so ${defaultEstonianLocale} is set as locale`,
    )
    return defaultEstonianLocale
  }

  // 5
  if (localeFromHeader) {
    log(`locale detector: ${localeFromHeader} is set from header ${acceptLanguageHeader}`)
    return localeFromHeader
  }

  const detectedLanguages = [
    getLanguageFromLocale(localeFromPath),
    getLanguageFromLocale(localeFromCookie),
    acceptLanguageParser.pick(supportedLanguages, acceptLanguageHeader),
  ]

  const whitelistedLanguage = detectedLanguages.reduce((memo, language) => {
    if (!memo && isLanguageInWhitelist(language)) {
      return language
    }
    return memo
  }, undefined)

  // 6, 7
  if (whitelistedLanguage) {
    const locale = defaultLocaleByLanguage[whitelistedLanguage]
    log(
      `locale detector: ${locale} is set because following languages were detected ${detectedLanguages}`,
    )
    return locale
  }

  // 8
  log(`locale detector: ${defaultLocale} is set by default`)
  return defaultLocale
}
