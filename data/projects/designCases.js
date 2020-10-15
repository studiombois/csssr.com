const INGImages = require.context('../../public/images/projects/design-cases/ing?csssr-images')
const NASAImages = require.context('../../public/images/projects/design-cases/nasa?csssr-images')

export default {
  heading: (t) => t.projects.designCases.heading,
  buttonTitle: (t) => t.projects.designCases.button.title,
  buttonHref: (t) => t.projects.designCases.button.href,
  cases: [
    {
      images: INGImages,
      imgAlt: (t) => t.design.designCases.ing.imgAlt,
      heading: (t) => t.design.designCases.ing.heading,
      text: (t) => t.design.designCases.ing.text,
      plug: (t) => t.design.designCases.plug,
    },
    {
      images: NASAImages,
      imgAlt: (t) => t.design.designCases.nasa.imgAlt,
      heading: (t) => t.design.designCases.nasa.heading,
      text: (t) => t.design.designCases.nasa.text,
      plug: (t) => t.design.designCases.plug,
    },
  ],
}
