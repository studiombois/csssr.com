import React from 'react'
import Head from '../../components/Head'
import Layout from '../../components/Layout'
import CookiesPolicyContent from '../../components/cookies-policy/CookiesPolicyContent'
import translate from '../../utils/translate-wrapper'

const PrivacyPolicy = ({ t }) => (
  <Layout>
    <Head title={t('cookiesPolicy:meta.title')} description={t('cookiesPolicy:meta.description')} />
    <CookiesPolicyContent />
  </Layout>
)

export default translate(PrivacyPolicy)
