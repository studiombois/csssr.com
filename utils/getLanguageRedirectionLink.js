const changePathnameLanguageTo = (pathname, language) =>
  language + pathname.slice(3)

export default pathname => {
  const currentLanguage = pathname.slice(0, 3)

  if (currentLanguage === '/ru') {
    return changePathnameLanguageTo(pathname, '/en')
  }

  if (currentLanguage === '/en') {
    return changePathnameLanguageTo(pathname, '/ru')
  }
}
