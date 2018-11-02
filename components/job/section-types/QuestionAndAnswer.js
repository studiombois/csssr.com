import React, { Fragment } from 'react'
import { number, string } from 'prop-types'
import { Field } from 'react-final-form'
import css from 'styled-jsx/css'
import { translate } from 'react-i18next'
import TextareaField from '../../ui-kit/TextareaField'
import TextField from '../../ui-kit/TextField'
import FormRow from '../FormRow'

const renderTime = (time, t) => (
  <Fragment>
    <div className='font_subhead-regular value'>{t('job:minutes', { count: time })}</div>
    <div className='font_p16-regular hint'>
      потребуется на решение
    </div>
    <style jsx>{`
      .value {
        margin-top: 1.8125rem;
      }

      .hint {
        margin-top: 0.5rem;
      }
    `}</style>
  </Fragment>
)

const { className, styles } = css.resolve`
  div {
    margin-top: 2.5rem;
  }
`

const QuestionAndAnswer = ({ linkText, taskLink, taskText, time, title, t, inputIndex, displayIndex }) =>
  <FormRow rightSideContent={renderTime(time, t)}>
    <h3 className='font_h3-regular'>
      {title}
    </h3>
    <a
      className='font_link-list_16'
      href={taskLink}
      target='_blank'
    >
      {taskLink}
    </a>
    {taskText.split('\n').map(taskTextString =>
      <p className='font_p16-regular' dangerouslySetInnerHTML={{ __html: taskTextString }}/>
    )}
    <Field
      className={className}
      name={`quests[${inputIndex}].text`}
      component={TextareaField}
      theme='regular'
      label='Комментарий'
    />
    <Field
      className={className}
      name={`quests[${inputIndex}].link`}
      component={TextField}
      theme='regular'
      label={linkText}
    /><style jsx>{`
      h3 {
        margin-top: 2.9375rem;
      }

      h3::before {
        content: '${displayIndex}';
        margin-right: 1rem;
        width: 1.5rem;
        height: 1.5rem;
        box-sizing: border-box;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border: solid 2px #000000;
      }

      a {
        margin-top: 1rem;
        display: block;
      }

      p {
        margin-top: 1rem;
      }

      .value {
        margin-top: 2.5rem;
      }
    `}</style>
    {styles}
  </FormRow>

QuestionAndAnswer.propTypes = {
  index: number,
  linkText: string,
  taskLink: string,
  taskText: string,
  time: number,
  title: string,
}

export default translate()(QuestionAndAnswer)
