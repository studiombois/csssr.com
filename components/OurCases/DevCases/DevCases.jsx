import React from 'react'
import { object, string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './DevCases.styles'
import Grid from '../../ui-kit/core-design/Grid'
import Case from './Case'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'
import { L10nConsumer } from '../../../utils/l10nProvider'
import { DeviceConsumer } from '../../../utils/deviceProvider'
import casesContent from '../../../data/our-cases/devCases'

const DevCases = ({ className }) => {
  return (
    <Grid className={className} as="section">
      {casesContent.map((content, index) => (
        <Case key={index} content={content} />
      ))}
    </Grid>
  )
}

DevCases.propTypes = {
  className: string,
  pageName: string,
  content: object,
}

export default L10nConsumer(
  DeviceConsumer(
    MsBrowserConsumer(styled(DevCases)`
      ${styles}
    `),
  ),
)
