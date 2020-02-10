import React from 'react'
import Head from '../Head'
import Layout from '../Layout'
import Hero from './Hero'
import withI18next from '../../utils/withI18next'

const TechnologiesPage = ({ t }) => (
  <Layout>
    <Head title={t('technologies:meta.title')} />
    <Hero />
  </Layout>
)

export default withI18next(['technologies'])(TechnologiesPage)
