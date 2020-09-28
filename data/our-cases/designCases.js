const INGImages = require.context('../../public/images/our-cases/design-cases/ing?csssr-images')
const NASAImages = require.context('../../public/images/our-cases/design-cases/nasa?csssr-images')

export default {
  heading: (t) => t.ourCases.designCases.heading,
  buttonTitle: (t) => t.ourCases.designCases.button.title,
  buttonHref: (t) => t.ourCases.designCases.button.href,
  cases: [
    {
      images: INGImages,
      imgAlt: (t) => t.ourCases.designCases.ING.imgAlt,
      link: 'project/gazprom-neft-professionals-4-0',
      heading: (t) => t.ourCases.designCases.ING.heading,
      text: (t) => t.ourCases.designCases.ING.text,
      plug: (t) => t.ourCases.designCases.ING.plug,
    },
    {
      images: NASAImages,
      imgAlt: (t) => t.ourCases.designCases.NASA.imgAlt,
      link: 'project/s7-personal-account',
      heading: (t) => t.ourCases.designCases.NASA.heading,
      text: (t) => t.ourCases.designCases.NASA.text,
      plug: (t) => t.ourCases.designCases.NASA.plug,
    },
  ],
}
