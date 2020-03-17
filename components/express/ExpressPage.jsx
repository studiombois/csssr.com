import React from 'react'
import { string } from 'prop-types'
import Layout from '../Layout'
import Head from '../Head'
import translate from '../../utils/translate-wrapper'
import Greeting from './Greeting'
import About from './About'
import Workflow from './Workflow'
import Calculator from './Calculator'
import Features from './Features'
import Form from './Form'

const ExpressPage = ({ t }) => (
  <Layout pageName="express">
    <Head
      title={t('express:meta.title')}
      description={t('express:meta.description')}
      ogImage={{
        url: require('../../static/images/express/ogImage.jpg'),
        width: 2400,
        height: 1260,
      }}
    />

    <Greeting />
    <About />
    <Workflow />
    <Calculator />
    <Features />
    <Form />
  </Layout>
)

ExpressPage.propTypes = {
  className: string,
}

export default translate(ExpressPage)
