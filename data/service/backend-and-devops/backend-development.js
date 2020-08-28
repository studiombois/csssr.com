const backEndDevImages = require.context(
  '../../../public/images/service/backend-and-devops/backend-dev?csssr-images',
)

export default {
  images: backEndDevImages,
  heading: (t) => t.backEndAndDevops.backEndDevelopment.title,
  description: (t) => t.backEndAndDevops.backEndDevelopment.description,
  imgAlt: (t) => t.backEndAndDevops.backEndDevelopment.imgAlt,
  whatWeDo: {
    do_title: (t) => t.backEndAndDevops.backEndDevelopment.whatWeDo.title,
    do_description: (t) => t.backEndAndDevops.backEndDevelopment.whatWeDo.description,
    list: [
      {
        title: (t) => t.backEndAndDevops.backEndDevelopment.whatWeDo.list.firstItem.title,
        description: (t) =>
          t.backEndAndDevops.backEndDevelopment.whatWeDo.list.firstItem.description,
      },
      {
        title: (t) => t.backEndAndDevops.backEndDevelopment.whatWeDo.list.secondItem.title,
        description: (t) =>
          t.backEndAndDevops.backEndDevelopment.whatWeDo.list.secondItem.description,
      },
      {
        title: (t) => t.backEndAndDevops.backEndDevelopment.whatWeDo.list.thirdItem.title,
        description: (t) =>
          t.backEndAndDevops.backEndDevelopment.whatWeDo.list.thirdItem.description,
      },
    ],
  },
}
