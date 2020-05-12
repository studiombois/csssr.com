import React from 'react'

import { L10nConsumer } from '../../utils/l10nProvider'
import Head from '../Head'
import Layout from '../Layout'
import Greeting from './Greeting'
import Organized from './Organized'
import Development from './Development'
import Transparency from './Transparency'
import Form from './Form'

const WayOfWork = ({ l10n: { translations } }) => {
  const pageName = 'wayOfWork'
  return (
    <Layout pageName={pageName}>
      <Head
        title={translations.wayOfWork.meta.title}
        description={translations.wayOfWork.meta.description}
      />

      <Greeting title={translations.wayOfWork.greeting.title} />

      <Organized />

      <Development />

      <Transparency />

      <Form pageName={pageName} />
    </Layout>
  )
}

export default L10nConsumer(WayOfWork)
