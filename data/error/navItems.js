export default [
  {
    id: 'services',
    title: (t) => t.common.header.menu.services.title,
    links: [
      {
        id: 'outsourcing',
        title: (t) => t.common.header.menu.services.outsourcing.title,
        href: 'service/outsourcing-front-end',
      },
      {
        id: 'mvp',
        title: (t) => t.common.header.menu.services.mvp.title,
        href: 'service/mvp-development',
      },
      {
        id: 'backend',
        title: (t) => t.common.header.menu.services.backend.title,
        href: 'service/back-end-and-devops',
      },
    ],
  },
  {
    id: 'industries',
    title: (t) => t.common.header.menu.industries.title,
    links: [
      {
        id: 'fintech',
        title: (t) => t.common.header.menu.industries.fintech.title,
        href: 'industry/fintech',
      },
      {
        id: 'eCommerce',
        title: (t) => t.common.header.menu.industries.eCommerce.title,
        href: 'industry/ecommerce',
      },
      {
        id: 'information',
        title: (t) => t.common.header.menu.industries.information.title,
        href: 'industry/information-technology',
      },
      {
        id: 'mediaAndMarketing',
        title: (t) => t.common.header.menu.industries.mediaAndMarketing.title,
        href: 'industry/media-and-marketing',
      },
    ],
  },
  {
    id: 'howWeWork',
    title: (t) => t.common.header.menu.howWeWork.title,
    links: [
      {
        id: 'technologies',
        title: (t) => t.common.header.menu.howWeWork.technologies.title,
        href: 'tech-stack',
      },
      {
        id: 'processes',
        title: (t) => t.common.header.menu.howWeWork.processes.title,
        href: 'way-of-work',
      },
    ],
  },
  {
    id: 'solutions',
    title: (t) => t.common.header.menu.solutions.title,
    links: [
      {
        id: 'lms',
        title: (t) => t.common.header.menu.solutions.lms.title,
        href: 'solutions/lms',
      },
      {
        id: 'tracker',
        title: (t) => t.common.header.menu.solutions.tracker.title,
        href: 'https://tracker.csssr.com',
      },
    ],
  },
]
