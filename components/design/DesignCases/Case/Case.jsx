import React, { useState } from 'react'
import { object, string, number } from 'prop-types'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './Case.styles'
import Text from '../../../ui-kit/core-design/Text'
import Heading from '../../../ui-kit/core-design/Heading'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import { L10nConsumer } from '../../../../utils/l10nProvider'
import { DeviceConsumer } from '../../../../utils/deviceProvider'

const Case = ({
  className,
  plug,
  content: { images, imgAlt, heading, text },
  index,
  isMobile,
  l10n: { translations },
}) => {
  const [isTouched, toggleTouchedState] = useState(false)
  const [isSwiping, setIsSwipingState] = useState(false)
  const handleTouchStart = () => {
    if (isMobile) {
      setIsSwipingState(false)
    }
  }
  const handleTouchMove = () => {
    if (isMobile) {
      setIsSwipingState(true)
    }
  }
  const handleTouchEnd = () => {
    if (isMobile && !isSwiping) {
      toggleTouchedState(!isTouched)
    }
  }
  const size =
    index === 0 || index === 3 || index === 4 || index === 7 || index === 8 ? 'small' : 'large'
  const side = (index + 1) % 2 ? 'left' : 'right'

  return (
    <div className={cn(className, size, side, { is_touched: isTouched })}>
      <div
        className="image-wrapper"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
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
        className={`heading ${size}`}
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
  index: number,
}

export default L10nConsumer(
  DeviceConsumer(styled(Case)`
    ${styles}
  `),
)
