const logos_en_desktop_l = require('../../../static/images/industry/ecommerce/desktop.l/en/logos.svg')
  .default
const logos_en_desktop_m = require('../../../static/images/industry/ecommerce/desktop.m/en/logos.svg')
  .default
const logos_en_desktop_s = require('../../../static/images/industry/ecommerce/desktop.s/en/logos.svg')
  .default
const logos_en_tablet_all = require('../../../static/images/industry/ecommerce/tablet.all/en/logos.svg')
  .default
const logos_en_mobile_all = require('../../../static/images/industry/ecommerce/mobile.all/en/logos.svg')
  .default

const logos_ru_desktop_l = require('../../../static/images/industry/ecommerce/desktop.l/ru/logos.svg')
  .default
const logos_ru_desktop_m = require('../../../static/images/industry/ecommerce/desktop.m/ru/logos.svg')
  .default
const logos_ru_desktop_s = require('../../../static/images/industry/ecommerce/desktop.s/ru/logos.svg')
  .default
const logos_ru_tablet_all = require('../../../static/images/industry/ecommerce/tablet.all/ru/logos.svg')
  .default
const logos_ru_mobile_all = require('../../../static/images/industry/ecommerce/mobile.all/ru/logos.svg')
  .default

const ourClientsImages = {
  en: {
    'desktop.l': {
      svg: {
        srcSet: logos_en_desktop_l,
      },
    },
    'desktop.m': {
      svg: {
        srcSet: logos_en_desktop_m,
      },
    },
    'desktop.s': {
      svg: {
        srcSet: logos_en_desktop_s,
      },
    },
    'tablet.all': {
      svg: {
        srcSet: logos_en_tablet_all,
      },
    },
    'mobile.all': {
      svg: {
        srcSet: logos_en_mobile_all,
      },
    },
  },
  ru: {
    'desktop.l': {
      svg: {
        srcSet: logos_ru_desktop_l,
      },
    },
    'desktop.m': {
      svg: {
        srcSet: logos_ru_desktop_m,
      },
    },
    'desktop.s': {
      svg: {
        srcSet: logos_ru_desktop_s,
      },
    },
    'tablet.all': {
      svg: {
        srcSet: logos_ru_tablet_all,
      },
    },
    'mobile.all': {
      svg: {
        srcSet: logos_ru_mobile_all,
      },
    },
  },
}

export default {
  heading: 'industry:ourClients.title',
  images: ourClientsImages,
  altImg: 'industry:imgAlt.ourClients',
}
