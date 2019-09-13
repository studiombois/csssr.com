export default pathname => {
  switch (pathname) {
  case ('/ru'):
  case ('/en'):
    return 'common:menu.dev'
  case ('/ru/jobs'):
  case ('/en/jobs'):
    return 'common:menu.jobs'
  case ('/ru/school'):
  case ('/en/school'):
    return 'common:menu.school'
  case ('/ru/job'):
  case ('/en/job'):
    return 'common:menu.job'
  case ('/ru/express'):
  case ('/en/express'):
    return 'common:menu.html'
  case ('/ru/privacy-policy'):
  case ('/en/privacy-policy'):
    return 'common:menu.privacy-policy'
  case ('/en/cookies-policy'):
    return 'common:menu.cookies-policy'
  case ('/ru/mvp'):
  case ('/en/mvp'):
    return 'common:menu.mvp'
  default:
    return '404'
  }
}
