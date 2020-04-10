import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'

import styles from './List.styles'
import Item from './Item'
import Grid from '../../../../ui-kit/core-design/Grid'
import whatWeDoIcons from '../../../../../data/service/outsourcing-front-end/whatWeDoIcons'

const List = ({ className }) => (
  <Grid as="ul" className={className}>
    {whatWeDoIcons.map((icon, index) => (
      <Item key={index} index={index} icon={icon} />
    ))}
  </Grid>
)

List.propTypes = {
  className: string,
}

export default styled(List)`
  ${styles}
`
