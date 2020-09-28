const heroImages = require.context('../../../public/images/projects/flant/hero?csssr-images')
export default {
  images: heroImages,
  heading: (t) => t.project.flant.hero.title,
  link: (t) => t.project.flant.hero.link,
  subHeading: (t) => t.project.flant.hero.subTitle,
  text: [(t) => t.project.flant.hero.text.firstParagraph],
  imgAlt: (t) => t.project.flant.hero.imgAlt,
}
