const coreValuesAccessibility = require.context(
  '../../public/images/industry/common-pics/coreValuesAccessibility?csssr-images',
)
const coreValuesSecurity = require.context(
  '../../public/images/industry/common-pics/coreValuesSecurity?csssr-images',
)
const coreValuesUX = require.context(
  '../../public/images/industry/common-pics/coreValuesUX?csssr-images',
)

export default {
  heading: (t) => t.industry.coreValues.heading,
  subHeading: (t) => t.industry.coreValues.subHeading,
  coreValuesItems: [
    {
      images: coreValuesAccessibility,
      imgAlt: (t) => t.industry.imgAlt.coreValuesAccessibility,
      title: (t) => t.industry.coreValues.firstItem.title,
      text: (t) => t.industry.coreValues.firstItem.text,
      className: 'first-item',
    },
    {
      images: coreValuesSecurity,
      imgAlt: (t) => t.industry.imgAlt.coreValuesSecurity,
      title: (t) => t.industry.coreValues.secondItem.title,
      text: (t) => t.industry.coreValues.secondItem.text,
      className: 'second-item',
    },
    {
      images: coreValuesUX,
      imgAlt: (t) => t.industry.imgAlt.coreValuesUX,
      title: (t) => t.industry.coreValues.thirdItem.title,
      text: (t) => t.industry.coreValues.thirdItem.text,
      className: 'third-item',
    },
  ],
  button: {
    title: (t) => t.industry.coreValues.button.title,
    href: (t) => t.industry.coreValues.button.href,
  },
}
