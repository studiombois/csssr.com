import React from 'react'
import styled from '@emotion/styled'
import styles from './ClientsSliderMobile.styles'
import Grid from '../../../ui-kit/core-design/Grid'
import ClientsLogosListMobile from '../ClientsLogosListMobile'

const ClientsSliderMobile = ({ className }) => (
  <div className={className}>
    <Grid as="ul">
      <ClientsLogosListMobile />
    </Grid>
  </div>
)

export default styled(ClientsSliderMobile)`
  ${styles}
`
