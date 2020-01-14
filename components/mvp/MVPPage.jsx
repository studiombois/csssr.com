import React, { PureComponent } from 'react'
import Head from '../Head'
import Layout from '../Layout'
import Begin from './Begin'
import RiskMinimization from './RiskMinimization'
import ButtonSelect from '../ui-kit/ButtonSelect/ButtonSelect'
import Money from './Money'
import Process from './Process'
import HireUs from './HireUs'
import withI18next from '../../utils/withI18next'

class MVPPage extends PureComponent {
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
      <Layout>
        <Head
          title={t('mvp:meta.title')}
          description={t('mvp:meta.description')}
          ogImage={{
            url: require('../../static/images/mvp/ogImage.jpg'),
            width: 2400,
            height: 1260,
          }}
        />
        <Begin />
        <RiskMinimization />
        <Money />
        <Process />
        <HireUs />
        <ButtonSelect
          isMobile={isMobile}
          showButtonOnNode="advantages"
          hideButtonOnNode="hire-us"
          buttonText={t('mvp:buttonText')}
          pageName="mvp"
        />
      </Layout>
    )
  }
}

export default withI18next(['mvp'])(MVPPage)
