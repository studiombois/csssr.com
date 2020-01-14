import React from 'react'
import { string } from 'prop-types'
import Hero from './Hero'
import Layout from '../Layout'
import Head from '../Head'
import withI18next from '../../utils/withI18next'

const MainPage = ({ t }) => (
  <Layout>
    <Head title={t('main:meta.title')} description={t('main:meta.description')} />
    <Hero />
  </Layout>
)

MainPage.propTypes = {
  className: string,
}

export default withI18next(['main'])(MainPage)
