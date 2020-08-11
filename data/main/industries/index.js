import { fintechImages, fintechImagesHovered } from './fintech'
import { eCommerceImages, eCommerceImagesHovered } from './eCommerce'
import { informationImages, informationImagesHovered } from './information'
import { mediaAndMarketingImages, mediaAndMarketingImagesHovered } from './mediaAndMarketing'

export default [
  {
    id: 'fintech',
    testId: 'Outsourcing:link:fintech',
    title: (t) => t.main.industries.fintech.title,
    description: (t) => t.main.industries.fintech.description,
    href: 'fintech',
    images: fintechImages,
    imagesHovered: fintechImagesHovered,
    fallback: fintechImages['desktop.l'].png,
  },
  {
    id: 'eCommerce',
    testId: 'Outsourcing:link:eCommerce',
    title: (t) => t.main.industries.eCommerce.title,
    description: (t) => t.main.industries.eCommerce.description,
    href: 'ecommerce',
    images: eCommerceImages,
    imagesHovered: eCommerceImagesHovered,
    fallback: eCommerceImages['desktop.l'].png,
  },
  {
    id: 'information',
    testId: 'Outsourcing:link:information',
    title: (t) => t.main.industries.information.title,
    description: (t) => t.main.industries.information.description,
    href: 'information-technology',
    images: informationImages,
    imagesHovered: informationImagesHovered,
    fallback: informationImages['desktop.l'].png,
  },
  {
    id: 'mediaAndMarketing',
    testId: 'Outsourcing:link:mediaAndMarketing',
    title: (t) => t.main.industries.mediaAndMarketing.title,
    description: (t) => t.main.industries.mediaAndMarketing.description,
    href: 'media-and-marketing',
    images: mediaAndMarketingImages,
    imagesHovered: mediaAndMarketingImagesHovered,
    fallback: mediaAndMarketingImages['desktop.l'].png,
  },
]
