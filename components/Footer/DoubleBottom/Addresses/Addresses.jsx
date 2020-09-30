import React, { useEffect, useState } from 'react'
import { bool, string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Addresses.styles'

import Heading from '../../../ui-kit/core-design/Heading'
import Text from '../../../ui-kit/core-design/Text'

import { L10nConsumer } from '../../../../utils/l10nProvider'
import { DeviceConsumer } from '../../../../utils/deviceProvider'
import { MsBrowserConsumer } from '../../../../utils/msBrowserProvider'
import Link from '../../../ui-kit/core-design/Link'
import ClickOutside from '../../../ClickOutside'

const addressesIds = ['singapore', 'russia', 'russia_2', 'estonia']
// TODO это может поменяться в будущем
// Можно эти данные отправлять с сервера при первой загрузке страницы
const timezoneOffsetsByAddressId = {
  singapore: 'Asia/Singapore',
  russia: 'Europe/Moscow',
  russia_2: 'Europe/Moscow',
  estonia: 'Europe/Tallinn',
}

const Addresses = ({
  className,
  isTablet,
  isMobile,
  isIe11,
  setHoveredAddress,
  l10n: { translations },
}) => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTime(new Date())
    }, 1000)

    return () => clearTimeout(timeout)
  })

  const handleResetHoveredAddress = () => setHoveredAddress(null)

  const handleMouseOver = (address) => (event) => {
    if (isMobile) {
      event.preventDefault()
      return
    }

    setHoveredAddress(address)
  }

  const handleMouseOut = (event) => {
    if (isMobile) {
      event.preventDefault()
      return
    }

    setHoveredAddress(null)
  }

  const textSize = isTablet || isMobile ? 'm' : 's'
  return (
    <ClickOutside onOutsideClick={handleResetHoveredAddress}>
      <div className={className}>
        {addressesIds.map((id, index) => (
          <div
            className={`address-item address_${id}`}
            key={`${id}_${index}`}
            onMouseOver={handleMouseOver(id)}
            onMouseLeave={handleMouseOut}
          >
            <Heading
              as="p"
              className="title"
              type="regular"
              size="s"
              dangerouslySetInnerHTML={{ __html: translations.common.footer.addresses[id].title }}
            />

            <Text
              data-testid={`Footer.text.address-${id}`}
              className="address"
              dangerouslySetInnerHTML={{ __html: translations.common.footer.addresses[id].address }}
              size={textSize}
              type="regular"
            />

            {id !== 'estonia' && (
              <Link
                className="phone"
                dangerouslySetInnerHTML={{ __html: translations.common.footer.addresses[id].phone }}
                href={`tel:${translations.common.footer.addresses[id].phone}`}
                size={textSize}
                type="list"
                data-testid={`Footer.link.tel-${id}`}
              />
            )}

            {id === 'singapore' && (
              <Text
                className="status"
                dangerouslySetInnerHTML={{
                  __html: translations.common.footer.addresses[id].status,
                }}
                type="regular"
                size={textSize}
              />
            )}
            {!isIe11 && (
              <Text className="time" type="regular" size={textSize}>
                {time.toLocaleTimeString([], {
                  timeZone: timezoneOffsetsByAddressId[id],
                  hour: '2-digit',
                  minute: '2-digit',
                })}{' '}
                {/* show only hours and minutes, use options with the default locale - use an empty array, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString */}
              </Text>
            )}
          </div>
        ))}
      </div>
    </ClickOutside>
  )
}

Addresses.propTypes = {
  className: string,
  isTable: bool,
  isMobile: bool,
}

export default L10nConsumer(
  DeviceConsumer(
    MsBrowserConsumer(
      styled(Addresses)`
        ${styles}
      `,
    ),
  ),
)
