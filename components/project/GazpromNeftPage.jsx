import React from 'react'
import { func } from 'prop-types'
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
        title={t('industry:meta.ecommerce.title')}
        description={t('industry:meta.ecommerce.description')}
      />

      <Hero  id="hero" content={hero} />

    </Layout>
  )
}

GazpromNeftPage.propTypes = {
  t: func,
}

export default translate(GazpromNeftPage)