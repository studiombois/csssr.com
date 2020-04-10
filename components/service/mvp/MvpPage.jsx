import React from 'react'
import Layout from '../../Layout'
import Head from '../../Head'
import Hero from './Hero'
import AboutMvp from './AboutMvp'
import Benefits from './Benefits'
import OurAdvantages from './OurAdvantages'
import Process from './Process'
// import Form from './Form'

import translate from '../../../utils/translate-wrapper'

const pageName = 'mvp'
const MvpDevelopmentPage = ({ t }) => (
  <Layout pageName={pageName}>
    <Head title={t('mvp:meta.title')} description={t('mvp:meta.description')} />
    <Hero />
    <AboutMvp />
    <Benefits />
    <OurAdvantages />
    <Process />
    {/* <Form pageName={pageName} /> */}
  </Layout>
)

export default translate(MvpDevelopmentPage)
