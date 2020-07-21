import React from 'react'
import cn from 'classnames'
import { string } from 'prop-types'
import { Global } from '@emotion/core'

import Tabs from './Tabs'
import Address from './Address'

import styled from '@emotion/styled'
import styles, { backgroundImagesStyles } from './Map.styles'
import BookACall from '../../BookACall'

import { MapConsumer } from '../../../../utils/mapContext'

const Map = ({ className, activeAddressId }) => {
  return (
    <aside className={className}>
      <Global styles={backgroundImagesStyles} />

      <Tabs />
      <BookACall className="book-a-call" profileId="anastasia_ignatenko" canBookACall />
      <Address />
      <span className={cn('map', `map-${activeAddressId}`)} />
    </aside>
  )
}

Map.propTypes = {
  className: string,
}

export default MapConsumer(styled(Map)`
  ${styles}
`)
