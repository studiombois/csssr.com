import React, { PureComponent } from 'react'
import Head from '../../components/Head'
import Earn from '../../components/school/Earn'
import Manifest from '../../components/school/Manifest'
import Counter from '../../components/school/Counter'
import Courses from '../../components/school/Courses'
import Costs from '../../components/school/Costs'
import Bonus from '../../components/school/Bonus'
import About from '../../components/school/About'
import Form from '../../components/school/Form'
import Layout from '../../components/Layout'
import { devSocialLinks } from '../../data/jobs/footerLinks'
import withI18next from '../../utils/withI18next'

class School extends PureComponent {
  state = {
    isTabletOrLowResDesktop: false,
  }

  componentDidMount() {
    this.mediumMediaQuery = window.matchMedia('(min-width: 768px) and (max-width: 1279px)')

    this.mediumMediaQuery.addListener(this.handleMediaMatch)
    this.handleMediaMatch(this.mediumMediaQuery)
  }
  componentWillUnmount() {
    this.mediumMediaQuery.removeListener(this.handleMediaMatch)
  }

  handleMediaMatch = ({ matches }) =>
    this.setState({
      isTabletOrLowResDesktop: matches,
    })

  render() {
    const { t } = this.props
    const { isTabletOrLowResDesktop } = this.state

    return (
      <Layout
        headerProps={{
          logoHref: '/ru',
          logoAlt: 'CSSSR school logo',
          logoSup: '.school',
          isLogoLink: true,
          isBurgerVisible: true,
        }}
        footerProps={{ logoHref: '/ru', socialLinks: devSocialLinks }}
      >
        <Head title={t('school:meta.title')} description={t('school:meta.description')} />
        <Earn />
        <Manifest />
        <Counter />
        <Courses isTabletOrLowResDesktop={isTabletOrLowResDesktop} />
        <Costs />
        <Bonus />
        <About />
        <Form />
      </Layout>
    )
  }
}

export default withI18next(['school'])(School)
