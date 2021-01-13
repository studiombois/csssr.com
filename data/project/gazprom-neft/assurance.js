const screenMobile = require.context(
  '../../../public/images/project/common-pics/assurance/screenMobile?csssr-images',
)
const screenDesktop = require.context(
  '../../../public/images/project/common-pics/assurance/screenDesktop?csssr-images',
)
const designerEn = require.context(
  '../../../public/images/project/common-pics/assurance/designerEn?csssr-images',
)
const designerRu = require.context(
  '../../../public/images/project/common-pics/assurance/designerRu?csssr-images',
)
const projectsEn = require.context(
  '../../../public/images/project/common-pics/assurance/projectsEn?csssr-images',
)
const projectsRu = require.context(
  '../../../public/images/project/common-pics/assurance/projectsRu?csssr-images',
)

export default {
  quality: {
    heading: (t) => t.project.gazpromNeft.assurance.heading,
    subheading: (t) => t.project.gazpromNeft.assurance.subheading,
    message: (t) => t.project.gazpromNeft.assurance.message,
  },
  roi: {
    procent: (t) => t.project.gazpromNeft.assurance.procent,
    label: (t) => t.project.gazpromNeft.assurance.label,
    description: (t) => t.project.gazpromNeft.assurance.description,
  },
  images: {
    screenMobile: screenMobile,
    screenDesktop: screenDesktop,
    screenAlt: (t) => t.project.gazpromNeft.assurance.screenAlt,
    designerEn: designerEn,
    designerRu: designerRu,
    designerAlt: (t) => t.project.gazpromNeft.assurance.designerAlt,
    projectsEn: projectsEn,
    projectsRu: projectsRu,
    projectsAlt: (t) => t.project.gazpromNeft.assurance.projectsAlt,
  },
}
