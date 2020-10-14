const teamImages = require.context('../../../public/images/project/common-pics/team?csssr-images')

export default {
  images: teamImages,
  heading: (t) => t.project.qmarketing.team.title,
  teamItems: [
    {
      number: (t) => t.project.qmarketing.team.numberList.firstItem,
      text: (t) => t.project.qmarketing.team.textList.firstItem,
    },
    {
      number: (t) => t.project.qmarketing.team.numberList.secondItem,
      text: (t) => t.project.qmarketing.team.textList.secondItem,
    },
    {
      number: (t) => t.project.qmarketing.team.numberList.thirdItem,
      text: (t) => t.project.qmarketing.team.textList.thirdItem,
    },
  ],
  imgAlt: (t) => t.project.qmarketing.team.imgAlt,
}
