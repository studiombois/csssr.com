import projects_1 from './projects_1'
import projects_2 from './projects_2'

export const informationTechnologyProjects = {
  heading: 'industry:projects.heading',
  projectsItems: [
    {
      images: projects_1,
      imgAlt: 'industry:imgAlt.projects_1',
      heading: 'industry:projects.informationTechnologyPage.firstItem.heading',
      text: 'industry:projects.informationTechnologyPage.firstItem.text',
      className: 'first-item',
      numericData: [
        {
          numberData:
            'industry:projects.informationTechnologyPage.firstItem.numericData.firstItem.number',
          textData:
            'industry:projects.informationTechnologyPage.firstItem.numericData.firstItem.text',
        },
        {
          numberData:
            'industry:projects.informationTechnologyPage.firstItem.numericData.secondItem.number',
          textData:
            'industry:projects.informationTechnologyPage.firstItem.numericData.secondItem.text',
        },
      ],
      button: {
        title: 'industry:projects.informationTechnologyPage.firstItem.button.title',
        href: 'industry:projects.informationTechnologyPage.firstItem.button.href',
      },
    },
    {
      images: projects_2,
      imgAlt: 'industry:imgAlt.projects_2',
      heading: 'industry:projects.informationTechnologyPage.secondItem.heading',
      text: 'industry:projects.informationTechnologyPage.secondItem.text',
      className: 'second-item',
      direction: 'reverse',
      numericData: [
        {
          numberData:
            'industry:projects.informationTechnologyPage.secondItem.numericData.firstItem.number',
          textData:
            'industry:projects.informationTechnologyPage.secondItem.numericData.firstItem.text',
        },
        {
          numberData:
            'industry:projects.informationTechnologyPage.secondItem.numericData.secondItem.number',
          textData:
            'industry:projects.informationTechnologyPage.secondItem.numericData.secondItem.text',
        },
      ],
      button: {
        title: 'industry:projects.informationTechnologyPage.secondItem.button.title',
        href: 'industry:projects.informationTechnologyPage.secondItem.button.href',
      },
    },
  ],
}
