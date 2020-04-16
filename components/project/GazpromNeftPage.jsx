import React from 'react'
import { func } from 'prop-types'
import Form from './Form'
import Layout from '../Layout'
import translate from '../../utils/translate-wrapper'

const GazpromNeftPage = ({ t }) => {
  const pageName = 'project'
  return (
    <Layout pageName={pageName}>
      {/* <Head
        title={t('industry:meta.ecommerce.title')}
        description={t('industry:meta.ecommerce.description')}
      /> */}
      <Form pageName={pageName} />
    </Layout>
  )
}

GazpromNeftPage.propTypes = {
  t: func,
}

export default translate(GazpromNeftPage)
