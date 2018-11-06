import React, { Fragment } from 'react'
import Head from '../../components/Head'
import withI18next from '../../utils/withI18next'
import Layout from '../../components/Layout'
import NoPage from '../../components/NoPage'

function Jobs({ t }) {
  return (
    <Fragment>
      <Layout
        headerProps={{
          isHalfed: true,
          logoHref: '/ru/jobs#',
          logoAlt: 'CSSSR jobs logo',
          logoSup: '.jobs',
          isLogoLink: true,
          isBurgerVisible: true,
        }}
        footerProps={{ noFooter: true }}
      >
        <Head title={t('jobs:meta.title')} description={t('jobs:meta.description')} />
        <NoPage />
      </Layout>
    </Fragment>
  )
}

export default withI18next(['jobs'])(Jobs)
