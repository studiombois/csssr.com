import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Hero.styles'
import translate from '../../../../utils/translate-wrapper'
import { DeviceConsumer } from '../../../../utils/deviceProvider'
import { MsBrowserConsumer } from '../../../../utils/msBrowserProvider'

import Heading from '../../../ui-kit/core-design/Heading'
import Text from '../../../ui-kit/core-design/Text'
import Button from '../../../ui-kit/core-design/Button'
import PictureForAllResolutions from '../../../ui-kit/PictureForAllResolutions'
import Grid from '../../../ui-kit/core-design/Grid'

import hero_desktop from '../../../../static/images/service/outsourcing-front-end/desktop.all/hero.png?responsive'
import hero_desktop_webp from '../../../../static/images/service/outsourcing-front-end/desktop.all/hero.png?responsive_and_webp'

import hero_mobile from '../../../../static/images/service/outsourcing-front-end/mobile.all/hero.png?responsive'
import hero_mobile_webp from '../../../../static/images/service/outsourcing-front-end/mobile.all/hero.png?responsive_and_webp'

const Hero = ({ className, t, isMobile }) => (
  <Grid as="article" className={className}>
    <Heading
      className="title"
      as="h1"
      dangerouslySetInnerHTML={{ __html: t('outsourcingFrontEnd:hero.title') }}
      type="slab"
      size="l"
    />

    <Text
      className="description"
      as="p"
      type="strong"
      size="m"
      dangerouslySetInnerHTML={{ __html: t('outsourcingFrontEnd:hero.description') }}
    />

    <Button
      className="button"
      dangerouslySetInnerHTML={{ __html: t('outsourcingFrontEnd:hero.button') }}
    />

    <PictureForAllResolutions
      className="picture"
      images={{
        'desktop.all': { png: hero_desktop, webp: hero_desktop_webp },
        'mobile.all': { png: hero_mobile, webp: hero_mobile_webp },
      }}
      fallback={hero_desktop}
      alt={t('outsourcingFrontEnd:imageAlt.hero')}
    />
  </Grid>
)

Hero.propTypes = {
  className: string,
}

export default translate(
  DeviceConsumer(
    MsBrowserConsumer(styled(Hero)`
      ${styles}
    `),
  ),
)
