import React from 'react'
import { func } from 'prop-types'
import Layout from '../Layout'
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
  const pageName = 'industry'
  const page = 'fintech'
  return (
    <Layout pageName={pageName}>
      <Head
        title={t('industry:meta.fintech.title')}
        description={t('industry:meta.fintech.description')}
      />

      <Greeting id="greeting" content={greeting} pageName={pageName} />

      <OurClients id="ourClients" page={page} content={ourClients} />

      <Facts id="facts" content={facts} />

      <CoreValues id="core-values" content={coreValues} />

      <Form pageName={pageName} />
    </Layout>
  )
}

FintechPage.propTypes = {
  t: func,
}

export default translate(FintechPage)
