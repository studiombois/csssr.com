import React from 'react'

import Hero from './Hero'
import Challenge from './Challenge'
import Timeline from './Timeline'
import P4Team from './P4Team'
import BusinessAnalysis from './BusinessAnalysis'
import Development from './Development'
import Assurance from './Assurance'
import Quote from './Quote'
import Idea from '../Idea'
import Head from '../Head'
import Layout from '../Layout'
import { L10nConsumer } from '../../utils/l10nProvider'

import hero from '../../data/project/gazprom-neft/hero'
import challenge from '../../data/project/gazprom-neft/challenge'
import timeline from '../../data/project/gazprom-neft/timeline'
import team from '../../data/project/gazprom-neft/team'
import businessAnalysis from '../../data/project/gazprom-neft/businessAnalysis'
import development from '../../data/project/gazprom-neft/development'
import assurance from '../../data/project/gazprom-neft/assurance'
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
      <Challenge content={challenge} />
      <Timeline content={timeline} />
      <P4Team id="team" content={team} />
      <BusinessAnalysis content={businessAnalysis} />
      <Development content={development} />
      <Assurance content={assurance} />
      <Quote projectId={projectId} images={quoteImages} />
      <Idea pageName={pageName} projectId={projectId} />
    </Layout>
  )
}

export default L10nConsumer(GazpromNeftPage)
