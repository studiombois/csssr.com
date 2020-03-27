import fintechImages from './fintech'
import eCommerceImages from './eCommerce'
import informationImages from './information'
import mediaAndMarketingImages from './mediaAndMarketing'

export default [
  {
    id: 'fintech',
    title: 'main:industries.fintech.title',
    description: 'main:industries.fintech.description',
    href: 'fintech',
    images: fintechImages,
    fallback: fintechImages['desktop.l'].png,
  },
  {
    id: 'eCommerce',
    title: 'main:industries.eCommerce.title',
    description: 'main:industries.eCommerce.description',
    href: 'ecommerce',
    images: eCommerceImages,
    fallback: eCommerceImages['desktop.l'].png,
  },
  {
    id: 'information',
    title: 'main:industries.information.title',
    description: 'main:industries.information.description',
    href: 'information-technology',
    images: informationImages,
    fallback: informationImages['desktop.l'].png,
  },
  {
    id: 'mediaAndMarketing',
    title: 'main:industries.mediaAndMarketing.title',
    description: 'main:industries.mediaAndMarketing.description',
    href: 'media-and-marketing',
    images: mediaAndMarketingImages,
    fallback: mediaAndMarketingImages['desktop.l'].png,
  },
]
