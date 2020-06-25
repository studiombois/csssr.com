import bicycle_desktop_l from '../../static/images/express/desktop.l/bicycle.png?responsive'
import bicycle_desktop_m from '../../static/images/express/desktop.m/bicycle.png?responsive'
import bicycle_desktop_s from '../../static/images/express/desktop.s/bicycle.png?responsive'
import bicycle_tablet_all from '../../static/images/express/tablet.all/bicycle.png?responsive'
import bicycle_mobile_all from '../../static/images/express/mobile.all/bicycle.png?responsive'

import bicycle_desktop_l_webp from '../../static/images/express/desktop.l/bicycle.png?responsive_and_webp'
import bicycle_desktop_m_webp from '../../static/images/express/desktop.m/bicycle.png?responsive_and_webp'
import bicycle_desktop_s_webp from '../../static/images/express/desktop.s/bicycle.png?responsive_and_webp'
import bicycle_tablet_all_webp from '../../static/images/express/tablet.all/bicycle.png?responsive_and_webp'
import bicycle_mobile_all_webp from '../../static/images/express/mobile.all/bicycle.png?responsive_and_webp'

const rocketImages = {
  'desktop.l': { png: bicycle_desktop_l, webp: bicycle_desktop_l_webp },
  'desktop.m': { png: bicycle_desktop_m, webp: bicycle_desktop_m_webp },
  'desktop.s': { png: bicycle_desktop_s, webp: bicycle_desktop_s_webp },
  'tablet.all': { png: bicycle_tablet_all, webp: bicycle_tablet_all_webp },
  'mobile.all': { png: bicycle_mobile_all, webp: bicycle_mobile_all_webp },
}

export default {
  images: rocketImages,
  imgAlt: 'express:imgAlt.rocket',
}
