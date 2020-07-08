import hero_desktop_l from '../../../static/images/project/mosoblgaz/desktop.l/hero.png?responsive'
import hero_desktop_m from '../../../static/images/project/mosoblgaz/desktop.m/hero.png?responsive'
import hero_desktop_s from '../../../static/images/project/mosoblgaz/desktop.s/hero.png?responsive'
import hero_tablet_all from '../../../static/images/project/mosoblgaz/tablet.all/hero.png?responsive'
import hero_mobile_all from '../../../static/images/project/mosoblgaz/mobile.all/hero.png?responsive'

import hero_desktop_l_webp from '../../../static/images/project/mosoblgaz/desktop.l/hero.png?responsive_and_webp'
import hero_desktop_m_webp from '../../../static/images/project/mosoblgaz/desktop.m/hero.png?responsive_and_webp'
import hero_desktop_s_webp from '../../../static/images/project/mosoblgaz/desktop.s/hero.png?responsive_and_webp'
import hero_tablet_all_webp from '../../../static/images/project/mosoblgaz/tablet.all/hero.png?responsive_and_webp'
import hero_mobile_all_webp from '../../../static/images/project/mosoblgaz/mobile.all/hero.png?responsive_and_webp'

const heroImages = {
  'desktop.l': { png: hero_desktop_l, webp: hero_desktop_l_webp },
  'desktop.m': { png: hero_desktop_m, webp: hero_desktop_m_webp },
  'desktop.s': { png: hero_desktop_s, webp: hero_desktop_s_webp },
  'tablet.all': { png: hero_tablet_all, webp: hero_tablet_all_webp },
  'mobile.all': { png: hero_mobile_all, webp: hero_mobile_all_webp },
}

export default {
  images: heroImages,
  heading: (t) => t.project.mosoblgaz.hero.title,
  link: (t) => t.project.mosoblgaz.hero.link,
  subHeading: (t) => t.project.mosoblgaz.hero.subTitle,
  text: [(t) => t.project.mosoblgaz.hero.text.firstParagraph],
  imgAlt: (t) => t.project.mosoblgaz.hero.imgAlt,
}
