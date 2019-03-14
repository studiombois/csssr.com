import React, { Fragment, PureComponent } from 'react'
import fetch from 'isomorphic-unfetch'
import Head from '../../components/Head'
import withI18next from '../../utils/withI18next'
import Layout from '../../components/Layout'
import Vacancies from '../../components/jobs/Vacancies'
import csssrSpaceOrigin from '../../utils/csssrSpaceOrigin'

class Jobs extends PureComponent {
  static async getInitialProps() {
    const res = await fetch(`${csssrSpaceOrigin}/api/public/vacancies/active`)
    const vacancies = await res.json()

    return { vacancies }
  }

  render() {
    const { t, vacancies } = this.props
    return (
      <Fragment>
        <Layout
          headerProps={{ isBurgerVisible: true }}
          footerProps={{ noFooter: true }}
        >
          <Head title={t('jobs:meta.title')} description={t('jobs:meta.description')} />
          <Vacancies
            vacancies={vacancies}
            lang='en'
            title={t('jobs:title')}
            subTitle={t('jobs:subTitle')}
            logoAlt={t('jobs:logoAlt')}
            how={{
              alt: t('jobs:how.alt'),
              word: t('jobs:how.word'),
              title: t('jobs:how.title'),
              description: t('jobs:how.description'),
            }}
            who={{
              alt: t('jobs:who.alt'),
              word: t('jobs:who.word'),
              title: t('jobs:who.title'),
              description: t('jobs:who.description'),
            }}
            about={{
              alt: t('jobs:about.alt'),
              title: t('jobs:about.title'),
              descriptionFirst: t('jobs:about.descriptionFirst'),
              descriptionSecond: t('jobs:about.descriptionSecond'),
            }}
            hunter={{
              alt: t('jobs:hunter.alt'),
              description: t('jobs:hunter.description'),
              and: t('jobs:hunter.and'),
              secondLinkText: t('jobs:hunter.secondLinkText'),
              firstLinkText: t('jobs:hunter.firstLinkText'),
              firstLink: t('jobs:hunter.firstLink'),
              secondLink: t('jobs:hunter.secondLink'),
            }}
          />
        </Layout>
        <style jsx>{`
          @media (max-width: 767px) {
            :global(#header-background) {
              z-index: -2;
            }
          }
        `}</style>
      </Fragment>
    )
  }
}

export default withI18next(['jobs'])(Jobs)
