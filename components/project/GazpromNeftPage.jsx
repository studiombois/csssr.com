import React from 'react'
import { func } from 'prop-types'
import Form from './Form'
import Quote from './Quote'
import Layout from '../Layout'
import translate from '../../utils/translate-wrapper'

import quoteImages from '../../data/project/gazprom-neft/quote'

const GazpromNeftPage = ({ t }) => {
  const pageName = 'project'
  const porojectId = 'gazpromNeft'
  return (
    <Layout pageName={pageName}>
      {/* <Head
        title={t('industry:meta.ecommerce.title')}
        description={t('industry:meta.ecommerce.description')}
      /> */}
      <Quote porojectId={porojectId} images={quoteImages} />
      <Form pageName={pageName} />
    </Layout>
  )
}

GazpromNeftPage.propTypes = {
  t: func,
}

export default translate(GazpromNeftPage)
