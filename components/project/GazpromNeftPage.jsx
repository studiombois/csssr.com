import React from 'react'

import Layout from '../Layout'
import { L10nConsumer } from '../../utils/l10nProvider'

import Head from '../Head'
import Hero from './Hero'
import Development from './Development'
import Quote from './Quote'

import hero from '../../data/project/gazprom-neft/hero'
import development from '../../data/project/gazprom-neft/development'
import quoteImages from '../../data/project/gazprom-neft/quote'

const GazpromNeftPage = ({ l10n: { translations } }) => {
  const pageName = 'project'
  const projectId = 'gazpromNeft'

  return (
    <Layout pageName={pageName}>
      <Head
        title={translations.project.gazpromNeft.meta.title}
        description={translations.project.gazpromNeft.meta.description}
      />

      <Hero id="hero" content={hero} projectId={projectId} />
      <Development content={development} />
      <Quote projectId={projectId} images={quoteImages} />
    </Layout>
  )
}

export default L10nConsumer(GazpromNeftPage)
