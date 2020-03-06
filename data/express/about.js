import aboutUs_desktop_l from '../../static/images/express/desktop.l/about_us.png?responsive'
import aboutUs_desktop_m from '../../static/images/express/desktop.m/about_us.png?responsive'
import aboutUs_desktop_s from '../../static/images/express/desktop.s/about_us.png?responsive'
import aboutUs_tablet_all from '../../static/images/express/tablet.all/about_us.png?responsive'
import aboutUs_mobile_all from '../../static/images/express/mobile.all/about_us.png?responsive'

import aboutUs_desktop_l_webp from '../../static/images/express/desktop.l/about_us.png?responsive_and_webp'
import aboutUs_desktop_m_webp from '../../static/images/express/desktop.m/about_us.png?responsive_and_webp'
import aboutUs_desktop_s_webp from '../../static/images/express/desktop.s/about_us.png?responsive_and_webp'
import aboutUs_tablet_all_webp from '../../static/images/express/tablet.all/about_us.png?responsive_and_webp'
import aboutUs_mobile_all_webp from '../../static/images/express/mobile.all/about_us.png?responsive_and_webp'

const aboutUsImages = {
  'desktop.l': { png: aboutUs_desktop_l, webp: aboutUs_desktop_l_webp },
  'desktop.m': { png: aboutUs_desktop_m, webp: aboutUs_desktop_m_webp },
  'desktop.s': { png: aboutUs_desktop_s, webp: aboutUs_desktop_s_webp },
  'tablet.all': { png: aboutUs_tablet_all, webp: aboutUs_tablet_all_webp },
  'mobile.all': { png: aboutUs_mobile_all, webp: aboutUs_mobile_all_webp },
}

export default {
  images: aboutUsImages,
  imgAlt: 'express:imgAlt.aboutUs',
}
