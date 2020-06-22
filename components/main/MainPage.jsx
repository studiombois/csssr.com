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
import Form from '../ContactFormWrapper'
import csssrSpaceOrigin from '../../utils/csssrSpaceOrigin'

class MainPage extends PureComponent {
  static async getInitialProps(ctx) {
    const l10n = ctx.res ? ctx.res.locals.l10n : window.__NEXT_DATA__.props.pageProps.l10n
    const res = await fetch(`${csssrSpaceOrigin}/api/public/vacancies/active?locale=${l10n.locale}`)
    const vacancies = await res.json()

    return { vacancies }
  }

  render() {
    const {
      vacancies,
      l10n: { translations },
    } = this.props

    const pageName = 'main'
    return (
      <Layout pageName={pageName}>
        <Head
          title={translations.main.meta.title}
          templateTitle=""
          description={translations.main.meta.description}
        />
        <Hero />
        <Services />
        <Industries />
        <AboutUs />
        <Projects />
        <Vacancies vacancies={vacancies} />
        <Form pageName={pageName} />
      </Layout>
    )
  }
}

MainPage.propTypes = {
  className: string,
}

export default MainPage
