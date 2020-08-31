import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import styles from './Hero.styles'

import { L10nConsumer } from '../../../utils/l10nProvider'
import { DeviceConsumer } from '../../../utils/deviceProvider'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

import Heading from '../../ui-kit/core-design/Heading'
import SubHeading from '../../ui-kit/core-design/SubHeading'
import Grid from '../../ui-kit/core-design/Grid'

const requireImages = require.context('../../../public/images/main/hero?csssr-images')

const Hero = ({ className, l10n: { translations }, isMobile }) => (
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
        requireImages={requireImages}
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
