const lmsImages = require.context('../../public/images/projects/solutions/lms?csssr-images')
const timeTrackerImages = require.context(
  '../../public/images/projects/solutions/time-tracker?csssr-images',
)

export default {
  heading: (t) => t.projects.solutions.heading,
  solutionsContent: [
    {
      externalLink: false,
      blockClass: 'lms',
      images: lmsImages,
      imgAlt: (t) => t.projects.solutions.lms.imgAlt,
      heading: (t) => t.projects.solutions.lms.heading,
      text: (t) => t.projects.solutions.lms.text,
      link: (t) => t.projects.solutions.lms.link,
    },
    {
      externalLink: true,
      blockClass: 'time-tracker',
      images: timeTrackerImages,
      imgAlt: (t) => t.projects.solutions.timeTracker.imgAlt,
      heading: (t) => t.projects.solutions.timeTracker.heading,
      text: (t) => t.projects.solutions.timeTracker.text,
      link: (t) => t.projects.solutions.timeTracker.link,
    },
  ],
}
