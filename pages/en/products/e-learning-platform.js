import React from 'react'
import Head from '../../../components/Head'
import Layout from '../../../components/Layout'
import Form from '../../../components/ElearningPlatform/Form'
import ElearningPlatformContent from '../../../components/ElearningPlatform/ElearningPlatformContent'

const ElearningPlatform = () => {
  const pageName = 'eLearningPlatform'

  return (
    <Layout withFooter={true}>
      {/* <Head customFavicons title="Start Your Online Education Business — CSSSR Remote Development Team">
            </Head> */}

      <ElearningPlatformContent />
      <Form pageName={pageName} />
    </Layout>
  )
}

export default ElearningPlatform
