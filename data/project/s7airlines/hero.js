const heroImages = require.context('../../../public/images/projects/s7-airlines/hero?csssr-images')

export default {
  images: heroImages,
  heading: (t) => t.project.s7airlines.hero.title,
  link: (t) => t.project.s7airlines.hero.link,
  subHeading: (t) => t.project.s7airlines.hero.subTitle,
  text: [
    (t) => t.project.s7airlines.hero.text.firstParagraph,
    (t) => t.project.s7airlines.hero.text.secondParagraph,
  ],
  imgAlt: (t) => t.project.s7airlines.hero.imgAlt,
}
