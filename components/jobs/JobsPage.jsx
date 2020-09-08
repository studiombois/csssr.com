import React, { PureComponent } from 'react'
import * as Sentry from '@sentry/node'
import fetch from 'isomorphic-unfetch'
import Head from '../../components/Head'
import { L10nConsumer } from '../../utils/l10nProvider'
import Layout from '../../components/Layout'
import Vacancies from '../../components/jobs/Vacancies'
import csssrSpaceOrigin from '../../utils/csssrSpaceOrigin'
import { getOriginal } from '@csssr/csssr.images/dist/utils'

import ogImages from '../../public/images/jobs/cover/all.jpg?csssr-images'

const pageName = 'jobs'
class JobsPage extends PureComponent {
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
            url: getOriginal(ogImages),
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
