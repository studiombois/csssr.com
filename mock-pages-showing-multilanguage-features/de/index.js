import React from 'react'
import withI18next from '../../utils/withI18next'
import Head from '../../components/Head'

export default withI18next(['dev'])(({ t }) => (
  <div>
    <Head title={t('dev:title')} />
    <h1 className='font_h1-slab'>German</h1>
  </div>
))