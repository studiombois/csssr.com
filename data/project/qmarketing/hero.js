const heroImages = require.context('../../../public/images/projects/qmarketing/hero?csssr-images')

export default {
  images: heroImages,
  heading: (t) => t.project.qmarketing.hero.title,
  link: (t) => t.project.qmarketing.hero.link,
  subHeading: (t) => t.project.qmarketing.hero.subTitle,
  text: [(t) => t.project.qmarketing.hero.text.firstParagraph],
  imgAlt: (t) => t.project.qmarketing.hero.imgAlt,
}
