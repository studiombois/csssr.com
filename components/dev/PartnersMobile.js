import React, { Fragment } from 'react'
import LinksList from './LinksList'
import translate from '../../utils/translate-wrapper'
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
} from '../../data/dev/partnersLinks'

const Partners = ({ t, lng }) =>
  <Fragment>
    <section className='grid-container'>
      <h2 id='clients' className='font_h2-slab' dangerouslySetInnerHTML={{ __html: t('dev:partners.title') }} />

      <LinksList
        title={t('dev:partners.iTTitle')}
        links={lng === 'ru' ? iTcompaniesLinksRu : iTcompaniesLinksEn}
      />
      <LinksList
        title={t('dev:partners.financeTitle')}
        links={lng === 'ru' ? financeAndBankingLinksRu : financeAndBankingLinksEn}
      />
      <LinksList
        title={t('dev:partners.telecomTitle')}
        links={lng === 'ru' ? telecomLinksRu : telecomLinksEn}
      />
      <LinksList
        title={lng === 'ru' ? t('dev:partners.healthTitle') : t('dev:partners.estateTitle')}
        links={lng === 'ru' ? healthLinksRu : realEstateLinksEn}
      />
      <LinksList
        title={t('dev:partners.othersTitle')}
        links={lng === 'ru' ? othersLinksRu : othersLinksEn}
      />
    </section><style jsx>{`
      section {
        margin-left: auto;
        margin-right: auto;
        padding-top: 3rem;
        padding-bottom: 0.9375rem;
        width: 20.5rem;
      }

      h2 {
        margin-bottom: 2.0625rem;
        grid-column: 1 / span 6;
        text-align: center;
      }
    `}</style>
  </Fragment>

export default translate()(Partners)
