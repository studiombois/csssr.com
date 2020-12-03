const outsourcingImages = require.context(
  '../../public/images/main/services/normal/outsourcing?csssr-images',
)
const outsourcingImagesHovered = require.context(
  '../../public/images/main/services/normal/outsourcing-hovered?csssr-images',
)

const backendImages = require.context(
  '../../public/images/main/services/normal/backend?csssr-images',
)
const backendImagesHovered = require.context(
  '../../public/images/main/services/normal/backend-hovered?csssr-images',
)

const mvpImages = require.context('../../public/images/main/services/normal/mvp?csssr-images')
const mvpImagesHovered = require.context(
  '../../public/images/main/services/normal/mvp-hovered?csssr-images',
)

const designImages = require.context('../../public/images/main/services/normal/design?csssr-images')
const designImagesHovered = require.context(
  '../../public/images/main/services/normal/design-hovered?csssr-images',
)

const services = [
  {
    id: 'outsourcing',
    href: 'outsourcing-front-end',
    images: {
      default: outsourcingImages,
      hovered: outsourcingImagesHovered,
    },
  },
  {
    id: 'backend',
    href: 'back-end-and-devops',
    images: {
      default: backendImages,
      hovered: backendImagesHovered,
    },
  },
  {
    id: 'mvp',
    href: 'mvp-development',
    images: {
      default: mvpImages,
      hovered: mvpImagesHovered,
    },
  },
  {
    id: 'design',
    href: 'design',
    images: {
      default: designImages,
      hovered: designImagesHovered,
    },
  },
]

export const servicesByLng = {
  en: services,
  ru: services.filter(({ id }) => id !== 'design'),
}

export default services
