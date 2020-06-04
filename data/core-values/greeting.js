import greeting_desktop_l from '../../static/images/core-values/desktop.l/greeting.png?responsive'
import greeting_desktop_m from '../../static/images/core-values/desktop.m/greeting.png?responsive'
import greeting_desktop_s from '../../static/images/core-values/desktop.s/greeting.png?responsive'
import greeting_tablet_all from '../../static/images/core-values/tablet.all/greeting.png?responsive'
import greeting_mobile_all from '../../static/images/core-values/mobile.all/greeting.png?responsive'

import greeting_desktop_l_webp from '../../static/images/core-values/desktop.l/greeting.png?responsive_and_webp'
import greeting_desktop_m_webp from '../../static/images/core-values/desktop.m/greeting.png?responsive_and_webp'
import greeting_desktop_s_webp from '../../static/images/core-values/desktop.s/greeting.png?responsive_and_webp'
import greeting_tablet_all_webp from '../../static/images/core-values/tablet.all/greeting.png?responsive_and_webp'
import greeting_mobile_all_webp from '../../static/images/core-values/mobile.all/greeting.png?responsive_and_webp'

const greetingImages = {
  'desktop.l': { png: greeting_desktop_l, webp: greeting_desktop_l_webp },
  'desktop.m': { png: greeting_desktop_m, webp: greeting_desktop_m_webp },
  'desktop.s': { png: greeting_desktop_s, webp: greeting_desktop_s_webp },
  'tablet.all': { png: greeting_tablet_all, webp: greeting_tablet_all_webp },
  'mobile.all': { png: greeting_mobile_all, webp: greeting_mobile_all_webp },
}

export default {
  images: greetingImages,
  heading: (t) => t.coreValues.greeting.title,
  imgAlt: (t) => t.coreValues.imgAlt.greeting,
}
