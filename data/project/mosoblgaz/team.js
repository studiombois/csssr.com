const teamImages = require.context('../../../public/images/projects/common-pics/team?csssr-images')

export default {
  images: teamImages,
  heading: (t) => t.project.mosoblgaz.team.title,
  teamItems: [
    {
      number: (t) => t.project.mosoblgaz.team.numberList.firstItem,
      text: (t) => t.project.mosoblgaz.team.textList.firstItem,
    },
    {
      number: (t) => t.project.mosoblgaz.team.numberList.secondItem,
      text: (t) => t.project.mosoblgaz.team.textList.secondItem,
    },
    {
      number: (t) => t.project.mosoblgaz.team.numberList.thirdItem,
      text: (t) => t.project.mosoblgaz.team.textList.thirdItem,
    },
    {
      number: (t) => t.project.mosoblgaz.team.numberList.fourthItem,
      text: (t) => t.project.mosoblgaz.team.textList.fourthItem,
    },
  ],
  imgAlt: (t) => t.project.mosoblgaz.team.imgAlt,
}
