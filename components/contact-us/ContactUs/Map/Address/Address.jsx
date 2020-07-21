import React from 'react'
import { string, object } from 'prop-types'

import { L10nConsumer } from '../../../../../utils/l10nProvider'
import { MapConsumer } from '../../../../../utils/mapContext'

import styled from '@emotion/styled'
import styles from './Address.styles'

import { ReactComponent as PinIcon } from '../../../../../static/icons/pin.svg'
import { ReactComponent as PinLionIcon } from '../../../../../static/icons/pin-lion.svg'

import addresses from '../../../../../data/contact-us/address'

const Address = ({ className, l10n: { translations }, activePinId }) => {
  const { items, id } = addresses[activePinId]

  return (
    <div className={className}>
      {id === 'sg' ? <PinLionIcon className="pin" /> : <PinIcon className="pin" />}

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
  l10n: object,
}

export default MapConsumer(
  L10nConsumer(styled(Address)`
    ${styles}
  `),
)
