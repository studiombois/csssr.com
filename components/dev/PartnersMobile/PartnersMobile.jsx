import React from 'react'
import LinksList from './LinksList'
import translate from '../../../utils/translate-wrapper'
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
} from '../../../data/dev/partnersLinks'
import styled from '@emotion/styled'
import styles from './PartnersMobile.styles'
import Grid from '../../ui-kit/core-design/Grid'

const Partners = ({ className, t, lng }) => (
  <Grid as="section" className={className}>
    <h2
      id="clients"
      className="font_h2-slab"
      dangerouslySetInnerHTML={{ __html: t('dev:partners.title') }}
    />

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
  </Grid>
)

export default styled(translate()(Partners))`
  ${styles}
`
