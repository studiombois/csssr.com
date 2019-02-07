const LANGUAGE_PATHNAME_WIDTH = 3
const changeLanguagePathnameTo = (pathname, languagePathname) =>
  '/' + languagePathname + pathname.slice(LANGUAGE_PATHNAME_WIDTH)

export default (pathname, language) => {
  switch (language) {
  case ('ru'):
    return changeLanguagePathnameTo(pathname, '/en')
  case ('en'):
    return changeLanguagePathnameTo(pathname, '/ru')
  }
}
