import React from 'react'
import { string } from 'prop-types'
import { L10nConsumer } from '../../../../utils/l10nProvider'
import styled from '@emotion/styled'
import styles from './ClientLogo.styles'

const ClientLogo = ({ className, clientId, l10n: { translations } }) => (
  <img
    className={className}
    src={require(`../../../../static/icons/dev/clients/${clientId}.svg`).default}
    alt={translations.dev.clients.imgAlts[clientId]}
  />
)

ClientLogo.propTypes = {
  clientId: string,
}

export default styled(L10nConsumer(ClientLogo))`
  ${styles}
`
