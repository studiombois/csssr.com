const heroImages = require.context('../../../public/images/projects/gazprom-neft/hero?csssr-images')

export default {
  images: heroImages,
  heading: (t) => t.project.gazpromNeft.hero.title,
  link: (t) => t.project.gazpromNeft.hero.link,
  subHeading: (t) => t.project.gazpromNeft.hero.subTitle,
  text: [
    (t) => t.project.gazpromNeft.hero.text.firstParagraph,
    (t) => t.project.gazpromNeft.hero.text.secondParagraph,
    (t) => t.project.gazpromNeft.hero.text.thirdParagraph,
  ],
  imgAlt: (t) => t.project.gazpromNeft.hero.imgAlt,
}
