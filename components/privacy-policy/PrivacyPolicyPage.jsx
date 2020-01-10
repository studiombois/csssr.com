import React from 'react'
import Head from '../Head'
import Layout from '../Layout'

const PrivacyPolicyPage = ({ t, isMsBrowser, children }) => (
  <Layout>
    <Head
      title={t('privacyPolicy:meta.title')}
      description={t('privacyPolicy:meta.description')}
      isMsBrowser={isMsBrowser}
    />

    {children}
  </Layout>
)

export default PrivacyPolicyPage
