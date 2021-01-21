const heroImages = require.context('../../../public/images/project/gazprom-neft/hero?csssr-images')

export default {
  images: heroImages,
  tag: (t) => t.project.tag,
  heading: (t) => t.project.gazpromNeft.hero.title,
  text: [(t) => t.project.gazpromNeft.hero.text.firstParagraph],
  imgAlt: (t) => t.project.gazpromNeft.hero.imgAlt,
}
