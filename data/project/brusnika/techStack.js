export default {
  heading: (t) => t.project.brusnika.techStack.title,
  techList: [
    {
      name: (t) => t.project.brusnika.techStack.techList.firstItem,
    },
    {
      name: (t) => t.project.brusnika.techStack.techList.secondItem,
    },
    {
      name: (t) => t.project.brusnika.techStack.techList.thirdItem,
    },
    {
      name: (t) => t.project.brusnika.techStack.techList.fourthItem,
    },
    {
      name: (t) => t.project.brusnika.techStack.techList.fifthItem,
    },
  ],
  numericData: {
    duration: {
      number: (t) => t.project.brusnika.techStack.numericData.duration.number,
      text: (t) => t.project.brusnika.techStack.numericData.duration.text,
    },
    projectTeam: {
      number: (t) => t.project.brusnika.techStack.numericData.projectTeam.number,
      text: (t) => t.project.brusnika.techStack.numericData.projectTeam.text,
    },
  },
}
