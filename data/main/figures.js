import square from '../../static/images/main/square.png?responsive'
import square_webp from '../../static/images/main/square.png?responsive_and_webp'

import triangle from '../../static/images/main/triangle.png?responsive'
import triangle_webp from '../../static/images/main/triangle.png?responsive_and_webp'

import circle from '../../static/images/main/circle.png?responsive'
import circle_webp from '../../static/images/main/circle.png?responsive_and_webp'

import arc from '../../static/images/main/arc-descktop.png?responsive'
import arc_webp from '../../static/images/main/arc-descktop.png?responsive_and_webp'

export default {
  figures_en: [
    {
      name: 'square',
      language: 'en',
      images: { png: square, webp: square_webp },
      fallback: square,
    },
    {
      name: 'triangle',
      language: 'en',
      images: { png: triangle, webp: triangle_webp },
      fallback: triangle,
    },
    {
      name: 'circle',
      language: 'en',
      images: { png: circle, webp: circle_webp },
      fallback: circle,
    },
    {
      name: 'arc',
      language: 'en',
      images: { png: arc, webp: arc_webp },
      fallback: arc,
    },
  ],
  figures_ru: [
    {
      name: 'square',
      language: 'ru',
      images: { png: square, webp: square_webp },
      fallback: square,
    },
    {
      name: 'circle',
      language: 'ru',
      images: { png: circle, webp: circle_webp },
      fallback: circle,
    },
    {
      name: 'arc',
      language: 'ru',
      images: { png: arc, webp: arc_webp },
      fallback: arc,
    },
  ],
}
