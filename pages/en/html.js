import React, { PureComponent } from 'react'
import Head from '../../components/Head'
import Hire from '../../components/sborka/Hire'
import Budget from '../../components/sborka/Budget'
import Projects from '../../components/sborka/Projects'
import Portfolio from '../../components/sborka/Portfolio'
import OurPrinciples from '../../components/sborka/OurPrinciples'
import WorkingProcess from '../../components/sborka/WorkingProcess'
import Form from '../../components/sborka/Form'
import PostScriptum from '../../components/sborka/PostScriptum'
import Layout from '../../components/Layout'
import ButtonSelect from '../../components/ui-kit/ButtonSelect'
import { devSocialLinks } from '../../data/jobs/footerLinks'
import withI18next from '../../utils/withI18next'


class Sborka extends PureComponent {
  static async getInitialProps(appContext) {

    return {
      userAgent: appContext.req
        ? appContext.req.headers['user-agent']
        : window.navigator.userAgent,
    }
  }

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
    const { t, userAgent } = this.props
    const { isMobile } = this.state
    
    return (
      <Layout
        headerProps={{ logoHref: '/en/html', isBurgerVisible: true }}
        footerProps={{ logoHref: '/en/html', socialLinks: devSocialLinks }}
      >
        <Head title={t('sborka:meta.title')} description={t('sborka:meta.description')} />
        <Hire isEdge={userAgent.includes('Edge')} />
        <Budget />
        <Projects />
        <Portfolio isMobile={isMobile} />
        <OurPrinciples />
        <WorkingProcess />
        <Form />
        <PostScriptum />
        <ButtonSelect
          isMobile={isMobile}
          showButtonOnNode='budget'
          hideButtonOnNode='hire-us'
        >
          {t('sborka:hire.buttonText')}
        </ButtonSelect>
      </Layout>
    )
  }
}

export default withI18next(['sborka'])(Sborka)
