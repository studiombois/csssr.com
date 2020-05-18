import dev_ops_services_mobile_all from '../../../static/images/service/backend-and-devops/mobile.all/devops-services.png?responsive'
import dev_ops_services_tablet_all from '../../../static/images/service/backend-and-devops/tablet.all/devops-services.png?responsive'
import dev_ops_services_desktop_s from '../../../static/images/service/backend-and-devops/desktop.s/devops-services.png?responsive'
import dev_ops_services_desktop_m from '../../../static/images/service/backend-and-devops/desktop.m/devops-services.png?responsive'
import dev_ops_services_desktop_l from '../../../static/images/service/backend-and-devops/desktop.l/devops-services.png?responsive'

import dev_ops_services_mobile_all_webp from '../../../static/images/service/backend-and-devops/mobile.all/devops-services.png?responsive_and_webp'
import dev_ops_services_tablet_all_webp from '../../../static/images/service/backend-and-devops/tablet.all/devops-services.png?responsive_and_webp'
import dev_ops_services_desktop_s_webp from '../../../static/images/service/backend-and-devops/desktop.s/devops-services.png?responsive_and_webp'
import dev_ops_services_desktop_m_webp from '../../../static/images/service/backend-and-devops/desktop.m/devops-services.png?responsive_and_webp'
import dev_ops_services_desktop_l_webp from '../../../static/images/service/backend-and-devops/desktop.l/devops-services.png?responsive_and_webp'

const devOpsImages = {
  'desktop.l': { png: dev_ops_services_desktop_l, webp: dev_ops_services_desktop_l_webp },
  'desktop.m': { png: dev_ops_services_desktop_m, webp: dev_ops_services_desktop_m_webp },
  'desktop.s': { png: dev_ops_services_desktop_s, webp: dev_ops_services_desktop_s_webp },
  'tablet.all': { png: dev_ops_services_tablet_all, webp: dev_ops_services_tablet_all_webp },
  'mobile.all': { png: dev_ops_services_mobile_all, webp: dev_ops_services_mobile_all_webp },
}

export default {
  images: devOpsImages,
  heading: (t) => t.backEndAndDevops.devOpsServices.title,
  subtitle: (t) => t.backEndAndDevops.devOpsServices.subtitle,
  description: (t) => t.backEndAndDevops.devOpsServices.description,
  imgAlt: (t) => t.backEndAndDevops.devOpsServices.imgAlt,
  solutions: {
    heading: (t) => t.backEndAndDevops.devOpsServices.solutions.title,
    cases: [
      {
        id: 'continuous',
        title: (t) => t.backEndAndDevops.devOpsServices.solutions.continuous.title,
        description: (t) => t.backEndAndDevops.devOpsServices.solutions.continuous.description,
      },
      {
        id: 'automatic',
        title: (t) => t.backEndAndDevops.devOpsServices.solutions.automatic.title,
        description: (t) => t.backEndAndDevops.devOpsServices.solutions.automatic.description,
      },
      {
        id: 'cluster',
        title: (t) => t.backEndAndDevops.devOpsServices.solutions.cluster.title,
        description: (t) => t.backEndAndDevops.devOpsServices.solutions.cluster.description,
      },
      {
        id: 'maintenance',
        title: (t) => t.backEndAndDevops.devOpsServices.solutions.maintenance.title,
        description: (t) => t.backEndAndDevops.devOpsServices.solutions.maintenance.description,
      },
    ],
  },
}
