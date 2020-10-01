import React from 'react'
import Layout from '../Layout'
import { L10nConsumer } from '../../utils/l10nProvider'
import Head from '../Head'
import Hero from './Hero'
import DesignCases from './DesignCases'

import heroContent from '../../data/design-lab/hero'
import designCasesContent from '../../data/design-lab/designCases'

const DesignLabPage = ({ l10n: { translations } }) => {
  const pageName = 'designLab'
  return (
    <Layout pageName={pageName}>
      <Head
        title={translations.industry.meta.ecommerce.title}
        description={translations.industry.meta.ecommerce.description}
      />

      <Hero content={heroContent} />
      <DesignCases content={designCasesContent} />
    </Layout>
  )
}

export default L10nConsumer(DesignLabPage)
