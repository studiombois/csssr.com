import React from 'react'
import { func, object, string } from 'prop-types'
import translate from '../../../../utils/translate-wrapper'
import styled from '@emotion/styled'
import styles from './Hero.styles'
import Grid from '../../../ui-kit/core-design/Grid'
import Text from '../../../ui-kit/core-design/Text'
import Heading from '../../../ui-kit/core-design/Heading'
import ContactButton from '../../../ContactButton'
import PictureForAllResolutions from '../../../ui-kit/PictureForAllResolutions'
import { MsBrowserConsumer } from '../../../../utils/msBrowserProvider'
import { DeviceConsumer } from '../../../../utils/deviceProvider'

const Hero = ({
  t,
  className,
  pageName,
  id,
  content: { heading, description, button, images, imgAlt },
}) => {
  return (
    <Grid className={className} as="section" id={id}>
      <Heading.H1
        type="slab"
        size="l"
        dangerouslySetInnerHTML={{ __html: t(heading) }}
        className="heading"
      />

      <Text
        type="strong"
        size="m"
        dangerouslySetInnerHTML={{ __html: t(description) }}
        className="text"
      />

      <PictureForAllResolutions
        images={images}
        fallback={images['desktop.l'].png}
        alt={t(imgAlt)}
        className="image"
      />

      <ContactButton
        className="button"
        pageName={pageName}
        dangerouslySetInnerHTML={{ __html: t(button) }}
      />
    </Grid>
  )
}

Hero.propTypes = {
  t: func,
  className: string,
  id: string,
  content: object,
}

export default translate(
  DeviceConsumer(
    MsBrowserConsumer(styled(Hero)`
      ${styles}
    `),
  ),
)
