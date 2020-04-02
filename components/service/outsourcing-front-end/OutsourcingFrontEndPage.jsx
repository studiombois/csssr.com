import React from 'react'
import Head from '../../../components/Head'
import Hero from '../../../components/service/outsourcing-front-end/Hero'
import AboutFrontend from '../../../components/service/outsourcing-front-end/AboutFrontend'
import Benefits from '../../../components/service/outsourcing-front-end/Benefits'
import WhatWeDo from '../../../components/service/outsourcing-front-end/WhatWeDo'
import Form from '../../../components/service/outsourcing-front-end/Form'
import Layout from '../../../components/Layout'
import translate from '../../../utils/translate-wrapper'

const pageName = 'outsourcingFrontEnd'
const OutsourcingFrontEndPage = ({ t }) => (
  <Layout pageName={pageName}>
    <Head
      title={t('outsourcingFrontEnd:meta.title')}
      description={t('outsourcingFrontEnd:meta.description')}
    />

    <Hero />
    <AboutFrontend />
    <Benefits />
    <WhatWeDo />

    <Form pageName={pageName} />
  </Layout>
)

export default translate(OutsourcingFrontEndPage)
