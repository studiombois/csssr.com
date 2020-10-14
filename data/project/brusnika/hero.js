const heroImages = require.context('../../../public/images/project/brusnika/hero?csssr-images')

export default {
  images: heroImages,
  heading: (t) => t.project.brusnika.hero.title,
  link: (t) => t.project.brusnika.hero.link,
  subHeading: (t) => t.project.brusnika.hero.subTitle,
  text: [(t) => t.project.brusnika.hero.text.firstParagraph],
  imgAlt: (t) => t.project.brusnika.hero.imgAlt,
}
