import React, { PureComponent } from 'react'
import { string } from 'prop-types'
import * as Sentry from '@sentry/node'
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
    let vacancies

    try {
      const res = await fetch(
        `${csssrSpaceOrigin}/api/public/vacancies/active?locale=${l10n.locale}`,
      )
      vacancies = await res.json()
    } catch (error) {
      vacancies = []

      Sentry.captureException(error)
    }

    return { vacancies }
  }

  /* A/B test en-main-page code start */
  windowInnerHeight = undefined

  scrollEventListener = () => {
    if (window.scrollY > this.windowInnerHeight / 2) {
      if (window.dataLayer) {
        window.dataLayer.push({ event: 'scrolled_to_services' })
      }
      window.removeEventListener('scroll', this.scrollEventListener)
    }
  }

  componentDidMount() {
    this.windowInnerHeight = window.innerHeight
    window.addEventListener('scroll', this.scrollEventListener, { passive: true })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollEventListener)
  }
  /* A/B test en-main-page code end */

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
