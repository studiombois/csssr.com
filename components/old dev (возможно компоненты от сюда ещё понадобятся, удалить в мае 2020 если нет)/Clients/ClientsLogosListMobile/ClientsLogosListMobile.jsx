import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import styles from './ClientsLogosListMobile.styles'
import ClientLogo from '../ClientLogo/ClientLogo'
import { L10nConsumer } from '../../../../utils/l10nProvider'
import clientsGroups from '../../../../data/dev/clientsGroups'

const ClientsLogosListMobile = ({ className, l10n: { translations } }) =>
  clientsGroups.map((clientsGroup, index) => (
    <li
      key={clientsGroup.id}
      className={className}
      css={css`
        grid-column: ${index * 5 + 1} / span 4;
        -ms-grid-column: ${index * 5 + 1 + (index * 5 + 1 - 1)};
        -ms-grid-column-span: 7;
      `}
    >
      <h3 dangerouslySetInnerHTML={{ __html: translations.dev.tabs[clientsGroup.id] }} />

      <ul className="logos">
        {clientsGroup.clients.map((clientId) => (
          <li className="logo" key={clientId}>
            <ClientLogo clientId={clientId} />
          </li>
        ))}
      </ul>
    </li>
  ))

export default styled(L10nConsumer(ClientsLogosListMobile))`
  ${styles}
`
