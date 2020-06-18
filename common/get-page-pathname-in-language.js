export default (fullPathname, newLanguage, pagesList) => {
  // Здесь не используются именованные группы для поддержки IE
  const [, , , pathname] = fullPathname.match(/^\/(.*?)(\/(.*))?$/)

  if (!pathname) {
    // /ru или /en
    return `/${newLanguage}`
  }

  if (['job', 'jobs', 'jobs-faq'].indexOf(pathname) !== -1) {
    return `/${newLanguage}/jobs`
  }

  if (pagesList.some((page) => page.pathname === pathname && page.language === newLanguage)) {
    return `/${newLanguage}/${pathname}`
  }

  return `/${newLanguage}`
}
