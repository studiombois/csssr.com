import React from 'react'
import { func } from 'prop-types'
import Form from './Form'
import Layout from '../Layout'
import translate from '../../utils/translate-wrapper'

import Hero from './Hero'

import Head from '../Head'
import hero from '../../data/project/S7/hero'

const GazpromNeftPage = ({ t }) => {
  const pageName = 'project'
  return (
    <Layout pageName={pageName}>
      <Head
        title={t('project:s7Airlines.meta.title')}
        description={t('project:s7Airlines.meta.description')}
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