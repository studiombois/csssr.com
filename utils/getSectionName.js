export default pathname => {
  switch (pathname) {
  case ('/ru'):
  case ('/en'):
    return 'common:menu.dev'
  case ('/ru/jobs'):
    return 'common:menu.jobs'
  default:
    return '404'
  }
}
