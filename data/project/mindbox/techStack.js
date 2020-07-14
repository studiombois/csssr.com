export default {
  heading: (t) => t.project.mindbox.techStack.title,
  techList: [
    {
      name: (t) => t.project.mindbox.techStack.techList.firstItem,
    },
    {
      name: (t) => t.project.mindbox.techStack.techList.secondItem,
    },
  ],
  numericData: {
    duration: {
      number: (t) => t.project.mindbox.techStack.numericData.duration.number,
      text: (t) => t.project.mindbox.techStack.numericData.duration.text,
    },
    projectTeam: {
      number: (t) => t.project.mindbox.techStack.numericData.projectTeam.number,
      text: (t) => t.project.mindbox.techStack.numericData.projectTeam.text,
    },
  },
}
