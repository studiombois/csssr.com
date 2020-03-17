import React from 'react'
import Layout from '../Layout'
import translate from '../../utils/translate-wrapper'

import Greeting from './Greeting'
import ValuesSection from './ValuesSection'
import Form from './Form'
import Head from '../Head'

const CoreValues = ({ t }) => {
  const pageName = 'coreValues'

  return (
    <Layout pageName={pageName}>
      <Head title={t('coreValues:meta.title')} description={t('coreValues:meta.description')} />

      <Greeting />

      <ValuesSection />

      <Form pageName={pageName} />
    </Layout>
  )
}

export default translate(CoreValues)
