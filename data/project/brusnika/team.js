const teamImages = require.context('../../../public/images/project/common-pics/team?csssr-images')

export default {
  images: teamImages,
  heading: (t) => t.project.brusnika.team.title,
  teamItems: [
    {
      number: (t) => t.project.brusnika.team.numberList.firstItem,
      text: (t) => t.project.brusnika.team.textList.firstItem,
      id: 'manager',
    },
    {
      number: (t) => t.project.brusnika.team.numberList.secondItem,
      text: (t) => t.project.brusnika.team.textList.secondItem,
      id: 'manager',
    },
    {
      number: (t) => t.project.brusnika.team.numberList.thirdItem,
      text: (t) => t.project.brusnika.team.textList.thirdItem,
      id: 'dev',
      withMargin: true,
    },
  ],
  imgAlt: (t) => t.project.mosoblgaz.team.imgAlt,
}
