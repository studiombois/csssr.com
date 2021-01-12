const graphImages = require.context(
  '../../../public/images/project/gazprom-neft/development/graph?csssr-images',
)
const seoImages = require.context(
  '../../../public/images/project/gazprom-neft/development/seo?csssr-images',
)
const deploymentImages = require.context(
  '../../../public/images/project/gazprom-neft/development/deployment?csssr-images',
)
const chatImages = require.context(
  '../../../public/images/project/gazprom-neft/development/chat?csssr-images',
)

export default {
  heading: (t) => t.project.gazpromNeft.development.title,
  description: (t) => t.project.gazpromNeft.development.description,
  features: [
    {
      image: graphImages,
      id: 'graph',
      text: (t) => t.project.gazpromNeft.development.features[0].text,
      alt: (t) => t.project.gazpromNeft.development.features[0].alt,
    },
    {
      image: seoImages,
      id: 'seo',
      text: (t) => t.project.gazpromNeft.development.features[1].text,
      alt: (t) => t.project.gazpromNeft.development.features[1].alt,
    },
    {
      image: deploymentImages,
      id: 'deployment',
      text: (t) => t.project.gazpromNeft.development.features[2].text,
      alt: (t) => t.project.gazpromNeft.development.features[2].alt,
    },
    {
      image: chatImages,
      id: 'chat',
      text: (t) => t.project.gazpromNeft.development.features[3].text,
      alt: (t) => t.project.gazpromNeft.development.features[3].alt,
    },
  ],
}
