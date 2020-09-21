const lmsImages = require.context('../../public/images/our-cases/solutions/lms?csssr-images')
const timeTrackerImages = require.context(
  '../../public/images/our-cases/solutions/time-tracker?csssr-images',
)

export default {
  heading: (t) => t.ourCases.solutions.heading,
  solutionsContent: [
    {
      blockClass: 'lms',
      images: lmsImages,
      imgAlt: (t) => t.ourCases.solutions.lms.imgAlt,
      heading: (t) => t.ourCases.solutions.lms.heading,
      text: (t) => t.ourCases.solutions.lms.text,
      link: (t) => t.ourCases.solutions.lms.link,
    },
    {
      blockClass: 'time-tracker',
      images: timeTrackerImages,
      imgAlt: (t) => t.ourCases.solutions.timeTracker.imgAlt,
      heading: (t) => t.ourCases.solutions.timeTracker.heading,
      text: (t) => t.ourCases.solutions.timeTracker.text,
      link: (t) => t.ourCases.solutions.timeTracker.link,
    },
  ],
}
