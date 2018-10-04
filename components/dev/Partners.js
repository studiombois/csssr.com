import React, { Fragment } from 'react'
import LinksList from './LinksList'

// TODO: Не забыть заменить ссылки перед деплоем, удалить это сообщение после
const iTcompaniesLinks = [
  { href: 'https://www.kaspersky.ru/', label: 'Kaspersky Lab' },
  { href: 'https://yandex.com/', label: 'Yandex' },
]

const realEstateLinks = [
  { href: 'https://urbangroup.ru/', label: 'Urban Group' },
  { href: 'https://www.cian.ru/', label: 'CIAN' },
]

const financeAndBankingLinks = [
  { href: 'https://www.tinkoff.ru/', label: 'Tinkoff Bank' },
  { href: 'https://bcs.ru/', label: 'BCS Financial Group' },
  { href: 'https://www.sberbank.ru/ru/person', label: 'Sberbank' },
  { href: 'https://alfabank.ru/', label: 'Alfa-Bank' },
  { href: 'https://www.sravni.ru/', label: 'sravni.ru' },
]

const othersLinks = [
  { href: 'https://www.renins.com/', label: 'Renaissance Insurance' },
  { href: 'https://www.s7.ru/ru/', label: 'S7 Airlines' },
  { href: 'https://www.mos.ru/', label: 'mos.ru' },
]

const telecomLinks = [
  { href: 'https://www.yota.ru/', label: 'Yota' },
  { href: 'https://yotaphone.com/', label: 'Yota Devices' },
  { href: 'https://www.qtech.ru/', label: 'Qtech' },
]

export default () =>
  <Fragment>
    <section className='grid-container'>
      <h2 id='customers' className='font_h2-slab'>
        More than 450 completed projects in&nbsp;different industries
      </h2>

      <div className='column'>
        <div className='link-list-wrapper'>
          <LinksList
            title='IT companies'
            links={iTcompaniesLinks}
          />
        </div>

        <LinksList
          title='Real Estate'
          links={realEstateLinks}
        />
      </div>

      <div className='column'>
        <div className='link-list-wrapper'>
          <LinksList
            title='Finance & banking'
            links={financeAndBankingLinks}
          />
        </div>

        <LinksList
          title='Others'
          links={othersLinks}
        />
      </div>

      <div className='column'>
        <LinksList
          title='Telecom'
          links={telecomLinks}
        />
      </div>
    </section>

    <style jsx>{`
      section {
        margin-left: auto;
        margin-right: auto;
        padding-left: 3rem;
        padding-right: 3rem;
        padding-top: 8.5rem;
        width: 1888px;
      }

      h2 {
        grid-column: 4 / span 6;
        grid-row: 1;
        margin-bottom: 6.5rem;
        text-align: center;
      }

      .column {
        grid-row: 2
      }

      .column:nth-of-type(1) {
        grid-column: 3 / span 3;
      }

      .column:nth-of-type(2) {
        grid-column: 6 / span 3;
      }

      .column:nth-of-type(3) {
        grid-column: 9 / span 3;
      }

      .link-list-wrapper {
        margin-bottom: 5rem;
      }

      @media (min-width: 1360px) and (max-width: 1919px) {
        section {
          width: 1344px;
          padding-left: 0.5rem;
          padding-right: 0.5rem;
        }

        h2 {
          grid-column: 3 / span 8;
        }

        .link-list-wrapper {
          margin-bottom: 4.5rem;
        }
      }

      @media (max-width: 1359px) {
        section {
          padding-left: 1rem;
          padding-right: 1rem;
          width: 1264px;
        }

        h2 {
          grid-column: 3 / span 8;
        }

        .link-list-wrapper {
          margin-bottom: 4.5rem;
        }
      }
    `}</style>
  </Fragment>
