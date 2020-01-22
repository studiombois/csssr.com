import React from 'react'
import { string, object } from 'prop-types'
import styled from '@emotion/styled'
import styles from './OurClients.styles'
import Grid from '../../ui-kit/core-design/Grid'
import Heading from '../../ui-kit/core-design/Heading'
import PictureForAllResolutions from '../../ui-kit/PictureForAllResolutions'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const OurClients = ({ className, id, content: { heading, images, altImg } }) => (
  <Grid className={className} as="section" id={id}>
    <Heading.H2
      type="slab"
      size="m"
      dangerouslySetInnerHTML={{ __html: heading }}
      className="heading"
    />

    <PictureForAllResolutions
      images={images}
      fallback={images['desktop.all'].png}
      alt={altImg}
      className="image"
    />
  </Grid>
)

OurClients.propTypes = {
  className: string,
  id: string,
  content: object,
}

export default MsBrowserConsumer(styled(OurClients)`
  ${styles}
`)
