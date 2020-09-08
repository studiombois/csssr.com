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
        <span>CSSSR</span>web-development group of companies
      </Heading>

      <SubHeading className="description" as="p" type="slab">
        <span className="firstLine">Don&apos;t be late for going digital!</span>
        Digital transformation of&nbsp;your&nbsp;business isn’t{' '}
        <span className="wrap">a question</span> of&nbsp;«why», it’s a question of «when».
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
