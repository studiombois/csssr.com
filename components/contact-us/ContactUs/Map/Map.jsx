import React from 'react'
import cn from 'classnames'
import { string } from 'prop-types'
import { Global } from '@emotion/core'

import Tabs from './Tabs'
import Address from './Address'

import styled from '@emotion/styled'
import styles, { backgroundImagesStyles } from './Map.styles'

import { MapConsumer } from '../../../../utils/mapContext'

const Map = ({ className, activePinId }) => {
  return (
    <div className={className}>
      <Global styles={backgroundImagesStyles} />
      <Tabs />
      <Address />
      <span className={cn('map', `map-${activePinId}`)} />
    </div>
  )
}

Map.propTypes = {
  className: string,
}

export default MapConsumer(styled(Map)`
  ${styles}
`)
