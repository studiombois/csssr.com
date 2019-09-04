import React from 'react'
import Head from '../../components/Head'
import Layout from '../../components/Layout'
import PrivacyPolicyContent from '../../components/privacy-policy/PrivacyPolicyContentEn'
import { devSocialLinks } from '../../data/jobs/footerLinks'
import withI18next from '../../utils/withI18next'


const PrivacyPolicy = ({ t, isMsBrowser }) =>
  <Layout
    headerProps={{ isLogoLink: true, isBurgerVisible: true, isMsBrowser }}
    footerProps={{ socialLinks: devSocialLinks }}
  >
    <Head
      title={t('privacyPolicy:meta.title')}
      description={t('privacyPolicy:meta.description')}
      isMsBrowser={isMsBrowser}
    />

    <PrivacyPolicyContent />
  </Layout>

export default withI18next(['privacyPolicy'])(PrivacyPolicy)
