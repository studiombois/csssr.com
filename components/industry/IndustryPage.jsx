import React from 'react'
import Layout from '../Layout'
import Greeting from './Greeting'
import withI18next from '../../utils/withI18next'

const IndustryPage = () => {
  return (
    <Layout>
      <Greeting />
    </Layout>
  )
}
export default withI18next(['industry'])(IndustryPage)
