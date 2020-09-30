const heroImages = require.context('../../../public/images/projects/mindbox/hero?csssr-images')

export default {
  images: heroImages,
  heading: (t) => t.project.mindbox.hero.title,
  link: (t) => t.project.mindbox.hero.link,
  subHeading: (t) => t.project.mindbox.hero.subTitle,
  text: [
    (t) => t.project.mindbox.hero.text.firstParagraph,
    (t) => t.project.mindbox.hero.text.secondParagraph,
  ],
  imgAlt: (t) => t.project.mindbox.hero.imgAlt,
}
