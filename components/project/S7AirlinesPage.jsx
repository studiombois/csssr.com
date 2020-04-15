import React from 'react'
import { func } from 'prop-types'
import Layout from '../Layout'
import translate from '../../utils/translate-wrapper'

const S7AirlinesPage = ({ t }) => {
  const pageName = 'project'
  return (
    <Layout pageName={pageName}>
      {/* <Head
        title={t('industry:meta.ecommerce.title')}
        description={t('industry:meta.ecommerce.description')}
      /> */}
    </Layout>
  )
}

S7AirlinesPage.propTypes = {
  t: func,
}

export default translate(S7AirlinesPage)
