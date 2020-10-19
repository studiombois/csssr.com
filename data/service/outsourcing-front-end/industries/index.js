const fintechImages = require.context(
  '../../../../public/images/service/outsourcing-front-end/industries/fintech?csssr-images',
)
const fintechImagesHovered = require.context(
  '../../../../public/images/service/outsourcing-front-end/industries/fintech-hovered?csssr-images',
)
const eCommerceImages = require.context(
  '../../../../public/images/service/outsourcing-front-end/industries/eCommerce?csssr-images',
)
const eCommerceImagesHovered = require.context(
  '../../../../public/images/service/outsourcing-front-end/industries/eCommerce-hovered?csssr-images',
)
const informationImages = require.context(
  '../../../../public/images/service/outsourcing-front-end/industries/information?csssr-images',
)
const informationImagesHovered = require.context(
  '../../../../public/images/service/outsourcing-front-end/industries/information-hovered?csssr-images',
)
const mediaAndMarketingImages = require.context(
  '../../../../public/images/service/outsourcing-front-end/industries/mediaAndMarketing?csssr-images',
)
const mediaAndMarketingImagesHovered = require.context(
  '../../../../public/images/service/outsourcing-front-end/industries/mediaAndMarketing-hovered?csssr-images',
)

export default [
  {
    id: 'fintech',
    testId: 'Industries:link:fintech',
    title: (t) => t.outsourcingFrontEnd.industries.fintech.title,
    description: (t) => t.outsourcingFrontEnd.industries.fintech.description,
    alt: (t) => t.outsourcingFrontEnd.imgAlt.fintech,
    href: 'fintech',
    images: fintechImages,
    imagesHovered: fintechImagesHovered,
  },
  {
    id: 'eCommerce',
    testId: 'Industries:link:eCommerce',
    title: (t) => t.outsourcingFrontEnd.industries.eCommerce.title,
    description: (t) => t.outsourcingFrontEnd.industries.eCommerce.description,
    alt: (t) => t.outsourcingFrontEnd.imgAlt.eCommerce,
    href: 'ecommerce',
    images: eCommerceImages,
    imagesHovered: eCommerceImagesHovered,
  },
  {
    id: 'information',
    testId: 'Industries:link:information',
    title: (t) => t.outsourcingFrontEnd.industries.information.title,
    description: (t) => t.outsourcingFrontEnd.industries.information.description,
    alt: (t) => t.outsourcingFrontEnd.imgAlt.information,
    href: 'information-technology',
    images: informationImages,
    imagesHovered: informationImagesHovered,
  },
  {
    id: 'mediaAndMarketing',
    testId: 'Industries:link:mediaAndMarketing',
    title: (t) => t.outsourcingFrontEnd.industries.mediaAndMarketing.title,
    description: (t) => t.outsourcingFrontEnd.industries.mediaAndMarketing.description,
    alt: (t) => t.outsourcingFrontEnd.imgAlt.mediaAndMarketing,
    href: 'media-and-marketing',
    images: mediaAndMarketingImages,
    imagesHovered: mediaAndMarketingImagesHovered,
  },
]
