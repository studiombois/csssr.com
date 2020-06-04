import React from 'react'
import Head from '../../components/Head'
import Layout from '../../components/Layout'
import Covid19Content from '../../components/covid-19/Covid19Content'

const pageName = 'covid19'
const Covid19Page = () => (
  <Layout pageName={pageName} withFooter={false}>
    <Head customFavicons title="COVID-19 Response — CSSSR Remote Development Team">
      <link rel="icon" href="../../static/covid-19/favicon/favicon-32.png" sizes="32x32" />
      <link rel="icon" href="../../static/covid-19/favicon/apple-touch-icon-57.png" sizes="57x57" />
      <link rel="icon" href="../../static/covid-19/favicon/apple-touch-icon-76.png" sizes="76x76" />
      <link rel="icon" href="../../static/covid-19/favicon/icon-96.png" sizes="96x96" />
      <link
        rel="icon"
        href="../../static/covid-19/favicon/apple-touch-icon-120.png"
        sizes="120x120"
      />
      <link rel="icon" href="../../static/covid-19/favicon/icon-192.png" sizes="192x192" />
      <link rel="icon" href="../../static/covid-19/favicon/icon-256.png" sizes="256x256" />
    </Head>

    <Covid19Content />
  </Layout>
)

export default Covid19Page
