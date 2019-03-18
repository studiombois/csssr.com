import React, { PureComponent } from 'react'
import Head from '../../components/Head'
import Layout from '../../components/Layout'
import Begin from '../../components/mvp/Begin'
import RiskMinimization from '../../components/mvp/RiskMinimization'
import Money from '../../components/mvp/Money'
import Process from '../../components/mvp/Process'
import HireUs from '../../components/mvp/HireUs'
import withI18next from '../../utils/withI18next'
import { devSocialLinks } from '../../data/jobs/footerLinks'

class MVP extends PureComponent {
  render() {
    const { t } = this.props

    return (
      <Layout
        headerProps={{ logoHref: '/ru', isLogoLink: true, isBurgerVisible: true }}
        footerProps={{ socialLinks: devSocialLinks }}
      >
        <Head title={t('mvp:meta.title')} description={t('mvp:meta.description')} />
        <Begin />
        <RiskMinimization />
        <Money />
        <Process />
        <HireUs />
      </Layout>
    )
  }
}

export default withI18next(['mvp'])(MVP)
