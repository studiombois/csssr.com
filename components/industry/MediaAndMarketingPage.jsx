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
import greeting from '../../data/industry/mediaAndMarketing/greeting'
import ourClients from '../../data/industry/mediaAndMarketing/logos'
import coreValues from '../../data/industry/coreValues'
import facts from '../../data/industry/facts'

const MediaAndMarketingPage = ({ t }) => {
  const pageName = 'industry'
  return (
    <Layout pageName={pageName}>
      <Head
        title={t('industry:meta.mediaAndMarketing.title')}
        description={t('industry:meta.mediaAndMarketing.description')}
      />

      <Greeting id="greeting" content={greeting} pageName={pageName} />

      <OurClients id="ourClients" content={ourClients} />

      <Facts id="facts" content={facts} />

      <CoreValues id="core-values" content={coreValues} />

      <Form pageName={pageName} />
    </Layout>
  )
}

MediaAndMarketingPage.propTypes = {
  t: func,
}

export default translate(MediaAndMarketingPage)
