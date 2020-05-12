import facts_desktop_l from '../../static/images/industry/common-pics/desktop.l/facts.png?responsive'
import facts_desktop_m from '../../static/images/industry/common-pics/desktop.m/facts.png?responsive'
import facts_desktop_s from '../../static/images/industry/common-pics/desktop.s/facts.png?responsive'
import facts_tablet_all from '../../static/images/industry/common-pics/tablet.all/facts.png?responsive'
import facts_mobile_all from '../../static/images/industry/common-pics/mobile.all/facts.png?responsive'

import facts_desktop_l_webp from '../../static/images/industry/common-pics/desktop.l/facts.png?responsive_and_webp'
import facts_desktop_m_webp from '../../static/images/industry/common-pics/desktop.m/facts.png?responsive_and_webp'
import facts_desktop_s_webp from '../../static/images/industry/common-pics/desktop.s/facts.png?responsive_and_webp'
import facts_tablet_all_webp from '../../static/images/industry/common-pics/tablet.all/facts.png?responsive_and_webp'
import facts_mobile_all_webp from '../../static/images/industry/common-pics/mobile.all/facts.png?responsive_and_webp'

const factsImages = {
  'desktop.l': { png: facts_desktop_l, webp: facts_desktop_l_webp },
  'desktop.m': { png: facts_desktop_m, webp: facts_desktop_m_webp },
  'desktop.s': { png: facts_desktop_s, webp: facts_desktop_s_webp },
  'tablet.all': { png: facts_tablet_all, webp: facts_tablet_all_webp },
  'mobile.all': { png: facts_mobile_all, webp: facts_mobile_all_webp },
}

export default {
  heading: (t) => t.industry.facts.heading,
  subHeading: (t) => t.industry.facts.subHeading,
  images: factsImages,
  imgAlt: (t) => t.industry.imgAlt.facts,
  factItems: [
    {
      number: (t) => t.industry.facts.firstItem.number,
      text: (t) => t.industry.facts.firstItem.text,
      className: 'first-item',
    },
    {
      number: (t) => t.industry.facts.secondItem.number,
      text: (t) => t.industry.facts.secondItem.text,
      className: 'second-item',
    },
    {
      number: (t) => t.industry.facts.thirdItem.number,
      text: (t) => t.industry.facts.thirdItem.text,
      className: 'third-item',
    },
    {
      number: (t) => t.industry.facts.fourthItem.number,
      text: (t) => t.industry.facts.fourthItem.text,
      className: 'fourth-item',
    },
  ],
}
