const logos = require.context('../../public/images/our-projects/hero?csssr-images')

export default {
  images: logos,
  imgAlt: (t) => t.ourCases.hero.imgAlt,
  heading: (t) => t.ourCases.hero.heading,
  text: (t) => t.ourCases.hero.text,
}
