const bannerImage = require.context('../../public/images/main/discount-banner/image?csssr-images')

export default {
  id: 'discount-banner',
  title: (t) => t.main.discountBanner.title,
  titleLink: (t) => t.main.discountBanner.titleLink,
  description: (t) => t.main.discountBanner.description,
  arrowText: (t) => t.main.discountBanner.arrowText,
  imgAlt: 'Banner image',
  images: bannerImage,
}
