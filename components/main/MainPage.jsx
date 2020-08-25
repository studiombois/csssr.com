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
import AbContext from '../../utils/abContext'
import { default as ServicesAll } from './ab-test/all/Services'
import { default as HeroV1 } from './ab-test/v1/Hero'
import { default as HeroV2 } from './ab-test/v2/Hero'
import { default as HeroV3 } from './ab-test/v3/Hero'
import { default as HeroV4 } from './ab-test/v4/Hero'
import { default as HeroV5 } from './ab-test/v5/Hero'
import { default as HeroV6 } from './ab-test/v6/Hero'
import abMeta from '../../data/ab-test/main/metaEn'

class MainPage extends PureComponent {
  static async getInitialProps(ctx) {
    const l10n = ctx.res ? ctx.res.locals.l10n : window.__NEXT_DATA__.props.pageProps.l10n
    const res = await fetch(`${csssrSpaceOrigin}/api/public/vacancies/active?locale=${l10n.locale}`)
    const vacancies = await res.json()

    return { vacancies }
  }

  /* A/B test en-main-page code start */
  windowInnerHeight = undefined

  scrollEventListener = () => {
    if (window.scrollY > this.windowInnerHeight) {
      if (window.dataLayer) {
        window.dataLayer.push({ event: 'scrolled_to_services' })
      }
      window.removeEventListener('scroll', this.scrollEventListener)
    }
  }

  componentDidMount() {
    if (this.props.l10n.language === 'en') {
      this.windowInnerHeight = window.innerHeight
      window.addEventListener('scroll', this.scrollEventListener, { passive: true })
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollEventListener)
  }
  /* A/B test en-main-page code end */

  render() {
    const {
      vacancies,
      l10n: { translations, language },
    } = this.props

    const pageName = 'main'
    return (
      <Layout pageName={pageName}>
        {language === 'en' ? (
          <AbContext.Consumer>
            {(ab) => {
              const variant = ab['en-main-page'].name
              return (
                <>
                  <Head
                    title={
                      variant === 'base' ? translations.main.meta.title : abMeta[variant].title
                    }
                    templateTitle=""
                    description={
                      variant === 'base'
                        ? translations.main.meta.description
                        : abMeta[variant].description
                    }
                  />

                  {variant === 'base' && <Hero />}
                  {variant === 'v1' && <HeroV1 />}
                  {variant === 'v2' && <HeroV2 />}
                  {variant === 'v3' && <HeroV3 />}
                  {variant === 'v4' && <HeroV4 />}
                  {variant === 'v5' && <HeroV5 />}
                  {variant === 'v6' && <HeroV6 />}
                  {variant === 'base' ? <Services /> : <ServicesAll />}
                </>
              )
            }}
          </AbContext.Consumer>
        ) : (
          <>
            <Head
              title={translations.main.meta.title}
              templateTitle=""
              description={translations.main.meta.description}
            />
            <Hero />
            <Services />
          </>
        )}
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
