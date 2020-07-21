import React, { useState } from 'react'
import { string } from 'prop-types'
import cn from 'classnames'

import styled from '@emotion/styled'
import styles from './Dropdown.styles'

import { TypeInquiryConsumer } from '../../../../../utils/typeInquiryContext'
import { L10nConsumer } from '../../../../../utils/l10nProvider'

import items from '../../../../../data/contact-us/typeInquiry'

const Dropdown = ({ className, testid, activeItemId, setActiveItemId, l10n: { translations } }) => {
  const [isOpen, toggleIsOpen] = useState(false)

  const handleClick = (event) => {
    event.preventDefault()
    toggleIsOpen((prevState) => !prevState)
  }

  const selectItem = (id) => (event) => {
    event.preventDefault()
    setActiveItemId(id)
    toggleIsOpen(false)
  }

  const { value } = items.filter((item) => item.id === activeItemId)[0]
  return (
    <div className={cn(className, { _active: isOpen })} data-testid={testid}>
      <button type="button" onClick={handleClick} className={cn('button', { _active: isOpen })}>
        {value(translations)}
      </button>

      <div className={cn('label', { _active: isOpen })}>
        {translations.contactUs.form.typeInquiry.label}
      </div>

      {isOpen && (
        <div className="popup">
          {items.map(({ id, value }) => (
            <button
              className={cn('popup-item', { _active: id === activeItemId })}
              type="button"
              key={id}
              onClick={selectItem(id)}
            >
              {value(translations)}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

Dropdown.propTypes = {
  className: string,
  testid: string,
}

export default L10nConsumer(
  TypeInquiryConsumer(styled(Dropdown)`
    ${styles}
  `),
)
