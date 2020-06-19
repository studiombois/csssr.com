import React from 'react'
import Layout from '../../Layout'
import Head from '../../Head'
import Hero from './Hero'
import AboutMvp from './AboutMvp'
import Benefits from './Benefits'
import OurAdvantages from './OurAdvantages'
import Process from './Process'
import Form from '../../ContactFormWrapper'

import { L10nConsumer } from '../../../utils/l10nProvider'

const pagePath = '/service/mvp-development'
const pageName = 'mvp'
const MvpDevelopmentPage = ({ l10n: { translations } }) => (
  <Layout pageName={pageName}>
    <Head
      title={translations.mvp.meta.title}
      description={translations.mvp.meta.description}
      withHrefLang
      pagePath={pagePath}
    />
    <Hero pageName={pageName} />
    <AboutMvp />
    <Benefits />
    <OurAdvantages />
    <Process />
    <Form pageName={pageName} />
  </Layout>
)

export default L10nConsumer(MvpDevelopmentPage)
