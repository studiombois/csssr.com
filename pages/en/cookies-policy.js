import React from 'react'
import Head from '../../components/Head'
import Layout from '../../components/Layout'
import CookiesPolicyContent from '../../components/cookies-policy/CookiesPolicyContent'
import { devSocialLinks } from '../../data/jobs/footerLinks'
import withI18next from '../../utils/withI18next'


const PrivacyPolicy = ({ t }) =>
  <Layout
    headerProps={{ isLogoLink: true, isBurgerVisible: true }}
    footerProps={{ socialLinks: devSocialLinks }}
  >
    <Head title={t('cookiesPolicy:meta.title')} description={t('cookiesPolicy:meta.description')} />
    <CookiesPolicyContent />
  </Layout>

export default withI18next(['cookiesPolicy'])(PrivacyPolicy)
