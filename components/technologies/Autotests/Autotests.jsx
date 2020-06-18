import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Autotests.styles'
import { L10nConsumer } from '../../../utils/l10nProvider'
import { DeviceConsumer } from '../../../utils/deviceProvider'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

import Heading from '../../ui-kit/core-design/Heading'
import SubHeading from '../../ui-kit/core-design/SubHeading'
import Picture from '../../ui-kit/Picture'
import Grid from '../../ui-kit/core-design/Grid'

import images from '../../../data/technologies/autotests'

const Autotests = ({ className, l10n: { translations } }) => (
  <div className={className}>
    <Grid as="article">
      <Heading
        className="title"
        as="h2"
        type="slab"
        size="m"
        dangerouslySetInnerHTML={{ __html: translations.technologies.autotests.title }}
      />

      <Picture
        className="picture"
        images={images}
        fallback={images.png}
        alt={translations.technologies.imgAlt.autotests}
      />

      <SubHeading
        className="text"
        as="p"
        type="slab"
        dangerouslySetInnerHTML={{ __html: translations.technologies.autotests.text }}
      />
    </Grid>
  </div>
)

Autotests.propTypes = {
  className: string,
}

export default L10nConsumer(
  DeviceConsumer(
    MsBrowserConsumer(styled(Autotests)`
      ${styles}
    `),
  ),
)
