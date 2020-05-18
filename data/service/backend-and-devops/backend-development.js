import backend_dev_desktop_l from '../../../static/images/service/backend-and-devops/desktop.l/backend-dev.png?responsive'
import backend_dev_desktop_m from '../../../static/images/service/backend-and-devops/desktop.m/backend-dev.png?responsive'
import backend_dev_desktop_s from '../../../static/images/service/backend-and-devops/desktop.s/backend-dev.png?responsive'
import backend_dev_tablet_all from '../../../static/images/service/backend-and-devops/tablet.all/backend-dev.png?responsive'
import backend_dev_mobile_all from '../../../static/images/service/backend-and-devops/mobile.all/backend-dev.png?responsive'

import backend_dev_desktop_l_webp from '../../../static/images/service/backend-and-devops/desktop.l/backend-dev.png?responsive_and_webp'
import backend_dev_desktop_m_webp from '../../../static/images/service/backend-and-devops/desktop.m/backend-dev.png?responsive_and_webp'
import backend_dev_desktop_s_webp from '../../../static/images/service/backend-and-devops/desktop.s/backend-dev.png?responsive_and_webp'
import backend_dev_tablet_all_webp from '../../../static/images/service/backend-and-devops/tablet.all/backend-dev.png?responsive_and_webp'
import backend_dev_mobile_all_webp from '../../../static/images/service/backend-and-devops/mobile.all/backend-dev.png?responsive_and_webp'

const backEndDevImages = {
  'desktop.l': { png: backend_dev_desktop_l, webp: backend_dev_desktop_l_webp },
  'desktop.m': { png: backend_dev_desktop_m, webp: backend_dev_desktop_m_webp },
  'desktop.s': { png: backend_dev_desktop_s, webp: backend_dev_desktop_s_webp },
  'tablet.all': { png: backend_dev_tablet_all, webp: backend_dev_tablet_all_webp },
  'mobile.all': { png: backend_dev_mobile_all, webp: backend_dev_mobile_all_webp },
}

export default {
  images: backEndDevImages,
  heading: (t) => t.backEndAndDevops.backEndDevelopment.title,
  description: (t) => t.backEndAndDevops.backEndDevelopment.description,
  imgAlt: (t) => t.backEndAndDevops.backEndDevelopment.imgAlt,
  whatWeDo: {
    do_title: (t) => t.backEndAndDevops.backEndDevelopment.whatWeDo.title,
    do_description: (t) => t.backEndAndDevops.backEndDevelopment.whatWeDo.description,
    list: [
      {
        title: (t) => t.backEndAndDevops.backEndDevelopment.whatWeDo.list.firstItem.title,
        description: (t) =>
          t.backEndAndDevops.backEndDevelopment.whatWeDo.list.firstItem.description,
      },
      {
        title: (t) => t.backEndAndDevops.backEndDevelopment.whatWeDo.list.secondItem.title,
        description: (t) =>
          t.backEndAndDevops.backEndDevelopment.whatWeDo.list.secondItem.description,
      },
      {
        title: (t) => t.backEndAndDevops.backEndDevelopment.whatWeDo.list.thirdItem.title,
        description: (t) =>
          t.backEndAndDevops.backEndDevelopment.whatWeDo.list.thirdItem.description,
      },
    ],
  },
}
