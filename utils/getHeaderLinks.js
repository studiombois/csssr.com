const headerLinks = {
  dev: [{
    href: '#competences',
    label: 'dev:headerNav.competence',
  }, {
    href: '#services',
    label: 'dev:headerNav.services',
  }, {
    href: '#clients',
    label: 'dev:headerNav.clients',
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
  school: [{
    href: '#manifest',
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
  }],
  mvp: [{
    href: '#what-is-mvp',
    label: 'mvp:headerNav.what',
  }, {
    href: '#advantages',
    label: 'mvp:headerNav.advantages',
  }, {
    href: '#process',
    label: 'mvp:headerNav.process',
  }, {
    href: '#hire-us',
    label: 'mvp:headerNav.hireUs',
    hideOnTablet: true,
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
  case ('/ru/school'):
    return headerLinks.school
  case ('/ru/mvp'):
    return headerLinks.mvp
  default:
    return []
  }
}
