import React from 'react'
import Layout from '../Layout'
import withI18next from '../../utils/withI18next'
import translate from '../../utils/translate-wrapper'

import Greeting from './Greeting'
import OurClients from './OurClients'

import greeting_desktop_all from '../../static/images/industry/ecommerce/desktop.all/greeting.png?responsive'
import greeting_desktop_m from '../../static/images/industry/ecommerce/desktop.m/greeting.png?responsive'
import greeting_desktop_s from '../../static/images/industry/ecommerce/desktop.s/greeting.png?responsive'
import greeting_tablet_all from '../../static/images/industry/ecommerce/tablet.all/greeting.png?responsive'
import greeting_mobile_all from '../../static/images/industry/ecommerce/mobile.all/greeting.png?responsive'

import greeting_desktop_all_webp from '../../static/images/industry/ecommerce/desktop.all/greeting.png?responsive_and_webp'
import greeting_desktop_m_webp from '../../static/images/industry/ecommerce/desktop.m/greeting.png?responsive_and_webp'
import greeting_desktop_s_webp from '../../static/images/industry/ecommerce/desktop.s/greeting.png?responsive_and_webp'
import greeting_tablet_all_webp from '../../static/images/industry/ecommerce/tablet.all/greeting.png?responsive_and_webp'
import greeting_mobile_all_webp from '../../static/images/industry/ecommerce/mobile.all/greeting.png?responsive_and_webp'

import logos_desktop_all from '../../static/images/industry/ecommerce/desktop.all/logos.png?responsive'
import logos_desktop_m from '../../static/images/industry/ecommerce/desktop.m/logos.png?responsive'
import logos_desktop_s from '../../static/images/industry/ecommerce/desktop.s/logos.png?responsive'
import logos_tablet_all from '../../static/images/industry/ecommerce/tablet.all/logos.png?responsive'
import logos_mobile_all from '../../static/images/industry/ecommerce/mobile.all/logos.png?responsive'

import logos_desktop_all_webp from '../../static/images/industry/ecommerce/desktop.all/logos.png?responsive_and_webp'
import logos_desktop_m_webp from '../../static/images/industry/ecommerce/desktop.m/logos.png?responsive_and_webp'
import logos_desktop_s_webp from '../../static/images/industry/ecommerce/desktop.s/logos.png?responsive_and_webp'
import logos_tablet_all_webp from '../../static/images/industry/ecommerce/tablet.all/logos.png?responsive_and_webp'
import logos_mobile_all_webp from '../../static/images/industry/ecommerce/mobile.all/logos.png?responsive_and_webp'

const IndustryPage = ({ t }) => {
  return (
    <Layout>
      <Greeting
        content={{
          heading: t('ecommerce:greeting.title'),
          text: t('ecommerce:greeting.paragraph'),
          button: t('ecommerce:greeting.button'),
          images: {
            desktop_all: { png: greeting_desktop_all, webp: greeting_desktop_all_webp },
            desktop_m: { png: greeting_desktop_m, webp: greeting_desktop_m_webp },
            desktop_s: { png: greeting_desktop_s, webp: greeting_desktop_s_webp },
            tablet_all: { png: greeting_tablet_all, webp: greeting_tablet_all_webp },
            mobile_all: { png: greeting_mobile_all, webp: greeting_mobile_all_webp },
            fallback: { greeting_desktop_all },
            altImg: t('ecommerce:imgAlt.greeting'),
          },
        }}
      />

      <OurClients
        content={{
          heading: t('ecommerce:ourClients.title'),
          images: {
            desktop_all: { png: logos_desktop_all, webp: logos_desktop_all_webp },
            desktop_m: { png: logos_desktop_m, webp: logos_desktop_m_webp },
            desktop_s: { png: logos_desktop_s, webp: logos_desktop_s_webp },
            tablet_all: { png: logos_tablet_all, webp: logos_tablet_all_webp },
            mobile_all: { png: logos_mobile_all, webp: logos_mobile_all_webp },
            fallback: { logos_desktop_all },
            altImg: t('ecommerce:imgAlt.ourClients'),
          },
        }}
      />
    </Layout>
  )
}
export default withI18next(['ecommerce'])(translate()(IndustryPage))
