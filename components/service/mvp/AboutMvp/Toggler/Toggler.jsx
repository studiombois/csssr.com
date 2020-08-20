import React from 'react'
import styled from '@emotion/styled'
import styles from './Toggler.styles'

const Toggler = ({ className, items, onChange, activeIndex }) => {
  return (
    <div className={className}>
      {items.map((item, index) => (
        <button
          key={index}
          type="button"
          onClick={() => onChange(index)}
          data-testid={index === activeIndex ? 'MVP:button:aboutMvp.on' : 'MVP:button:aboutMvp.off'}
        >
          {item}
        </button>
      ))}
    </div>
  )
}

export default styled(Toggler)`
  ${styles}
`
