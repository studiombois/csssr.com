import React from 'react'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './FeatureButton.styles'

const FeatureButton = ({
  className,
  i,
  srcSet,
  im,
  mobileSrcSet,
  text,
  d,
  onMouseOver,
  isActive,
  imageAlt,
}) => {
  return (
    <div
      className={cn(className, {
        active: isActive,
      })}
      onMouseOver={onMouseOver}
    >
      <img src={i} srcSet={srcSet} alt={imageAlt} className="image" />
      <img src={im} srcSet={mobileSrcSet} alt={imageAlt} className="mobile-image" />

      <div className="wrapper">
        <p className="font-p-4 title">{text}</p>
        <p className="font-p-2">{d}</p>
      </div>
    </div>
  )
}

export default styled(FeatureButton)`
  ${styles}
`
