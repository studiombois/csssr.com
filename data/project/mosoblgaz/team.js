const teamImages = require.context('../../../public/images/project/common-pics/team?csssr-images')

export default {
  images: teamImages,
  heading: (t) => t.project.mosoblgaz.team.title,
  teamItems: [
    {
      number: (t) => t.project.mosoblgaz.team.numberList.firstItem,
      text: (t) => t.project.mosoblgaz.team.textList.firstItem,
      id: 'manager',
    },
    {
      number: (t) => t.project.mosoblgaz.team.numberList.secondItem,
      text: (t) => t.project.mosoblgaz.team.textList.secondItem,
      id: 'manager',
    },
    {
      number: (t) => t.project.mosoblgaz.team.numberList.thirdItem,
      text: (t) => t.project.mosoblgaz.team.textList.thirdItem,
      id: 'dev',
    },
    {
      number: (t) => t.project.mosoblgaz.team.numberList.fourthItem,
      text: (t) => t.project.mosoblgaz.team.textList.fourthItem,
      id: 'dev',
    },
    {
      number: (t) => t.project.mosoblgaz.team.numberList.fifthItem,
      text: (t) => t.project.mosoblgaz.team.textList.fifthItem,
      id: 'qa',
    },
  ],
  imgAlt: (t) => t.project.mosoblgaz.team.imgAlt,
}
