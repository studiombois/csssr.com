import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import cn from 'classnames'

import styles from './FeatureButton.styles'

const FeatureButton = ({ className, t, d, i, srcSet, onClick, clicked }) => {
  return (
    <div className={className} onClick={onClick}>
      <img src={i} srcSet={srcSet} alt="image" />

      <div
        className={cn('wrapper', {
          'wrapper-active': clicked === 1,
        })}
      >
        <p className="font-p-4 title">{t}</p>
        <p className="font-p-2">{d}</p>
      </div>
    </div>
  )
}

export default styled(FeatureButton)`
  ${styles}
`
