export default {
  heading: (t) => t.project.mosoblgaz.techStack.title,
  techList: [
    {
      name: (t) => t.project.mosoblgaz.techStack.techList.firstItem,
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
