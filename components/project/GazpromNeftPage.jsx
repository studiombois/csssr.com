import React from 'react'
import Development from './Development'
import Layout from '../Layout'
import { L10nConsumer } from '../../utils/l10nProvider'

import Head from '../Head'

import development from '../../data/project/gazprom-neft/development'

const GazpromNeftPage = ({ l10n: { translations } }) => {
  const pageName = 'project'

  return (
    <Layout pageName={pageName}>
      <Head
        title={translations.project.gazpromNeft.meta.title}
        description={translations.project.gazpromNeft.meta.description}
      />

      <Development content={development} />
    </Layout>
  )
}

export default L10nConsumer(GazpromNeftPage)
