import React, { useEffect, useState } from 'react'
import { bool, func, string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Addresses.styles'

import Heading from '../../../ui-kit/core-design/Heading'
import Text from '../../../ui-kit/core-design/Text'

import translate from '../../../../utils/translate-wrapper'
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

const Addresses = ({ className, isTablet, isMobile, t, isIe11, setHoveredAddress }) => {
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
              dangerouslySetInnerHTML={{ __html: t(`common:footer.addresses.${id}.title`) }}
            />

            <Text
              className="address"
              dangerouslySetInnerHTML={{ __html: t(`common:footer.addresses.${id}.address`) }}
              size={textSize}
              type="regular"
            />

            {id !== 'estonia' && (
              <Link
                className="phone"
                dangerouslySetInnerHTML={{ __html: t(`common:footer.addresses.${id}.phone`) }}
                href={`tel:${t(`common:footer.addresses.${id}.phone`)}`}
                size={textSize}
                type="list"
              />
            )}

            {id === 'singapore' && (
              <Text
                className="status"
                dangerouslySetInnerHTML={{ __html: t(`common:footer.addresses.${id}.status`) }}
                type="regular"
                size={textSize}
              />
            )}
            {!isIe11 && 
              <Text className="time" type="regular" size={textSize}>
                {time.toLocaleTimeString([], { timeZone: timezoneOffsetsByAddressId[id], hour: '2-digit', minute: '2-digit' })}
              </Text>
            }
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
  t: func,
}

export default translate(
  DeviceConsumer(
    MsBrowserConsumer(
      styled(Addresses)`
        ${styles}
    `)
  ),
)
