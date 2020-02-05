import projects_1 from './projects_1'
import projects_2 from './projects_2'
import projects_3 from './projects_3'

export default {
  heading: 'ecommerce:projects.heading',
  subHeading: 'ecommerce:projects.subHeading',
  projectsItems: [
    {
      images: projects_1,
      imgAlt: 'ecommerce:imgAlt.projects_1',
      heading: 'ecommerce:projects.firstItem.heading',
      text: 'ecommerce:projects.firstItem.text',
      className: 'first-item',
      numericData: [
        {
          numberData: 'ecommerce:projects.firstItem.numericData.firstItem.number',
          textData: 'ecommerce:projects.firstItem.numericData.firstItem.text',
        },
        {
          numberData: 'ecommerce:projects.firstItem.numericData.secondItem.number',
          textData: 'ecommerce:projects.firstItem.numericData.secondItem.text',
        },
      ],
    },
    {
      images: projects_2,
      imgAlt: 'ecommerce:imgAlt.projects_2',
      heading: 'ecommerce:projects.secondItem.heading',
      text: 'ecommerce:projects.secondItem.text',
      className: 'second-item',
      direction: 'reverse',
      numericData: [
        {
          numberData: 'ecommerce:projects.secondItem.numericData.firstItem.number',
          textData: 'ecommerce:projects.secondItem.numericData.firstItem.text',
        },
        {
          numberData: 'ecommerce:projects.secondItem.numericData.secondItem.number',
          textData: 'ecommerce:projects.secondItem.numericData.secondItem.text',
        },
      ],
    },
    {
      images: projects_3,
      imgAlt: 'ecommerce:imgAlt.projects_3',
      heading: 'ecommerce:projects.thirdItem.heading',
      text: 'ecommerce:projects.thirdItem.text',
      className: 'third-item',
      numericData: [
        {
          numberData: 'ecommerce:projects.thirdItem.numericData.firstItem.number',
          textData: 'ecommerce:projects.thirdItem.numericData.firstItem.text',
        },
        {
          numberData: 'ecommerce:projects.thirdItem.numericData.secondItem.number',
          textData: 'ecommerce:projects.thirdItem.numericData.secondItem.text',
        },
      ],
    },
  ],
}
