import React from 'react'
import { number, string } from 'prop-types'
import { Field } from 'react-final-form'
import TextareaField from '../../ui-kit/TextareaField'
import TextField from '../../ui-kit/TextField'
import FormRow from '../FormRow'

const QuestionAndAnswer = ({ index, linkText, taskLink, taskText, time, title }) =>
  <FormRow
    rightSideContent={`${time} минут`}
  >
    {title}
    <a
      href={taskLink}
      target='_blank'
    >
      {taskLink}
    </a>
    <p dangerouslySetInnerHTML={{ __html: taskText }}/>

    {/* TODO plural форма через i18next*/}
    <Field
      name={'quests[].text'}
      component={TextareaField}
      theme='regular'
      label='КОММЕНТАРИЙ'
    />
    <p dangerouslySetInnerHTML={{ __html: linkText }}/>
    <Field
      name={'quests[].link'}
      component={TextField}
      theme='regular'
    />
    <style jsx>{`
    	div:before {
    	  content: 'q&a '
    	}
    `}</style>
  </FormRow>

QuestionAndAnswer.propTypes = {
  index: number,
  linkText: string,
  taskLink: string,
  taskText: string,
  time: string,
  title: string,
}

export default QuestionAndAnswer
