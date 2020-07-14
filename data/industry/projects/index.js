import projects_1 from './projects_1'
import projects_2 from './projects_2'

export const informationTechnologyProjects = {
  heading: (t) => t.industry.projects.heading,
  projectsItems: [
    {
      images: projects_1,
      id: 'GazpromNeft',
      imgAlt: (t) => t.industry.imgAlt.projects_1,
      heading: (t) => t.industry.projects.informationTechnologyPage.firstItem.heading,
      text: (t) => t.industry.projects.informationTechnologyPage.firstItem.text,
      className: 'first-item',
      numericData: [
        {
          numberData: (t) =>
            t.industry.projects.informationTechnologyPage.firstItem.numericData.firstItem.number,
          textData: (t) =>
            t.industry.projects.informationTechnologyPage.firstItem.numericData.firstItem.text,
        },
        {
          numberData: (t) =>
            t.industry.projects.informationTechnologyPage.firstItem.numericData.secondItem.number,
          textData: (t) =>
            t.industry.projects.informationTechnologyPage.firstItem.numericData.secondItem.text,
        },
      ],
      button: {
        title: (t) => t.industry.projects.informationTechnologyPage.firstItem.button.title,
        href: (t) => t.industry.projects.informationTechnologyPage.firstItem.button.href,
      },
    },
    {
      id: 'S7Airlines',
      images: projects_2,
      imgAlt: (t) => t.industry.imgAlt.projects_2,
      heading: (t) => t.industry.projects.informationTechnologyPage.secondItem.heading,
      text: (t) => t.industry.projects.informationTechnologyPage.secondItem.text,
      className: 'second-item',
      direction: 'reverse',
      numericData: [
        {
          numberData: (t) =>
            t.industry.projects.informationTechnologyPage.secondItem.numericData.firstItem.number,
          textData: (t) =>
            t.industry.projects.informationTechnologyPage.secondItem.numericData.firstItem.text,
        },
        {
          numberData: (t) =>
            t.industry.projects.informationTechnologyPage.secondItem.numericData.secondItem.number,
          textData: (t) =>
            t.industry.projects.informationTechnologyPage.secondItem.numericData.secondItem.text,
        },
      ],
      button: {
        title: (t) => t.industry.projects.informationTechnologyPage.secondItem.button.title,
        href: (t) => t.industry.projects.informationTechnologyPage.secondItem.button.href,
      },
    },
  ],
}
