import React from 'react'
import { func, object, string } from 'prop-types'
import styled from '@emotion/styled'

import translate from '../../../../utils/translate-wrapper'
import Grid from '../../../ui-kit/core-design/Grid'
import SubHeading from '../../../ui-kit/core-design/SubHeading'
import Heading from '../../../ui-kit/core-design/Heading'
import Text from '../../../ui-kit/core-design/Text'
import PictureForAllResolutions from '../../../ui-kit/PictureForAllResolutions'
import Solution from './Solution'
import styles from './DevOpsServices.styles'

import { MsBrowserConsumer } from '../../../../utils/msBrowserProvider'
import { DeviceConsumer } from '../../../../utils/deviceProvider'

const DevOpsServices = ({
  t,
  className,
  id,
  content: { heading, subtitle, description, images, imgAlt, solutions },
}) => {
  return (
    <>
      <Grid className={className} as="section" id={id}>
        <Heading
          as="h2"
          type="slab"
          size="m"
          dangerouslySetInnerHTML={{ __html: t(heading) }}
          className="title"
        />

        <SubHeading
          as="p"
          type="slab"
          dangerouslySetInnerHTML={{ __html: t(subtitle) }}
          className="subtitle"
        />

        <Text
          type="regular"
          size="m"
          dangerouslySetInnerHTML={{ __html: t(description) }}
          className="description"
        />
        <PictureForAllResolutions
          images={images}
          fallback={images['desktop.l'].png}
          alt={t(imgAlt)}
          className="img"
        />
      </Grid>

      <Solution content={solutions} />
    </>
  )
}

DevOpsServices.propTypes = {
  t: func,
  className: string,
  id: string,
  content: object,
  solutions: object,
}

export default translate(
  DeviceConsumer(
    MsBrowserConsumer(styled(DevOpsServices)`
      ${styles}
    `),
  ),
)
