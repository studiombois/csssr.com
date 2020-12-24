import React from 'react'

import Layout from '../Layout'
import Head from '../Head'
import Hero from './Hero'
import Challenge from './Challenge'
import TechStack from './TechStack'
import AboutProject from './AboutProject'
import Quote from './Quote'
import Idea from '../Idea'

import { L10nConsumer } from '../../utils/l10nProvider'

import hero from '../../data/project/gazprom-neft/hero'
import challenge from '../../data/project/gazprom-neft/challenge'
import techStack from '../../data/project/gazprom-neft/techStack'
import aboutProjectImages from '../../data/project/aboutProject'
import quoteImages from '../../data/project/gazprom-neft/quote'

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
      <Challenge content={challenge} />
      <TechStack id="teckStack" content={techStack} />
      <AboutProject
        projectId={projectId}
        images={aboutProjectImages}
        paragraphsScheme={aboutProjectParagraphsScheme}
      />
      <Quote projectId={projectId} images={quoteImages} />
      <Idea pageName={pageName} />
    </Layout>
  )
}

export default L10nConsumer(GazpromNeftPage)
