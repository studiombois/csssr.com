import React from 'react'
import { number, string, oneOfType } from 'prop-types'
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

const QuestionAndAnswer = ({ linkText, taskLink, taskText, time, title, t/* , index*/ }) =>
  <FormRow
    rightSideContent={renderTime(Number(time), t)}
  >
    <h3 className='font_h3-regular headline'>
      {/* TODO: передавать реальный индекс задания */ }
      <span className='index'>2</span>
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
      name={'quests[].text'}
      component={TextareaField}
      theme='regular'
      label='КОММЕНТАРИЙ'
    />
    <p className='font_p16-regular' dangerouslySetInnerHTML={{ __html: linkText }}/>
    <Field
      name={'quests[].link'}
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
  // В базе как попало хранятся
  time: oneOfType([string, number]),
  title: string,
}

export default translate()(QuestionAndAnswer)
