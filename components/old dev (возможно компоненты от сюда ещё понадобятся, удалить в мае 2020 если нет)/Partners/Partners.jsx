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
import styles from './Partners.styles'
import Grid from '../../ui-kit/core-design/Grid'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const Partners = ({ className, l10n: { translations, language } }) => (
  <Grid className={className} as="section">
    <h2
      id="clients"
      className="font_h2-slab"
      dangerouslySetInnerHTML={{ __html: translations.dev.partners.title }}
    />

    <div className="column">
      {language !== 'ru' && (
        <div className="link-list-wrapper">
          <LinksList title={translations.dev.partners.iTTitle} links={iTcompaniesLinksEn} />
        </div>
      )}

      {language !== 'ru' && (
        <LinksList title={translations.dev.partners.estateTitle} links={realEstateLinksEn} />
      )}

      {language === 'ru' && (
        <div className="link-list-wrapper">
          <LinksList title={translations.dev.partners.iTTitle} links={iTcompaniesLinksRu} />
        </div>
      )}

      {language === 'ru' && (
        <LinksList title={translations.dev.partners.telecomTitle} links={telecomLinksRu} />
      )}
    </div>

    <div className="column">
      {language !== 'ru' && (
        <div className="link-list-wrapper">
          <LinksList
            title={translations.dev.partners.financeTitle}
            links={financeAndBankingLinksEn}
          />
        </div>
      )}

      {language === 'ru' && (
        <div className="link-list-wrapper">
          <LinksList
            title={translations.dev.partners.financeTitle}
            links={financeAndBankingLinksRu}
          />
        </div>
      )}

      {language !== 'ru' && (
        <LinksList title={translations.dev.partners.othersTitle} links={othersLinksEn} />
      )}
    </div>

    <div className="column">
      {language === 'ru' && (
        <div className="link-list-wrapper">
          <LinksList title={translations.dev.partners.healthTitle} links={healthLinksRu} />
        </div>
      )}

      {language !== 'ru' && (
        <LinksList title={translations.dev.partners.telecomTitle} links={telecomLinksEn} />
      )}

      {language === 'ru' && (
        <LinksList title={translations.dev.partners.othersTitle} links={othersLinksRu} />
      )}
    </div>
  </Grid>
)

export default L10nConsumer(
  MsBrowserConsumer(styled(Partners)`
    ${styles}
  `),
)
