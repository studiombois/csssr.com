import React from 'react'
import Layout from '../Layout'
import { L10nConsumer } from '../../utils/l10nProvider'
import Head from '../Head'
import Hero from './Hero'
import DevCases from './DevCases'
import Solutions from './Solutions'
import Idea from '../../components/Idea'

import heroContent from '../../data/our-cases/hero'
import casesContent from '../../data/our-cases/devCases'
import designCasesContent from '../../data/our-cases/designCases'
import DesignCases from './DesignCases/DesignCases'

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
      <DesignCases content={designCasesContent} />
      <Solutions />
      <Idea pageName={pageName} />
    </Layout>
  )
}

export default L10nConsumer(OurCasesPage)
