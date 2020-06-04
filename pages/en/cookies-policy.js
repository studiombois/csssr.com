import React from 'react'
import Head from '../../components/Head'
import Layout from '../../components/Layout'
import CookiesPolicyContent from '../../components/cookies-policy/CookiesPolicyContent'
import { L10nConsumer } from '../../utils/l10nProvider'

const pageName = 'cookiesPolicy'
const PrivacyPolicy = ({ l10n: { translations } }) => (
  <Layout pageName={pageName}>
    <Head
      title={translations.cookiesPolicy.meta.title}
      description={translations.cookiesPolicy.meta.description}
    >
      <meta name="robots" content="noindex" />
    </Head>
    <CookiesPolicyContent />
  </Layout>
)

export default L10nConsumer(PrivacyPolicy)
