export default {
  heading: (t) => t.project.mosoblgaz.techStack.title,
  techList: [
    {
      name: (t) => t.project.mosoblgaz.techStack.techList.firstItem,
    },
    {
      name: (t) => t.project.mosoblgaz.techStack.techList.secondItem,
    },
    {
      name: (t) => t.project.mosoblgaz.techStack.techList.thirdItem,
    },
    {
      name: (t) => t.project.mosoblgaz.techStack.techList.fourthItem,
    },
    {
      name: (t) => t.project.mosoblgaz.techStack.techList.fifthItem,
    },
  ],
  numericData: {
    duration: {
      number: (t) => t.project.mosoblgaz.techStack.numericData.duration.number,
      text: (t) => t.project.mosoblgaz.techStack.numericData.duration.text,
    },
    projectTeam: {
      number: (t) => t.project.mosoblgaz.techStack.numericData.projectTeam.number,
      text: (t) => t.project.mosoblgaz.techStack.numericData.projectTeam.text,
    },
  },
}
