import React from 'react'
import styled from '@emotion/styled'
import styles from './Toggler.styles'

const Toggler = ({ className, items, onChange }) => (
  <div className={className}>
    {items.map((item, index) => (
      <button key={index} type="button" onClick={() => onChange(index)}>
        {item}
      </button>
    ))}
  </div>
)

export default styled(Toggler)`
  ${styles}
`
