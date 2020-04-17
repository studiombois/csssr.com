import React from 'react'
import { func } from 'prop-types'
import Form from './Form'
import Layout from '../Layout'
import translate from '../../utils/translate-wrapper'

import Hero from './Hero'

import Head from '../Head'
import hero from '../../data/project/GazpromNeft/hero'

const GazpromNeftPage = ({ t }) => {
  const pageName = 'project'
  return (
    <Layout pageName={pageName}>
      <Head
        title={t('project:gazpromNeft.meta.title')}
        description={t('project:gazpromNeft.meta.description')}
      />

      <Hero  id="hero" content={hero} />
      <Form pageName={pageName} />
    </Layout>
  )
}

GazpromNeftPage.propTypes = {
  t: func,
}

export default translate(GazpromNeftPage)
