import React from 'react'
import ClientLogo from './ClientLogo'
import { arrayOf, string } from 'prop-types'

const ClientsLogosList = ({ clients }) => {
  const numberOfRows = Math.ceil(clients.length / 4)

  return (
    <ul>
      {clients.map(clientId =>
        <li key={clientId}>
          <ClientLogo clientId={clientId} />
        </li>
      )}
      <style jsx>{`
        ul {
          // высоту строки умножаем на количеество строк
          // и прибавляем высоту отступа между строк
          height: ${(9.5 * numberOfRows) + (1.5 * (numberOfRows - 1))}rem;
        }

        @media (min-width: 1360px) and (max-width: 1919px) {
          ul {
            height: ${(7.5 * numberOfRows) + (1.5 * (numberOfRows - 1))}rem;
          }
        }

        @media (min-width: 1280px) and (max-width: 1359px) {
          ul {
            height: ${(7 * numberOfRows) + (1.5 * (numberOfRows - 1))}rem;
          }
        }

        @media (max-width: 1279px) {
          ul {
            height: ${(5 * numberOfRows) + (1 * (numberOfRows - 1))}rem;
          }
        }
      `}</style>
      <style jsx>{`
        ul {
          grid-column: 3 / span 8;
          margin-top: 2.5rem;
          display: flex;
          justify-content: center;
          align-content: space-between;
          flex-wrap: wrap;
          transition: height 100ms linear;
        }

        li {
          width: 17rem;
          height: 9.5rem;
        }

        li:not(:nth-child(4n)) {
          margin-right: 2rem;
        }

        li:nth-child(n + 5) {
          margin-top: 1.5rem;
        }

        li:last-child {
          margin-right: 0;
        }

        @media (min-width: 1360px) and (max-width: 1919px) {
          li {
            width: 13rem;
            height: 7.5rem;
          }

          li:not(:nth-child(4n)) {
            margin-right: 1rem;
          }
        }

        @media (min-width: 1280px) and (max-width: 1359px) {
          li {
            width: 12rem;
            height: 7rem;
          }

          li:not(:nth-child(4n)) {
            margin-right: 1rem;
          }
        }

        @media (max-width: 1279px) {
          ul {
            margin-top: 1.5rem;
          }

          li {
            width: 9rem;
            height: 5rem;
          }

          li:not(:nth-child(4n)) {
            margin-right: 1rem;
          }

          li:nth-child(n + 5) {
            margin-top: 1rem;
          }
        }
      `}</style>
      <style jsx>{`
        :global(.ie11) ul {
          -ms-grid-column: 5;
          -ms-grid-column-span: 15;
          -ms-grid-row: 4;
        }
      `}</style>
    </ul>
  )
}


ClientsLogosList.propTypes = {
  clients: arrayOf(string),
}

export default ClientsLogosList
