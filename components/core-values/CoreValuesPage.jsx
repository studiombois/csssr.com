import React from 'react'
import { func } from 'prop-types'
import Layout from '../Layout'
import withI18next from '../../utils/withI18next'

import Greeting from './Greeting'
import DetailValue from './DetailValue'

import greeting from '../../data/core-values/greeting'
import detailValue from '../../data/core-values/detail-value'

const CoreValues = () => {
  return (
    <Layout>
      <Greeting content={greeting} />

      {detailValue.map(item => (
        <DetailValue key={item.title} content={item} />
      ))}
    </Layout>
  )
}

CoreValues.propTypes = {
  t: func,
}

export default withI18next(['coreValues'])(CoreValues)
