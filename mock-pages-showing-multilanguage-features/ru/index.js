import React from 'react'
import withI18next from '../../utils/withI18next'
import Head from '../../components/Head'

const RuDev = ({ t }) => (
  <div>
    <Head title={t('dev:title')} />
    <div>{t('dev:title')}</div>
    <div>{t('common:hello')}</div>
    <article>
      <h1 className='font_h1-slab'>Русский</h1>
    </article>
    <style jsx>{`
    article {
      margin-left: auto;
      margin-right: auto;
      padding-left: 8rem;
      padding-right: 8rem;
      padding-top: 24rem;
      width: 1920px;
      height: 120rem;
    }

    h1 {
      grid-column: 3 / span 6;
      grid-row: 1;
      margin-bottom: 6rem;
    }
  `}</style>
  </div>
)

export default withI18next(['dev'])(RuDev)
