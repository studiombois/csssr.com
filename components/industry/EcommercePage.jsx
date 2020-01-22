import React from 'react'
import { func } from 'prop-types'
import Layout from '../Layout'
import withI18next from '../../utils/withI18next'
import translate from '../../utils/translate-wrapper'

import Greeting from './Greeting'
import OurClients from './OurClients'
import Facts from './Facts'
import CoreValues from './CoreValues'
import Form from './Form'

import { greetingImages } from '../../data/industry/ecommerce/greeting'
import { ourClientsImages } from '../../data/industry/ecommerce/logos'
import coreValues from '../../data/industry/ecommerce/coreValues'

import facts from '../../data/industry/ecommerce/facts'

const IndustryPage = ({ t }) => {
  return (
    <Layout>
      <Greeting
        id="greeting"
        content={{
          heading: t('ecommerce:greeting.title'),
          text: t('ecommerce:greeting.paragraph'),
          button: t('ecommerce:greeting.button'),
          images: greetingImages,
          imgAlt: t('ecommerce:imgAlt.greeting'),
        }}
      />

      <OurClients
        id="ourClients"
        content={{
          heading: t('ecommerce:ourClients.title'),
          images: ourClientsImages,
          altImg: t('ecommerce:imgAlt.ourClients'),
        }}
      />

      <Facts id="facts" content={facts} />

      <CoreValues id="core-values" content={coreValues} />

      <Form />
    </Layout>
  )
}

IndustryPage.propTypes = {
  t: func,
}

export default withI18next(['ecommerce', 'industry'])(translate()(IndustryPage))
