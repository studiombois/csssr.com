import coreValuesAccessibility from './coreValuesAccessibility'
import coreValuesSecurity from './coreValuesSecurity'
import coreValuesUX from './coreValuesUX'

export default {
  heading: 'ecommerce:coreValues.heading',
  subHeading: 'ecommerce:coreValues.subHeading',
  coreValuesItems: [
    {
      images: coreValuesAccessibility,
      imgAlt: 'ecommerce:imgAlt.coreValuesAccessibility',
      title: 'ecommerce:coreValues.firstItem.title',
      text: 'ecommerce:coreValues.firstItem.text',
      className: 'first-item',
    },
    {
      images: coreValuesSecurity,
      imgAlt: 'ecommerce:imgAlt.coreValuesSecurity',
      title: 'ecommerce:coreValues.secondItem.title',
      text: 'ecommerce:coreValues.secondItem.text',
      className: 'second-item',
    },
    {
      images: coreValuesUX,
      imgAlt: 'ecommerce:imgAlt.coreValuesUX',
      title: 'ecommerce:coreValues.thirdItem.title',
      text: 'ecommerce:coreValues.thirdItem.text',
      className: 'third-item',
    },
  ],
}
