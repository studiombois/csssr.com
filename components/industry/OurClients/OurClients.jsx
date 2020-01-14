import React from 'react'
import styled from '@emotion/styled'
import styles from './OurClients.styles'
import Grid from '../../ui-kit/core-design/Grid'
import Heading from '../../ui-kit/core-design/Heading'
import PictureForAllResolutions from '../../ui-kit/PictureForAllResolutions'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const OurClients = ({
  className,
  content: {
    heading,
    images: { desktop_all, desktop_m, desktop_s, tablet_all, mobile_all, fallback, altImg },
  },
}) => (
  <Grid className={className} as="section" id="greeting">
    <Heading.H2
      type="slab"
      size="l"
      dangerouslySetInnerHTML={{ __html: heading }}
      className="heading"
    />

    <PictureForAllResolutions
      images={{
        'desktop.all': desktop_all,
        'desktop.m': desktop_m,
        'desktop.s': desktop_s,
        'tablet.all': tablet_all,
        'mobile.all': mobile_all,
      }}
      fallback={fallback}
      alt={altImg}
      className="image"
    />
  </Grid>
)

export default styled(MsBrowserConsumer(OurClients))`
  ${styles}
`
