import React from 'react'
import styled from '@emotion/styled'
import styles from './Greeting.styles'
import Grid from '../../ui-kit/core-design/Grid'
import Text from '../../ui-kit/core-design/Text'
import Heading from '../../ui-kit/core-design/Heading'
import Button from '../../ui-kit/core-design/Button'
import PictureForAllResolutions from '../../ui-kit/PictureForAllResolutions'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const Greeting = ({
  className,
  content: {
    heading,
    text,
    button,
    images: { desktop_all, desktop_m, desktop_s, tablet_all, mobile_all, fallback, altImg },
  },
}) => (
  <Grid className={className} as="section" id="greeting">
    <Heading.H1
      type="slab"
      size="l"
      dangerouslySetInnerHTML={{ __html: heading }}
      className="heading"
    />

    <Text type="strong" size="m" dangerouslySetInnerHTML={{ __html: text }} className="text" />

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

    <Button className="button">{button}</Button>
  </Grid>
)

export default styled(MsBrowserConsumer(Greeting))`
  ${styles}
`
