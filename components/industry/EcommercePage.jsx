import React from 'react'
import { func } from 'prop-types'
import Layout from '../Layout'
import withI18next from '../../utils/withI18next'
import translate from '../../utils/translate-wrapper'

import Greeting from './Greeting'
import OurClients from './OurClients'

import { greetingImages } from '../../data/industry/ecommerce/images/greeting'
import { ourClientsImages } from '../../data/industry/ecommerce/images/logos'

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
    </Layout>
  )
}

IndustryPage.propTypes = {
  t: func,
}

export default withI18next(['ecommerce'])(translate()(IndustryPage))
