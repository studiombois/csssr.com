import React from 'react'
import styled from '@emotion/styled'
import styles from './Clients.styles'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'
import Grid from '../../ui-kit/core-design/Grid'
import ClientsSlider from './ClientsSlider/ClientsSlider'
import ClientsSliderMobile from './ClientsSliderMobile/ClientsSliderMobile'
import { L10nConsumer } from '../../../utils/l10nProvider'
import { bool } from 'prop-types'

const Clients = ({ className, isMobile, l10n: { translations } }) => (
  <Grid as="section" className={className}>
    <h2
      id="clients"
      className="font_h2-slab"
      dangerouslySetInnerHTML={{ __html: translations.dev.clients.title }}
    />
    <p
      className="font_subhead-regular"
      dangerouslySetInnerHTML={{ __html: translations.dev.clients.text1 }}
    />
    {isMobile ? <ClientsSliderMobile /> : <ClientsSlider />}
  </Grid>
)

Clients.propTypes = {
  isMobile: bool,
}

export default L10nConsumer(
  MsBrowserConsumer(styled(Clients)`
    ${styles}
  `),
)
