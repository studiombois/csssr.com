import React from 'react'
import Head from '../Head'
import Layout from '../Layout'
import { devSocialLinks } from '../../data/jobs/footerLinks'

const PrivacyPolicyPage = ({ t, isMsBrowser, children }) => (
  <Layout
    headerProps={{
      isLogoLink: true,
      isBurgerVisible: true,
      isMsBrowser,
      title: t('common:menu.privacy-policy'),
      sectionName: t('common:sectionName.privacy-policy'),
    }}
    footerProps={{ socialLinks: devSocialLinks }}
  >
    <Head
      title={t('privacyPolicy:meta.title')}
      description={t('privacyPolicy:meta.description')}
      isMsBrowser={isMsBrowser}
    />

    {children}
  </Layout>
)

export default PrivacyPolicyPage
