const teamImages = require.context('../../../public/images/projects/common-pics/team?csssr-images')

export default {
  images: teamImages,
  heading: (t) => t.project.s7airlines.team.title,
  teamItems: [
    {
      number: (t) => t.project.s7airlines.team.numberList.firstItem,
      text: (t) => t.project.s7airlines.team.textList.firstItem,
    },
    {
      number: (t) => t.project.s7airlines.team.numberList.secondItem,
      text: (t) => t.project.s7airlines.team.textList.secondItem,
    },
    {
      number: (t) => t.project.s7airlines.team.numberList.thirdItem,
      text: (t) => t.project.s7airlines.team.textList.thirdItem,
    },
    {
      number: (t) => t.project.s7airlines.team.numberList.fourthItem,
      text: (t) => t.project.s7airlines.team.textList.fourthItem,
    },
  ],
  imgAlt: (t) => t.project.s7airlines.team.imgAlt,
}
