const LANGUAGE_PATHNAME_WIDTH = 3
const changeLanguagePathnameTo = (pathname, languagePathname) =>
  languagePathname + pathname.slice(LANGUAGE_PATHNAME_WIDTH)

const getRedirectionPath = (pathname, language) => {
  switch (language) {
  case ('ru'):
    return changeLanguagePathnameTo(pathname, '/en')
  case ('en'):
    return changeLanguagePathnameTo(pathname, '/ru')
  }
}

export default async (pathname, language) => {
  /**
  * @type {String}
  * @example: `/en/jobs/senior-js-developer`
  */
  const preciseRedirectionPath = getRedirectionPath(pathname, language)
  const baseRedirectionPath = preciseRedirectionPath.split('/').slice(0, 2).join('/')

  try {
    const { status } = await fetch(preciseRedirectionPath, { method: 'OPTIONS' })

    if (status === 404) {
      return baseRedirectionPath
    }

    if (preciseRedirectionPath === '/en/express') {
      return 'https://express.csssr.com'
    }

    return preciseRedirectionPath

  } catch (e) {
    throw new Error(e)
  }
}
