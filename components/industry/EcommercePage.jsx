import React from 'react'
import { func } from 'prop-types'
import Layout from '../Layout'
import Greeting from './Greeting'
import withI18next from '../../utils/withI18next'
import translate from '../../utils/translate-wrapper'
import { greetingImages } from '../../data/industry/images/ecommerce'

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
    </Layout>
  )
}

IndustryPage.propTypes = {
  t: func,
}

export default withI18next(['ecommerce'])(translate()(IndustryPage))
