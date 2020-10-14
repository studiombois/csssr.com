const teamImages = require.context('../../../public/images/project/common-pics/team?csssr-images')

export default {
  images: teamImages,
  heading: (t) => t.project.brusnika.team.title,
  teamItems: [
    {
      number: (t) => t.project.brusnika.team.numberList.firstItem,
      text: (t) => t.project.brusnika.team.textList.firstItem,
    },
  ],
  imgAlt: (t) => t.project.mosoblgaz.team.imgAlt,
}
