import React from 'react'
import { func } from 'prop-types'
import Layout from '../Layout'
import withI18next from '../../utils/withI18next'

import Greeting from './Greeting'
import OurClients from './OurClients'
import Facts from './Facts'
import CoreValues from './CoreValues'
import Form from './Form'
import Projects from './Projects'

import Head from '../Head'
import greeting from '../../data/industry/ecommerce/greeting'
import ourClients from '../../data/industry/ecommerce/logos'
import coreValues from '../../data/industry/ecommerce/coreValues'
import facts from '../../data/industry/ecommerce/facts'
import projects from '../../data/industry/ecommerce/projects'

const IndustryPage = () => {
  return (
    <Layout>
      <Head
        //to-do заменить meta как только они будут известны
        title="demo-title"
        description="demo-description"
        ogImage={{
          url: require('../../static/images/jobs/1920/cover@2x.jpg'),
          width: 1266,
          height: 2000,
        }}
      />

      <Greeting id="greeting" content={greeting} />

      <OurClients id="ourClients" content={ourClients} />

      <Facts id="facts" content={facts} />

      <CoreValues id="core-values" content={coreValues} />

      <Projects id="projects" content={projects} />

      <Form pageName="ecommerce" />
    </Layout>
  )
}

IndustryPage.propTypes = {
  t: func,
}

export default withI18next(['ecommerce'])(IndustryPage)
