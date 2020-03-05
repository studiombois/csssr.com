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

import Head from '../Head'
import greeting from '../../data/industry/fintech/greeting'
import ourClients from '../../data/industry/fintech/logos'
import coreValues from '../../data/industry/coreValues'
import facts from '../../data/industry/facts'

const FintechPage = ({ t }) => {
  return (
    <Layout>
      <Head title={t('industry:meta.fintech.title')} description={t('industry:meta.fintech.description')} />

      <Greeting id="greeting" content={greeting} />

      <OurClients id="ourClients" content={ourClients} />

      <Facts id="facts" content={facts} />

      <CoreValues id="core-values" content={coreValues} />

      <Form pageName="industry" />
    </Layout>
  )
}

FintechPage.propTypes = {
  t: func,
}

export default withI18next(['industry'])(translate()(FintechPage))
