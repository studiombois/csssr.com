const nexarImages = require.context('../../public/images/design/design-cases/nexar?csssr-images')
const ersteImages = require.context('../../public/images/design/design-cases/erste?csssr-images')
const stoovoImages = require.context('../../public/images/design/design-cases/stoovo?csssr-images')
const nautoImages = require.context('../../public/images/design/design-cases/nauto?csssr-images')
const marcelImages = require.context('../../public/images/design/design-cases/marcel?csssr-images')
const halffImages = require.context('../../public/images/design/design-cases/halff?csssr-images')
const alenoImages = require.context('../../public/images/design/design-cases/aleno?csssr-images')

export default {
  plug: (t) => t.design.designCases.plug,
  cases: [
    {
      images: nexarImages,
      id: (t) => t.design.designCases.nexar.id,
      imgAlt: (t) => t.design.designCases.nexar.imgAlt,
      heading: (t) => t.design.designCases.nexar.heading,
      text: (t) => t.design.designCases.nexar.text,
      tag: (t) => t.design.designCases.nexar.tag,
      country: (t) => t.design.designCases.nexar.country,
    },
    {
      images: ersteImages,
      id: (t) => t.design.designCases.erste.id,
      imgAlt: (t) => t.design.designCases.erste.imgAlt,
      heading: (t) => t.design.designCases.erste.heading,
      text: (t) => t.design.designCases.erste.text,
      tag: (t) => t.design.designCases.erste.tag,
      country: (t) => t.design.designCases.erste.country,
    },
    {
      images: stoovoImages,
      id: (t) => t.design.designCases.stoovo.id,
      imgAlt: (t) => t.design.designCases.stoovo.imgAlt,
      heading: (t) => t.design.designCases.stoovo.heading,
      text: (t) => t.design.designCases.stoovo.text,
      tag: (t) => t.design.designCases.stoovo.tag,
      country: (t) => t.design.designCases.stoovo.country,
    },
    {
      images: nautoImages,
      id: (t) => t.design.designCases.nauto.id,
      imgAlt: (t) => t.design.designCases.nauto.imgAlt,
      heading: (t) => t.design.designCases.nauto.heading,
      text: (t) => t.design.designCases.nauto.text,
      tag: (t) => t.design.designCases.nauto.tag,
      country: (t) => t.design.designCases.nauto.country,
    },
    {
      images: marcelImages,
      id: (t) => t.design.designCases.marcel.id,
      imgAlt: (t) => t.design.designCases.marcel.imgAlt,
      heading: (t) => t.design.designCases.marcel.heading,
      text: (t) => t.design.designCases.marcel.text,
      tag: (t) => t.design.designCases.marcel.tag,
      country: (t) => t.design.designCases.marcel.country,
    },
    {
      images: halffImages,
      id: (t) => t.design.designCases.halff.id,
      imgAlt: (t) => t.design.designCases.halff.imgAlt,
      heading: (t) => t.design.designCases.halff.heading,
      text: (t) => t.design.designCases.halff.text,
      tag: (t) => t.design.designCases.halff.tag,
      country: (t) => t.design.designCases.halff.country,
    },
    {
      images: alenoImages,
      id: (t) => t.design.designCases.aleno.id,
      imgAlt: (t) => t.design.designCases.aleno.imgAlt,
      heading: (t) => t.design.designCases.aleno.heading,
      text: (t) => t.design.designCases.aleno.text,
      tag: (t) => t.design.designCases.aleno.tag,
      country: (t) => t.design.designCases.aleno.country,
    },
  ],
}
