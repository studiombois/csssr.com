import React from 'react'
import cn from 'classnames'
import { string, object } from 'prop-types'

import { L10nConsumer } from '../../../../../utils/l10nProvider'
import { MapConsumer } from '../../../../../utils/mapContext'

import styled from '@emotion/styled'
import styles from './Tabs.styles'

import tabs from '../../../../../data/contact-us/tabs'

const Tabs = ({
  className,
  l10n: { translations },
  activeAddressId,
  setActiveAddressId,
  testId,
}) => {
  return (
    <div className={className}>
      {tabs.map(({ id, value }) => (
        <button
          className={cn('item', { _active: activeAddressId === id })}
          key={id}
          type="button"
          onClick={() => setActiveAddressId(id)}
          data-testid={`${id}-${testId}`}
        >
          {value(translations)}
        </button>
      ))}
    </div>
  )
}

Tabs.propTypes = {
  className: string,
  l10n: object,
  testId: string,
}

export default L10nConsumer(
  MapConsumer(styled(Tabs)`
    ${styles}
  `),
)
