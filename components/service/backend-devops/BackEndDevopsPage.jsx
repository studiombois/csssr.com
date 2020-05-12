import React from 'react'
import { func } from 'prop-types'
import Layout from '../../Layout'
import translate from '../../../utils/translate-wrapper'

import Hero from './Hero'
import TechStack from './TechStack/TechStack'

import Head from '../../Head'
import hero from '../../../data/service/backend-and-devops/hero'
import tech_stack from '../../../data/service/backend-and-devops/tech-stack'


const BackEndDevopsPage = ({ t }) => {
  const pageName = 'backend-and-devops'
  return (
    <Layout pageName={pageName}>
      <Head
        title={t('backEndAndDevops:meta.title')}
        description={t('backEndAndDevops:meta.description')}
      />

      <Hero id="hero" content={hero} />
      <TechStack id="tech-stack" content={tech_stack} />
    </Layout>
  )
}

BackEndDevopsPage.propTypes = {
  t: func,
}

export default translate(BackEndDevopsPage)
