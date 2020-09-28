const greetingImages = require.context(
  '../../../public/images/industry/media-and-marketing/greeting?csssr-images',
)

export default {
  images: greetingImages,
  heading: (t) => t.industry.greeting.mediaAndMarketing.title,
  text: (t) => t.industry.greeting.mediaAndMarketing.paragraph,
  button: (t) => t.industry.greeting.mediaAndMarketing.button,
  imgAlt: (t) => t.industry.greeting.mediaAndMarketing.imgAlt,
}
