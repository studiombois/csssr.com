const greetingImages = require.context(
  '../../../public/images/industry/ecommerce/greeting?csssr-images',
)

export default {
  images: greetingImages,
  heading: (t) => t.industry.greeting.ecommerce.title,
  text: (t) => t.industry.greeting.ecommerce.paragraph,
  button: (t) => t.industry.greeting.ecommerce.button,
  imgAlt: (t) => t.industry.greeting.ecommerce.imgAlt,
}
