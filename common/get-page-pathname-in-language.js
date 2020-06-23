export const getPathName = (path) => {
  const [, , , pathname] = path.match(/^\/(.*?)(\/(.*))?$/)

  return pathname
}

export const isJobPage = (pathname) => {
  return ['job', 'jobs', 'jobs-faq'].indexOf(pathname) === -1
}

export default (fullPathname, newLanguage, pagesList) => {
  // Здесь не используются именованные группы для поддержки IE
  const pathname = getPathName(fullPathname)

  if (!pathname) {
    // /ru или /en
    return `/${newLanguage}`
  }

  if (isJobPage(pathname)) {
    return `/${newLanguage}/jobs`
  }

  if (pagesList.some((page) => page.pathname === pathname && page.language === newLanguage)) {
    return `/${newLanguage}/${pathname}`
  }

  return `/${newLanguage}`
}
