import React from 'react'
import { string } from 'prop-types'

import { Global } from '@emotion/core'
import styled from '@emotion/styled'
import styles, { backgroundImagesStyles } from './Hero.styles'

import { DeviceConsumer } from '../../../../../utils/deviceProvider'
import { MsBrowserConsumer } from '../../../../../utils/msBrowserProvider'

import Heading from '../../../../ui-kit/core-design/Heading'
import Grid from '../../../../ui-kit/core-design/Grid'

const Hero = ({ className, isMobile }) => (
  <section className={`${className} hero-wrap`}>
    <Grid>
      <Heading className="title" as="h1" type="slab" size={isMobile ? 'm' : 'l'}>
        <span>CSSSR</span>web development company that provides high quality services globally
      </Heading>

      <Global styles={backgroundImagesStyles} />
    </Grid>
  </section>
)

Hero.propTypes = {
  className: string,
}

export default DeviceConsumer(
  MsBrowserConsumer(styled(Hero)`
    ${styles}
  `),
)
