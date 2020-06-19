import React from 'react'
import Head from '../Head'
import Layout from '../Layout'

const pagePath = '/privacy-policy'
const pageName = 'privacyPolicy'
const PrivacyPolicyPage = ({ isMsBrowser, children, l10n: { translations } }) => (
  <Layout pageName={pageName}>
    <Head
      title={translations.privacyPolicy.meta.title}
      description={translations.privacyPolicy.meta.description}
      withHrefLang
      pagePath={pagePath}
      isMsBrowser={isMsBrowser}
    >
      <meta name="robots" content="noindex" />
    </Head>

    {children}
  </Layout>
)

export default PrivacyPolicyPage
