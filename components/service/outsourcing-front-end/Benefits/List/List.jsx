import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import { MsBrowserConsumer } from '../../../../../utils/msBrowserProvider'

import styles from './List.styles'
import Item from './Item'
import benefitImages from '../../../../../data/service/outsourcing-front-end/benefitImages'

const List = ({ className }) => (
  <ul className={className}>
    {benefitImages.map((images, index) => (
      <Item key={index} index={index} images={images} />
    ))}
  </ul>
)

List.propTypes = {
  className: string,
}

export default MsBrowserConsumer(styled(List)`
  ${styles}
`)