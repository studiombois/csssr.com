import React, { useEffect, useState } from 'react'
import { string, func, bool } from 'prop-types'
import styled from '@emotion/styled'
import moment from 'moment'
import styles from './Addresses.styles'

import Heading from '../../../ui-kit/core-design/Heading'
import Text from '../../../ui-kit/core-design/Text'

import translate from '../../../../utils/translate-wrapper'
import { DeviceConsumer } from '../../../../utils/deviceProvider'
import Link from '../../../ui-kit/core-design/Link'
import ClickOutside from '../../../ClickOutside'

const addressesIds = ['singapore', 'russia', 'russia', 'estonia']
// TODO это может поменяться в будущем
const timezoneOffsetsByAddressId = {
  singapore: 8,
  russia: 3,
  russia_2: 3,
  estonia: 2,
}

const Addresses = ({ className, isTablet, isMobile, t, lng, setHoveredAddress }) => {
  const [time, setTime] = useState(() => moment())

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTime(() => moment())
    }, 1000)

    return () => clearTimeout(timeout)
  })

  const handleResetHoveredAddress = () => setHoveredAddress(null)

  const handleMouseOver = address => event => {
    if (isMobile) {
      event.preventDefault()
      return
    }

    setHoveredAddress(address)
  }

  const handleMouseOut = event => {
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
                Head Office
              />
            )}

            <Text className="time" type="regular" size={textSize}>
              {time.utcOffset(timezoneOffsetsByAddressId[id]).format(`${lng==='ru' ? 'HH:mm': 'hh:mm A' }`)}
            </Text>
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
  DeviceConsumer(styled(Addresses)`
    ${styles}
  `),
)
