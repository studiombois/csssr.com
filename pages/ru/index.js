import React, { Fragment } from 'react'
import Head from '../../components/Head'
import Form from '../../components/Form'
import Hire from '../../components/dev/Hire'
import Feature1 from '../../components/dev/Feature1'
import Feature2 from '../../components/dev/Feature2'
import Partners from '../../components/dev/Partners'
import withI18next from '../../utils/withI18next'

const devImages = {
  w1920: '../../static/images/geometry_1920.jpg, ../../static/images/geometry_1920_retina.jpg 2x',
  w1360: '../../static/images/geometry_1360.jpg, ../../static/images/geometry_1360_retina.jpg 2x',
  w1280: '../../static/images/geometry_1280.jpg, ../../static/images/geometry_1280_retina.jpg 2x',
  alt: 'geometric figures showing the range of our services: a triangle with the text "MVP", a circle with the text "Support the development of high load web applications" and a square with the text "Stack migration"',
}

const timeImages = {
  w1920: '../../static/images/time_1920.jpg, ../../static/images/time_1920_retina.jpg 2x',
  w1360: '../../static/images/time_1360.jpg, ../../static/images/time_1360_retina.jpg 2x',
  w1280: '../../static/images/time_1280.jpg, ../../static/images/time_1280_retina.jpg 2x',
  alt: 'a man on a bike with a jet pack, showing how quickly we do our job with the text "We care about time to market metrics"',
}

const perfectImages = {
  w1920: '../../static/images/perfect_1920.jpg, ../../static/images/perfect_1920_retina.jpg 2x',
  w1360: '../../static/images/perfect_1360.jpg, ../../static/images/perfect_1360_retina.jpg 2x',
  w1280: '../../static/images/perfect_1280.jpg, ../../static/images/perfect_1280_retina.jpg 2x',
  alt: 'a man who neatly and meticulously cuts geometric bonsai, showing our desire to do everything perfectly with the text "We born with a gene of perfectionism"',
}

export default withI18next(['dev'])(({ t }) =>
  <Fragment>
    <Head title={t('dev:meta.title')} description={t('dev:meta.description')} />
    <Hire />
    <Feature1 images={devImages} />
    <Feature2
      title={t('dev:timeTitle')}
      text={t('dev:timeText')}
      images={timeImages}
    />
    <Partners />
    <Feature2
      style={{ marginTop: '-0.5rem' }}
      title={t('dev:perfectTitle')}
      text={t('dev:perfectText')}
      images={perfectImages}
    />
    <Form />
  </Fragment>
)
