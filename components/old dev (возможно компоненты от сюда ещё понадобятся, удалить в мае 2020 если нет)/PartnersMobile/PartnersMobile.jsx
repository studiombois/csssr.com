import React from 'react'
import LinksList from '../LinksList'
import { L10nConsumer } from '../../../utils/l10nProvider'
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
import styles from './PartnersMobile.styles'
import Grid from '../../ui-kit/core-design/Grid'

const Partners = ({ className, l10n: { translations, language } }) => (
  <Grid as="section" className={className}>
    <h2
      id="clients"
      className="font_h2-slab"
      dangerouslySetInnerHTML={{ __html: translations.dev.partners.title }}
    />

    <LinksList
      title={translations.dev.partners.iTTitle}
      links={language === 'ru' ? iTcompaniesLinksRu : iTcompaniesLinksEn}
    />
    <LinksList
      title={translations.dev.partners.financeTitle}
      links={language === 'ru' ? financeAndBankingLinksRu : financeAndBankingLinksEn}
    />
    <LinksList
      title={translations.dev.partners.telecomTitle}
      links={language === 'ru' ? telecomLinksRu : telecomLinksEn}
    />
    <LinksList
      title={
        language === 'ru'
          ? translations.dev.partners.healthTitle
          : translations.dev.partners.estateTitle
      }
      links={language === 'ru' ? healthLinksRu : realEstateLinksEn}
    />
    <LinksList
      title={translations.dev.partners.othersTitle}
      links={language === 'ru' ? othersLinksRu : othersLinksEn}
    />
  </Grid>
)

export default styled(L10nConsumer(Partners))`
  ${styles}
`
