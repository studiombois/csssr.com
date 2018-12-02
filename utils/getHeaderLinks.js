const headerLinks = {
  dev: [{
    href: '#competence',
    label: 'dev:headerNav.competence',
  }, {
    href: '#services',
    label: 'dev:headerNav.services',
  }, {
    href: '#customers',
    label: 'dev:headerNav.customers',
  }, {
    href: '#hire-us',
    label: 'dev:headerNav.hireUs',
  }],
  school: [{
    href: '#competence',
    label: 'school:headerNav.manifest',
  }, {
    href: '#courses',
    label: 'school:headerNav.courses',
  }, {
    href: '#services',
    label: 'school:headerNav.services',
  }, {
    href: '#about',
    label: 'school:headerNav.about',
  }, {
    href: '#sign',
    label: 'school:headerNav.sign',
  }]}

export default pathname => {
  switch (pathname) {
  case ('/ru'):
  case ('/ru/school'):
    return headerLinks.school
  case ('/en'):
    return headerLinks.dev
  default:
    return []
  }
}
