import React, { Fragment } from 'react'
import LinksList from './LinksList'
import { translate } from 'react-i18next'

// TODO: Не забыть заменить ссылки перед деплоем, удалить это сообщение после
const iTcompaniesLinksEn = [
  { href: 'https://www.kaspersky.com/', label: 'Kaspersky Lab' },
  { href: 'https://yandex.com/', label: 'Yandex' },
]

const iTcompaniesLinksRu = [
  { href: 'https://www.kaspersky.ru/', label: 'Kaspersky Lab' },
  { href: 'https://yandex.ru/', label: 'Яндекс' },
]

const realEstateLinksEn = [
  { href: 'https://urbangroup.ru/', label: 'Urban Group' },
  { href: 'https://www.cian.ru/', label: 'CIAN' },
]

const financeAndBankingLinksEn = [
  { href: 'https://www.tinkoff.ru/eng/', label: 'Tinkoff Bank' },
  { href: 'http://bcsgm.com/en/', label: 'BCS Financial Group' },
  { href: 'https://www.sberbank.ru/en/', label: 'Sberbank' },
  { href: 'https://alfabank.com/', label: 'Alfa-Bank' },
  { href: 'https://www.sravni.ru/', label: 'sravni.ru' },
]

const financeAndBankingLinksRu = [
  { href: 'https://www.tinkoff.ru/', label: 'Тинькофф Банк' },
  { href: 'https://bcs.ru/', label: 'БКС' },
  { href: 'https://www.sberbank.ru/ru/person', label: 'Сбербанк' },
  { href: 'https://alfabank.ru/', label: 'Альфа-Банк' },
  { href: 'https://www.sravni.ru/', label: 'sravni.ru' },
]

const healthLinksRu = [
  { href: 'http://nutrilogic.ru/', label: 'Nutrilogic' },
  { href: 'https://ru.siberianhealth.com/', label: 'Сибирское здоровье' },
]

const othersLinksEn = [
  { href: 'https://www.renins.com/', label: 'Renaissance Insurance' },
  { href: 'https://www.s7.ru/en/', label: 'S7 Airlines' },
  { href: 'https://www.mos.ru/', label: 'mos.ru' },
]

const othersLinksRu = [
  { href: 'https://www.s7.ru/', label: 'S7 Airlines' },
  { href: 'https://www.cian.ru', label: 'ЦИАН' },
  { href: 'https://www.mos.ru/', label: 'mos.ru' },
  { href: 'https://www.tsum.ru/', label: 'ЦУМ' },
]

const telecomLinksEn = [
  { href: 'https://www.yota.ru/', label: 'Yota' },
  { href: null, label: 'Yota Devices' },
  { href: 'https://www.qtech.ru/en/', label: 'Qtech' },
]

const telecomLinksRu = [
  { href: 'https://www.yota.ru/', label: 'Yota' },
  { href: null, label: 'Yota Devices' },
  { href: 'https://www.qtech.ru/', label: 'Qtech' },
]

const Partners = ({ t, lng }) =>
  <Fragment>
    <section className='grid-container'>
      <h2 id='customers' className='font_h2-slab' dangerouslySetInnerHTML={{ __html: t('dev:partners.title') }} />

      <div className='column'>
        {lng !== 'ru' && <div className='link-list-wrapper'>
          <LinksList
            title={t('dev:partners.iTTitle')}
            links={iTcompaniesLinksEn}
          />
        </div>}

        {lng !== 'ru' && <LinksList
          title={t('dev:partners.estateTitle')}
          links={realEstateLinksEn}
        />}

        {lng === 'ru' && <div className='link-list-wrapper'>
          <LinksList
            title={t('dev:partners.iTTitle')}
            links={iTcompaniesLinksRu}
          />
        </div>}

        {lng === 'ru' && <LinksList
          title={t('dev:partners.telecomTitle')}
          links={telecomLinksRu}
        />}
      </div>

      <div className='column'>
        {lng !== 'ru' && <div className='link-list-wrapper'>
          <LinksList
            title={t('dev:partners.financeTitle')}
            links={financeAndBankingLinksEn}
          />
        </div>}

        {lng === 'ru' && <div className='link-list-wrapper'>
          <LinksList
            title={t('dev:partners.financeTitle')}
            links={financeAndBankingLinksRu}
          />
        </div>}

        {lng !== 'ru' && <LinksList
          title={t('dev:partners.othersTitle')}
          links={othersLinksEn}
        />}
      </div>

      <div className='column'>
        {lng === 'ru' && <div className='link-list-wrapper'>
          <LinksList
            title={t('dev:partners.healthTitle')}
            links={healthLinksRu}
          />
        </div>}

        {lng !== 'ru' && <LinksList
          title={t('dev:partners.telecomTitle')}
          links={telecomLinksEn}
        />}

        {lng === 'ru' && <LinksList
          title={t('dev:partners.othersTitle')}
          links={othersLinksRu}
        />}
      </div>
    </section><style jsx>{`
      section {
        margin-left: auto;
        margin-right: auto;
        padding-top: 8.5rem;
        width: 1792px;
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
          width: 1328px;
        }

        h2 {
          grid-column: 3 / span 8;
        }

        .link-list-wrapper {
          margin-bottom: 4.5rem;
        }
      }

      @media (min-width: 1280px) and (max-width: 1359px) {
        section {
          width: 1232px;
        }

        h2 {
          grid-column: 3 / span 8;
        }

        .link-list-wrapper {
          margin-bottom: 4.5rem;
        }
      }

      @media (min-width: 368px) and (max-width: 1279px) {
        section {
          margin-bottom: 0.6875rem;
          padding-top: 6.1875rem;
          width: 944px;
        }

        h2 {
          margin-bottom: 3rem;
          text-align: center;
        }

        .link-list-wrapper {
          margin-bottom: 2.5rem;
        }

        @media (max-width: 1023px) {
          section {
            width: 59rem;
          }
        }
      }
    `}</style>
  </Fragment>

export default translate()(Partners)
