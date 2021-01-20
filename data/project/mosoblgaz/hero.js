const heroImages = require.context('../../../public/images/project/mosoblgaz/hero?csssr-images')

export default {
  images: heroImages,
  heading: (t) => t.project.mosoblgaz.hero.title,
  link: (t) => t.project.mosoblgaz.hero.link,
  subHeading: (t) => t.project.mosoblgaz.hero.subTitle,
  text: [(t) => t.project.mosoblgaz.hero.text.firstParagraph],
  imgAlt: (t) => t.project.mosoblgaz.hero.imgAlt,
}
