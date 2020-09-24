import React from 'react'
import Layout from '../Layout'
import { L10nConsumer } from '../../utils/l10nProvider'
import Head from '../Head'
import Hero from './Hero'
import DevCases from './DevCases'
import Solutions from './Solutions'

import heroContent from '../../data/our-cases/hero'
import casesContent from '../../data/our-cases/devCases'

const OurCasesPage = ({ l10n: { translations } }) => {
  const pageName = 'ourCases'
  return (
    <Layout pageName={pageName}>
      <Head
        title={translations.industry.meta.ecommerce.title}
        description={translations.industry.meta.ecommerce.description}
      />

      <Hero content={heroContent} />
      <DevCases content={casesContent} />
      <Solutions />
    </Layout>
  )
}

export default L10nConsumer(OurCasesPage)
