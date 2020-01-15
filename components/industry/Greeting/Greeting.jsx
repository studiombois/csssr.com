import React from 'react'
import { string, object } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Greeting.styles'
import Grid from '../../ui-kit/core-design/Grid'
import Text from '../../ui-kit/core-design/Text'
import Heading from '../../ui-kit/core-design/Heading'
import Button from '../../ui-kit/core-design/Button'
import PictureForAllResolutions from '../../ui-kit/PictureForAllResolutions'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const Greeting = ({ className, id, content: { heading, text, button, images, imgAlt } }) => (
  <Grid className={className} as="section" id={id}>
    <Heading.H1
      type="slab"
      size="l"
      dangerouslySetInnerHTML={{ __html: heading }}
      className="heading"
    />

    <Text type="strong" size="m" dangerouslySetInnerHTML={{ __html: text }} className="text" />

    <PictureForAllResolutions
      images={images}
      fallback={images['desktop.all'].png}
      alt={imgAlt}
      className="image"
    />

    <Button className="button">{button}</Button>
  </Grid>
)

Greeting.propTypes = {
  className: string,
  id: string,
  content: object,
}

export default styled(MsBrowserConsumer(Greeting))`
  ${styles}
`
