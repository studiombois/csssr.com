import React from 'react'
import Layout from '../Layout'
import { L10nConsumer } from '../../utils/l10nProvider'
import Head from '../Head'
import Hero from './Hero'
import Solutions from './Solutions'
import Idea from '../../components/Idea'

import hero from '../../data/our-cases/hero'

const OurCasesPage = ({ l10n: { translations } }) => {
  const pageName = 'ourCases'
  return (
    <Layout pageName={pageName}>
      <Head
        title={translations.industry.meta.ecommerce.title}
        description={translations.industry.meta.ecommerce.description}
      />

      <Hero content={hero} />
      <Solutions />
      <Idea pageName={pageName} />
    </Layout>
  )
}

export default L10nConsumer(OurCasesPage)
