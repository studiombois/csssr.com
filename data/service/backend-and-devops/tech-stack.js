import java_desktop_l from '../../../static/images/service/backend-and-devops/desktop.l/java.png?responsive'
import java_desktop_m from '../../../static/images/service/backend-and-devops/desktop.m/java.png?responsive'
import java_desktop_s from '../../../static/images/service/backend-and-devops/desktop.s/java.png?responsive'
import java_tablet_all from '../../../static/images/service/backend-and-devops/tablet.all/java.png?responsive'
import java_mobile_all from '../../../static/images/service/backend-and-devops/mobile.all/java.png?responsive'

import java_desktop_l_webp from '../../../static/images/service/backend-and-devops/desktop.l/java.png?responsive_and_webp'
import java_desktop_m_webp from '../../../static/images/service/backend-and-devops/desktop.m/java.png?responsive_and_webp'
import java_desktop_s_webp from '../../../static/images/service/backend-and-devops/desktop.s/java.png?responsive_and_webp'
import java_tablet_all_webp from '../../../static/images/service/backend-and-devops/tablet.all/java.png?responsive_and_webp'
import java_mobile_all_webp from '../../../static/images/service/backend-and-devops/mobile.all/java.png?responsive_and_webp'

import mongodb_desktop_l from '../../../static/images/service/backend-and-devops/desktop.l/mongodb.png?responsive'
import mongodb_desktop_m from '../../../static/images/service/backend-and-devops/desktop.m/mongodb.png?responsive'
import mongodb_desktop_s from '../../../static/images/service/backend-and-devops/desktop.s/mongodb.png?responsive'
import mongodb_tablet_all from '../../../static/images/service/backend-and-devops/tablet.all/mongodb.png?responsive'
import mongodb_mobile_all from '../../../static/images/service/backend-and-devops/mobile.all/mongodb.png?responsive'

import mongodb_desktop_l_webp from '../../../static/images/service/backend-and-devops/desktop.l/mongodb.png?responsive_and_webp'
import mongodb_desktop_m_webp from '../../../static/images/service/backend-and-devops/desktop.m/mongodb.png?responsive_and_webp'
import mongodb_desktop_s_webp from '../../../static/images/service/backend-and-devops/desktop.s/mongodb.png?responsive_and_webp'
import mongodb_tablet_all_webp from '../../../static/images/service/backend-and-devops/tablet.all/mongodb.png?responsive_and_webp'
import mongodb_mobile_all_webp from '../../../static/images/service/backend-and-devops/mobile.all/mongodb.png?responsive_and_webp'

const javaImages = {
  'desktop.l': { png: java_desktop_l, webp: java_desktop_l_webp },
  'desktop.m': { png: java_desktop_m, webp: java_desktop_m_webp },
  'desktop.s': { png: java_desktop_s, webp: java_desktop_s_webp },
  'tablet.all': { png: java_tablet_all, webp: java_tablet_all_webp },
  'mobile.all': { png: java_mobile_all, webp: java_mobile_all_webp },
}

const mongoDbImages = {
  'desktop.l': { png: mongodb_desktop_l, webp: mongodb_desktop_l_webp },
  'desktop.m': { png: mongodb_desktop_m, webp: mongodb_desktop_m_webp },
  'desktop.s': { png: mongodb_desktop_s, webp: mongodb_desktop_s_webp },
  'tablet.all': { png: mongodb_tablet_all, webp: mongodb_tablet_all_webp },
  'mobile.all': { png: mongodb_mobile_all, webp: mongodb_mobile_all_webp },
}

export default {
  javaImages: javaImages,
  mongoDbImages: mongoDbImages,
  heading: 'backEndAndDevops:techStack.title',
  description: 'backEndAndDevops:techStack.description',
  mongoDb: 'backEndAndDevops:techStack.mongoDb',
  java: 'backEndAndDevops:techStack.java',
  experts: 'backEndAndDevops:techStack.experts',
  link: 'backEndAndDevops:techStack.link',
}