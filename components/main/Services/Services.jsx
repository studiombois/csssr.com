import React from 'react'
import { bool, string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Services.styles'

// import NextLink from 'next/link'
// import Heading from '../../ui-kit/core-design/Heading'
// import Text from '../../ui-kit/core-design/Text'
import Grid from '../../ui-kit/core-design/Grid'

import { L10nConsumer } from '../../../utils/l10nProvider'
import { DeviceConsumer } from '../../../utils/deviceProvider'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const Services = ({ className /*, l10n: { translations, language } */ }) => {
  return (
    <Grid as="article" className={className} data-testid="Home:block.services">
      Services
    </Grid>
  )
}

Services.propTypes = {
  className: string,
  isMobile: bool,
}

export default L10nConsumer(
  DeviceConsumer(
    MsBrowserConsumer(styled(Services)`
      ${styles}
    `),
  ),
)
