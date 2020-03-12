import React from 'react'
import Layout from '../Layout'
import translate from '../../utils/translate-wrapper'

import Greeting from './Greeting'
import ValuesSection from './ValuesSection'
import Form from './Form'
import Head from '../Head'

const CoreValues = ({ t }) => {
  return (
    <Layout>
      <Head
        title={t('coreValues:meta.title')}
        description={t('coreValues:meta.description')}
      />

      <Greeting />

      <ValuesSection />

      <Form pageName="coreValues" />
    </Layout>
  )
}

export default translate(CoreValues)
