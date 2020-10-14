const teamImages = require.context('../../../public/images/project/common-pics/team?csssr-images')

export default {
  images: teamImages,
  heading: (t) => t.project.flant.team.title,
  teamItems: [
    {
      number: (t) => t.project.flant.team.numberList.firstItem,
      text: (t) => t.project.flant.team.textList.firstItem,
    },
    {
      number: (t) => t.project.flant.team.numberList.secondItem,
      text: (t) => t.project.flant.team.textList.secondItem,
    },
  ],
  imgAlt: (t) => t.project.flant.team.imgAlt,
}
