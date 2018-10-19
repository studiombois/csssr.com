const headerLinks = {
  dev: [{
    href: '#сompetences',
    label: 'dev:headerNav.сompetences',
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
}

export default pathname => {
  switch (pathname) {
  case ('/ru'):
  case ('/en'):
    return headerLinks.dev
  default:
    return []
  }
}
