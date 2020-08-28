import React from 'react'
import { string } from 'prop-types'

import { Global } from '@emotion/core'
import styled from '@emotion/styled'
import styles, { backgroundImagesStyles } from './Hero.styles'

import { DeviceConsumer } from '../../../../../utils/deviceProvider'
import { MsBrowserConsumer } from '../../../../../utils/msBrowserProvider'

import Grid from '../../../../ui-kit/core-design/Grid'

const Hero = ({ className }) => (
  <section className={`${className} hero-wrap`}>
    <Grid>
      <h1 className="title">
        <strong>CSSSR</strong> is a web development company that provides high quality services
        globally
      </h1>

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
