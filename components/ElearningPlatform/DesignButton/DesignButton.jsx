import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import cn from 'classnames'

import styles from './DesignButton.styles'

const DesignButton = ({ className, t, icon, onMouseOver, onMouseOut }) => {
    return (
        <div onMouseOver={onMouseOver} onMouseOut={onMouseOut} className={className}>
            <img src={icon} alt="icon" />
            <p className="font-p-4">{t}</p>
        </div>
    )
}

export default styled(DesignButton)`
  ${styles}
`
