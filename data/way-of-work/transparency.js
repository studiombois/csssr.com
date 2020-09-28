const highlightImages = require.context(
  '../../public/images/way-of-work/transparency/highlight?csssr-images',
)

const squareImages = require.context(
  '../../public/images/way-of-work/transparency/square?csssr-images',
)

const circleImages = require.context(
  '../../public/images/way-of-work/transparency/circle?csssr-images',
)

const arcImages = require.context('../../public/images/way-of-work/transparency/arc?csssr-images')

const triangleImages = require.context(
  '../../public/images/way-of-work/transparency/triangle?csssr-images',
)

const list = [
  {
    id: 'square',
    label: (t) => t.wayOfWork.transparency.square,
  },
  {
    id: 'circle',
    label: (t) => t.wayOfWork.transparency.circle,
  },
  {
    id: 'arc',
    label: (t) => t.wayOfWork.transparency.arc,
  },
  {
    id: 'triangle',
    label: (t) => t.wayOfWork.transparency.triangle,
  },
]

export { list, highlightImages, squareImages, circleImages, arcImages, triangleImages }
