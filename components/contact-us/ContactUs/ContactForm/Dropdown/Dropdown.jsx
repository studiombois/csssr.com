import React, { useState } from 'react'
import { string, bool, array, func } from 'prop-types'
import cn from 'classnames'

import styled from '@emotion/styled'
import styles from './Dropdown.styles'

const Dropdown = ({ items, className, label, onClick, testid }) => {
  const [isOpen, toggleIsOpen] = useState(false)
  const [activeItemId, setActiveItemId] = useState('new-project')

  const handleClick = (event) => {
    event.preventDefault()

    toggleIsOpen((prevState) => !prevState)
    if (onClick) {
      onClick()
    }
  }

  const selectItem = (id) => (event) => {
    event.preventDefault()
    if (activeItemId != id) {
      setActiveItemId(id)
    }

    toggleIsOpen(false)
  }

  const { value } = items.filter((item) => item.id === activeItemId)[0]

  return (
    <div className={cn(className, { _active: isOpen })} data-testid={testid}>
      <button type="button" onClick={handleClick} className={cn('button', { _active: isOpen })}>
        {value}
      </button>

      <div className={cn('label', { _active: isOpen })}>{label}</div>

      {isOpen && (
        <div className="popup">
          {items.map(({ id, value }) => (
            <button
              className={cn('popup-item', { _active: id === activeItemId })}
              type="button"
              key={id}
              onClick={selectItem(id)}
            >
              {value}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

Dropdown.propTypes = {
  className: string,
  label: string,
  testid: string,
  onClick: func,
  items: array,
  id: string,
  isError: bool,
}

Dropdown.defaultProps = {
  items: [],
}

export default styled(Dropdown)`
  ${styles}
`
