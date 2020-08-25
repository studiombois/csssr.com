export default {
  heading: (t) => t.project.qmarketing.techStack.title,
  techList: [
    {
      name: (t) => t.project.qmarketing.techStack.techList.firstItem,
    },
    {
      name: (t) => t.project.qmarketing.techStack.techList.secondItem,
    },
  ],
  numericData: {
    duration: {
      number: (t) => t.project.qmarketing.techStack.numericData.duration.number,
      text: (t) => t.project.qmarketing.techStack.numericData.duration.text,
    },
    projectTeam: {
      number: (t) => t.project.qmarketing.techStack.numericData.projectTeam.number,
      text: (t) => t.project.qmarketing.techStack.numericData.projectTeam.text,
    },
  },
}
