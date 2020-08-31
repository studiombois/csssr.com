const greetingImages = require.context(
  '../../../public/images/industry/fintech/greeting?csssr-images',
)

export default {
  images: greetingImages,
  heading: (t) => t.industry.greeting.fintech.title,
  text: (t) => t.industry.greeting.fintech.paragraph,
  button: (t) => t.industry.greeting.fintech.button,
  imgAlt: (t) => t.industry.greeting.fintech.imgAlt,
}
