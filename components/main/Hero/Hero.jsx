import React from 'react'
import { string } from 'prop-types'

import { Global } from '@emotion/core'
import styled from '@emotion/styled'
import styles, { backgroundImagesStyles } from './Hero.styles'

import AbContext from '../../../utils/abContext'
import { L10nConsumer } from '../../../utils/l10nProvider'
import { DeviceConsumer } from '../../../utils/deviceProvider'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

import Heading from '../../ui-kit/core-design/Heading'
import Grid from '../../ui-kit/core-design/Grid'

const Hero = ({ className, isMobile, l10n: { translations } }) => (
  <section className={`${className} hero-wrap`}>
    <Grid>
      <Heading
        className="title"
        as="h1"
        type="slab"
        size={isMobile ? 'm' : 'l'}
        dangerouslySetInnerHTML={{ __html: translations.main.hero.title }}
      />
      <AbContext.Consumer>
        {(ab) => <Global styles={backgroundImagesStyles(ab)} />}
      </AbContext.Consumer>
    </Grid>
  </section>
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
