const heroImages = require.context('../../public/images/design-lab/hero?csssr-images')

export default {
  images: heroImages,
  imgAlt: (t) => t.designLab.hero.imgAlt,
  heading: (t) => t.designLab.hero.heading,
  text: (t) => t.designLab.hero.text,
}
