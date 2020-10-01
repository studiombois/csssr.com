import React from 'react'
import Layout from '../Layout'
import { L10nConsumer } from '../../utils/l10nProvider'
import Head from '../Head'
import Hero from './Hero'
import DevBlock from './DevBlock'

import heroContent from '../../data/design-lab/hero'

const DesignLabPage = ({ l10n: { translations } }) => {
  const pageName = 'designLab'
  return (
    <Layout pageName={pageName}>
      <Head
        title={translations.industry.meta.ecommerce.title}
        description={translations.industry.meta.ecommerce.description}
      />

      <Hero content={heroContent} />
      <DevBlock pageName={pageName} />
    </Layout>
  )
}

export default L10nConsumer(DesignLabPage)
