const INGImages = require.context('../../public/images/design-lab/design-cases/ing?csssr-images')
const NASAImages = require.context('../../public/images/design-lab/design-cases/nasa?csssr-images')
const qatarImages = require.context(
  '../../public/images/design-lab/design-cases/qatar?csssr-images',
)
const ersteImages = require.context(
  '../../public/images/design-lab/design-cases/erste?csssr-images',
)
const serpbookImages = require.context(
  '../../public/images/design-lab/design-cases/serpbook?csssr-images',
)
const cogniImages = require.context(
  '../../public/images/design-lab/design-cases/cogni?csssr-images',
)
const ottomaticImages = require.context(
  '../../public/images/design-lab/design-cases/ottomatic?csssr-images',
)

const JTIImages = require.context('../../public/images/design-lab/design-cases/jti?csssr-images')

const creddibleImages = require.context(
  '../../public/images/design-lab/design-cases/creddible?csssr-images',
)

const truebillImages = require.context(
  '../../public/images/design-lab/design-cases/truebill?csssr-images',
)

export default {
  plug: (t) => t.designLab.designCases.plug,
  cases: [
    {
      images: INGImages,
      imgAlt: (t) => t.designLab.designCases.ing.imgAlt,
      heading: (t) => t.designLab.designCases.ing.heading,
      text: (t) => t.designLab.designCases.ing.text,
    },
    {
      images: NASAImages,
      imgAlt: (t) => t.designLab.designCases.nasa.imgAlt,
      heading: (t) => t.designLab.designCases.nasa.heading,
      text: (t) => t.designLab.designCases.nasa.text,
    },
    {
      images: qatarImages,
      imgAlt: (t) => t.designLab.designCases.qatar.imgAlt,
      heading: (t) => t.designLab.designCases.qatar.heading,
      text: (t) => t.designLab.designCases.qatar.text,
    },
    {
      images: ersteImages,
      imgAlt: (t) => t.designLab.designCases.erste.imgAlt,
      heading: (t) => t.designLab.designCases.erste.heading,
      text: (t) => t.designLab.designCases.erste.text,
    },
    {
      images: serpbookImages,
      imgAlt: (t) => t.designLab.designCases.serpbook.imgAlt,
      heading: (t) => t.designLab.designCases.serpbook.heading,
      text: (t) => t.designLab.designCases.serpbook.text,
    },
    {
      images: cogniImages,
      imgAlt: (t) => t.designLab.designCases.cogni.imgAlt,
      heading: (t) => t.designLab.designCases.cogni.heading,
      text: (t) => t.designLab.designCases.cogni.text,
    },
    {
      images: ottomaticImages,
      imgAlt: (t) => t.designLab.designCases.ottomatic.imgAlt,
      heading: (t) => t.designLab.designCases.ottomatic.heading,
      text: (t) => t.designLab.designCases.ottomatic.text,
    },
    {
      images: JTIImages,
      imgAlt: (t) => t.designLab.designCases.jti.imgAlt,
      heading: (t) => t.designLab.designCases.jti.heading,
      text: (t) => t.designLab.designCases.jti.text,
    },
    {
      images: creddibleImages,
      imgAlt: (t) => t.designLab.designCases.creddible.imgAlt,
      heading: (t) => t.designLab.designCases.creddible.heading,
      text: (t) => t.designLab.designCases.creddible.text,
    },
    {
      images: truebillImages,
      imgAlt: (t) => t.designLab.designCases.truebill.imgAlt,
      heading: (t) => t.designLab.designCases.truebill.heading,
      text: (t) => t.designLab.designCases.truebill.text,
    },
  ],
}
