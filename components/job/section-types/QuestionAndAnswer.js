import React from 'react'
import { number, string } from 'prop-types'
import { Field } from 'react-final-form'
import css from 'styled-jsx/css'
import cn from 'classnames'
import { translate } from 'react-i18next'
import TextareaField from '../../ui-kit/TextareaField'
import TextField from '../../ui-kit/TextField'
import FormRow from '../FormRow'
import formatText from '../../../utils/formatText'


const renderTime = (time, t, isVisibleOnMobile) => {

  return (
    <div
      className={cn({
        wrapper: true,
        'wrapper_mobile-only': isVisibleOnMobile,
      })}
    >
      <div className='font_subhead-regular value'>{t('job:minutes', { count: time })}</div>
      <div className='font_p16-regular hint'>
        потребуется на решение
      </div>
      <style jsx>{`
        .wrapper {
          grid-column: 10 / span 3;
        }

        .wrapper_mobile-only {
          display: none;
        }

        .value {
          margin-top: 1.8125rem;
        }

        .hint {
          margin-top: 0.5rem;
        }

        @media (max-width: 767px) {
          .wrapper {
            display: none;
          }

          .wrapper_mobile-only {
            display: block;
            grid-column: 1 / span 6;
          }

          .hint,
          .value {
            display: inline-block;
          }

          .hint {
            margin-left: 0.625rem;
          }

          .value {
            margin-top: 1.125rem;
          }
        }
      `}</style>
    </div>
  )
}

const { className, styles } = css.resolve`
  div.textfield_regular {
    margin-top: 2rem;
  }

  div.textarea_regular {
    margin-top: 2.0625rem;
  }

  @media (max-width: 767px) {
    div.textarea_regular {
      margin-top: 1.0625rem;
    }
  }
`

const QuestionAndAnswer = ({ linkText, taskLink, taskText, time, title, t, inputIndex, displayIndex }) =>
  <FormRow rightSideContent={renderTime(time, t, false)}>
    <h3 className='font_h3-regular'>
      {title}
    </h3>
    <div className='link-wrapper'>
      <a
        className='font_link-list_16'
        href={taskLink}
        target='_blank'
        rel='noopener'
      >
        {taskLink}
      </a>
    </div>
    {taskText.split('\n').map((taskTextString, index) =>
      <p
        key={index}
        className='font_p16-regular'
        dangerouslySetInnerHTML={{ __html: formatText(taskTextString) }}
      />
    )}
    {renderTime(time, t, true)}
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


      p {
        margin-top: 1rem;
      }

      .link-wrapper {
        margin-top: 1rem;
      }

      .value {
        margin-top: 2.5rem;
      }

      .time-wrapper {
        display: none;
      }

      @media (max-width: 767px) {
        h3 {
          margin-top: 2.4375rem;
        }

        p {
          margin-top: 0.5rem;
          padding-bottom: 0;
          font-size: 0.875rem;
          line-height: 1.5rem;
        }

        .time-wrapper {
          grid-column: 1 / span 6;
          display: block;
        }
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
