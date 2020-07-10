import React from 'react'
import Form from '../ContactFormWrapper'
import AboutProject from './AboutProject'
import Layout from '../Layout'
import { L10nConsumer } from '../../utils/l10nProvider'

import Hero from './Hero'
import Team from './Team'
import Head from '../Head'
import TechStack from './TechStack'
import Quote from './Quote'

import hero from '../../data/project/brusnika/hero'
import team from '../../data/project/brusnika/team'
import techStack from '../../data/project/brusnika/techStack'
import quoteImages from '../../data/project/brusnika/quote'
import aboutProjectImages from '../../data/project/aboutProject'

const BrusnikaPage = ({ l10n: { translations } }) => {
  const pageName = 'project'
  const projectId = 'brusnika'
  const aboutProjectParagraphsScheme = [null, [0, 1]]

  return (
    <Layout pageName={pageName}>
      <Head
        title={translations.project.brusnika.meta.title}
        description={translations.project.brusnika.meta.description}
      />

      <Hero id="hero" content={hero} />
      <Team id="team" content={team} />
      <TechStack id="teckStack" content={techStack} />
      <AboutProject
        projectId={projectId}
        images={aboutProjectImages}
        paragraphsScheme={aboutProjectParagraphsScheme}
      />
      <Quote projectId={projectId} images={quoteImages} />
      <Form pageName={pageName} />
    </Layout>
  )
}

export default L10nConsumer(BrusnikaPage)
