import React from 'react'

import withI18next from '../../utils/withI18next'
import Head from '../Head'
import Layout from '../Layout'
import Greeting from './Greeting'
import Organized from './Organized'

const WayOfWork = ({ t }) => {
  return (
    <Layout>
      <Head title={t('wayOfWork:meta.title')} />

      <Greeting title={t('wayOfWork:greeting.title')} />

      <Organized />
    </Layout>
  )
}

export default withI18next(['wayOfWork'])(WayOfWork)
