import React, { Fragment } from 'react'
import ClientLogo from './ClientLogo'
import translate from '../../../utils/translate-wrapper'
import clientsGroups from '../../../data/dev/clientsGroups'

const ClientsLogosListMobile = ({ t }) => clientsGroups.map((clientsGroup, index) =>
  <Fragment key={clientsGroup.id}>
    <li className='clients-group'>
      <h3 dangerouslySetInnerHTML={{ __html: t(`dev:tabs.${clientsGroup.id}`) }} />

      <ul className='logos'>
        {clientsGroup.clients.map(clientId =>
          <li className='logo' key={clientId}>
            <ClientLogo clientId={clientId} />
          </li>
        )}
      </ul>
    </li>
    <style jsx>{`
      li.clients-group {
        grid-column: ${index * 5 + 1} / span 4;
      }

      h3 {
        height: 1.75rem;
        border-bottom: 8px solid #345eff;
        font-family: 'Roboto', 'Arial', sans-serif;
        font-size: 0.75rem;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1rem;
        letter-spacing: 0.09375rem;
        text-transform: uppercase;
        color: #345eff;
      }

      .logos {
        display: flex;
        flex-wrap: wrap;
      }

      .logo {
        width: 6.5rem;
        height: 3.5rem;
      }

      .logo:nth-child(odd) {
        margin-right: 0.5rem;
      }

      .logo:nth-child(n + 3) {
        margin-top: 0.5rem;
      }
    `}</style>
  </Fragment>
)

export default translate()(ClientsLogosListMobile)
