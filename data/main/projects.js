import tracker_desktop_l from '../../static/images/main/desktop.l/tracker.png?responsive'
import tracker_desktop_l_webp from '../../static/images/main/desktop.l/tracker.png?responsive_and_webp'
import tracker_desktop_m from '../../static/images/main/desktop.m/tracker.png?responsive'
import tracker_desktop_m_webp from '../../static/images/main/desktop.m/tracker.png?responsive_and_webp'
import tracker_desktop_s from '../../static/images/main/desktop.s/tracker.png?responsive'
import tracker_desktop_s_webp from '../../static/images/main/desktop.s/tracker.png?responsive_and_webp'
import tracker_tablet_all from '../../static/images/main/tablet.all/tracker.png?responsive'
import tracker_tablet_all_webp from '../../static/images/main/tablet.all/tracker.png?responsive_and_webp'
import tracker_mobile_all from '../../static/images/main/mobile.all/tracker.png?responsive'
import tracker_mobile_all_webp from '../../static/images/main/mobile.all/tracker.png?responsive_and_webp'

import school_desktop_l from '../../static/images/main/desktop.l/school.png?responsive'
import school_desktop_l_webp from '../../static/images/main/desktop.l/school.png?responsive_and_webp'
import school_desktop_m from '../../static/images/main/desktop.m/school.png?responsive'
import school_desktop_m_webp from '../../static/images/main/desktop.m/school.png?responsive_and_webp'
import school_desktop_s from '../../static/images/main/desktop.s/school.png?responsive'
import school_desktop_s_webp from '../../static/images/main/desktop.s/school.png?responsive_and_webp'
import school_tablet_all from '../../static/images/main/tablet.all/school.png?responsive'
import school_tablet_all_webp from '../../static/images/main/tablet.all/school.png?responsive_and_webp'
import school_mobile_all from '../../static/images/main/mobile.all/school.png?responsive'
import school_mobile_all_webp from '../../static/images/main/mobile.all/school.png?responsive_and_webp'

import blog_desktop_l from '../../static/images/main/desktop.l/blog.png?responsive'
import blog_desktop_l_webp from '../../static/images/main/desktop.l/blog.png?responsive_and_webp'
import blog_desktop_m from '../../static/images/main/desktop.m/blog.png?responsive'
import blog_desktop_m_webp from '../../static/images/main/desktop.m/blog.png?responsive_and_webp'
import blog_desktop_s from '../../static/images/main/desktop.s/blog.png?responsive'
import blog_desktop_s_webp from '../../static/images/main/desktop.s/blog.png?responsive_and_webp'
import blog_tablet_all from '../../static/images/main/tablet.all/blog.png?responsive'
import blog_tablet_all_webp from '../../static/images/main/tablet.all/blog.png?responsive_and_webp'
import blog_mobile_all from '../../static/images/main/mobile.all/blog.png?responsive'
import blog_mobile_all_webp from '../../static/images/main/mobile.all/blog.png?responsive_and_webp'

import radio_desktop_all from '../../static/images/main/desktop.all/radio.png?responsive'
import radio_desktop_all_webp from '../../static/images/main/desktop.all/radio.png?responsive_and_webp'
import radio_tablet_all from '../../static/images/main/tablet.all/radio.png?responsive'
import radio_tablet_all_webp from '../../static/images/main/tablet.all/radio.png?responsive_and_webp'
import radio_mobile_all from '../../static/images/main/mobile.all/radio.png?responsive'
import radio_mobile_all_webp from '../../static/images/main/mobile.all/radio.png?responsive_and_webp'

const trackerImages = {
  'mobile.all': { png: tracker_mobile_all, webp: tracker_mobile_all_webp },
  'tablet.all': { png: tracker_tablet_all, webp: tracker_tablet_all_webp },
  'desktop.s': { png: tracker_desktop_s, webp: tracker_desktop_s_webp },
  'desktop.m': { png: tracker_desktop_m, webp: tracker_desktop_m_webp },
  'desktop.l': { png: tracker_desktop_l, webp: tracker_desktop_l_webp },
}

const schoolImages = {
  'mobile.all': { png: school_mobile_all, webp: school_mobile_all_webp },
  'tablet.all': { png: school_tablet_all, webp: school_tablet_all_webp },
  'desktop.s': { png: school_desktop_s, webp: school_desktop_s_webp },
  'desktop.m': { png: school_desktop_m, webp: school_desktop_m_webp },
  'desktop.l': { png: school_desktop_l, webp: school_desktop_l_webp },
}

const blogImages = {
  'mobile.all': { png: blog_mobile_all, webp: blog_mobile_all_webp },
  'tablet.all': { png: blog_tablet_all, webp: blog_tablet_all_webp },
  'desktop.s': { png: blog_desktop_s, webp: blog_desktop_s_webp },
  'desktop.m': { png: blog_desktop_m, webp: blog_desktop_m_webp },
  'desktop.l': { png: blog_desktop_l, webp: blog_desktop_l_webp },
}

const radioImages = {
  'mobile.all': { png: radio_mobile_all, webp: radio_mobile_all_webp },
  'tablet.all': { png: radio_tablet_all, webp: radio_tablet_all_webp },
  'desktop.all': { png: radio_desktop_all, webp: radio_desktop_all_webp },
}

export default [
  {
    id: 'tracker',
    title: 'main:projects.tracker.title',
    description: 'main:projects.tracker.description',
    href: '/',
    images: trackerImages,
    fallback: tracker_desktop_l,
  },
  {
    id: 'school',
    title: 'main:projects.school.title',
    description: 'main:projects.school.description',
    href: '/',
    images: schoolImages,
    fallback: school_desktop_l,
  },
  {
    id: 'blog',
    title: 'main:projects.blog.title',
    description: 'main:projects.blog.description',
    href: '/',
    images: blogImages,
    fallback: blog_desktop_l,
  },
  {
    id: 'radio',
    title: 'main:projects.radio.title',
    description: 'main:projects.radio.description',
    href: '/',
    images: radioImages,
    fallback: radio_desktop_all,
  },
]