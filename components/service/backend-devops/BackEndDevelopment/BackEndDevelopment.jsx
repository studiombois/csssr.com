import React from 'react'
import { func, object, string } from 'prop-types'
import translate from '../../../../utils/translate-wrapper'
import styled from '@emotion/styled'
import styles from './BackEndDevelopment.styles'
import Grid from '../../../ui-kit/core-design/Grid'
import SubHeading from '../../../ui-kit/core-design/SubHeading'
import Heading from '../../../ui-kit/core-design/Heading'
import PictureForAllResolutions from '../../../ui-kit/PictureForAllResolutions'
import { MsBrowserConsumer } from '../../../../utils/msBrowserProvider'
import { DeviceConsumer } from '../../../../utils/deviceProvider'

const BackEndDevelopment = ({
  t,
  className,
  id,
  content: { heading, description, images, imgAlt },
  isMobile,
  isTablet,
}) => {
  const textType = isMobile || isTablet ? 'regular' : 'strong'

  return (
    <Grid className={className} as="section" id={id}>
      <Heading
        as="h2"
        type="slab"
        size="m"
        dangerouslySetInnerHTML={{ __html: t(heading) }}
        className="heading"
      />
      <SubHeading
        as="p"
        type="slab"
        dangerouslySetInnerHTML={{ __html: t(description) }}
        className="text"
      />
      <PictureForAllResolutions
        images={images}
        fallback={images['desktop.l'].png}
        alt={t(imgAlt)}
        className="image"
      />
    </Grid>
  )
}

BackEndDevelopment.propTypes = {
  t: func,
  className: string,
  id: string,
  content: object,
}

export default translate(
  DeviceConsumer(
    MsBrowserConsumer(styled(BackEndDevelopment)`
      ${styles}
    `),
  ),
)
