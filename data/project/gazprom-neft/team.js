const teamImages = require.context('../../../public/images/projects/common-pics/team?csssr-images')

export default {
  images: teamImages,
  heading: (t) => t.project.gazpromNeft.team.title,
  teamItems: [
    {
      number: (t) => t.project.gazpromNeft.team.numberList.firstItem,
      text: (t) => t.project.gazpromNeft.team.textList.firstItem,
    },
    {
      number: (t) => t.project.gazpromNeft.team.numberList.secondItem,
      text: (t) => t.project.gazpromNeft.team.textList.secondItem,
    },
    {
      number: (t) => t.project.gazpromNeft.team.numberList.thirdItem,
      text: (t) => t.project.gazpromNeft.team.textList.thirdItem,
    },
    {
      number: (t) => t.project.gazpromNeft.team.numberList.fourthItem,
      text: (t) => t.project.gazpromNeft.team.textList.fourthItem,
    },
    {
      number: (t) => t.project.gazpromNeft.team.numberList.fifthItem,
      text: (t) => t.project.gazpromNeft.team.textList.fifthItem,
    },
  ],
  imgAlt: (t) => t.project.gazpromNeft.team.imgAlt,
}
