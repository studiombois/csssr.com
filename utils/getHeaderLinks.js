const headerLinks = {
  dev: [
    {
      href: '#services',
      label: 'dev:headerNav.services',
      testid: 'devHeaderNav:anchorLink.services',
    },
    {
      //   href: '#competences',
      //   label: 'dev:headerNav.competence',
      // }, {
      href: '#clients',
      label: 'dev:headerNav.clients',
      testid: 'devHeaderNav:anchorLink.clients',
    },
    {
      href: '#hire-us',
      scrollToFormName: 'contact',
      label: 'dev:headerNav.hireUs',
      testid: 'devHeaderNav:anchorLink.hireUs',
    },
  ],
  sborka: [
    {
      href: '#budget',
      label: 'sborka:headerNav.budget',
      testid: 'sborkaHeaderNav:anchorLink.budget',
    },
    {
      href: '#projects',
      label: 'sborka:headerNav.projects',
      testid: 'sborkaHeaderNav:anchorLink.budget',
    },
    {
      href: '#how-we-work',
      label: 'sborka:headerNav.howWeWork',
      testid: 'sborkaHeaderNav:anchorLink.howWeWork',
    },
    {
      href: '#hire-us',
      scrollToFormName: 'contact',
      label: 'sborka:headerNav.hireUs',
      testid: 'sborkaHeaderNav:anchorLink.hireUs',
    },
  ],
  school: [
    {
      href: '#manifest',
      label: 'school:headerNav.manifest',
      testid: 'schoolHeaderNav:anchorLink.manifest',
    },
    {
      href: '#courses',
      label: 'school:headerNav.courses',
      testid: 'schoolHeaderNav:anchorLink.courses',
    },
    {
      href: '#services',
      label: 'school:headerNav.services',
      testid: 'schoolHeaderNav:anchorLink.services',
    },
    {
      href: '#about',
      label: 'school:headerNav.about',
      testid: 'schoolHeaderNav:anchorLink.about',
    },
    {
      href: '#sign',
      scrollToFormName: 'contact',
      label: 'school:headerNav.sign',
      testid: 'schoolHeaderNav:anchorLink.sign',
    },
  ],
  mvp: [
    {
      href: '#what-is-mvp',
      label: 'mvp:headerNav.what',
      testid: 'mvpHeaderNav:anchorLink.what',
    },
    {
      href: '#advantages',
      label: 'mvp:headerNav.advantages',
      testid: 'mvpHeaderNav:anchorLink.advantages',
    },
    {
      href: '#process',
      label: 'mvp:headerNav.process',
      testid: 'mvpHeaderNav:anchorLink.process',
    },
    {
      href: '#hire-us',
      label: 'mvp:headerNav.hireUs',
      testid: 'mvpHeaderNav:anchorLink.hireUs',
      scrollToFormName: 'contact',
      hideOnTablet: true,
    },
  ],
}

export default pathname => {
  switch (pathname) {
    case '/ru':
    case '/en':
      return headerLinks.dev
    case '/ru/express':
    case '/en/express':
      return headerLinks.sborka
    case '/ru/school':
      return headerLinks.school
    case '/ru/mvp':
    case '/en/mvp':
      return headerLinks.mvp
    default:
      return []
  }
}
