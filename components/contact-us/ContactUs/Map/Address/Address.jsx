import React from 'react'
import { string, object, shape, array } from 'prop-types'

import { L10nConsumer } from '../../../../../utils/l10nProvider'

import styled from '@emotion/styled'
import styles from './Address.styles'

import { ReactComponent as PinIcon } from '../../../../../static/icons/pin.svg'
import { ReactComponent as PinLionIcon } from '../../../../../static/icons/pin-lion.svg'

const Address = ({ className, addresses: { id, items }, l10n: { translations } }) => {
  const isPinLion = 'sg'
  return (
    <div className={className}>
      {isPinLion == id ? <PinLionIcon className="pin" /> : <PinIcon className="pin" />}

      <div className="addresses">
        {items.map(({ id, value }) => (
          <p
            className="address"
            key={id}
            dangerouslySetInnerHTML={{ __html: value(translations) }}
          />
        ))}
      </div>

      <p className="text">{translations.contactUs.map.addresses.text}</p>
    </div>
  )
}

Address.propTypes = {
  className: string,
  addresses: shape({
    id: string,
    items: array,
  }),
  l10n: object,
}

Address.defaultProps = {
  addresses: {
    id: '',
    items: [],
  },
}

export default L10nConsumer(styled(Address)`
  ${styles}
`)
