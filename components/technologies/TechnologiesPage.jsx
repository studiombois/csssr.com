import React from 'react'
import Head from '../Head'
import Layout from '../Layout'
import Hero from './Hero'
import Frontend from './Frontend'
import Autotests from './Autotests'
import Backend from './Backend'
import Form from './Form'
import withI18next from '../../utils/withI18next'

const TechnologiesPage = ({ t }) => (
  <Layout>
    <Head title={t('technologies:meta.title')} description={t('technologies:meta.description')} />
    <Hero />
    <Frontend />
    <Autotests />
    <Backend />
    <Form pageName="technologies" />
  </Layout>
)

export default withI18next(['technologies'])(TechnologiesPage)
