const logos_en_desktop_l = require('../../../static/images/industry/information-technology/desktop.l/en/logos.svg')
  .default
const logos_en_desktop_m = require('../../../static/images/industry/information-technology/desktop.m/en/logos.svg')
  .default
const logos_en_desktop_s = require('../../../static/images/industry/information-technology/desktop.s/en/logos.svg')
  .default
const logos_en_tablet_all = require('../../../static/images/industry/information-technology/tablet.all/en/logos.svg')
  .default
const logos_en_mobile_all = require('../../../static/images/industry/information-technology/mobile.all/en/logos.svg')
  .default

const logos_ru_desktop_l = require('../../../static/images/industry/information-technology/desktop.l/ru/logos.svg')
  .default
const logos_ru_desktop_m = require('../../../static/images/industry/information-technology/desktop.m/ru/logos.svg')
  .default
const logos_ru_desktop_s = require('../../../static/images/industry/information-technology/desktop.s/ru/logos.svg')
  .default
const logos_ru_tablet_all = require('../../../static/images/industry/information-technology/tablet.all/ru/logos.svg')
  .default
const logos_ru_mobile_all = require('../../../static/images/industry/information-technology/mobile.all/ru/logos.svg')
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
