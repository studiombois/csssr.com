import React from 'react'
import Form from '../ContactFormWrapper'
import AboutProject from './AboutProject'
import Layout from '../Layout'
import { L10nConsumer } from '../../utils/l10nProvider'

import Hero from './Hero'
import Team from './Team'
import Head from '../Head'
import TechStack from './TechStack'

import hero from '../../data/project/mindbox/hero'
import team from '../../data/project/mindbox/team'
import techStack from '../../data/project/mindbox/techStack'
import aboutProjectImages from '../../data/project/aboutProject'

const MindboxPage = ({ l10n: { translations } }) => {
  const pageName = 'project'
  const projectId = 'mindbox'
  const aboutProjectParagraphsScheme = [null, [0, 1, 2, 3, 4]]

  return (
    <Layout pageName={pageName}>
      <Head
        title={translations.project.mindbox.meta.title}
        description={translations.project.mindbox.meta.description}
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

export default L10nConsumer(MindboxPage)
