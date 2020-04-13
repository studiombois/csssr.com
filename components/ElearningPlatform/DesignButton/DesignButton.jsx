import React from 'react'
import styled from '@emotion/styled'

import styles from './DesignButton.styles'

const DesignButton = ({ className, t, icon, onMouseEnter, onMouseLeave }) => {
  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={className}>
      <img src={icon} alt="icon" />
      <p className="font-p-4">{t}</p>
    </div>
  )
}

export default styled(DesignButton)`
  ${styles}
`
