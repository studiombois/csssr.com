import React from 'react'
import { string } from 'prop-types'
import Layout from '../Layout'
import Head from '../Head'
import { L10nConsumer } from '../../utils/l10nProvider'
import Greeting from './Greeting'
import ImageBlock from './ImageBlock'
import QuestionHeader from './QuestionHeader'
import QuestionBlock from './QuestionBlock'
import Footer from './Footer'
import { getOriginal } from '@csssr/csssr.images/dist/utils'

import questions from '../../data/jobs-faq/questions'

const roads = require.context('../../public/images/jobs-faq/roads?csssr-images')
const puzzle = require.context('../../public/images/jobs-faq/puzzle?csssr-images')
import ogImages from '../../public/images/jobs/cover/desktop.all.jpg?csssr-images'

const pageName = 'jobsFaq'
const JobsFaqPage = () => (
  <Layout pageName={pageName}>
    <Head
      title="F.A.Q. о работе в компании"
      description="Актуальные вопросы кандидатов про вакансии, условия найма, график работы в группе компаний CSSSR. Для тех, кто предпочитает читать инструкции перед применением, а не после."
      ogImage={{
        url: getOriginal(ogImages),
        width: 2400,
        height: 1260,
      }}
    />

    <Greeting />

    <ImageBlock blockName="roads" images={roads} />

    <QuestionHeader headingText="Про найм" />
    {questions.hire.map((item, index) => (
      <QuestionBlock
        question={item.question}
        answer={item.answer}
        key={item.question}
        testid={`Faq:item.aboutHiring-${index}`}
      />
    ))}

    <ImageBlock blockName="puzzle" images={puzzle} />

    <QuestionHeader headingText="Про работу" />
    {questions.apply.map((item, index) => (
      <QuestionBlock
        question={item.question}
        answer={item.answer}
        key={item.question}
        testid={`Faq:item.aboutWorck-${index}`}
      />
    ))}

    <Footer />
  </Layout>
)

JobsFaqPage.propTypes = {
  className: string,
}

export default L10nConsumer(JobsFaqPage)
