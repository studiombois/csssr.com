import React from 'react'
import Idea from '../Idea'
import Quote from './Quote'
import Development from './Development'
import Layout from '../Layout'
import { L10nConsumer } from '../../utils/l10nProvider'

import Head from '../Head'
import Hero from './Hero'
import Team from './Team'
import TechStack from './TechStack'

import hero from '../../data/project/gazprom-neft/hero'
import team from '../../data/project/gazprom-neft/team'
import techStack from '../../data/project/gazprom-neft/techStack'
import quoteImages from '../../data/project/gazprom-neft/quote'
import development from '../../data/project/gazprom-neft/development'

const GazpromNeftPage = ({ l10n: { translations } }) => {
  const pageName = 'project'
  const projectId = 'gazpromNeft'

  return (
    <Layout pageName={pageName}>
      <Head
        title={translations.project.gazpromNeft.meta.title}
        description={translations.project.gazpromNeft.meta.description}
      />

      <Hero id="hero" content={hero} />
      <Team id="team" content={team} />
      <TechStack id="teckStack" content={techStack} />
      <Development content={development} />
      <Quote projectId={projectId} images={quoteImages} />
      <Idea pageName={pageName} />
    </Layout>
  )
}

export default L10nConsumer(GazpromNeftPage)
