import React from 'react'
import Layout from '../Layout'
import { L10nConsumer } from '../../utils/l10nProvider'

import Head from '../Head'
import BusinessAnalysis from './BusinessAnalysis'

import businessAnalysis from '../../data/project/gazprom-neft/businessAnalysis'

const GazpromNeftPage = ({ l10n: { translations } }) => {
  const pageName = 'project'

  return (
    <Layout pageName={pageName}>
      <Head
        title={translations.project.gazpromNeft.meta.title}
        description={translations.project.gazpromNeft.meta.description}
      />

      <BusinessAnalysis content={businessAnalysis} />
    </Layout>
  )
}

export default L10nConsumer(GazpromNeftPage)
