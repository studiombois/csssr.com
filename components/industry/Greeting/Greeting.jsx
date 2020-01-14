import React from 'react'
import styled from '@emotion/styled'
import styles from './Greeting.styles'
import Grid from '../../ui-kit/core-design/Grid'
import Text from '../../ui-kit/core-design/Text'
import Heading from '../../ui-kit/core-design/Heading'
import Button from '../../ui-kit/core-design/Button'
import translate from '../../../utils/translate-wrapper'
import PictureForAllResolutions from '../../ui-kit/PictureForAllResolutions'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

import greeting_desktop_all from '../../../static/images/industry/desktop.all/greeting.png?responsive'
import greeting_desktop_m from '../../../static/images/industry/desktop.m/greeting.png?responsive'
import greeting_desktop_s from '../../../static/images/industry/desktop.s/greeting.png?responsive'
import greeting_tablet_all from '../../../static/images/industry/tablet.all/greeting.png?responsive'
import greeting_mobile_all from '../../../static/images/industry/mobile.all/greeting.png?responsive'

import greeting_desktop_all_webp from '../../../static/images/industry/desktop.all/greeting.png?responsive_and_webp'
import greeting_desktop_m_webp from '../../../static/images/industry/desktop.m/greeting.png?responsive_and_webp'
import greeting_desktop_s_webp from '../../../static/images/industry/desktop.s/greeting.png?responsive_and_webp'
import greeting_tablet_all_webp from '../../../static/images/industry/tablet.all/greeting.png?responsive_and_webp'
import greeting_mobile_all_webp from '../../../static/images/industry/mobile.all/greeting.png?responsive_and_webp'

const Greeting = ({ className, t }) => (
  <Grid className={className} as="section" id="greeting">
    <Heading.H1
      type="slab"
      size="l"
      dangerouslySetInnerHTML={{ __html: t('industry:greeting.title') }}
      className="heading"
    />

    <Text
      type="strong"
      size="m"
      dangerouslySetInnerHTML={{ __html: t('industry:greeting.paragraph') }}
      className="text"
    />

    <PictureForAllResolutions
      images={{
        'desktop.all': { png: greeting_desktop_all, webp: greeting_desktop_all_webp },
        'desktop.m': { png: greeting_desktop_m, webp: greeting_desktop_m_webp },
        'desktop.s': { png: greeting_desktop_s, webp: greeting_desktop_s_webp },
        'tablet.all': { png: greeting_tablet_all, webp: greeting_tablet_all_webp },
        'mobile.all': { png: greeting_mobile_all, webp: greeting_mobile_all_webp },
      }}
      fallback={greeting_desktop_all}
      alt={t('industry:imgAlt.greeting')}
      className="image"
    />

    <Button className="button">{t('industry:greeting.button')}</Button>
  </Grid>
)

export default styled(translate()(MsBrowserConsumer(Greeting)))`
  ${styles}
`
