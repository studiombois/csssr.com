const INGImages = require.context('../../public/images/design/design-cases/ing?csssr-images')
const NASAImages = require.context('../../public/images/design/design-cases/nasa?csssr-images')
const qatarImages = require.context('../../public/images/design/design-cases/qatar?csssr-images')
const ersteImages = require.context('../../public/images/design/design-cases/erste?csssr-images')
const serpbookImages = require.context(
  '../../public/images/design/design-cases/serpbook?csssr-images',
)
const cogniImages = require.context('../../public/images/design/design-cases/cogni?csssr-images')
const ottomaticImages = require.context(
  '../../public/images/design/design-cases/ottomatic?csssr-images',
)

const JTIImages = require.context('../../public/images/design/design-cases/jti?csssr-images')

const creddibleImages = require.context(
  '../../public/images/design/design-cases/creddible?csssr-images',
)

const truebillImages = require.context(
  '../../public/images/design/design-cases/truebill?csssr-images',
)

export default {
  plug: (t) => t.design.designCases.plug,
  cases: [
    {
      images: INGImages,
      imgAlt: (t) => t.design.designCases.ing.imgAlt,
      heading: (t) => t.design.designCases.ing.heading,
      text: (t) => t.design.designCases.ing.text,
    },
    {
      images: NASAImages,
      imgAlt: (t) => t.design.designCases.nasa.imgAlt,
      heading: (t) => t.design.designCases.nasa.heading,
      text: (t) => t.design.designCases.nasa.text,
    },
    {
      images: qatarImages,
      imgAlt: (t) => t.design.designCases.qatar.imgAlt,
      heading: (t) => t.design.designCases.qatar.heading,
      text: (t) => t.design.designCases.qatar.text,
    },
    {
      images: ersteImages,
      imgAlt: (t) => t.design.designCases.erste.imgAlt,
      heading: (t) => t.design.designCases.erste.heading,
      text: (t) => t.design.designCases.erste.text,
    },
    {
      images: serpbookImages,
      imgAlt: (t) => t.design.designCases.serpbook.imgAlt,
      heading: (t) => t.design.designCases.serpbook.heading,
      text: (t) => t.design.designCases.serpbook.text,
    },
    {
      images: cogniImages,
      imgAlt: (t) => t.design.designCases.cogni.imgAlt,
      heading: (t) => t.design.designCases.cogni.heading,
      text: (t) => t.design.designCases.cogni.text,
    },
    {
      images: ottomaticImages,
      imgAlt: (t) => t.design.designCases.ottomatic.imgAlt,
      heading: (t) => t.design.designCases.ottomatic.heading,
      text: (t) => t.design.designCases.ottomatic.text,
    },
    {
      images: JTIImages,
      imgAlt: (t) => t.design.designCases.jti.imgAlt,
      heading: (t) => t.design.designCases.jti.heading,
      text: (t) => t.design.designCases.jti.text,
    },
    {
      images: creddibleImages,
      imgAlt: (t) => t.design.designCases.creddible.imgAlt,
      heading: (t) => t.design.designCases.creddible.heading,
      text: (t) => t.design.designCases.creddible.text,
    },
    {
      images: truebillImages,
      imgAlt: (t) => t.design.designCases.truebill.imgAlt,
      heading: (t) => t.design.designCases.truebill.heading,
      text: (t) => t.design.designCases.truebill.text,
    },
  ],
}
