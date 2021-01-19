const teamImages = require.context('../../../public/images/project/common-pics/team?csssr-images')

export default {
  images: teamImages,
  heading: (t) => t.project.gazpromNeft.team.title,
  teamItems: [
    {
      number: (t) => t.project.gazpromNeft.team.numberList.firstItem,
      text: (t) => t.project.gazpromNeft.team.textList.firstItem,
      id: 'manager',
    },
    {
      number: (t) => t.project.gazpromNeft.team.numberList.secondItem,
      text: (t) => t.project.gazpromNeft.team.textList.secondItem,
      id: 'manager',
    },

    {
      number: (t) => t.project.gazpromNeft.team.numberList.fourthItem,
      text: (t) => t.project.gazpromNeft.team.textList.fourthItem,
      id: 'dev',
      withMargin: true,
    },
    {
      number: (t) => t.project.gazpromNeft.team.numberList.fifthItem,
      text: (t) => t.project.gazpromNeft.team.textList.fifthItem,
      id: 'dev',
    },
    {
      number: (t) => t.project.gazpromNeft.team.numberList.sixthItem,
      text: (t) => t.project.gazpromNeft.team.textList.sixthItem,
      id: 'dev',
    },
    {
      number: (t) => t.project.gazpromNeft.team.numberList.thirdItem,
      text: (t) => t.project.gazpromNeft.team.textList.thirdItem,
      id: 'qa',
      withMargin: true,
    },
    {
      number: (t) => t.project.gazpromNeft.team.numberList.seventhItem,
      text: (t) => t.project.gazpromNeft.team.textList.seventhItem,
      id: 'qa',
    },
  ],
  imgAlt: (t) => t.project.gazpromNeft.team.imgAlt,
}
