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

const Case = ({
  className,
  content: { images, imgAlt, heading, text, plug },
  l10n: { translations },
}) => {
  return (
    <div className={`${className}`}>
      <div className="image-wrapper">
        <PictureSmart className="image" requireImages={images} alt={imgAlt(translations)} />
        <Text
          type="regular"
          size="m"
          dangerouslySetInnerHTML={{ __html: plug(translations) }}
          className="plug"
        />
      </div>

      <Heading.H2
        type="regular"
        size="m"
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
