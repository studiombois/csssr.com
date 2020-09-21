const heroImages = require.context(
  '../../../public/images/service/backend-and-devops/hero?csssr-images',
)

export default {
  images: heroImages,
  heading: (t) => t.backEndAndDevops.hero.title,
  description: (t) => t.backEndAndDevops.hero.description,
  button: (t) => t.backEndAndDevops.hero.button,
  imgAlt: (t) => t.backEndAndDevops.hero.imgAlt,
}
