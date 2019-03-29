import React, { PureComponent } from 'react'
import Head from '../../components/Head'
import Layout from '../../components/Layout'
import Begin from '../../components/mvp/Begin'
import RiskMinimization from '../../components/mvp/RiskMinimization'
import ButtonSelect from '../../components/ui-kit/ButtonSelect/ButtonSelect'
import Money from '../../components/mvp/Money'
import Process from '../../components/mvp/Process'
import HireUs from '../../components/mvp/HireUs'
import withI18next from '../../utils/withI18next'
import { devSocialLinks } from '../../data/jobs/footerLinks'

class MVP extends PureComponent {
  state = {
    isMobile: false,
  }

  componentDidMount() {
    this.mobileMediaQuery = window.matchMedia('(max-width: 767px)')
    this.mobileMediaQuery.addListener(this.handleMediaMatch)
    this.handleMediaMatch(this.mobileMediaQuery)
  }

  componentWillUnmount() {
    this.mobileMediaQuery.removeListener(this.handleMediaMatch)
  }

  handleMediaMatch = ({ matches }) =>
    this.setState({
      isMobile: matches,
    })

  render() {
    const { t } = this.props
    const { isMobile } = this.state

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
        <ButtonSelect
          isMobile={isMobile}
          showButtonOnNode='advantages'
          hideButtonOnNode='hire-us'
          buttonText={t('mvp:buttonText')}
        />
      </Layout>
    )
  }
}

export default withI18next(['mvp'])(MVP)
