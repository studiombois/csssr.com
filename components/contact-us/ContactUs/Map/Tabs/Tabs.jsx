import React from 'react'
import cn from 'classnames'
import { string, array, func, object } from 'prop-types'

import { L10nConsumer } from '../../../../../utils/l10nProvider'

import styled from '@emotion/styled'
import styles from './Tabs.styles'

const Tabs = ({ className, items, activeItem, handleClick, l10n: { translations } }) => {
  return (
    <div className={className}>
      {items.map(({ id, value }) => (
        <button
          className={cn('item', { _active: activeItem === id })}
          key={id}
          type="button"
          onClick={() => handleClick(id)}
        >
          {value(translations)}
        </button>
      ))}
    </div>
  )
}

Tabs.propTypes = {
  className: string,
  activeItem: string,
  items: array,
  handleClick: func,
  l10n: object,
}

Tabs.defaultProps = {
  items: [],
}

export default L10nConsumer(styled(Tabs)`
  ${styles}
`)
