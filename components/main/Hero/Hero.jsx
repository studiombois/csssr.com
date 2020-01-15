import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Hero.styles'
import translate from '../../../utils/translate-wrapper'
import { DeviceConsumer } from '../../../utils/deviceProvider'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

import Heading from '../../ui-kit/core-design/Heading'
import SubHeading from '../../ui-kit/core-design/SubHeading'
import PictureForAllResolutions from '../../ui-kit/PictureForAllResolutions'
import Grid from '../../ui-kit/core-design/Grid'

import hero_desktop from '../../../static/images/main/desktop.all/hero.png?responsive'
import hero_desktop_webp from '../../../static/images/main/desktop.all/hero.png?responsive_and_webp'

import hero_mobile from '../../../static/images/main/mobile.all/hero.png?responsive'
import hero_mobile_webp from '../../../static/images/main/mobile.all/hero.png?responsive_and_webp'

const Hero = ({ className, t, isMobile }) => (
  <Grid as="article" className={className}>
    <Heading
      className="title"
      as="h1"
      dangerouslySetInnerHTML={{ __html: t('main:hero.title') }}
      type="slab"
      size={isMobile ? 'm' : 'l'}
    />

    <div className="picture-wrapper">
      <div className="picture-hover-area" />
      <PictureForAllResolutions
        className="picture"
        images={{
          'desktop.all': { png: hero_desktop, webp: hero_desktop_webp },
          'mobile.all': { png: hero_mobile, webp: hero_mobile_webp },
        }}
        fallback={hero_desktop}
        alt={t('main:imageAlt.hero')}
      />
    </div>
    <SubHeading
      className="description"
      as="p"
      type="slab"
      dangerouslySetInnerHTML={{ __html: t('main:hero.description') }}
    />
  </Grid>
)

Hero.propTypes = {
  className: string,
}

export default styled(translate()(DeviceConsumer(MsBrowserConsumer(Hero))))`
  ${styles}
`
