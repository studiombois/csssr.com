import React from 'react'
import Head from '../Head'
import Layout from '../Layout'
import Hero from './Hero'
import Frontend from './Frontend'
import withI18next from '../../utils/withI18next'

const TechnologiesPage = ({ t }) => (
  <Layout>
    <Head title={t('technologies:meta.title')} />
    <Hero />
    <Frontend />
  </Layout>
)

export default withI18next(['technologies'])(TechnologiesPage)
