const logos_en_desktop_l = require('../../../static/images/industry/ecommerce/desktop.l/en/logos.png?responsive')
const logos_en_desktop_m = require('../../../static/images/industry/ecommerce/desktop.m/en/logos.png?responsive')
const logos_en_desktop_s = require('../../../static/images/industry/ecommerce/desktop.s/en/logos.png?responsive')
const logos_en_tablet_all = require('../../../static/images/industry/ecommerce/tablet.all/en/logos.png?responsive')
const logos_en_mobile_all = require('../../../static/images/industry/ecommerce/mobile.all/en/logos.png?responsive')

const logos_en_desktop_l_webp = require('../../../static/images/industry/ecommerce/desktop.l/en/logos.png?responsive_and_webp')
const logos_en_desktop_m_webp = require('../../../static/images/industry/ecommerce/desktop.m/en/logos.png?responsive_and_webp')
const logos_en_desktop_s_webp = require('../../../static/images/industry/ecommerce/desktop.s/en/logos.png?responsive_and_webp')
const logos_en_tablet_all_webp = require('../../../static/images/industry/ecommerce/tablet.all/en/logos.png?responsive_and_webp')
const logos_en_mobile_all_webp = require('../../../static/images/industry/ecommerce/mobile.all/en/logos.png?responsive_and_webp')

const logos_ru_desktop_l = require('../../../static/images/industry/ecommerce/desktop.l/ru/logos.png?responsive')
const logos_ru_desktop_m = require('../../../static/images/industry/ecommerce/desktop.m/ru/logos.png?responsive')
const logos_ru_desktop_s = require('../../../static/images/industry/ecommerce/desktop.s/ru/logos.png?responsive')
const logos_ru_tablet_all = require('../../../static/images/industry/ecommerce/tablet.all/ru/logos.png?responsive')
const logos_ru_mobile_all = require('../../../static/images/industry/ecommerce/mobile.all/ru/logos.png?responsive')

const logos_ru_desktop_l_webp = require('../../../static/images/industry/ecommerce/desktop.l/ru/logos.png?responsive_and_webp')
const logos_ru_desktop_m_webp = require('../../../static/images/industry/ecommerce/desktop.m/ru/logos.png?responsive_and_webp')
const logos_ru_desktop_s_webp = require('../../../static/images/industry/ecommerce/desktop.s/ru/logos.png?responsive_and_webp')
const logos_ru_tablet_all_webp = require('../../../static/images/industry/ecommerce/tablet.all/ru/logos.png?responsive_and_webp')
const logos_ru_mobile_all_webp = require('../../../static/images/industry/ecommerce/mobile.all/ru/logos.png?responsive_and_webp')

const ourClientsImages = {
  en: {
    'desktop.l': {
      png: logos_en_desktop_l,
      webp: logos_en_desktop_l_webp,
    },
    'desktop.m': {
      png: logos_en_desktop_m,
      webp: logos_en_desktop_m_webp,
    },
    'desktop.s': {
      png: logos_en_desktop_s,
      webp: logos_en_desktop_s_webp,
    },
    'tablet.all': {
      png: logos_en_tablet_all,
      webp: logos_en_tablet_all_webp,
    },
    'mobile.all': {
      png: logos_en_mobile_all,
      webp: logos_en_mobile_all_webp,
    },
  },
  ru: {
    'desktop.l': {
      png: logos_ru_desktop_l,
      webp: logos_ru_desktop_l_webp,
    },
    'desktop.m': {
      png: logos_ru_desktop_m,
      webp: logos_ru_desktop_m_webp,
    },
    'desktop.s': {
      png: logos_ru_desktop_s,
      webp: logos_ru_desktop_s_webp,
    },
    'tablet.all': {
      png: logos_ru_tablet_all,
      webp: logos_ru_tablet_all_webp,
    },
    'mobile.all': {
      png: logos_ru_mobile_all,
      webp: logos_ru_mobile_all_webp,
    },
  },
}

export default {
  heading: (t) => t.industry.ourClients.title,
  images: ourClientsImages,
  altImg: (t) => t.industry.imgAlt.ourClients,
}
