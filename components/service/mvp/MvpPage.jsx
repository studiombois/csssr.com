import React from 'react'
import Layout from '../../Layout'
import Head from '../../Head'
import Hero from './Hero'
// import Form from './Form'

import translate from '../../../utils/translate-wrapper'

const pageName = 'mvp'
const MvpDevelopmentPage = ({ t }) => (
  <Layout pageName={pageName}>
    <Head title={t('mvp:meta.title')} description={t('mvp:meta.description')} />
    <Hero />
    {/* <Form pageName={pageName} /> */}
  </Layout>
)

export default translate(MvpDevelopmentPage)