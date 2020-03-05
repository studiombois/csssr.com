import scrumban_desktop_l from '../../static/images/development/desktop.l/scrumban.png?responsive'
import scrumban_desktop_l_webp from '../../static/images/development/desktop.l/scrumban.png?responsive_and_webp'
import scrumban_desktop_m from '../../static/images/development/desktop.m/scrumban.png?responsive'
import scrumban_desktop_m_webp from '../../static/images/development/desktop.m/scrumban.png?responsive_and_webp'
import scrumban_desktop_s from '../../static/images/development/desktop.s/scrumban.png?responsive'
import scrumban_desktop_s_webp from '../../static/images/development/desktop.s/scrumban.png?responsive_and_webp'
import scrumban_tablet_all from '../../static/images/development/tablet.all/scrumban.png?responsive'
import scrumban_tablet_all_webp from '../../static/images/development/tablet.all/scrumban.png?responsive_and_webp'
import scrumban_mobile_all from '../../static/images/development/mobile.all/scrumban.png?responsive'
import scrumban_mobile_all_webp from '../../static/images/development/mobile.all/scrumban.png?responsive_and_webp'

import review_desktop_l from '../../static/images/development/desktop.l/review.png?responsive'
import review_desktop_l_webp from '../../static/images/development/desktop.l/review.png?responsive_and_webp'
import review_desktop_m from '../../static/images/development/desktop.m/review.png?responsive'
import review_desktop_m_webp from '../../static/images/development/desktop.m/review.png?responsive_and_webp'
import review_desktop_s from '../../static/images/development/desktop.s/review.png?responsive'
import review_desktop_s_webp from '../../static/images/development/desktop.s/review.png?responsive_and_webp'
import review_tablet_all from '../../static/images/development/tablet.all/review.png?responsive'
import review_tablet_all_webp from '../../static/images/development/tablet.all/review.png?responsive_and_webp'
import review_mobile_all from '../../static/images/development/mobile.all/review.png?responsive'
import review_mobile_all_webp from '../../static/images/development/mobile.all/review.png?responsive_and_webp'

const scrumbanImages = {
  'mobile.all': { png: scrumban_mobile_all, webp: scrumban_mobile_all_webp },
  'tablet.all': { png: scrumban_tablet_all, webp: scrumban_tablet_all_webp },
  'desktop.s': { png: scrumban_desktop_s, webp: scrumban_desktop_s_webp },
  'desktop.m': { png: scrumban_desktop_m, webp: scrumban_desktop_m_webp },
  'desktop.l': { png: scrumban_desktop_l, webp: scrumban_desktop_l_webp },
}

const reviewImages = {
  'mobile.all': { png: review_mobile_all, webp: review_mobile_all_webp },
  'tablet.all': { png: review_tablet_all, webp: review_tablet_all_webp },
  'desktop.s': { png: review_desktop_s, webp: review_desktop_s_webp },
  'desktop.m': { png: review_desktop_m, webp: review_desktop_m_webp },
  'desktop.l': { png: review_desktop_l, webp: review_desktop_l_webp },
}

const scrumban = {
  img: scrumbanImages,
  imageAlt: 'wayOfWork:development.scrumban.imageAlt',
  title: 'wayOfWork:development.scrumban.title',
  description: 'wayOfWork:development.scrumban.description',
  text: 'wayOfWork:development.scrumban.text',
  textTwo: 'wayOfWork:development.scrumban.text_2',
}

const review = {
  img: reviewImages,
  imageAlt: 'wayOfWork:development.review.imageAlt',
  title: 'wayOfWork:development.review.title',
  description: 'wayOfWork:development.review.description',
  text: ['wayOfWork:development.review.text', 'wayOfWork:development.review.text_2'],
}

export { scrumban, review }
