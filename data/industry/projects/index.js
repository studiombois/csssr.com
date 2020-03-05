import projects_1 from './projects_1'
import projects_2 from './projects_2'
import projects_3 from './projects_3'

export default {
  heading: 'industry:projects.heading',
  subHeading: 'industry:projects.subHeading',
  projectsItems: [
    {
      images: projects_1,
      imgAlt: 'industry:imgAlt.projects_1',
      heading: 'industry:projects.firstItem.heading',
      text: 'industry:projects.firstItem.text',
      className: 'first-item',
      numericData: [
        {
          numberData: 'industry:projects.firstItem.numericData.firstItem.number',
          textData: 'industry:projects.firstItem.numericData.firstItem.text',
        },
        {
          numberData: 'industry:projects.firstItem.numericData.secondItem.number',
          textData: 'industry:projects.firstItem.numericData.secondItem.text',
        },
      ],
    },
    {
      images: projects_2,
      imgAlt: 'industry:imgAlt.projects_2',
      heading: 'industry:projects.secondItem.heading',
      text: 'industry:projects.secondItem.text',
      className: 'second-item',
      direction: 'reverse',
      numericData: [
        {
          numberData: 'industry:projects.secondItem.numericData.firstItem.number',
          textData: 'industry:projects.secondItem.numericData.firstItem.text',
        },
        {
          numberData: 'industry:projects.secondItem.numericData.secondItem.number',
          textData: 'industry:projects.secondItem.numericData.secondItem.text',
        },
      ],
    },
    {
      images: projects_3,
      imgAlt: 'industry:imgAlt.projects_3',
      heading: 'industry:projects.thirdItem.heading',
      text: 'industry:projects.thirdItem.text',
      className: 'third-item',
      numericData: [
        {
          numberData: 'industry:projects.thirdItem.numericData.firstItem.number',
          textData: 'industry:projects.thirdItem.numericData.firstItem.text',
        },
        {
          numberData: 'industry:projects.thirdItem.numericData.secondItem.number',
          textData: 'industry:projects.thirdItem.numericData.secondItem.text',
        },
      ],
    },
  ],
}
