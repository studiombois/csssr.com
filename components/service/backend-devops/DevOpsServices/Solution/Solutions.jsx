import React from 'react'
import { object, string } from 'prop-types'
import styled from '@emotion/styled'
import cn from 'classnames'

import Grid from '../../../../ui-kit/core-design/Grid'
import Heading from '../../../../ui-kit/core-design/Heading'
import Text from '../../../../ui-kit/core-design/Text'
import styles from './Solutions.styles'

import { MsBrowserConsumer } from '../../../../../utils/msBrowserProvider'
import { DeviceConsumer } from '../../../../../utils/deviceProvider'
import { L10nConsumer } from '../../../../../utils/l10nProvider'

const Solutions = ({ className, content: { heading, cases }, l10n: { translations } }) => {
  return (
    <Grid className={className}>
      <Heading
        as="h2"
        type="regular"
        size="l"
        dangerouslySetInnerHTML={{ __html: heading(translations) }}
        className="title"
      />

      {cases.map(({ id, title, description }) => (
        <div className={cn('case', `case_${id}`)} key={id}>
          <div className="case-top">
            <Heading
              as="h3"
              type="regular"
              size="m"
              dangerouslySetInnerHTML={{ __html: title(translations) }}
              className="case-title"
            />
          </div>

          <Text
            type="regular"
            size="m"
            dangerouslySetInnerHTML={{ __html: description(translations) }}
            className="case-description"
          />
        </div>
      ))}
    </Grid>
  )
}

Solutions.propTypes = {
  content: object,
  className: string,
}

export default L10nConsumer(
  DeviceConsumer(
    MsBrowserConsumer(styled(Solutions)`
      ${styles}
    `),
  ),
)
