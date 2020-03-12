import React from 'react'
import { string } from 'prop-types'
import Layout from '../Layout'
import Head from '../Head'
import translate from '../../utils/translate-wrapper'
import Greeting from './Greeting'
import ImageBlock from './ImageBlock'
import QuestionHeader from './QuestionHeader'
import QuestionBlock from './QuestionBlock'
import Footer from './Footer'

import questions from '../../data/jobs-faq/questions'

import roads from '../../static/images/jobs-faq/roads.png?responsive'
import roads_webp from '../../static/images/jobs-faq/roads.png?responsive_and_webp'
import puzzle from '../../static/images/jobs-faq/puzzle.png?responsive'
import puzzle_webp from '../../static/images/jobs-faq/puzzle.png?responsive_and_webp'

const JobsFaqPage = () => (
  <Layout>
    <Head
      title="Как устроиться сюда ➡️"
      description="Часто задаваемые вопросы кандидатов в..."
      ogImage={{
        url: require('../../static/images/jobs-faq/ogImage.jpg'),
        width: 2400,
        height: 1260,
      }}
      router={{ asPath: '/ru/jobs-faq' }}
    />

    <Greeting />

    <ImageBlock blockName="roads" images={{ png: roads, webp: roads_webp }} />

    <QuestionHeader headingText="Про найм" />
    {questions.hire.map(item => (
      <QuestionBlock question={item.question} answer={item.answer} key={item.question} />
    ))}

    <ImageBlock blockName="puzzle" images={{ png: puzzle, webp: puzzle_webp }} />

    <QuestionHeader headingText="Про работу" />
    {questions.apply.map(item => (
      <QuestionBlock question={item.question} answer={item.answer} key={item.question} />
    ))}

    <Footer />
  </Layout>
)

JobsFaqPage.propTypes = {
  className: string,
}

export default translate(JobsFaqPage)
