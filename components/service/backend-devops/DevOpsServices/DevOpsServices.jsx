import React from 'react'
import { object, string } from 'prop-types'
import styled from '@emotion/styled'

import Grid from '../../../ui-kit/core-design/Grid'
import SubHeading from '../../../ui-kit/core-design/SubHeading'
import Heading from '../../../ui-kit/core-design/Heading'
import Text from '../../../ui-kit/core-design/Text'
import PictureForAllResolutions from '../../../ui-kit/PictureForAllResolutions'
import Solution from './Solution'
import styles from './DevOpsServices.styles'

import { MsBrowserConsumer } from '../../../../utils/msBrowserProvider'
import { DeviceConsumer } from '../../../../utils/deviceProvider'
import { L10nConsumer } from '../../../../utils/l10nProvider'

const DevOpsServices = ({
  className,
  id,
  content: { heading, subtitle, description, images, imgAlt, solutions },
  l10n: { translations },
}) => {
  return (
    <>
      <Grid className={className} as="section" id={id}>
        <Heading
          as="h2"
          type="slab"
          size="m"
          dangerouslySetInnerHTML={{ __html: heading(translations) }}
          className="title"
        />

        <SubHeading
          as="p"
          type="slab"
          dangerouslySetInnerHTML={{ __html: subtitle(translations) }}
          className="subtitle"
        />

        <Text
          type="regular"
          size="m"
          dangerouslySetInnerHTML={{ __html: description(translations) }}
          className="description"
        />
        <PictureForAllResolutions
          images={images}
          fallback={images['desktop.l'].png}
          alt={imgAlt(translations)}
          className="img"
        />
      </Grid>

      <Solution content={solutions} />
    </>
  )
}

DevOpsServices.propTypes = {
  className: string,
  id: string,
  content: object,
  solutions: object,
}

export default L10nConsumer(
  DeviceConsumer(
    MsBrowserConsumer(styled(DevOpsServices)`
      ${styles}
    `),
  ),
)
