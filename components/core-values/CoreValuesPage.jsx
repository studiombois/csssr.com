import React from 'react'
import { func } from 'prop-types'
import Layout from '../Layout'
import withI18next from '../../utils/withI18next'

import Greeting from './Greeting'
import ValuesSection from './ValuesSection'
import Form from './Form'

const CoreValues = () => {
  return (
    <Layout>
      <Greeting />

      <ValuesSection />

      <Form pageName="coreValues" />
    </Layout>
  )
}

CoreValues.propTypes = {
  t: func,
}

export default withI18next(['coreValues'])(CoreValues)
