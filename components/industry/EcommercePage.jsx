import React from 'react'
import Layout from '../Layout'
import { L10nConsumer } from '../../utils/l10nProvider'

import Greeting from './Greeting'
import OurClients from './OurClients'
import Facts from './Facts'
import CoreValues from './CoreValues'
import Form from '../ContactFormWrapper'

import Head from '../Head'
import greeting from '../../data/industry/ecommerce/greeting'
import ourClients from '../../data/industry/ecommerce/logos'
import coreValues from '../../data/industry/coreValues'
import facts from '../../data/industry/facts'

const EcommercePage = ({ l10n: { translations } }) => {
  const pagePath = '/industry/ecommerce'
  const pageName = 'industry'
  const page = 'ecommerce'
  return (
    <Layout pageName={pageName}>
      <Head
        title={translations.industry.meta.ecommerce.title}
        description={translations.industry.meta.ecommerce.description}
        withHrefLang
        pagePath={pagePath}
      />

      <Greeting id="greeting" content={greeting} pageName={pageName} />

      <OurClients id="ourClients" page={page} content={ourClients} />

      <Facts id="facts" content={facts} />

      <CoreValues id="core-values" content={coreValues} />

      <Form pageName={pageName} />
    </Layout>
  )
}

EcommercePage.propTypes = {}

export default L10nConsumer(EcommercePage)
