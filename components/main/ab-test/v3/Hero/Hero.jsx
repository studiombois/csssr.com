import React from 'react'
import { string } from 'prop-types'

import { Global } from '@emotion/core'
import styled from '@emotion/styled'
import styles, { backgroundImagesStyles } from './Hero.styles'

import { DeviceConsumer } from '../../../../../utils/deviceProvider'
import { MsBrowserConsumer } from '../../../../../utils/msBrowserProvider'

import Heading from '../../../../ui-kit/core-design/Heading'
import SubHeading from '../../../../ui-kit/core-design/SubHeading'
import Grid from '../../../../ui-kit/core-design/Grid'

const Hero = ({ className, isMobile }) => (
  <section className={`${className} hero-wrap`}>
    <Grid>
      <Heading className="title" as="h1" type="slab" size={isMobile ? 'm' : 'l'}>
        CSSSR is a leading <br /> web development company in&nbsp;ASEAN and EU countries
      </Heading>

      <SubHeading className="description" as="p" type="slab">
        <span>We know how to help busnesses in&nbsp;digital transformation.</span>
        The better the foundation — the better the building. Choose the right partner!
      </SubHeading>

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
