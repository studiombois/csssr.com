import React from 'react'
import Layout from '../Layout'
import { L10nConsumer } from '../../utils/l10nProvider'
import Head from '../Head'
import Hero from './Hero'
import DesignCases from './DesignCases'
import DevBlock from './DevBlock'

import heroContent from '../../data/design-lab/hero'
import designCasesContent from '../../data/design-lab/designCases'

const DesignLabPage = ({ l10n: { translations } }) => {
  const pageName = 'designLab'
  return (
    <Layout pageName={pageName}>
      <Head
        title={translations.designLab.meta.title}
        description={translations.designLab.meta.description}
      />

      <Hero content={heroContent} />
      <DesignCases content={designCasesContent} />
      <DevBlock pageName={pageName} />
    </Layout>
  )
}

export default L10nConsumer(DesignLabPage)
