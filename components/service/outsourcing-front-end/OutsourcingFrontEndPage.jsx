import React from 'react'
import Head from '../../../components/Head'
import Hero from '../../../components/service/outsourcing-front-end/Hero'
import Form from '../../../components/service/outsourcing-front-end/Form'
import Layout from '../../../components/Layout'
import translate from '../../../utils/translate-wrapper'

const pageName = 'outsourcingFrontEnd'
const OutsourcingFrontEndPage = ({ t }) => (
  <Layout pageName="dev">
    <Head
      title={t('outsourcingFrontEnd:meta.title')}
      description={t('outsourcingFrontEnd:meta.description')}
    />

    <Hero />
    <Form pageName={pageName} />
  </Layout>
)

export default translate(OutsourcingFrontEndPage)
