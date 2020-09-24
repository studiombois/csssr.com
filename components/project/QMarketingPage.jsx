import React from 'react'
import Idea from '../Idea'
import AboutProject from './AboutProject'
import Layout from '../Layout'
import { L10nConsumer } from '../../utils/l10nProvider'

import Hero from './Hero'
import Team from './Team'
import Head from '../Head'
import TechStack from './TechStack'

import hero from '../../data/project/qmarketing/hero'
import team from '../../data/project/qmarketing/team'
import techStack from '../../data/project/qmarketing/techStack'
import aboutProjectImages from '../../data/project/aboutProject'

const QMarketingPage = ({ l10n: { translations } }) => {
  const pageName = 'project'
  const projectId = 'qmarketing'
  const aboutProjectParagraphsScheme = [
    [0, 1, 2],
    [0, 1],
  ]

  return (
    <Layout pageName={pageName}>
      <Head
        title={translations.project.qmarketing.meta.title}
        description={translations.project.qmarketing.meta.description}
      />

      <Hero id="hero" content={hero} />
      <Team id="team" content={team} />
      <TechStack id="teckStack" content={techStack} />
      <AboutProject
        projectId={projectId}
        images={aboutProjectImages}
        paragraphsScheme={aboutProjectParagraphsScheme}
      />
      <Idea pageName={pageName} />
    </Layout>
  )
}

export default L10nConsumer(QMarketingPage)
