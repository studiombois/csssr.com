import React from 'react'
import { string, object, func } from 'prop-types'
import translate from '../../../utils/translate-wrapper'
import styled from '@emotion/styled'
import styles from './Greeting.styles'
import Grid from '../../ui-kit/core-design/Grid'
import Text from '../../ui-kit/core-design/Text'
import Heading from '../../ui-kit/core-design/Heading'
import Button from '../../ui-kit/core-design/ButtonLink'
import PictureForAllResolutions from '../../ui-kit/PictureForAllResolutions'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'
import { DeviceConsumer } from '../../../utils/deviceProvider'

const Greeting = ({
  t,
  className,
  id,
  content: { heading, text, button, images, imgAlt },
  isMobile,
  isTablet,
}) => {
  const textType = isMobile || isTablet ? 'regular' : 'strong'

  return (
    <Grid className={className} as="section" id={id}>
      <Heading.H1
        type="slab"
        size="l"
        dangerouslySetInnerHTML={{ __html: t(heading) }}
        className="heading"
      />

      <Text
        type={textType}
        size="m"
        dangerouslySetInnerHTML={{ __html: t(text) }}
        className="text"
      />

      <PictureForAllResolutions
        images={images}
        fallback={images['desktop.l'].png}
        alt={t(imgAlt)}
        className="image"
      />

      <Button className="button" kind="primary">
        {t(button)}
      </Button>
    </Grid>
  )
}

Greeting.propTypes = {
  t: func,
  className: string,
  id: string,
  content: object,
}

export default translate()(
  DeviceConsumer(
    MsBrowserConsumer(styled(Greeting)`
      ${styles}
    `),
  ),
)
