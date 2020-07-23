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
// AB-test
import { default as ServicesAll } from './ab-test/all/Services'
import { default as HeroV1 } from './ab-test/v1/Hero'
import { default as HeroV2 } from './ab-test/v2/Hero'
import { default as HeroV3 } from './ab-test/v3/Hero'
import { default as HeroV4 } from './ab-test/v4/Hero'

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
      l10n: { translations, locale },
    } = this.props

    const pageName = 'main'
    //  TODO: Поменять на реальную переменную
    const test = locale != 'ru-ru' ? 'v4' : 'v0'
    return (
      <Layout pageName={pageName}>
        <Head
          title={translations.main.meta.title}
          templateTitle=""
          description={translations.main.meta.description}
        />
        {test === 'v0' && <Hero />}
        {test === 'v1' && <HeroV1 />}
        {test === 'v2' && <HeroV2 />}
        {test === 'v3' && <HeroV3 />}
        {test === 'v4' && <HeroV4 />}
        {test === 'v0' ? <Services /> : <ServicesAll />}
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
