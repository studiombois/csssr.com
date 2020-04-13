import projects_1 from './projects_1'
import projects_2 from './projects_2'

export default {
  heading: 'industry:projects.heading',
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
      button: {
        title: 'industry:projects.firstItem.button.title',
        href: 'industry:projects.firstItem.button.href'
      }
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
      button: {
        title: 'industry:projects.secondItem.button.title',
        href: 'industry:projects.secondItem.button.href'
      }
    }
  ]
}