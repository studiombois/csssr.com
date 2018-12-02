import React, { PureComponent } from 'react'
import Head from '../../components/Head'
import Earn from '../../components/school/Earn'
import Manifest from '../../components/school/Manifest'
import Cups from '../../components/school/Cups'
import Layout from '../../components/Layout'
import { devSocialLinks } from '../../data/jobs/footerLinks'
import withI18next from '../../utils/withI18next'

class School extends PureComponent {
  state = {
    isMobile: false,
  }

  componentDidMount() {
    const mobileMediaQuery = window.matchMedia('(max-width: 767px)')

    mobileMediaQuery.addListener(this.handleMediaMatch)
    this.handleMediaMatch(mobileMediaQuery)
  }

  handleMediaMatch = ({ matches }) =>
    this.setState({
      isMobile: matches,
    })

  render() {
    const { t } = this.props

    return (
      <Layout
        headerProps={{ logoHref: '/ru', isBurgerVisible: true }}
        footerProps={{ logoHref: '/ru', socialLinks: devSocialLinks }}
      >
        <Head title={t('school:meta.title')} description={t('school:meta.description')} />
        <Earn />
        <Manifest />
        <Cups />
      </Layout>
    )
  }
}

export default withI18next(['school'])(School)
