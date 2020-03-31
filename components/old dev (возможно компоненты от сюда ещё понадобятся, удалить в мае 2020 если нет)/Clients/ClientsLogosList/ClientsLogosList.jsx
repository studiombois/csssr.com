import React from 'react'
import { arrayOf, string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './ClientsLogosList.styles'
import { MsBrowserConsumer } from '../../../../utils/msBrowserProvider'
import ClientLogo from '../ClientLogo'

const ClientsLogosList = ({ className, clients }) => (
  <ul className={className}>
    {clients.map(clientId => (
      <li key={clientId}>
        <ClientLogo clientId={clientId} />
      </li>
    ))}
  </ul>
)

ClientsLogosList.propTypes = {
  clients: arrayOf(string),
}

export default MsBrowserConsumer(styled(ClientsLogosList)`
  ${styles}
`)
