import React from 'react'
import { func } from 'prop-types'
import Form from './Form'
import Quote from './Quote'
import AboutProject from './AboutProject'
import Layout from '../Layout'
import translate from '../../utils/translate-wrapper'

import Head from '../Head'
import Hero from './Hero'
import Team from './Team'
import TechStack from './TechStack'

import hero from '../../data/project/gazprom-neft/hero'
import team from '../../data/project/gazprom-neft/team'
import techStack from '../../data/project/gazprom-neft/techStack'
import quoteImages from '../../data/project/gazprom-neft/quote'
import aboutProjectImages from '../../data/project/aboutProject'

const GazpromNeftPage = ({ t }) => {
  const pageName = 'project'
  const porojectId = 'gazpromNeft'
  const aboutProjectParagraphsScheme = [
    [0, 1, 2],
    [0, 1, 2],
  ]

  return (
    <Layout pageName={pageName}>
      <Head
        title={t('project:gazpromNeft.meta.title')}
        description={t('project:gazpromNeft.meta.description')}
      />

      <Hero  id="hero" content={hero} />
      <Team  id="team" content={team} />
      <TechStack id ="teckStack" content={techStack} />
      <AboutProject
        porojectId={porojectId}
        images={aboutProjectImages}
        paragraphsScheme={aboutProjectParagraphsScheme}
      />
      <Quote porojectId={porojectId} images={quoteImages} />
      <Form pageName={pageName} />
    </Layout>
  )
}

GazpromNeftPage.propTypes = {
  t: func,
}

export default translate(GazpromNeftPage)
