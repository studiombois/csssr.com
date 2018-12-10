import React, { PureComponent } from 'react'
import Head from '../../components/Head'
import Earn from '../../components/school/Earn'
import Manifest from '../../components/school/Manifest'
import Win from '../../components/school/Win'
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
        <Counter />
        <Courses />
        <Costs />
        <Bonus />
        <About />
        <Form />
      </Layout>
    )
  }
}

export default withI18next(['school'])(School)
