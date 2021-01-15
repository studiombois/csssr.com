const teamImages = require.context('../../../public/images/project/common-pics/team?csssr-images')

export default {
  images: teamImages,
  heading: (t) => t.project.qmarketing.team.title,
  teamItems: [
    {
      number: (t) => t.project.qmarketing.team.numberList.firstItem,
      text: (t) => t.project.qmarketing.team.textList.firstItem,
      id: 'manager',
    },
    {
      number: (t) => t.project.qmarketing.team.numberList.secondItem,
      text: (t) => t.project.qmarketing.team.textList.secondItem,
      id: 'manager',
    },
    {
      number: (t) => t.project.qmarketing.team.numberList.thirdItem,
      text: (t) => t.project.qmarketing.team.textList.thirdItem,
      id: 'dev',
    },
    {
      number: (t) => t.project.qmarketing.team.numberList.fourthItem,
      text: (t) => t.project.qmarketing.team.textList.fourthItem,
      id: 'dev',
    },
    {
      number: (t) => t.project.qmarketing.team.numberList.fifthItem,
      text: (t) => t.project.qmarketing.team.textList.fifthItem,
      id: 'qa',
    },
  ],
  imgAlt: (t) => t.project.qmarketing.team.imgAlt,
}
