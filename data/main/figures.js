import square from '../../static/images/main/square.png?responsive'
import square_webp from '../../static/images/main/square.png?responsive_and_webp'

import triangle from '../../static/images/main/triangle.png?responsive'
import triangle_webp from '../../static/images/main/triangle.png?responsive_and_webp'

import circle from '../../static/images/main/circle.png?responsive'
import circle_webp from '../../static/images/main/circle.png?responsive_and_webp'

export default [
  {
    name: 'square',
    images: { png: square, webp: square_webp },
    fallback: square,
  },
  {
    name: 'triangle',
    images: { png: triangle, webp: triangle_webp },
    fallback: triangle,
  },
  {
    name: 'circle',
    images: { png: circle, webp: circle_webp },
    fallback: circle,
  },
]
