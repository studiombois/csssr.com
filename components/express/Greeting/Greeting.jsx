import * as React from 'react'
import { string, bool, func } from 'prop-types'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './Greeting.styles'

import Grid from '../../ui-kit/core-design/Grid'
import Heading from '../../ui-kit/core-design/Heading'
import Text from '../../ui-kit/core-design/Text'
import ButtonLink from '../../ui-kit/core-design/ButtonLink'
import PictureForAllResolutions from '../../ui-kit/PictureForAllResolutions'

import { ReactComponent as PlanetMobileSvg } from '../../../static/images/express/planet-animation/orbits-mobile.svg?original'
import { ReactComponent as PlanetDesktopSvg } from '../../../static/images/express/planet-animation/orbits-desktop.svg?original'
import greetingImagesData from '../../../data/express/greeting'

import translate from '../../../utils/translate-wrapper'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'
import { DeviceConsumer } from '../../../utils/deviceProvider'

const Greeting = ({ isMsBrowser, isMobile, className, t }) => (
  <Grid as="article" className={className}>
    <div
      className={cn('svg-animation', 'svg-animation-wrapper', {
        'ms-style': isMsBrowser,
      })}
    >
      <PictureForAllResolutions
        className="rocket"
        images={greetingImagesData.images}
        fallback={greetingImagesData.images['desktop.l']}
        alt={t('express:imgAlt.rocket')}
      />

      {isMobile ? (
        <PlanetMobileSvg
          className={cn('svg-animation-orbit', {
            'svg-animation_visible': !isMsBrowser,
            'svg-animation_invisible': isMsBrowser,
          })}
        />
      ) : (
        <PlanetDesktopSvg
          className={cn('svg-animation-orbit', {
            'svg-animation_visible': !isMsBrowser,
            'svg-animation_invisible': isMsBrowser,
          })}
        />
      )}
    </div>

    <Heading
      as="h1"
      className="heading"
      type="slab"
      size="l"
      dangerouslySetInnerHTML={{ __html: t('express:greeting.title') }}
    />

    <Text
      className="subheading"
      type="strong"
      size="m"
      dangerouslySetInnerHTML={{ __html: t('express:greeting.description') }}
    />

    <ButtonLink
      className="button"
      kind="primary"
      href="#calculator"
      dangerouslySetInnerHTML={{ __html: t('express:greeting.button') }}
    />
  </Grid>
)

Greeting.propTypes = {
  className: string,
  isMsBrowser: bool,
  isMobile: bool,
  t: func,
}

export default translate(
  DeviceConsumer(
    MsBrowserConsumer(styled(Greeting)`
      ${styles}
    `),
  ),
)
