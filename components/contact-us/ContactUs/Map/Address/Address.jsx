import React from 'react'
import cn from 'classnames'
import { string, object } from 'prop-types'

import { L10nConsumer } from '../../../../../utils/l10nProvider'
import { MapConsumer } from '../../../../../utils/mapContext'

import styled from '@emotion/styled'
import styles from './Address.styles'

import { ReactComponent as PinLionIcon } from '../../../../../static/icons/pin-lion.svg'

import addresses from '../../../../../data/contact-us/address'

const Address = ({ className, l10n: { translations }, activeAddressId }) => {
  const { items, id } = addresses[activeAddressId]

  return (
    <div className={cn(className, `_${id}`)} data-testid="Contacts:block.addressInfo">
      {id === 'sg' && <PinLionIcon className="pin" />}

      <div className="addresses">
        {items.map(({ id, value }) => (
          <p
            className="address"
            key={id}
            dangerouslySetInnerHTML={{ __html: value(translations) }}
            data-testid={`Contacts:text:address.${id}`}
          />
        ))}
      </div>

      <p className="text" data-testid={`Contacts:text:meeting`}>
        {translations.contactUs.map.addresses.text}
      </p>
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
