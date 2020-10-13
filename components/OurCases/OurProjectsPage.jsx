import React from 'react'
import Layout from '../Layout'
import { L10nConsumer } from '../../utils/l10nProvider'
import Head from '../Head'
import Hero from './Hero'
import DevCases from './DevCases'
import Solutions from './Solutions'
import Idea from '../Idea'

import heroContent from '../../data/our-projects/hero'
import casesContent from '../../data/our-projects/devCases'

const OurProjectsPage = ({ l10n: { language, translations } }) => {
  const pageName = 'ourProjects'
  return (
    <Layout pageName={pageName}>
      <Head
        title={translations.ourCases.hero.heading}
        description={translations.ourCases.hero.text}
      />

      <Hero content={heroContent} />
      <DevCases content={casesContent} />
      {language !== 'ru' && <Solutions />}
      <Idea pageName={pageName} />
    </Layout>
  )
}

export default L10nConsumer(OurProjectsPage)
