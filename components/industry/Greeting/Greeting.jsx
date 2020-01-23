import React from 'react'
import { string, object, func } from 'prop-types'
import translate from '../../../utils/translate-wrapper'
import styled from '@emotion/styled'
import styles from './Greeting.styles'
import Grid from '../../ui-kit/core-design/Grid'
import Text from '../../ui-kit/core-design/Text'
import Heading from '../../ui-kit/core-design/Heading'
import Button from '../../ui-kit/core-design/Button'
import PictureForAllResolutions from '../../ui-kit/PictureForAllResolutions'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const Greeting = ({ t, className, id, content: { heading, text, button, images, imgAlt } }) => (
  <Grid className={className} as="section" id={id}>
    <Heading.H1
      type="slab"
      size="l"
      dangerouslySetInnerHTML={{ __html: t(heading) }}
      className="heading"
    />

    <Text type="strong" size="m" dangerouslySetInnerHTML={{ __html: t(text) }} className="text" />

    <PictureForAllResolutions
      images={images}
      fallback={images['desktop.all'].png}
      alt={t(imgAlt)}
      className="image"
    />

    <Button className="button">{t(button)}</Button>
  </Grid>
)

Greeting.propTypes = {
  t: func,
  className: string,
  id: string,
  content: object,
}

export default translate()(
  MsBrowserConsumer(styled(Greeting)`
    ${styles}
  `),
)
