const radarImages = require.context(
  '../../../public/images/project/gazprom-neft/business-analysis/radar?csssr-images',
)
const stepsImages = require.context(
  '../../../public/images/project/gazprom-neft/business-analysis/steps?csssr-images',
)
const candidatesImages = require.context(
  '../../../public/images/project/gazprom-neft/business-analysis/candidates?csssr-images',
)

export default {
  heading: (t) => t.project.gazpromNeft.businessAnalysis.title,
  description: (t) => t.project.gazpromNeft.businessAnalysis.description,
  text: [
    (t) => t.project.gazpromNeft.businessAnalysis.text[0],
    (t) => t.project.gazpromNeft.businessAnalysis.text[1],
  ],
  imagesBlocks: [
    {
      image: radarImages,
      imgAlt: (t) => t.project.gazpromNeft.businessAnalysis.imagesAlt[0],
      text: (t) => t.project.gazpromNeft.businessAnalysis.imagesText[0],
      id: 'radar',
    },
    {
      image: stepsImages,
      imgAlt: (t) => t.project.gazpromNeft.businessAnalysis.imagesAlt[1],
      text: (t) => t.project.gazpromNeft.businessAnalysis.imagesText[1],
      id: 'steps',
    },
    {
      image: candidatesImages,
      imgAlt: (t) => t.project.gazpromNeft.businessAnalysis.imagesAlt[2],
      text: (t) => t.project.gazpromNeft.businessAnalysis.imagesText[2],
      id: 'candidates',
    },
  ],
}
