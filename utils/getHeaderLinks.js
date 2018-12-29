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
  sborka: [{
    href: '#budget',
    label: 'sborka:headerNav.budget',
  }, {
    href: '#projects',
    label: 'sborka:headerNav.projects',
  }, {
    href: '#how-we-work',
    label: 'sborka:headerNav.howWeWork',
  }, {
    href: '#hire-us',
    label: 'sborka:headerNav.hireUs',
  }],
}

export default pathname => {
  switch (pathname) {
  case ('/ru'):
  case ('/en'):
    return headerLinks.dev
  case ('/ru/html'):
  case ('/en/html'):
    return headerLinks.sborka
  default:
    return []
  }
}
