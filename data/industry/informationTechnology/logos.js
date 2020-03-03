import logos_desktop_l from '../../../static/images/industry/information-technology/desktop.l/logos.png?responsive'
import logos_desktop_m from '../../../static/images/industry/information-technology/desktop.m/logos.png?responsive'
import logos_desktop_s from '../../../static/images/industry/information-technology/desktop.s/logos.png?responsive'
import logos_tablet_all from '../../../static/images/industry/information-technology/tablet.all/logos.png?responsive'
import logos_mobile_all from '../../../static/images/industry/information-technology/mobile.all/logos.png?responsive'

import logos_desktop_l_webp from '../../../static/images/industry/information-technology/desktop.l/logos.png?responsive_and_webp'
import logos_desktop_m_webp from '../../../static/images/industry/information-technology/desktop.m/logos.png?responsive_and_webp'
import logos_desktop_s_webp from '../../../static/images/industry/information-technology/desktop.s/logos.png?responsive_and_webp'
import logos_tablet_all_webp from '../../../static/images/industry/information-technology/tablet.all/logos.png?responsive_and_webp'
import logos_mobile_all_webp from '../../../static/images/industry/information-technology/mobile.all/logos.png?responsive_and_webp'

const ourClientsImages = {
  'desktop.l': { png: logos_desktop_l, webp: logos_desktop_l_webp },
  'desktop.m': { png: logos_desktop_m, webp: logos_desktop_m_webp },
  'desktop.s': { png: logos_desktop_s, webp: logos_desktop_s_webp },
  'tablet.all': { png: logos_tablet_all, webp: logos_tablet_all_webp },
  'mobile.all': { png: logos_mobile_all, webp: logos_mobile_all_webp },
}

export default {
  heading: 'industry:ourClients.title',
  images: ourClientsImages,
  altImg: 'industry:imgAlt.ourClients',
}
