import React, { Fragment } from 'react'
import NextHead from 'next/head'
import Head from '../../components/Head'
import withI18next from '../../utils/withI18next'
import Layout from '../../components/Layout'
import NoPage from '../../components/NoPage'

function MVP({ t }) {
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
        <Head title={t('mvp:meta.title')} description={t('mvp:meta.description')} />
        <NextHead>
          <meta name='robots' content='noindex'/>
        </NextHead>
        <NoPage />
      </Layout>
    </Fragment>
  )
}

export default withI18next(['mvp'])(MVP)
