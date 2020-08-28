const fintechImages = require.context('../../../public/images/main/industries/fintech?csssr-images')
const fintechImagesHovered = require.context(
  '../../../public/images/main/industries/fintech-hovered?csssr-images',
)
const eCommerceImages = require.context(
  '../../../public/images/main/industries/eCommerce?csssr-images',
)
const eCommerceImagesHovered = require.context(
  '../../../public/images/main/industries/eCommerce-hovered?csssr-images',
)
const informationImages = require.context(
  '../../../public/images/main/industries/information?csssr-images',
)
const informationImagesHovered = require.context(
  '../../../public/images/main/industries/information-hovered?csssr-images',
)
const mediaAndMarketingImages = require.context(
  '../../../public/images/main/industries/mediaAndMarketing?csssr-images',
)
const mediaAndMarketingImagesHovered = require.context(
  '../../../public/images/main/industries/mediaAndMarketing-hovered?csssr-images',
)

export default [
  {
    id: 'fintech',
    testId: 'Outsourcing:link:fintech',
    title: (t) => t.main.industries.fintech.title,
    description: (t) => t.main.industries.fintech.description,
    href: 'fintech',
    images: fintechImages,
    imagesHovered: fintechImagesHovered,
  },
  {
    id: 'eCommerce',
    testId: 'Outsourcing:link:eCommerce',
    title: (t) => t.main.industries.eCommerce.title,
    description: (t) => t.main.industries.eCommerce.description,
    href: 'ecommerce',
    images: eCommerceImages,
    imagesHovered: eCommerceImagesHovered,
  },
  {
    id: 'information',
    testId: 'Outsourcing:link:information',
    title: (t) => t.main.industries.information.title,
    description: (t) => t.main.industries.information.description,
    href: 'information-technology',
    images: informationImages,
    imagesHovered: informationImagesHovered,
  },
  {
    id: 'mediaAndMarketing',
    testId: 'Outsourcing:link:mediaAndMarketing',
    title: (t) => t.main.industries.mediaAndMarketing.title,
    description: (t) => t.main.industries.mediaAndMarketing.description,
    href: 'media-and-marketing',
    images: mediaAndMarketingImages,
    imagesHovered: mediaAndMarketingImagesHovered,
  },
]
