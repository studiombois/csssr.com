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
      link: 'ecommerce:coreValues.firstItem.link',
      href: '#accessibility',
      text: 'ecommerce:coreValues.firstItem.text',
      className: 'first-item',
    },
    {
      images: coreValuesSecurity,
      imgAlt: 'ecommerce:imgAlt.coreValuesSecurity',
      link: 'ecommerce:coreValues.secondItem.link',
      href: '#security',
      text: 'ecommerce:coreValues.secondItem.text',
      className: 'second-item',
    },
    {
      images: coreValuesUX,
      imgAlt: 'ecommerce:imgAlt.coreValuesUX',
      link: 'ecommerce:coreValues.thirdItem.link',
      href: '#ux',
      text: 'ecommerce:coreValues.thirdItem.text',
      className: 'third-item',
    },
  ],
}
