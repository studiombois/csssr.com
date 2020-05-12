import React from 'react'
import Form from './Form'
import Quote from './Quote'
import AboutProject from './AboutProject'
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
import aboutProjectImages from '../../data/project/aboutProject'

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

GazpromNeftPage.propTypes = {}

export default L10nConsumer(GazpromNeftPage)
