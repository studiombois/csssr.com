const logosEn = require.context('../../public/images/projects/hero/en?csssr-images')
const logosRu = require.context('../../public/images/projects/hero/ru?csssr-images')

export default {
  imagesEn: logosEn,
  imagesRu: logosRu,
  imgAlt: (t) => t.projects.hero.imgAlt,
  heading: (t) => t.projects.hero.heading,
  text: (t) => t.projects.hero.text,
}
