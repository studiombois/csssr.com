import React from 'react'
import { func } from 'prop-types'
import Layout from '../Layout'
import withI18next from '../../utils/withI18next'

import Greeting from './Greeting'

import greeting from '../../data/core-values/greeting'

const CoreValues = () => {
  return (
    <Layout>
      <Greeting content={greeting} />
    </Layout>
  )
}

CoreValues.propTypes = {
  t: func,
}

export default withI18next(['coreValues'])(CoreValues)
