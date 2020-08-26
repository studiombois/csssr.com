import React from 'react'
import styled from '@emotion/styled'
import cn from 'classnames'

import styles from './FeatureButton.styles'

const FeatureButton = ({
  className,
  text,
  d,
  i,
  srcSet,
  onClick,
  clicked,
  onMouseOver,
  onMouseOut,
  mobileSrcSet,
  im,
  imageAlt,
}) => {
  return (
    <div className={className} onClick={onClick} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      <img src={i} srcSet={srcSet} alt={imageAlt} className="image" />
      <img src={im} srcSet={mobileSrcSet} alt={imageAlt} className="mobile-image" />

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
