import React from 'react'

import Layout from '../Layout'
import { L10nConsumer } from '../../utils/l10nProvider'

import Head from '../Head'
import Hero from './Hero'
import Quote from './Quote'

import hero from '../../data/project/gazprom-neft/hero'
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
      <Quote projectId={projectId} images={quoteImages} />
    </Layout>
  )
}

export default L10nConsumer(GazpromNeftPage)
