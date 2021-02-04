const leftScreenEn = require.context(
  '../../../public/images/project/gazprom-neft/assurance/en/leftScreen?csssr-images',
)
const rightScreenEn = require.context(
  '../../../public/images/project/gazprom-neft/assurance/en/rightScreen?csssr-images',
)

const leftScreenRu = require.context(
  '../../../public/images/project/gazprom-neft/assurance/ru/leftScreen?csssr-images',
)
const rightScreenRu = require.context(
  '../../../public/images/project/gazprom-neft/assurance/ru/rightScreen?csssr-images',
)

export default {
  quality: {
    heading: (t) => t.project.gazpromNeft.assurance.heading,
    subheading: (t) => t.project.gazpromNeft.assurance.subheading,
    message: (t) => t.project.gazpromNeft.assurance.message,
  },
  roi: {
    percent: (t) => t.project.gazpromNeft.assurance.percent,
    label: (t) => t.project.gazpromNeft.assurance.label,
    description: (t) => t.project.gazpromNeft.assurance.description,
  },
  images: {
    en: {
      leftScreen: leftScreenEn,
      rightScreen: rightScreenEn,
    },
    ru: {
      leftScreen: leftScreenRu,
      rightScreen: rightScreenRu,
    },
    designerAlt: (t) => t.project.gazpromNeft.assurance.leftScreenAlt,
    projectsAlt: (t) => t.project.gazpromNeft.assurance.rightScreenAlt,
  },
}
