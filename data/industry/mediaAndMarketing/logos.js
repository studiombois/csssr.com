const logos_desktop_l = require('../../../static/images/industry/media-and-marketing/desktop.l/logos.png?responsive')
const logos_desktop_m = require('../../../static/images/industry/media-and-marketing/desktop.m/logos.png?responsive')
const logos_desktop_s = require('../../../static/images/industry/media-and-marketing/desktop.s/logos.png?responsive')
const logos_tablet_all = require('../../../static/images/industry/media-and-marketing/tablet.all/logos.png?responsive')
const logos_mobile_all = require('../../../static/images/industry/media-and-marketing/mobile.all/logos.png?responsive')

const logos_desktop_l_webp = require('../../../static/images/industry/media-and-marketing/desktop.l/logos.png?responsive_and_webp')
const logos_desktop_m_webp = require('../../../static/images/industry/media-and-marketing/desktop.m/logos.png?responsive_and_webp')
const logos_desktop_s_webp = require('../../../static/images/industry/media-and-marketing/desktop.s/logos.png?responsive_and_webp')
const logos_tablet_all_webp = require('../../../static/images/industry/media-and-marketing/tablet.all/logos.png?responsive_and_webp')
const logos_mobile_all_webp = require('../../../static/images/industry/media-and-marketing/mobile.all/logos.png?responsive_and_webp')

const ourClientsImages = {
  en: {
    'desktop.l': {
      png: logos_desktop_l,
      webp: logos_desktop_l_webp,
    },
    'desktop.m': {
      png: logos_desktop_m,
      webp: logos_desktop_m_webp,
    },
    'desktop.s': {
      png: logos_desktop_s,
      webp: logos_desktop_s_webp,
    },
    'tablet.all': {
      png: logos_tablet_all,
      webp: logos_tablet_all_webp,
    },
    'mobile.all': {
      png: logos_mobile_all,
      webp: logos_mobile_all_webp,
    },
  },
  ru: {
    'desktop.l': {
      png: logos_desktop_l,
      webp: logos_desktop_l_webp,
    },
    'desktop.m': {
      png: logos_desktop_m,
      webp: logos_desktop_m_webp,
    },
    'desktop.s': {
      png: logos_desktop_s,
      webp: logos_desktop_s_webp,
    },
    'tablet.all': {
      png: logos_tablet_all,
      webp: logos_tablet_all_webp,
    },
    'mobile.all': {
      png: logos_mobile_all,
      webp: logos_mobile_all_webp,
    },
  },
}

export default {
  heading: (t) => t.industry.ourClients.title,
  images: ourClientsImages,
  altImg: (t) => t.industry.imgAlt.ourClients,
}
