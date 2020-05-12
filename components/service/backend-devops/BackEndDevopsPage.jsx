import React from 'react'
import { func } from 'prop-types'

import Layout from '../../Layout'
import translate from '../../../utils/translate-wrapper'
import Head from '../../Head'
import Hero from './Hero'
import BackEndDevelopment from './BackEndDevelopment/BackEndDevelopment'
import DevOpsServices from './DevOpsServices'
import Form from './Form'

import hero from '../../../data/service/backend-and-devops/hero'
import backend_dev from '../../../data/service/backend-and-devops/backend-development'
import devopsServices from '../../../data/service/backend-and-devops/devops-services'


const BackEndDevopsPage = ({ t }) => {
  const pageName = 'backEndAndDevops'
  return (
    <Layout pageName={pageName}>
      <Head
        title={t('backEndAndDevops:meta.title')}
        description={t('backEndAndDevops:meta.description')}
      />
      <Hero id="hero" content={hero} />
      <BackEndDevelopment id="backend-development" content={backend_dev} />
      <DevOpsServices id="devops-services" content={devopsServices} />
      <Form pageName={pageName} />
    </Layout>
  )
}

BackEndDevopsPage.propTypes = {
  t: func,
}

export default translate(BackEndDevopsPage)
