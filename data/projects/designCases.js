const INGImages = require.context('../../public/images/projects/design-cases/ing?csssr-images')
const NASAImages = require.context('../../public/images/projects/design-cases/nasa?csssr-images')

export default {
  heading: (t) => t.projects.designCases.heading,
  buttonTitle: (t) => t.projects.designCases.button.title,
  buttonHref: (t) => t.projects.designCases.button.href,
  cases: [
    {
      images: INGImages,
      imgAlt: (t) => t.designLab.designCases.ing.imgAlt,
      heading: (t) => t.designLab.designCases.ing.heading,
      text: (t) => t.designLab.designCases.ing.text,
      plug: (t) => t.designLab.designCases.plug,
    },
    {
      images: NASAImages,
      imgAlt: (t) => t.designLab.designCases.nasa.imgAlt,
      heading: (t) => t.designLab.designCases.nasa.heading,
      text: (t) => t.designLab.designCases.nasa.text,
      plug: (t) => t.designLab.designCases.plug,
    },
  ],
}
