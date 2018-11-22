import React, { Fragment } from 'react'
import LinksList from './LinksList'
import { translate } from 'react-i18next'
import {
  iTcompaniesLinksEn,
  iTcompaniesLinksRu,
  realEstateLinksEn,
  telecomLinksEn,
  telecomLinksRu,
  financeAndBankingLinksEn,
  financeAndBankingLinksRu,
  othersLinksEn,
  othersLinksRu,
  healthLinksRu,
} from '../../data/jobs/partnersLinks'

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

     @media (max-width: 1279px) {
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
