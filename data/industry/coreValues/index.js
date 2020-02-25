import coreValuesAccessibility from './coreValuesAccessibility'
import coreValuesSecurity from './coreValuesSecurity'
import coreValuesUX from './coreValuesUX'

export default {
  heading: 'industry:coreValues.heading',
  subHeading: 'industry:coreValues.subHeading',
  coreValuesItems: [
    {
      images: coreValuesAccessibility,
      imgAlt: 'industry:imgAlt.coreValuesAccessibility',
      title: 'industry:coreValues.firstItem.title',
      text: 'industry:coreValues.firstItem.text',
      className: 'first-item',
    },
    {
      images: coreValuesSecurity,
      imgAlt: 'industry:imgAlt.coreValuesSecurity',
      title: 'industry:coreValues.secondItem.title',
      text: 'industry:coreValues.secondItem.text',
      className: 'second-item',
    },
    {
      images: coreValuesUX,
      imgAlt: 'industry:imgAlt.coreValuesUX',
      title: 'industry:coreValues.thirdItem.title',
      text: 'industry:coreValues.thirdItem.text',
      className: 'third-item',
    },
  ],
}
