import React from 'react'
import { func } from 'prop-types'
import Layout from '../../Layout'
import translate from '../../../utils/translate-wrapper'

import Hero from './Hero'
import BackEndDevelopment from './BackEndDevelopment/BackEndDevelopment'

import Head from '../../Head'
import hero from '../../../data/service/backend-and-devops/hero'
import backend_dev from '../../../data/service/backend-and-devops/backend-development'


const BackEndDevopsPage = ({ t }) => {
  const pageName = 'backend-and-devops'
  return (
    <Layout pageName={pageName}>
      <Head
        title={t('backEndAndDevops:meta.title')}
        description={t('backEndAndDevops:meta.description')}
      />

      <Hero id="hero" content={hero} />
      <BackEndDevelopment id="backend-development" content={backend_dev} />
    </Layout>
  )
}

BackEndDevopsPage.propTypes = {
  t: func,
}

export default translate(BackEndDevopsPage)
