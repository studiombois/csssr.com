import React from 'react'
import { func } from 'prop-types'

import Layout from '../../Layout'
import translate from '../../../utils/translate-wrapper'
import Head from '../../Head'
import Hero from './Hero'
import DevOpsServices from './DevOpsServices'

import hero from '../../../data/service/backend-and-devops/hero'
import devopsServices from '../../../data/service/backend-and-devops/devops-services'

const BackEndDevopsPage = ({ t }) => {
  const pageName = 'backend-and-devops'
  return (
    <Layout pageName={pageName}>
      <Head
        title={t('backEndAndDevops:meta.title')}
        description={t('backEndAndDevops:meta.description')}
      />

      <Hero id="hero" content={hero} />

      <DevOpsServices id="devops-services" content={devopsServices} />
    </Layout>
  )
}

BackEndDevopsPage.propTypes = {
  t: func,
}

export default translate(BackEndDevopsPage)
