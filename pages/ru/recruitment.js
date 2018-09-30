import React from 'react'
import withI18next from '../../utils/withI18next'
import Head from '../../components/Head'

export default withI18next(['recruitment'])(({ t }) => {
  return <div>
    <Head title={t('recruitment:title')} />
    <div>{t('recruitment:qweqwe')}</div>
    <h1 className='font_h1-slab'>RU recruitment</h1>
  </div>
})
