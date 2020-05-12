import React, { Fragment } from 'react'
import { array, string } from 'prop-types'
import cn from 'classnames'
import { L10nConsumer } from '../../../utils/l10nProvider'
import styled from '@emotion/styled'
import styles from './Description.styles'
import Grid from '../../ui-kit/core-design/Grid'
import Text from '../../ui-kit/core-design/Text'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const Description = ({ parentClassName, className, description, l10n: { translations } }) => (
  <Grid className={cn(className, parentClassName)}>
    {description.map(({ icon: Icon, text }, index) => (
      <Fragment key={text}>
        <Icon className={`icon-column-${index + 1}`} />

        <Text
          type="regular"
          size="m"
          dangerouslySetInnerHTML={{ __html: text(translations) }}
          className={cn(`text-column-${index + 1} `, 'text')}
        />
      </Fragment>
    ))}
  </Grid>
)

Description.propTypes = {
  className: string,
  description: array,
}

export default L10nConsumer(
  MsBrowserConsumer(styled(Description)`
    ${styles}
  `),
)
