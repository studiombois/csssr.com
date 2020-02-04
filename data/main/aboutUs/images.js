import love_desktop_all from '../../../static/images/main/desktop.all/love.png?responsive'
import love_desktop_all_webp from '../../../static/images/main/desktop.all/love.png?responsive_and_webp'

import love_mobile_all from '../../../static/images/main/mobile.all/love.png?responsive'
import love_mobile_all_webp from '../../../static/images/main/mobile.all/love.png?responsive_and_webp'

import elbrus from '../../../static/images/main/elbrus.jpg?responsive'
import elbrus_webp from '../../../static/images/main/elbrus.jpg?responsive_and_webp'

import image_volleyball from '../../../static/images/main/volleyball.jpg?responsive'
import image_volleyball_webp from '../../../static/images/main/volleyball.jpg?responsive_and_webp'

export default {
  love: {
    'mobile.all': { png: love_mobile_all, webp: love_mobile_all_webp },
    'desktop.all': { png: love_desktop_all, webp: love_desktop_all_webp },
  },
  elbrus: { jpg: elbrus, webp: elbrus_webp },
  volleyball: { jpg: image_volleyball, webp: image_volleyball_webp },
}
