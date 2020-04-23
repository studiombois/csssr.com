import hero_desktop_l from '../../../static/images/project/gazprom-neft/desktop.l/hero.png?responsive'
import hero_desktop_m from '../../../static/images/project/gazprom-neft/desktop.m/hero.png?responsive'
import hero_desktop_s from '../../../static/images/project/gazprom-neft/desktop.s/hero.png?responsive'
import hero_tablet_all from '../../../static/images/project/gazprom-neft/tablet.all/hero.png?responsive'
import hero_mobile_all from '../../../static/images/project/gazprom-neft/mobile.all/hero.png?responsive'

import hero_desktop_l_webp from '../../../static/images/project/gazprom-neft/desktop.l/hero.png?responsive_and_webp'
import hero_desktop_m_webp from '../../../static/images/project/gazprom-neft/desktop.m/hero.png?responsive_and_webp'
import hero_desktop_s_webp from '../../../static/images/project/gazprom-neft/desktop.s/hero.png?responsive_and_webp'
import hero_tablet_all_webp from '../../../static/images/project/gazprom-neft/tablet.all/hero.png?responsive_and_webp'
import hero_mobile_all_webp from '../../../static/images/project/gazprom-neft/mobile.all/hero.png?responsive_and_webp'

const heroImages = {
  'desktop.l': { png: hero_desktop_l, webp: hero_desktop_l_webp },
  'desktop.m': { png: hero_desktop_m, webp: hero_desktop_m_webp },
  'desktop.s': { png: hero_desktop_s, webp: hero_desktop_s_webp },
  'tablet.all': { png: hero_tablet_all, webp: hero_tablet_all_webp },
  'mobile.all': { png: hero_mobile_all, webp: hero_mobile_all_webp },
}

export default {
  images: heroImages,
  heading: 'project:gazpromNeft.hero.title',
  link: 'project:gazpromNeft.hero.link',
  subHeading: 'project:gazpromNeft.hero.subTitle',
  text: [
    'project:gazpromNeft.hero.text.firstParagraph',
    'project:gazpromNeft.hero.text.secondParagraph',
    'project:gazpromNeft.hero.text.thirdParagraph'
  ],
  imgAlt: 'project:gazpromNeft.hero.imgAlt',
}
