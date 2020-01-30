import React, { Fragment } from 'react'
import { string, func } from 'prop-types'
import translate from '../../../utils/translate-wrapper'
import styled from '@emotion/styled'
import styles from './Description.styles'
import Grid from '../../ui-kit/core-design/Grid'
import Text from '../../ui-kit/core-design/Text'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const Description = ({ t, className, description }) => (
  <Grid className={className}>
    {description.map(({ icon: Icon, text }, index) => (
      <Fragment key={text}>
        <Icon className={`icon-column-${index + 1}`} />

        <Text
          type="regular"
          dangerouslySetInnerHTML={{ __html: t(text) }}
          className={`text-column-${index + 1}`}
        />
      </Fragment>
    ))}
  </Grid>
)

Description.propTypes = {
  t: func,
  className: string,
  description: string,
}

export default translate()(
  MsBrowserConsumer(styled(Description)`
    ${styles}
  `),
)
