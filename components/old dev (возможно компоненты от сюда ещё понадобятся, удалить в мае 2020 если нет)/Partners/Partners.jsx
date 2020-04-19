import React from 'react'
import LinksList from '../LinksList'
import translate from '../../../utils/translate-wrapper'
import {
  financeAndBankingLinksEn,
  financeAndBankingLinksRu,
  healthLinksRu,
  iTcompaniesLinksEn,
  iTcompaniesLinksRu,
  othersLinksEn,
  othersLinksRu,
  realEstateLinksEn,
  telecomLinksEn,
  telecomLinksRu,
} from '../../../data/dev/partnersLinks'
import styled from '@emotion/styled'
import styles from './Partners.styles'
import Grid from '../../ui-kit/core-design/Grid'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const Partners = ({ className, t, lng }) => (
  <Grid className={className} as="section">
    <h2
      id="clients"
      className="font_h2-slab"
      dangerouslySetInnerHTML={{ __html: t('dev:partners.title') }}
    />

    <div className="column">
      {lng !== 'ru' && (
        <div className="link-list-wrapper">
          <LinksList title={t('dev:partners.iTTitle')} links={iTcompaniesLinksEn} />
        </div>
      )}

      {lng !== 'ru' && (
        <LinksList title={t('dev:partners.estateTitle')} links={realEstateLinksEn} />
      )}

      {lng === 'ru' && (
        <div className="link-list-wrapper">
          <LinksList title={t('dev:partners.iTTitle')} links={iTcompaniesLinksRu} />
        </div>
      )}

      {lng === 'ru' && <LinksList title={t('dev:partners.telecomTitle')} links={telecomLinksRu} />}
    </div>

    <div className="column">
      {lng !== 'ru' && (
        <div className="link-list-wrapper">
          <LinksList title={t('dev:partners.financeTitle')} links={financeAndBankingLinksEn} />
        </div>
      )}

      {lng === 'ru' && (
        <div className="link-list-wrapper">
          <LinksList title={t('dev:partners.financeTitle')} links={financeAndBankingLinksRu} />
        </div>
      )}

      {lng !== 'ru' && <LinksList title={t('dev:partners.othersTitle')} links={othersLinksEn} />}
    </div>

    <div className="column">
      {lng === 'ru' && (
        <div className="link-list-wrapper">
          <LinksList title={t('dev:partners.healthTitle')} links={healthLinksRu} />
        </div>
      )}

      {lng !== 'ru' && <LinksList title={t('dev:partners.telecomTitle')} links={telecomLinksEn} />}

      {lng === 'ru' && <LinksList title={t('dev:partners.othersTitle')} links={othersLinksRu} />}
    </div>
  </Grid>
)

export default translate(
  MsBrowserConsumer(styled(Partners)`
    ${styles}
  `),
)
