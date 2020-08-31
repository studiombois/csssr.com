import React, { PureComponent } from 'react'
import fetch from 'isomorphic-unfetch'
import Head from '../../components/Head'
import { L10nConsumer } from '../../utils/l10nProvider'
import Layout from '../../components/Layout'
import Vacancies from '../../components/jobs/Vacancies'
import csssrSpaceOrigin from '../../utils/csssrSpaceOrigin'

const pageName = 'jobs'
class JobsPage extends PureComponent {
  static async getInitialProps(ctx) {
    const l10n = ctx.res ? ctx.res.locals.l10n : window.__NEXT_DATA__.props.pageProps.l10n
    const res = await fetch(`${csssrSpaceOrigin}/api/public/vacancies/active?locale=${l10n.locale}`)
    const vacancies = await res.json()

    return { vacancies }
  }

  render() {
    const {
      vacancies,
      l10n: { translations, language },
    } = this.props
    return (
      <Layout pageName={pageName}>
        <Head
          title={translations.jobs.meta.title}
          templateTitle={language === 'ru' ? ' | Вакансии CSSSR' : ''}
          description={translations.jobs.meta.description}
          ogImage={{
            url: require('../../static/images/jobs/1920/cover@2x.jpg'),
            width: 1266,
            height: 2000,
          }}
        />
        <Vacancies vacancies={vacancies} />
      </Layout>
    )
  }
}

export default L10nConsumer(JobsPage)
