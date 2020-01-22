import React from 'react'
import { string } from 'prop-types'
import Layout from '../Layout'
import Hero from './Hero'
import Services from './Services'
import Industries from './Industries'
import AboutUs from './AboutUs'
import Head from '../Head'
import withI18next from '../../utils/withI18next'

const MainPage = ({ t }) => (
  <Layout>
    <Head title={t('main:meta.title')} description={t('main:meta.description')} />
    <Hero />
    <Services />
    <Industries />
    <AboutUs />
  </Layout>
)

MainPage.propTypes = {
  className: string,
}

export default withI18next(['main'])(MainPage)
