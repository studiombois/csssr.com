import rocket_desktop_l from '../../static/images/express/desktop.l/rocket.png?responsive'
import rocket_desktop_m from '../../static/images/express/desktop.m/rocket.png?responsive'
import rocket_desktop_s from '../../static/images/express/desktop.s/rocket.png?responsive'
import rocket_tablet_all from '../../static/images/express/tablet.all/rocket.png?responsive'
import rocket_mobile_all from '../../static/images/express/mobile.all/rocket.png?responsive'

import rocket_desktop_l_webp from '../../static/images/express/desktop.l/rocket.png?responsive_and_webp'
import rocket_desktop_m_webp from '../../static/images/express/desktop.m/rocket.png?responsive_and_webp'
import rocket_desktop_s_webp from '../../static/images/express/desktop.s/rocket.png?responsive_and_webp'
import rocket_tablet_all_webp from '../../static/images/express/tablet.all/rocket.png?responsive_and_webp'
import rocket_mobile_all_webp from '../../static/images/express/mobile.all/rocket.png?responsive_and_webp'

const rocketImages = {
  'desktop.l': { png: rocket_desktop_l, webp: rocket_desktop_l_webp },
  'desktop.m': { png: rocket_desktop_m, webp: rocket_desktop_m_webp },
  'desktop.s': { png: rocket_desktop_s, webp: rocket_desktop_s_webp },
  'tablet.all': { png: rocket_tablet_all, webp: rocket_tablet_all_webp },
  'mobile.all': { png: rocket_mobile_all, webp: rocket_mobile_all_webp },
}

export default {
  images: rocketImages,
  imgAlt: 'express:imgAlt.rocket',
}
