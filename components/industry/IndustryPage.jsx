import React, { useContext } from 'react'
import Layout from '../Layout'
import Greeting from './Greeting'
import withI18next from '../../utils/withI18next'
import { Ie11BrowserContext } from '../../utils/msBrowserProvider'

const IndustryPage = () => {
  const isIe11 = useContext(Ie11BrowserContext)
  return (
    <Layout>
      <Greeting isIe11={isIe11} />
    </Layout>
  )
}
export default withI18next(['industry'])(IndustryPage)
