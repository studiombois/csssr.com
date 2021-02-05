const teamImages = require.context('../../../public/images/project/common-pics/team?csssr-images')

export default {
  images: teamImages,
  heading: (t) => t.project.s7airlines.team.title,
  teamItems: [
    {
      number: (t) => t.project.s7airlines.team.numberList.firstItem,
      text: (t) => t.project.s7airlines.team.textList.firstItem,
      id: 'manager',
    },
    {
      number: (t) => t.project.s7airlines.team.numberList.secondItem,
      text: (t) => t.project.s7airlines.team.textList.secondItem,
      id: 'manager',
    },
    {
      number: (t) => t.project.s7airlines.team.numberList.thirdItem,
      text: (t) => t.project.s7airlines.team.textList.thirdItem,
      id: 'dev',
      withMargin: true,
    },
    {
      number: (t) => t.project.s7airlines.team.numberList.fourthItem,
      text: (t) => t.project.s7airlines.team.textList.fourthItem,
      id: 'dev',
    },
    {
      number: (t) => t.project.s7airlines.team.numberList.fifthItem,
      text: (t) => t.project.s7airlines.team.textList.fifthItem,
      id: 'dev',
    },
    {
      number: (t) => t.project.s7airlines.team.numberList.sixthItem,
      text: (t) => t.project.s7airlines.team.textList.sixthItem,
      id: 'qa',
      withMargin: true,
    },
  ],
  imgAlt: (t) => t.project.s7airlines.team.imgAlt,
}
