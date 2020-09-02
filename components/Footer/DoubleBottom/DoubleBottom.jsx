import React, { useState } from 'react'
import { string } from 'prop-types'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './DoubleBottom.styles'

import Addresses from './Addresses'
import Picture from '../../ui-kit/Picture'

import { L10nConsumer } from '../../../utils/l10nProvider'

import continents from '../../../static/images/continents.png?responsive'
import continents_webp from '../../../static/images/continents.png?responsive_and_webp'

const pins = [
  {
    id: 'singapore',
  },
  {
    id: 'russia',
  },
  {
    id: 'russia_2',
  },
  {
    id: 'estonia',
  },
]

const DoubleBottom = ({ className, l10n: { translations } }) => {
  const [hoveredAddress, setHoveredAddress] = useState(null)

  return (
    <div className={className} data-testid="Footer:block.double-bottom">
      <Addresses setHoveredAddress={setHoveredAddress} />
      <div className={'map-wrapper'}>
        <div className={'map'} data-testid="Footer:block.map">
          <Picture
            className="picture"
            images={{ png: continents, webp: continents_webp }}
            fallback={continents}
            alt={translations.common.footer.imgAlt.continents}
          />

          {pins.map(({ id }, index) => (
            <span
              key={`${id}_${index}`}
              className={cn(`pin pin_${id}`, {
                pin_hovered: id === hoveredAddress,
              })}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

DoubleBottom.propTypes = {
  className: string,
}

export default L10nConsumer(styled(DoubleBottom)`
  ${styles}
`)
