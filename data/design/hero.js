const heroImages = require.context('../../public/images/design/hero?csssr-images')

export default {
  images: heroImages,
  imgAlt: (t) => t.design.hero.imgAlt,
  heading: (t) => t.design.hero.heading,
  text: (t) => t.design.hero.text,
}
