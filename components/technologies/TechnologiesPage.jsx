import React from 'react'
import Head from '../Head'
import Layout from '../Layout'
import Hero from './Hero'
import Frontend from './Frontend'
import Autotests from './Autotests'
import Backend from './Backend'
import Form from './Form'
import translate from '../../utils/translate-wrapper'

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

export default translate(TechnologiesPage)
