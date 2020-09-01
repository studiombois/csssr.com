import React from 'react'
import styled from '@emotion/styled'
import cn from 'classnames'
import { PictureSmart } from '@csssr/csssr.images/dist/react'

import styles from './FeatureButton.styles'

const FeatureButton = ({
  className,
  text,
  d,
  images,
  onClick,
  clicked,
  onMouseOver,
  onMouseOut,
  imageAlt,
}) => {
  return (
    <div className={className} onClick={onClick} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      <PictureSmart className="image" requireImages={images} alt={imageAlt} />

      <div
        className={cn('wrapper', {
          'wrapper-active': clicked === 1,
        })}
      >
        <p className="font-p-4 title">{text}</p>
        <p className="font-p-2">{d}</p>
      </div>
    </div>
  )
}

export default styled(FeatureButton)`
  ${styles}
`
