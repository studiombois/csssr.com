import React from 'react'
import Head from '../../components/Head'
import Form from '../../components/Form'
import Hire from '../../components/dev/Hire'
import Feature1 from '../../components/dev/Feature1'
import Feature2 from '../../components/dev/Feature2'
import Partners from '../../components/dev/Partners'
import Layout from '../../components/Layout'
import withI18next from '../../utils/withI18next'

export default withI18next(['dev'])(({ t }) =>
  <Layout headerProps={{ logoHref: '/en', isBurgerVisible: true }} footerProps={{ logoHref: '/en' }}>
    <Head title={t('dev:meta.title')} description={t('dev:meta.description')} />
    <Hire />
    <Feature1 imagesKey='geometry' />
    <Feature2
      title={t('dev:time.title')}
      text={t('dev:time.text')}
      imagesKey='time'
    />
    <Partners />
    <Feature2
      style={{ marginTop: '-0.5rem' }}
      title={t('dev:perfect.title')}
      text={t('dev:perfect.text')}
      imagesKey='perfect'
    />
    <Form />
  </Layout>
)
