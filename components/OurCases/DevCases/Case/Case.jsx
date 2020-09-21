import React from 'react'
import { object, string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Case.styles'
import Text from '../../../ui-kit/core-design/Text'
import Heading from '../../../ui-kit/core-design/Heading'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import { MsBrowserConsumer } from '../../../../utils/msBrowserProvider'
import { L10nConsumer } from '../../../../utils/l10nProvider'
import { DeviceConsumer } from '../../../../utils/deviceProvider'

const Case = ({ className, content: { images, heading, text }, l10n: { translations } }) => {
  return (
    <div className={className}>
      <PictureSmart
        className="logos"
        requireImages={images}
        testid="contactUs:picture:bookACall.avatar"
      />
      <Heading.H2
        type="regular"
        size="l"
        dangerouslySetInnerHTML={{ __html: heading(translations) }}
        className="heading"
      />

      <Text
        type="regular"
        size="s"
        dangerouslySetInnerHTML={{ __html: text(translations) }}
        className="text"
      />
    </div>
  )
}

Case.propTypes = {
  className: string,
  content: object,
}

export default L10nConsumer(
  DeviceConsumer(
    MsBrowserConsumer(styled(Case)`
      ${styles}
    `),
  ),
)
