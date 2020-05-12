export default {
  heading: (t) => t.project.s7airlines.techStack.title,
  techList: [
    {
      name: (t) => t.project.s7airlines.techStack.techList.firstItem,
    },
    {
      name: (t) => t.project.s7airlines.techStack.techList.secondItem,
    },
    {
      name: (t) => t.project.s7airlines.techStack.techList.thirdItem,
    },
    {
      name: (t) => t.project.s7airlines.techStack.techList.fourthItem,
    },
    {
      name: (t) => t.project.s7airlines.techStack.techList.fifthItem,
    },
  ],
  numericData: {
    duration: {
      number: (t) => t.project.s7airlines.techStack.numericData.duration.number,
      text: (t) => t.project.s7airlines.techStack.numericData.duration.text,
    },
    projectTeam: {
      number: (t) => t.project.s7airlines.techStack.numericData.projectTeam.number,
      text: (t) => t.project.s7airlines.techStack.numericData.projectTeam.text,
    },
  },
}
