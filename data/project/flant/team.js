const teamImages = require.context('../../../public/images/project/common-pics/team?csssr-images')

export default {
  images: teamImages,
  heading: (t) => t.project.flant.team.title,
  teamItems: [
    {
      number: (t) => t.project.flant.team.numberList.firstItem,
      text: (t) => t.project.flant.team.textList.firstItem,
      id: 'manager',
    },
    {
      number: (t) => t.project.flant.team.numberList.secondItem,
      text: (t) => t.project.flant.team.textList.secondItem,
      id: 'manager',
    },
    {
      number: (t) => t.project.flant.team.numberList.thirdItem,
      text: (t) => t.project.flant.team.textList.thirdItem,
      id: 'dev',
    },
    {
      number: (t) => t.project.flant.team.numberList.fourthItem,
      text: (t) => t.project.flant.team.textList.fourthItem,
      id: 'dev',
    },
  ],
  imgAlt: (t) => t.project.flant.team.imgAlt,
}
