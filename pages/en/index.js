import React, { Fragment } from 'react'
import Head from '../../components/Head'
import Form from '../../components/Form'
import Hire from '../../components/dev/Hire'
import Feature1 from '../../components/dev/Feature1'
import Feature2 from '../../components/dev/Feature2'
import Partners from '../../components/dev/Partners'
import withI18next from '../../utils/withI18next'

export default withI18next(['dev'])(({ t }) =>
  <Fragment>
    <Head title={t('dev:meta.title')} description={t('dev:meta.description')} />
    <Hire />
    <Feature1 imagesKey='geometry' />
    <Feature2
      title={t('dev:weCareAboutTimeToMarket')}
      text='Our methodology is&nbsp;similar to&nbsp;Scrum and involves working with sprints. Our sprints generally last one or&nbsp;two weeks. At&nbsp;the end of&nbsp;each sprint, we&nbsp;release a&nbsp;new build version and plan product features that will be&nbsp;developed in&nbsp;the next sprint.'
      imagesKey='time'
    />
    <Partners />
    <Feature2
      style={{ marginTop: '-0.5rem' }}
      title='We&nbsp;were&nbsp;born with a&nbsp;gene of&nbsp;perfectionism'
      text='Most of&nbsp;us are perfectionists. Perfectionism is&nbsp;far more dangerous than procrastination&nbsp;&mdash; and we&nbsp;have tamed&nbsp;it. That is&nbsp;why our code is&nbsp;architecturally complex yet elegant, and our attention to&nbsp;detail is&nbsp;almost maniacal&nbsp;&mdash; but only if&nbsp;justified by&nbsp;the business requirements. In&nbsp;our opinion, it&nbsp;is&nbsp;focus on&nbsp;details that makes the difference between average and successful projects.'
      imagesKey='perfect'
    />
    <Form />
  </Fragment>
)
