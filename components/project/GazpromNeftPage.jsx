import React from 'react'
import Layout from '../Layout'
import { L10nConsumer } from '../../utils/l10nProvider'

import Head from '../Head'
import P4Team from './P4Team'

import team from '../../data/project/gazprom-neft/team'

const GazpromNeftPage = ({ l10n: { translations } }) => {
  const pageName = 'project'

  return (
    <Layout pageName={pageName}>
      <Head
        title={translations.project.gazpromNeft.meta.title}
        description={translations.project.gazpromNeft.meta.description}
      />

      <P4Team id="team" content={team} />
    </Layout>
  )
}

export default L10nConsumer(GazpromNeftPage)
