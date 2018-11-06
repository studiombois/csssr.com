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
  <Layout headerProps={{ logoHref: '/ru', isBurgerVisible: true }} footerProps={{ logoHref: '/ru' }}>
    <Head title={t('dev:meta.title')} description={t('dev:meta.description')} />
    <Hire />
    <Feature1
      image={{ namespace: 'dev', key: 'geometry', alt: t('dev:imgAlt.geometry') }}
    />
    <Feature2
      title={t('dev:time.title')}
      text={t('dev:time.text')}
      image={{ namespace: 'dev', key: 'time', alt: t('dev:imgAlt.time') }}
    />
    <Partners />
    <Feature2
      style={{ marginTop: '-0.5rem' }}
      title={t('dev:perfect.title')}
      text={t('dev:perfect.text')}
      image={{ namespace: 'dev', key: 'perfect', alt: t('dev:imgAlt.perfect') }}
    />
    <Form />
  </Layout>
)
