const logos_desktop_l = require('../../../static/images/industry/ecommerce/desktop.l/logos.svg')
  .default
const logos_desktop_m = require('../../../static/images/industry/ecommerce/desktop.m/logos.svg')
  .default
const logos_desktop_s = require('../../../static/images/industry/ecommerce/desktop.s/logos.svg')
  .default
const logos_tablet_all = require('../../../static/images/industry/ecommerce/tablet.all/logos.svg')
  .default
const logos_mobile_all = require('../../../static/images/industry/ecommerce/mobile.all/logos.svg')
  .default

const ourClientsImages = {
  'desktop.l': {
    svg: {
      srcSet: logos_desktop_l,
    },
  },
  'desktop.m': {
    svg: {
      srcSet: logos_desktop_m,
    },
  },
  'desktop.s': {
    svg: {
      srcSet: logos_desktop_s,
    },
  },
  'tablet.all': {
    svg: {
      srcSet: logos_tablet_all,
    },
  },
  'mobile.all': {
    svg: {
      srcSet: logos_mobile_all,
    },
  },
}

export default {
  heading: 'industry:ourClients.title',
  images: ourClientsImages,
  altImg: 'industry:imgAlt.ourClients',
}
