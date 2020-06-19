import React from 'react'
import Form from '../ContactFormWrapper'
import AboutProject from './AboutProject'
import Layout from '../Layout'
import { L10nConsumer } from '../../utils/l10nProvider'

import Hero from './Hero'
import Team from './Team'
import Head from '../Head'
import TechStack from './TechStack'

import hero from '../../data/project/s7airlines/hero'
import team from '../../data/project/s7airlines/team'
import techStack from '../../data/project/s7airlines/techStack'
import aboutProjectImages from '../../data/project/aboutProject'

const S7AirlinesPage = ({ l10n: { translations } }) => {
  const pagePath = '/project/s7-personal-account'
  const pageName = 'project'
  const projectId = 's7airlines'
  const aboutProjectParagraphsScheme = [[0], [0, 1, 2]]

  return (
    <Layout pageName={pageName}>
      <Head
        title={translations.project.s7airlines.meta.title}
        description={translations.project.s7airlines.meta.description}
        withHrefLang
        pagePath={pagePath}
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

S7AirlinesPage.propTypes = {}

export default L10nConsumer(S7AirlinesPage)
