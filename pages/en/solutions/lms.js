import React from 'react'
import Head from '../../../components/Head'
import Layout from '../../../components/Layout'
import Form from '../../../components/ContactFormWrapper'
import ElearningPlatformContent from '../../../components/ElearningPlatform/ElearningPlatformContent'

const ElearningPlatform = () => {
  const pageName = 'eLearningPlatform'

  return (
    <Layout pageName={pageName}>
      <Head
        title="Modular Learning Management System"
        description="Build your solution from the modules, add anything you need with our development team."
      />

      <ElearningPlatformContent pageName={pageName} />
      <Form pageName={pageName} />
    </Layout>
  )
}

export default ElearningPlatform
