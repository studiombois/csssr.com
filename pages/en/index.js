import React, { PureComponent } from 'react'
import Head from '../../components/Head'
import Form from '../../components/dev/Form'
import Hire from '../../components/dev/Hire'
import Feature1 from '../../components/dev/Feature1'
import Feature2 from '../../components/dev/Feature2'
import Partners from '../../components/dev/Partners'
import PartnersMobile from '../../components/dev/PartnersMobile'
import Layout from '../../components/Layout'
import { devSocialLinks } from '../../data/jobs/footerLinks'
import withI18next from '../../utils/withI18next'

const mobileMediaQuery = window.matchMedia('(max-width: 767px)')

class Dev extends PureComponent {
  state = {
    isMobile: false,
  }

  componentDidMount() {
    mobileMediaQuery.addListener(this.handleMediaMatch)
    this.handleMediaMatch(mobileMediaQuery)
  }

  componentWillUnmount() {
    mobileMediaQuery.removeListener(this.handleMediaMatch)
  }

  handleMediaMatch = ({ matches }) =>
    this.setState({
      isMobile: matches,
    })

  render() {
    const { t } = this.props

    return (
      <Layout
        headerProps={{ logoHref: '/en', isBurgerVisible: true }}
        footerProps={{ logoHref: '/en', socialLinks: devSocialLinks }}
      >
        <Head title={t('dev:meta.title')} description={t('dev:meta.description')} />
        <Hire />
        <Feature1
          image={{ namespace: 'dev', key: 'geometry', alt: t('dev:imgAlt.geometry') }}
        />
        <Feature2
          title={t('dev:time.title')}
          text={t('dev:time.text')}
          image={{ namespace: 'dev', key: 'time', alt: t('dev:imgAlt.time') }}
        />
        {this.state.isMobile ? <PartnersMobile /> : <Partners />}

        <Feature2
          style={{ marginTop: '-0.5rem' }}
          title={t('dev:perfect.title')}
          text={t('dev:perfect.text')}
          image={{ namespace: 'dev', key: 'perfect', alt: t('dev:imgAlt.perfect') }}
        />
        <Form />
      </Layout>
    )
  }
}

export default withI18next(['dev'])(Dev)
