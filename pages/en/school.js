import React, { Fragment } from 'react'
import NextHead from 'next/head'
import Head from '../../components/Head'
import withI18next from '../../utils/withI18next'
import Layout from '../../components/Layout'
import NoPage from '../../components/NoPage'

function School({ t }) {
  return (
    <Fragment>
      <Layout
        headerProps={{
          logoAlt: 'CSSSR logo',
          isLogoLink: true,
          isBurgerVisible: true,
        }}
        footerProps={{ noFooter: true }}
      >
        <Head title={t('school:meta.title')} description={t('school:meta.description')} />
        <NextHead>
          <meta name="robots" content="noindex" />
        </NextHead>
        <NoPage />
      </Layout>
    </Fragment>
  )
}

export default withI18next(['school'])(School)
