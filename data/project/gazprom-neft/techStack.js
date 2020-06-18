export default {
  heading: (t) => t.project.gazpromNeft.techStack.title,
  techList: [
    {
      name: (t) => t.project.gazpromNeft.techStack.techList.firstItem,
    },
    {
      name: (t) => t.project.gazpromNeft.techStack.techList.secondItem,
    },
    {
      name: (t) => t.project.gazpromNeft.techStack.techList.thirdItem,
    },
  ],
  numericData: {
    duration: {
      number: (t) => t.project.gazpromNeft.techStack.numericData.duration.number,
      text: (t) => t.project.gazpromNeft.techStack.numericData.duration.text,
    },
    projectTeam: {
      number: (t) => t.project.gazpromNeft.techStack.numericData.projectTeam.number,
      text: (t) => t.project.gazpromNeft.techStack.numericData.projectTeam.text,
    },
  },
}
