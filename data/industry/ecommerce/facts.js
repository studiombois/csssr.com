import facts_desktop_l from '../../../static/images/industry/ecommerce/desktop.l/facts.png?responsive'
import facts_desktop_m from '../../../static/images/industry/ecommerce/desktop.m/facts.png?responsive'
import facts_desktop_s from '../../../static/images/industry/ecommerce/desktop.s/facts.png?responsive'
import facts_tablet_all from '../../../static/images/industry/ecommerce/tablet.all/facts.png?responsive'
import facts_mobile_all from '../../../static/images/industry/ecommerce/mobile.all/facts.png?responsive'

import facts_desktop_l_webp from '../../../static/images/industry/ecommerce/desktop.l/facts.png?responsive_and_webp'
import facts_desktop_m_webp from '../../../static/images/industry/ecommerce/desktop.m/facts.png?responsive_and_webp'
import facts_desktop_s_webp from '../../../static/images/industry/ecommerce/desktop.s/facts.png?responsive_and_webp'
import facts_tablet_all_webp from '../../../static/images/industry/ecommerce/tablet.all/facts.png?responsive_and_webp'
import facts_mobile_all_webp from '../../../static/images/industry/ecommerce/mobile.all/facts.png?responsive_and_webp'

const factsImages = {
  'desktop.l': { png: facts_desktop_l, webp: facts_desktop_l_webp },
  'desktop.m': { png: facts_desktop_m, webp: facts_desktop_m_webp },
  'desktop.s': { png: facts_desktop_s, webp: facts_desktop_s_webp },
  'tablet.all': { png: facts_tablet_all, webp: facts_tablet_all_webp },
  'mobile.all': { png: facts_mobile_all, webp: facts_mobile_all_webp },
}

export default {
  heading: 'ecommerce:facts.heading',
  subHeading: 'ecommerce:facts.subHeading',
  images: factsImages,
  imgAlt: 'ecommerce:imgAlt.facts',
  factItems: [
    {
      number: 'ecommerce:facts.firstItem.number',
      text: 'ecommerce:facts.firstItem.text',
      className: 'first-item',
    },
    {
      number: 'ecommerce:facts.secondItem.number',
      text: 'ecommerce:facts.secondItem.text',
      className: 'second-item',
    },
    {
      number: 'ecommerce:facts.thirdItem.number',
      text: 'ecommerce:facts.thirdItem.text',
      className: 'third-item',
    },
    {
      number: 'ecommerce:facts.fourthItem.number',
      text: 'ecommerce:facts.fourthItem.text',
      className: 'fourth-item',
    },
  ],
}
