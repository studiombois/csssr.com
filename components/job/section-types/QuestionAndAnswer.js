import React from 'react'
import { number, string } from 'prop-types'
import { Field } from 'react-final-form'
import { translate } from 'react-i18next'
import TextareaField from '../../ui-kit/TextareaField'
import TextField from '../../ui-kit/TextField'
import FormRow from '../FormRow'

const renderTime = (time, t) => (
  <div>
    <div className='font_subhead-regular value'>{t('job:minutes', { count: time })}</div>
    <div className='font_p16-regular hint'>
      потребуется на решение
    </div>
  </div>
)

const QuestionAndAnswer = ({ linkText, taskLink, taskText, time, title, t, inputIndex, displayIndex }) =>
  <FormRow
    rightSideContent={renderTime(time, t)}
  >
    <h3 className='font_h3-regular headline'>
      <span className='index'>{displayIndex}</span>
      <span className='title'>{title}</span>
    </h3>
    <a
      className='font_link-list_16'
      href={taskLink}
      target='_blank'
    >
      {taskLink}
    </a>
    <p className='font_p16-regular' dangerouslySetInnerHTML={{ __html: taskText }}/>

    <Field
      name={`quests[${inputIndex}].text`}
      component={TextareaField}
      theme='regular'
      label='КОММЕНТАРИЙ'
    />
    <p className='font_p16-regular' dangerouslySetInnerHTML={{ __html: linkText }}/>
    <Field
      name={`quests[${inputIndex}].link`}
      component={TextField}
      theme='regular'
      label='Ссылка на исправленный вариант'
    /><style jsx>{`
      .headline {
        padding-top: 1rem;
      }
      .index {
        margin-right: 1rem;
        width: 1.5rem;
        height: 1.5rem;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border: solid 2px #000000;
      }
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
  time: number,
  title: string,
}

export default translate()(QuestionAndAnswer)
