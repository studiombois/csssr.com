import React from 'react'
import Form from '../ContactFormWrapper'
import AboutProject from './AboutProject'
import Layout from '../Layout'
import { L10nConsumer } from '../../utils/l10nProvider'

import Hero from './Hero'
import Team from './Team'
import Head from '../Head'
import TechStack from './TechStack'

import hero from '../../data/project/mosoblgaz/hero'
import team from '../../data/project/mosoblgaz/team'
import techStack from '../../data/project/mosoblgaz/techStack'
import aboutProjectImages from '../../data/project/aboutProject'

const MosOblGazPage = ({ l10n: { translations } }) => {
  const pageName = 'project'
  const projectId = 'mosoblgaz'
  const aboutProjectParagraphsScheme = [null, [0, 1]]

  return (
    <Layout pageName={pageName}>
      <Head
        title={translations.project.mosoblgaz.meta.title}
        description={translations.project.mosoblgaz.meta.description}
      />

      <Hero id="hero" content={hero} />
      <Team id="team" content={team} />
      <TechStack id="teckStack" content={techStack} />
      <AboutProject
        projectId={projectId}
        images={aboutProjectImages}
        paragraphsScheme={aboutProjectParagraphsScheme}
      />
      <Form pageName={pageName} />
    </Layout>
  )
}

export default L10nConsumer(MosOblGazPage)
