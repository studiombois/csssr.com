import React from 'react'
import { string } from 'prop-types'

import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import { backgroundCssSmart } from '@csssr/csssr.images/dist/utils/backgroundCss'
import styles from './Hero.styles'

import { L10nConsumer } from '../../../utils/l10nProvider'
import { DeviceConsumer } from '../../../utils/deviceProvider'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

import Heading from '../../ui-kit/core-design/Heading'
import SubHeading from '../../ui-kit/core-design/SubHeading'
import Grid from '../../ui-kit/core-design/Grid'

const heroBgImages = require.context('../../../public/images/main/hero-en?csssr-images')
const HeroEn = ({ className, translations, isMobile }) => (
  <section className={`${className} hero-wrap`}>
    <Grid>
      <Heading
        className="title"
        as="h1"
        type="slab"
        size={isMobile ? 'm' : 'l'}
        dangerouslySetInnerHTML={{ __html: translations.main.hero.title }}
      />
      <Global
        styles={() => css`
          ${backgroundCssSmart('.hero-wrap', heroBgImages)}
        `}
      />
    </Grid>
  </section>
)

const heroImages = require.context('../../../public/images/main/hero-ru?csssr-images')
const HeroRu = ({ className, translations, isMobile }) => (
  <Grid as="article" className={className}>
    <Heading
      className="title"
      as="h1"
      dangerouslySetInnerHTML={{ __html: translations.main.hero.title }}
      type="slab"
      size={isMobile ? 'm' : 'l'}
    />

    <div className="picture-wrapper">
      <div className="picture-hover-area" />
      <PictureSmart
        className="picture"
        requireImages={heroImages}
        testId="Home:img.big-logo"
        alt={translations.main.imgAlt.hero}
      />
    </div>
    <SubHeading
      className="description"
      as="p"
      type="slab"
      dangerouslySetInnerHTML={{ __html: translations.main.hero.description }}
    />
  </Grid>
)

const Hero = ({ className, isMobile, l10n: { translations, language } }) =>
  language === 'ru' ? (
    <HeroRu className={className} translations={translations} isMobile={isMobile} />
  ) : (
    <HeroEn className={className} translations={translations} isMobile={isMobile} />
  )

Hero.propTypes = {
  className: string,
}

export default L10nConsumer(
  DeviceConsumer(
    MsBrowserConsumer(styled(Hero)`
      ${styles}
    `),
  ),
)
