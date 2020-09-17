const mosOblGaz = require.context(
  '../../public/images/industry/ecommerce/cases/mosoblgaz?csssr-images',
)
const brusnika = require.context(
  '../../public/images/industry/ecommerce/cases/brusnika?csssr-images',
)
const qmarketing = require.context(
  '../../public/images/industry/media-and-marketing/cases/qmarketing?csssr-images',
)
const mindbox = require.context(
  '../../public/images/industry/media-and-marketing/cases/mindbox?csssr-images',
)
const gazprom = require.context(
  '../../public/images/industry/information-technology/cases/gazprom?csssr-images',
)

const s7airlines = require.context(
  '../../public/images/industry/information-technology/cases/s7airlines?csssr-images',
)

export const mediaAndMarketingProjects = {
  heading: (t) => t.industry.projects.heading,
  commonText: (t) => t.industry.projects.commonText,
  linkTitle: (t) => t.industry.projects.link.title,

  projectsItems: [
    {
      className: 'first-item',
      images: qmarketing,
      imgAlt: 'QAcademy',
      heading: (t) => t.industry.projects.mediaAndMarketingPage.qmarketing.heading,
      text: (t) => t.industry.projects.mediaAndMarketingPage.qmarketing.text,
      teamNumber: (t) => t.industry.projects.mediaAndMarketingPage.qmarketing.team,
      projectDuration: (t) => t.industry.projects.mediaAndMarketingPage.qmarketing.duration,
      link: 'qmarketing',
    },
    {
      className: 'second-item',
      images: mindbox,
      imgAlt: 'Mindbox',
      heading: (t) => t.industry.projects.mediaAndMarketingPage.mindbox.heading,
      text: (t) => t.industry.projects.mediaAndMarketingPage.mindbox.text,
      teamNumber: (t) => t.industry.projects.mediaAndMarketingPage.mindbox.team,
      projectDuration: (t) => t.industry.projects.mediaAndMarketingPage.mindbox.duration,
      link: 'mindbox',
    },
  ],
}

export const informationTechnologyProjects = {
  heading: (t) => t.industry.projects.heading,
  commonText: (t) => t.industry.projects.commonText,
  linkTitle: (t) => t.industry.projects.link.title,

  projectsItems: [
    {
      className: 'first-item',
      images: gazprom,
      imgAlt: 'Gazprom',
      heading: (t) => t.industry.projects.informationTechnologyPage.gazprom.heading,
      text: (t) => t.industry.projects.informationTechnologyPage.gazprom.text,
      teamNumber: (t) => t.industry.projects.informationTechnologyPage.gazprom.team,
      projectDuration: (t) => t.industry.projects.informationTechnologyPage.gazprom.duration,
      link: 'gazprom-neft-professionals-4-0',
    },
    {
      className: 'second-item',
      images: s7airlines,
      imgAlt: 'S7Airlines',
      heading: (t) => t.industry.projects.informationTechnologyPage.s7.heading,
      text: (t) => t.industry.projects.informationTechnologyPage.s7.text,
      teamNumber: (t) => t.industry.projects.informationTechnologyPage.s7.team,
      projectDuration: (t) => t.industry.projects.informationTechnologyPage.s7.duration,
      link: 's7-personal-account',
    },
  ],
}

export const eCommerceProjects = {
  heading: (t) => t.industry.projects.heading,
  commonText: (t) => t.industry.projects.commonText,
  linkTitle: (t) => t.industry.projects.link.title,

  projectsItems: [
    {
      className: 'first-item',
      images: mosOblGaz,
      imgAlt: 'MOSOBLGAZ',
      heading: (t) => t.industry.projects.ecommercePage.mosoblgaz.heading,
      text: (t) => t.industry.projects.ecommercePage.mosoblgaz.text,
      teamNumber: (t) => t.industry.projects.ecommercePage.mosoblgaz.team,
      projectDuration: (t) => t.industry.projects.ecommercePage.mosoblgaz.duration,
      link: 'mosoblgaz',
    },
    {
      className: 'second-item',
      images: brusnika,
      imgAlt: 'Brusnika',
      heading: (t) => t.industry.projects.ecommercePage.brusnika.heading,
      text: (t) => t.industry.projects.ecommercePage.brusnika.text,
      teamNumber: (t) => t.industry.projects.ecommercePage.brusnika.team,
      projectDuration: (t) => t.industry.projects.ecommercePage.brusnika.duration,
      link: 'brusnika',
    },
  ],
}
