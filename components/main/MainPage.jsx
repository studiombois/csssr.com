import React, { PureComponent } from 'react'
import { string } from 'prop-types'
import Layout from '../Layout'
import Hero from './Hero'
import Services from './Services'
import Industries from './Industries'
import AboutUs from './AboutUs'
import Projects from './Projects'
import Vacancies from './Vacancies'
import Head from '../Head'
import withI18next from '../../utils/withI18next'
import csssrSpaceOrigin from '../../utils/csssrSpaceOrigin'
import i18n from '../../common/i18n'

class MainPage extends PureComponent {
  static async getInitialProps({ req }) {
    const locale = req ? req.language : i18n.language
    const res = await fetch(`${csssrSpaceOrigin}/api/public/vacancies/active?locale=${locale}`)
    const vacancies = await res.json()

    return { vacancies }
  }

  render() {
    const { vacancies, t } = this.props
    return (
      <Layout>
        <Head title={t('main:meta.title')} description={t('main:meta.description')} />
        <Hero />
        <Services />
        <Industries />
        <AboutUs />
        <Projects />
        <Vacancies vacancies={vacancies} />
      </Layout>
    )
  }
}

MainPage.propTypes = {
  className: string,
}

export default withI18next(['main'])(MainPage)
