import React from 'react'
import cn from 'classnames'
import styled from '@emotion/styled'

import { L10nConsumer } from '../../../utils/l10nProvider'
import { DeviceConsumer } from '../../../utils/deviceProvider'
import styles from './Covid19Popup.styles'

const Covid19Popup = ({ className, isMobile }) => (
  <div className={cn(className)}>
    <p className="title">
      Our response
      <br />
      to&nbsp;the outbreak
    </p>
    <p className="subtitle">
      Free remote work consulting
      <br />
      Front-end performance optimization
      <br />
      Friendly pricing
    </p>
    <a href="/en/covid-19">{isMobile ? 'Our response to the outbreak' : 'Learn more >>>'}</a>
  </div>
)

export default styled(L10nConsumer(DeviceConsumer(Covid19Popup)))`
  ${styles}
`
