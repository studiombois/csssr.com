import React from 'react'
import { func } from 'prop-types'
import Layout from '../../Layout'
import translate from '../../../utils/translate-wrapper'

import Hero from './Hero'

import Head from '../../Head'
import hero from '../../../data/service/backend-and-devops/hero'

const BackEndDevopsPage = ({ t }) => {
  const pageName = 'backend-and-devops'
  return (
    <Layout pageName={pageName}>
      <Head
        title={t('backEndAndDevops:meta.title')}
        description={t('backEndAndDevops:meta.description')}
      />

      <Hero id="hero" content={hero} />
    </Layout>
  )
}

BackEndDevopsPage.propTypes = {
  t: func,
}

export default translate(BackEndDevopsPage)
