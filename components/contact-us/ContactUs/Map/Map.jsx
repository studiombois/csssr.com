import React, { useState } from 'react'
import cn from 'classnames'
import { string } from 'prop-types'
import { Global } from '@emotion/core'

import Tabs from './Tabs'
import Address from './Address'

import styled from '@emotion/styled'
import styles, { backgroundImagesStyles } from './Map.styles'

import tabs from '../../../../data/contact-us/tabs'
import addresses from '../../../../data/contact-us/address'

const Map = ({ className }) => {
  const [activeItem, setActiveItem] = useState('sg')

  return (
    <div className={className}>
      <Global styles={backgroundImagesStyles} />
      <Tabs items={tabs} activeItem={activeItem} handleClick={setActiveItem} />
      <Address addresses={addresses[activeItem]} />
      <span className={cn('map', `map-${activeItem}`)} />
    </div>
  )
}

Map.propTypes = {
  className: string,
}

export default styled(Map)`
  ${styles}
`
