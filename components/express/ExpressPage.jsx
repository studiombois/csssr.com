import React from 'react'
import { string } from 'prop-types'
import Layout from '../Layout'
import Head from '../Head'
import { L10nConsumer } from '../../utils/l10nProvider'
import Greeting from './Greeting'
import Workflow from './Workflow'
import Calculator from './Calculator'
import Features from './Features'
import Form from '../ContactFormWrapper'
import { getOriginal } from '@csssr/csssr.images/dist/utils'

import ogImages from '../../public/images/service/express/og/all.jpg?csssr-images'

const pageName = 'express'

const ExpressPage = ({ l10n: { translations } }) => (
  <Layout pageName={pageName}>
    <Head
      title={translations.express.meta.title}
      description={translations.express.meta.description}
      ogImage={{
        url: getOriginal(ogImages),
        width: 2400,
        height: 1260,
      }}
    />

    <Greeting testId="Express:link.greeting" />
    <Workflow />
    <Calculator />
    <Features />
    <Form pageName={pageName} />
  </Layout>
)

ExpressPage.propTypes = {
  className: string,
}

export default L10nConsumer(ExpressPage)
