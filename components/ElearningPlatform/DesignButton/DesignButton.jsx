import React from 'react'
import styled from '@emotion/styled'

import styles from './DesignButton.styles'

const DesignButton = ({ className, text, icon, onMouseEnter, onMouseLeave }) => {
  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={className}>
      <img src={icon} alt="icon" loading="lazy" />
      <p className="font-p-4">{text}</p>
    </div>
  )
}

export default styled(DesignButton)`
  ${styles}
`
