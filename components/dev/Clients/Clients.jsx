import React from 'react'
import styled from '@emotion/styled'
import styles from './Clients.styles'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'
import Grid from '../../ui-kit/core-design/Grid'
import ClientsSlider from './ClientsSlider/ClientsSlider'
import ClientsSliderMobile from './ClientsSliderMobile/ClientsSliderMobile'
import translate from '../../../utils/translate-wrapper'
import { bool } from 'prop-types'

const Clients = ({ className, t, isMobile }) => (
  <Grid as="section" className={className}>
    <h2
      id="clients"
      className="font_h2-slab"
      dangerouslySetInnerHTML={{ __html: t('dev:clients.title') }}
    />
    <p
      className="font_subhead-regular"
      dangerouslySetInnerHTML={{ __html: t('dev:clients.text1') }}
    />
    {isMobile ? <ClientsSliderMobile /> : <ClientsSlider />}
  </Grid>
)

Clients.propTypes = {
  isMobile: bool,
}

export default translate()(
  MsBrowserConsumer(styled(Clients)`
    ${styles}
  `),
)
