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
  case ('/ru/sborka'):
  case ('/en/sborka'):
    return 'common:menu.sborka'
  default:
    return '404'
  }
}
