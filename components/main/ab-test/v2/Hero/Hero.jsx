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
        <strong>CSSSR</strong>
        <br /> web development company
      </Heading>

      <SubHeading className="description" as="p" type="slab">
        Though <strong>front-end</strong> development services are our specialty, we provide superb{' '}
        <strong>back-end</strong> and <strong>devops</strong> services, along with design to help
        our clients build top to bottom solutions.
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
