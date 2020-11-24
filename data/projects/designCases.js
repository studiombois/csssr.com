const NexarImages = require.context('../../public/images/projects/design-cases/nexar?csssr-images')
const ERSTEImages = require.context('../../public/images/projects/design-cases/erste?csssr-images')

export default {
  heading: (t) => t.projects.designCases.heading,
  buttonTitle: (t) => t.projects.designCases.button.title,
  buttonHref: (t) => t.projects.designCases.button.href,
  cases: [
    {
      images: NexarImages,
      imgAlt: (t) => t.design.designCases.nexar.imgAlt,
      heading: (t) => t.design.designCases.nexar.heading,
      text: (t) => t.design.designCases.nexar.text,
      tag: (t) => t.design.designCases.nexar.tag,
      country: (t) => t.design.designCases.nexar.country,
      plug: (t) => t.design.designCases.plug,
    },
    {
      images: ERSTEImages,
      imgAlt: (t) => t.design.designCases.erste.imgAlt,
      heading: (t) => t.design.designCases.erste.heading,
      text: (t) => t.design.designCases.erste.text,
      tag: (t) => t.design.designCases.erste.tag,
      country: (t) => t.design.designCases.erste.country,
      plug: (t) => t.design.designCases.plug,
    },
  ],
}
