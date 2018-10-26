import React from 'react'
import { number, string } from 'prop-types'
import { Field } from 'react-final-form'
import TextareaField from '../../ui-kit/TextareaField'
import TextField from '../../ui-kit/TextField'

const QuestionAndAnswer = ({ index, linkText, taskLink, taskText, time, title }) =>
  <div>
    {title}
    <a
      href={taskLink}
      target='_blank'
    >
      {taskLink}
    </a>

    {taskText}
    {/* TODO plural форма через i18next*/}
    {time} минут
    <Field
      name={`quests[].text`}
      component={TextareaField}
      placeholder={taskText}
      label={taskText}
    />
    {linkText}
    <Field
      name={`quests[].link`}
      component={TextField}
      placeholder={linkText}
      label={linkText}
    />
    <style jsx>{`
    	div:before {
    	  content: 'q&a '
    	}
    `}</style>
  </div>

QuestionAndAnswer.propTypes = {
  index: number,
  linkText: string,
  taskLink: string,
  taskText: string,
  time: string,
  title: string,
}

export default QuestionAndAnswer
