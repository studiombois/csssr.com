import React from 'react'
import { func } from 'prop-types'
import Form from './Form'
import Layout from '../Layout'
import translate from '../../utils/translate-wrapper'

import Hero from './Hero'
import Team from './Team'

import Head from '../Head'
import hero from '../../data/project/S7/hero'
import team from '../../data/project/S7/team'

const GazpromNeftPage = ({ t }) => {
  const pageName = 'project'
  return (
    <Layout pageName={pageName}>
      <Head
        title={t('project:s7Airlines.meta.title')}
        description={t('project:s7Airlines.meta.description')}
      />

      <Hero  id="hero" content={hero} />
      <Team  id="team" content={team} />
      <Form pageName={pageName} />
    </Layout>
  )
}

GazpromNeftPage.propTypes = {
  t: func,
}

export default translate(GazpromNeftPage)