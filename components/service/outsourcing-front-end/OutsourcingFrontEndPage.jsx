import React from 'react'
import Layout from '../../../components/Layout'
import Head from '../../../components/Head'
import Hero from '../../../components/service/outsourcing-front-end/Hero'
import AboutFrontend from '../../../components/service/outsourcing-front-end/AboutFrontend'
import Benefits from '../../../components/service/outsourcing-front-end/Benefits'
import WhatWeDo from '../../../components/service/outsourcing-front-end/WhatWeDo'
import TechnologyStack from '../../../components/service/outsourcing-front-end/TechnologyStack'
import OurAdvantages from '../../../components/service/outsourcing-front-end/OurAdvantages'
import Industires from '../../../components/service/outsourcing-front-end/Industires'
import Form from '../../../components/service/outsourcing-front-end/Form'

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
    <TechnologyStack />
    <OurAdvantages />
    <Industires />

    <Form pageName={pageName} />
  </Layout>
)

export default translate(OutsourcingFrontEndPage)
