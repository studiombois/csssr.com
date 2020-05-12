import React from 'react'
import Layout from '../../../components/Layout'
import Head from '../../../components/Head'
import Hero from '../../../components/service/outsourcing-front-end/Hero'
import AboutFrontend from '../../../components/service/outsourcing-front-end/AboutFrontend'
import Benefits from '../../../components/service/outsourcing-front-end/Benefits'
import WhatWeDo from '../../../components/service/outsourcing-front-end/WhatWeDo'
import TechnologyStack from '../../../components/service/outsourcing-front-end/TechnologyStack'
import OurAdvantages from '../../../components/service/outsourcing-front-end/OurAdvantages'
import Industries from '../../../components/service/outsourcing-front-end/Industries'
import Form from '../../../components/service/outsourcing-front-end/Form'

import { L10nConsumer } from '../../../utils/l10nProvider'

const pageName = 'outsourcingFrontEnd'
const OutsourcingFrontEndPage = ({ l10n: { translations } }) => (
  <Layout pageName={pageName}>
    <Head
      title={translations.outsourcingFrontEnd.meta.title}
      description={translations.outsourcingFrontEnd.meta.description}
    />
    <Hero />
    <AboutFrontend />
    <Benefits />
    <WhatWeDo />
    <TechnologyStack />
    <OurAdvantages />
    <Industries />
    <Form pageName={pageName} />
  </Layout>
)

export default L10nConsumer(OutsourcingFrontEndPage)
