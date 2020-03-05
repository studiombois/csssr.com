import React from 'react'
import { string, func } from 'prop-types'
import styled from '@emotion/styled'
import styles from './DoubleBottom.styles'

import Addresses from './Addresses'
import Picture from '../../ui-kit/Picture'

import translate from '../../../utils/translate-wrapper'

import continents from '../../../static/images/continents.png?responsive'
import continents_webp from '../../../static/images/continents.png?responsive_and_webp'

const DoubleBottom = ({ className, t }) => (
  <div className={className}>
    <Addresses />
    <Picture
      className="picture"
      images={{ png: continents, webp: continents_webp }}
      fallback={continents}
      alt={t('common:footer.imageAlt.continents')}
    />
  </div>
)

DoubleBottom.propTypes = {
  className: string,
  t: func,
}

export default translate()(styled(DoubleBottom)`
  ${styles}
`)
