export default {
  heading: (t) => t.project.flant.techStack.title,
  techList: [
    {
      name: (t) => t.project.flant.techStack.techList.firstItem,
    },
    {
      name: (t) => t.project.flant.techStack.techList.secondItem,
    },
    {
      name: (t) => t.project.flant.techStack.techList.thirdItem,
    },
  ],
  numericData: {
    duration: {
      number: (t) => t.project.flant.techStack.numericData.duration.number,
      text: (t) => t.project.flant.techStack.numericData.duration.text,
    },
    projectTeam: {
      number: (t) => t.project.flant.techStack.numericData.projectTeam.number,
      text: (t) => t.project.flant.techStack.numericData.projectTeam.text,
    },
  },
}
