import React, { useState } from 'react'
import { string, func } from 'prop-types'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './DoubleBottom.styles'

import Addresses from './Addresses'
import Picture from '../../ui-kit/Picture'

import translate from '../../../utils/translate-wrapper'

import continents from '../../../static/images/continents.png?responsive'
import continents_webp from '../../../static/images/continents.png?responsive_and_webp'

const pins = [
  {
    id: 'singapore'
  },
  {
    id: 'russia'
  },
  {
    id: 'estonia'
  }
]

const DoubleBottom = ({ className, t}) => {
  const [hoveredAddress, setHoveredAddress] = useState(null)

  return (
    <div className={className}>
      <Addresses setHoveredAddress={setHoveredAddress}/>
        <div className={'map-wrapper'}>
          <div className={'map'}>
            <Picture
              className="picture"
              images={{ png: continents, webp: continents_webp }}
              fallback={continents}
              alt={t('common:footer.imageAlt.continents')}
            />

            {pins.map(({id}) => <span
                                  key={id}
                                  className={cn(`pin pin_${id}`, {
                                    'pin_hovered': id === hoveredAddress,
                                  })}
                                />)}
          </div>
        </div>
    </div>
  )
}

DoubleBottom.propTypes = {
  className: string,
  t: func,
}

export default translate(styled(DoubleBottom)`
  ${styles}
`)
