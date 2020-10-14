const logos = require.context('../../public/images/projects/hero?csssr-images')

export default {
  images: logos,
  imgAlt: (t) => t.projects.hero.imgAlt,
  heading: (t) => t.projects.hero.heading,
  text: (t) => t.projects.hero.text,
}
