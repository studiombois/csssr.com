export default pathname => {
  switch (pathname) {
  case ('/ru'):
  case ('/en'):
    return 'common:menu.dev'
  case ('/ru/jobs'):
  case ('/en/jobs'):
    return 'common:menu.jobs'
  case ('/ru/school'):
    return 'common:menu.school'
  case ('/ru/job'):
    return 'common:menu.job'
  case ('/ru/html'):
  case ('/en/html'):
    return 'common:menu.html'
  case ('/ru/privacy-policy'):
  case ('/en/privacy-policy'):
    return 'common:menu.privacy-policy'
  case ('/en/cookies-policy'):
    return 'common:menu.cookies-policy'
  default:
    return '404'
  }
}
