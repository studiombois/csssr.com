import React from 'react'
import { func } from 'prop-types'
import Form from './Form'
import Quote from './Quote'
import AboutProject from './AboutProject'
import Layout from '../Layout'
import translate from '../../utils/translate-wrapper'

import quoteImages from '../../data/project/gazprom-neft/quote'
import aboutProjectImages from '../../data/project/aboutProject'

const GazpromNeftPage = ({ t }) => {
  const pageName = 'project'
  const porojectId = 'gazpromNeft'
  const aboutProjectParagraphsScheme = [
    [0, 1, 2],
    [0, 1, 2],
  ]

  return (
    <Layout pageName={pageName}>
      {/* <Head
        title={t('industry:meta.ecommerce.title')}
        description={t('industry:meta.ecommerce.description')}
      /> */}
      <AboutProject
        porojectId={porojectId}
        images={aboutProjectImages}
        paragraphsScheme={aboutProjectParagraphsScheme}
      />
      <Quote porojectId={porojectId} images={quoteImages} />
      <Form pageName={pageName} />
    </Layout>
  )
}

GazpromNeftPage.propTypes = {
  t: func,
}

export default translate(GazpromNeftPage)
