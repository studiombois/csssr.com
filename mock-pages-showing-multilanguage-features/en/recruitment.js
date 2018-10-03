import React from 'react'
import withI18next from '../../utils/withI18next'
import Head from '../../components/Head'

export default withI18next(['recruitment'])(({ t }) => (
  <div>
    <Head title={t('recruitment:title')} />
    <h1 className='font_h1-slab'>Eng recruitment</h1>
  </div>
))
