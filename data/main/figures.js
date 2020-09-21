const square = require.context('../../public/images/main/figures/square?csssr-images')
const triangle = require.context('../../public/images/main/figures/triangle?csssr-images')
const circle = require.context('../../public/images/main/figures/circle?csssr-images')
const arc = require.context('../../public/images/main/figures/arc?csssr-images')

export default {
  figures_en: [
    {
      name: 'square',
      language: 'en',
      images: square,
    },
    {
      name: 'triangle',
      language: 'en',
      images: triangle,
    },
    {
      name: 'circle',
      language: 'en',
      images: circle,
    },
    {
      name: 'arc',
      language: 'en',
      images: arc,
    },
  ],
  figures_ru: [
    {
      name: 'square',
      language: 'ru',
      images: square,
    },
    {
      name: 'circle',
      language: 'ru',
      images: circle,
    },
    {
      name: 'arc',
      language: 'ru',
      images: arc,
    },
  ],
}
