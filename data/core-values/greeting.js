const greetingImages = require.context('../../public/images/core-values/greeting?csssr-images')

export default {
  images: greetingImages,
  heading: (t) => t.coreValues.greeting.title,
  imgAlt: (t) => t.coreValues.imgAlt.greeting,
}
