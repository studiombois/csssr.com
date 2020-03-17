import React from 'react'

import translate from '../../utils/translate-wrapper'
import Head from '../Head'
import Layout from '../Layout'
import Greeting from './Greeting'
import Organized from './Organized'
import Development from './Development'
import Transparency from './Transparency'
import Form from './Form'

const WayOfWork = ({ t }) => {
  const pageName = 'wayOfWork'
  return (
    <Layout pageName={pageName}>
      <Head title={t('wayOfWork:meta.title')} description={t('wayOfWork:meta.description')} />

      <Greeting title={t('wayOfWork:greeting.title')} />

      <Organized />

      <Development />

      <Transparency />

      <Form pageName={pageName} />
    </Layout>
  )
}

export default translate(WayOfWork)
