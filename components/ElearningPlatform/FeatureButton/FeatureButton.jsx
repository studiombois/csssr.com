import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import cn from 'classnames'

import styles from './FeatureButton.styles'

const FeatureButton = ({ className, t, d, i, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <img src={i} alt="image" />

      <div className="wrapper">
        <p className="font-p-4 title">{t}</p>
        <p className="font-p-2">{d}</p>
      </div>
    </div>
  )
}

export default styled(FeatureButton)`
  ${styles}
`
