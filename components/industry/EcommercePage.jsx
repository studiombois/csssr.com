import React from 'react'
import { func } from 'prop-types'
import Layout from '../Layout'
import withI18next from '../../utils/withI18next'
import translate from '../../utils/translate-wrapper'

import Greeting from './Greeting'
import OurClients from './OurClients'
import Facts from './Facts'
import CoreValues from './CoreValues'
import Form from './Form'
import Projects from './Projects'

import Head from '../Head'
import greeting from '../../data/industry/ecommerce/greeting'
import ourClients from '../../data/industry/ecommerce/logos'
import coreValues from '../../data/industry/coreValues'
import facts from '../../data/industry/facts'
import projects from '../../data/industry/projects'

const EcommercePage = ({ t }) => {
  return (
    <Layout>
      <Head title={t('industry:meta.ecommerce.title')} description={t('industry:meta.ecommerce.description')} />

      <Greeting id="greeting" content={greeting} />

      <OurClients id="ourClients" content={ourClients} />

      <Facts id="facts" content={facts} />

      <CoreValues id="core-values" content={coreValues} />

      <Projects id="projects" content={projects} />

      <Form pageName="industry" />
    </Layout>
  )
}

EcommercePage.propTypes = {
  t: func,
}

export default withI18next(['industry'])(translate()(EcommercePage))
