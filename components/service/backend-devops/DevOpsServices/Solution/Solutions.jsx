import React from 'react'
import { object, string, func } from 'prop-types'
import styled from '@emotion/styled'
import cn from 'classnames'

import translate from '../../../../../utils/translate-wrapper'
import Grid from '../../../../ui-kit/core-design/Grid'
import Heading from '../../../../ui-kit/core-design/Heading'
import Text from '../../../../ui-kit/core-design/Text'
import styles from './Solutions.styles'

import { MsBrowserConsumer } from '../../../../../utils/msBrowserProvider'
import { DeviceConsumer } from '../../../../../utils/deviceProvider'

const Solutions = ({ t, className, content: { heading, cases } }) => {
  return (
    <Grid className={className}>
      <Heading
        as="h2"
        type="regular"
        size="l"
        dangerouslySetInnerHTML={{ __html: t(heading) }}
        className="title"
      />

      {cases.map(({ id, title, description }) => (
        <div className={cn('case', `case_${id}`)} key={id}>
          <div className="case-top">
            <Heading
              as="h3"
              type="regular"
              size="m"
              dangerouslySetInnerHTML={{ __html: t(title) }}
              className="case-title"
            />
          </div>

          <Text
            type="regular"
            size="m"
            dangerouslySetInnerHTML={{ __html: t(description) }}
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
  t: func,
}

export default translate(
  DeviceConsumer(
    MsBrowserConsumer(styled(Solutions)`
      ${styles}
    `),
  ),
)
