const greetingImages = require.context(
  '../../../public/images/industry/information-technology/greeting?csssr-images',
)

export default {
  images: greetingImages,
  heading: (t) => t.industry.greeting.informationTechnology.title,
  text: (t) => t.industry.greeting.informationTechnology.paragraph,
  button: (t) => t.industry.greeting.informationTechnology.button,
  imgAlt: (t) => t.industry.greeting.informationTechnology.imgAlt,
}
