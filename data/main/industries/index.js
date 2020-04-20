import { fintechImages, fintechImagesHovered } from './fintech'
import { eCommerceImages, eCommerceImagesHovered } from './eCommerce'
import { informationImages, informationImagesHovered } from './information'
import { mediaAndMarketingImages, mediaAndMarketingImagesHovered } from './mediaAndMarketing'

export default [
  {
    id: 'fintech',
    title: 'main:industries.fintech.title',
    description: 'main:industries.fintech.description',
    href: 'fintech',
    images: fintechImages,
    imagesHovered: fintechImagesHovered,
    fallback: fintechImages['desktop.l'].png,
  },
  {
    id: 'eCommerce',
    title: 'main:industries.eCommerce.title',
    description: 'main:industries.eCommerce.description',
    href: 'ecommerce',
    images: eCommerceImages,
    imagesHovered: eCommerceImagesHovered,
    fallback: eCommerceImages['desktop.l'].png,
  },
  {
    id: 'information',
    title: 'main:industries.information.title',
    description: 'main:industries.information.description',
    href: 'information-technology',
    images: informationImages,
    imagesHovered: informationImagesHovered,
    fallback: informationImages['desktop.l'].png,
  },
  {
    id: 'mediaAndMarketing',
    title: 'main:industries.mediaAndMarketing.title',
    description: 'main:industries.mediaAndMarketing.description',
    href: 'media-and-marketing',
    images: mediaAndMarketingImages,
    imagesHovered: mediaAndMarketingImagesHovered,
    fallback: mediaAndMarketingImages['desktop.l'].png,
  },
]
