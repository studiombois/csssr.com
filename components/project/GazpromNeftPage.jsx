import React from 'react'
import Idea from '../Idea'
import Quote from './Quote'
import AboutProject from './AboutProject'
import Layout from '../Layout'
import { L10nConsumer } from '../../utils/l10nProvider'

import Head from '../Head'
import Hero from './Hero'
import Team from './Team'
import BusinessAnalysis from './BusinessAnalysis'

import hero from '../../data/project/gazprom-neft/hero'
import team from '../../data/project/gazprom-neft/team'
import quoteImages from '../../data/project/gazprom-neft/quote'
import aboutProjectImages from '../../data/project/aboutProject'
import businessAnalysis from '../../data/project/gazprom-neft/businessAnalysis'

const GazpromNeftPage = ({ l10n: { translations } }) => {
  const pageName = 'project'
  const projectId = 'gazpromNeft'
  const aboutProjectParagraphsScheme = [
    [0, 1, 2],
    [0, 1, 2],
  ]

  return (
    <Layout pageName={pageName}>
      <Head
        title={translations.project.gazpromNeft.meta.title}
        description={translations.project.gazpromNeft.meta.description}
      />

      <Hero id="hero" content={hero} />
      <Team id="team" content={team} />
      <AboutProject
        projectId={projectId}
        images={aboutProjectImages}
        paragraphsScheme={aboutProjectParagraphsScheme}
      />
      <BusinessAnalysis content={businessAnalysis} />
      <Quote projectId={projectId} images={quoteImages} />
      <Idea pageName={pageName} />
    </Layout>
  )
}

export default L10nConsumer(GazpromNeftPage)
