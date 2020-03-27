import highlight_desktop_all from '../../static/images/transparency/desktop.all/highlight.png?responsive'
import highlight_desktop_all_webp from '../../static/images/transparency/desktop.all/highlight.png?responsive_and_webp'
import highlight_tablet_all from '../../static/images/transparency/tablet.all/highlight.png?responsive'
import highlight_tablet_all_webp from '../../static/images/transparency/tablet.all/highlight.png?responsive_and_webp'

import square_desktop_all from '../../static/images/transparency/desktop.all/square.png?responsive'
import square_desktop_all_webp from '../../static/images/transparency/desktop.all/square.png?responsive_and_webp'
import square_tablet_all from '../../static/images/transparency/tablet.all/square.png?responsive'
import square_tablet_all_webp from '../../static/images/transparency/tablet.all/square.png?responsive_and_webp'

import circle_desktop_all from '../../static/images/transparency/desktop.all/circle.png?responsive'
import circle_desktop_all_webp from '../../static/images/transparency/desktop.all/circle.png?responsive_and_webp'
import circle_tablet_all from '../../static/images/transparency/tablet.all/circle.png?responsive'
import circle_tablet_all_webp from '../../static/images/transparency/tablet.all/circle.png?responsive_and_webp'

import arc_desktop_all from '../../static/images/transparency/desktop.all/arc.png?responsive'
import arc_desktop_all_webp from '../../static/images/transparency/desktop.all/arc.png?responsive_and_webp'
import arc_tablet_all from '../../static/images/transparency/tablet.all/arc.png?responsive'
import arc_tablet_all_webp from '../../static/images/transparency/tablet.all/arc.png?responsive_and_webp'

import triangle_desktop_all from '../../static/images/transparency/desktop.all/triangle.png?responsive'
import triangle_desktop_all_webp from '../../static/images/transparency/desktop.all/triangle.png?responsive_and_webp'
import triangle_tablet_all from '../../static/images/transparency/tablet.all/triangle.png?responsive'
import triangle_tablet_all_webp from '../../static/images/transparency/tablet.all/triangle.png?responsive_and_webp'

const highlightImages = {
  'tablet.all': { png: highlight_tablet_all, webp: highlight_tablet_all_webp },
  'desktop.all': { png: highlight_desktop_all, webp: highlight_desktop_all_webp },
}

const squareImages = {
  'tablet.all': { png: square_tablet_all, webp: square_tablet_all_webp },
  'desktop.all': { png: square_desktop_all, webp: square_desktop_all_webp },
}

const circleImages = {
  'tablet.all': { png: circle_tablet_all, webp: circle_tablet_all_webp },
  'desktop.all': { png: circle_desktop_all, webp: circle_desktop_all_webp },
}

const arcImages = {
  'tablet.all': { png: arc_tablet_all, webp: arc_tablet_all_webp },
  'desktop.all': { png: arc_desktop_all, webp: arc_desktop_all_webp },
}

const triangleImages = {
  'tablet.all': { png: triangle_tablet_all, webp: triangle_tablet_all_webp },
  'desktop.all': { png: triangle_desktop_all, webp: triangle_desktop_all_webp },
}

const list = [
  {
    id: 'square',
    label: 'wayOfWork:transparency.square',
  },
  {
    id: 'circle',
    label: 'wayOfWork:transparency.circle',
  },
  {
    id: 'arc',
    label: 'wayOfWork:transparency.arc',
  },
  {
    id: 'triangle',
    label: 'wayOfWork:transparency.triangle',
  },
]

export { list, highlightImages, squareImages, circleImages, arcImages, triangleImages }
