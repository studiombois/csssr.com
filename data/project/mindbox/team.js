const teamImages = require.context('../../../public/images/project/common-pics/team?csssr-images')

export default {
  images: teamImages,
  heading: (t) => t.project.mindbox.team.title,
  teamItems: [
    {
      number: (t) => t.project.mindbox.team.numberList.firstItem,
      text: (t) => t.project.mindbox.team.textList.firstItem,
      id: 'manager',
    },
    {
      number: (t) => t.project.mindbox.team.numberList.secondItem,
      text: (t) => t.project.mindbox.team.textList.secondItem,
      id: 'manager',
    },
    {
      number: (t) => t.project.mindbox.team.numberList.thirdItem,
      text: (t) => t.project.mindbox.team.textList.thirdItem,
      id: 'dev',
    },
    {
      number: (t) => t.project.mindbox.team.numberList.fourthItem,
      text: (t) => t.project.mindbox.team.textList.fourthItem,
      id: 'dev',
    },
  ],
  imgAlt: (t) => t.project.mindbox.team.imgAlt,
}
