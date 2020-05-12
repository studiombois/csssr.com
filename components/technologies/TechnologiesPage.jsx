import React from 'react'
import Head from '../Head'
import Layout from '../Layout'
import Hero from './Hero'
import Frontend from './Frontend'
import Autotests from './Autotests'
import Backend from './Backend'
import Form from './Form'
import { L10nConsumer } from '../../utils/l10nProvider'

const TechnologiesPage = ({ l10n: { translations } }) => {
  const pageName = 'technologies'

  return (
    <Layout pageName={pageName}>
      <Head
        title={translations.technologies.meta.title}
        description={translations.technologies.meta.description}
      />
      <Hero />
      <Frontend />
      <Autotests />
      <Backend />
      <Form pageName={pageName} />
    </Layout>
  )
}

export default L10nConsumer(TechnologiesPage)
