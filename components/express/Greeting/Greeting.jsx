import * as React from 'react'
import { string, bool, func } from 'prop-types'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './Greeting.styles'

import Wrapper from '../Wrapper'
import Heading from '../../ui-kit/core-design/Heading'
import SubHeading from '../../ui-kit/core-design/SubHeading'
import ButtonLink from '../../ui-kit/core-design/ButtonLink'
import PictureForAllResolutions from '../../ui-kit/PictureForAllResolutions'

import PlanetSvg from '../../../static/images/express/planet-animation/hire-planets-and-satellites.svg'
import greetingImagesData from '../../../data/express/greeting'

import translate from '../../../utils/translate-wrapper'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const Greeting = ({ isMsBrowser, className, t }) => (
  <article className={className}>
    <Wrapper>
      <Heading
        as="h1"
        className="heading"
        type="slab"
        size="l"
        dangerouslySetInnerHTML={{ __html: t('express:greeting.title') }}
      />

      <SubHeading
        className="subheading"
        type="regular"
        dangerouslySetInnerHTML={{ __html: t('express:greeting.description') }}
      />

      <ButtonLink
        className="button"
        kind="primary"
        href="#calculator"
        dangerouslySetInnerHTML={{ __html: t('express:greeting.button') }}
      />
    </Wrapper>

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

      <PlanetSvg
        className={cn('svg-animation', {
          'svg-animation_visible': !isMsBrowser,
          'svg-animation_invisible': isMsBrowser,
        })}
      />
    </div>
  </article>
)

Greeting.propTypes = {
  className: string,
  isMsBrowser: bool,
  t: func,
}

export default translate()(
  MsBrowserConsumer(styled(Greeting)`
    ${styles.base}
  `),
)
