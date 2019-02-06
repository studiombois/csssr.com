import React from 'react'
import Head from '../../components/Head'
import Layout from '../../components/Layout'
import PrivacyPolicyContent from '../../components/privacy-policy/PrivacyPolicyContentEn'
import { devSocialLinks } from '../../data/jobs/footerLinks'
import withI18next from '../../utils/withI18next'


const PrivacyPolicy = ({ t }) =>
  <Layout
    headerProps={{ logoHref: '/en', isLogoLink: true, isBurgerVisible: true }}
    footerProps={{ socialLinks: devSocialLinks }}
  >
    <Head title={t('privacyPolicy:meta.title')} description={t('privacyPolicy:meta.description')} />
    <PrivacyPolicyContent />
  </Layout>

export default withI18next(['privacyPolicy'])(PrivacyPolicy)
