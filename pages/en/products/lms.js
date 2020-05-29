import React from 'react'
import Head from '../../../components/Head'
import Layout from '../../../components/Layout'
import Form from '../../../components/ElearningPlatform/Form'
import ElearningPlatformContent from '../../../components/ElearningPlatform/ElearningPlatformContent'

const ElearningPlatform = () => {
  const pageName = 'eLearningPlatform'

  return (
    <Layout>
      <Head
        title="Modular Learning Management System"
        description="Build your solution from the modules, add anything you need with our development team."
      />

      <ElearningPlatformContent />
      <Form pageName={pageName} />
    </Layout>
  )
}

export default ElearningPlatform
