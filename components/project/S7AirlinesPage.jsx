import React from 'react'
import { func } from 'prop-types'
import Form from './Form'
import AboutProject from './AboutProject'
import Layout from '../Layout'
import translate from '../../utils/translate-wrapper'

import Hero from './Hero'
import Team from './Team'
import Head from '../Head'
import TechStack from './TechStack'

import hero from '../../data/project/s7airlines/hero'
import team from '../../data/project/s7airlines/team'
import techStack from '../../data/project/s7airlines/techStack'
import aboutProjectImages from '../../data/project/aboutProject'

const S7AirlinesPage = ({ t }) => {
  const pageName = 'project'
  const porojectId = 's7airlines'
  const aboutProjectParagraphsScheme = [[0], [0, 1, 2]]

  return (
    <Layout pageName={pageName}>
      <Head
        title={t('project:s7airlines.meta.title')}
        description={t('project:s7airlines.meta.description')}
      />

      <Hero  id="hero" content={hero} />
      <Team  id="team" content={team} />
      <TechStack id ="teckStack" content={techStack} />
      <AboutProject
        porojectId={porojectId}
        images={aboutProjectImages}
        paragraphsScheme={aboutProjectParagraphsScheme}
      />
      <Form pageName={pageName} />
    </Layout>
  )
}

S7AirlinesPage.propTypes = {
  t: func,
}

export default translate(S7AirlinesPage)