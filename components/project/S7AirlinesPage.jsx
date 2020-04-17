import React from 'react'
import { func } from 'prop-types'
import Form from './Form'
import AboutProject from './AboutProject'
import Layout from '../Layout'
import translate from '../../utils/translate-wrapper'

import aboutProjectImages from '../../data/project/aboutProject'

const S7AirlinesPage = ({ t }) => {
  const pageName = 'project'
  const porojectId = 's7airlines'
  const aboutProjectParagraphsScheme = [[0], [0, 1, 2]]

  return (
    <Layout pageName={pageName}>
      {/* <Head
        title={t('industry:meta.ecommerce.title')}
        description={t('industry:meta.ecommserce.description')}
      /> */}
      <AboutProject
        porojectId={porojectId}
        images={aboutProjectImages}
        paragraphsScheme={aboutProjectParagraphsScheme}
      />
      <Form pageName={pageName} />
    </Layout>
  )
}

S7AirlinesPage.propTypes = {
  t: func,
}

export default translate(S7AirlinesPage)
