import React from 'react'
import { number, string } from 'prop-types'
import { Field } from 'react-final-form'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './QuestionAndAnswer.styles'
import translate from '../../../../utils/translate-wrapper'
import TextareaField from '../../../ui-kit/TextareaField/TextareaField'
import TextField from '../../../ui-kit/TextField/TextField'
import FormRow from '../../FormRow'
import formatText from '../../../../utils/formatText'

const renderTime = (time, t, isVisibleOnMobile) => {
  return (
    <div
      className={cn({
        wrapper: true,
        'wrapper_mobile-only': isVisibleOnMobile,
      })}
    >
      <div className="font_subhead-regular value">{t('job:minutes', { count: time })}</div>
      <div className="font_p16-regular hint">{t('job:willBeRequired')}</div>
    </div>
  )
}

const QuestionAndAnswer = ({
  className,
  linkText,
  taskLink,
  taskText,
  time,
  title,
  t,
  inputIndex,
}) => (
  <FormRow className={className} rightSideContent={renderTime(time, t, false)}>
    <h3 className="font_h3-regular">{title}</h3>
    <div className="link-wrapper">
      <a className="font_link-list_16" href={taskLink} target="_blank" rel="noopener">
        {taskLink}
      </a>
    </div>
    {taskText.split('\n').map((taskTextString, index) => (
      <p
        key={index}
        className="font_p16-regular"
        dangerouslySetInnerHTML={{ __html: formatText(taskTextString) }}
      />
    ))}
    {renderTime(time, t, true)}
    <Field
      name={`quests[${inputIndex}].text`}
      component={TextareaField}
      kind="regular"
      label={t('job:annotation')}
    />
    <Field
      name={`quests[${inputIndex}].link`}
      component={TextField}
      kind="regular"
      label={linkText}
    />
  </FormRow>
)

QuestionAndAnswer.propTypes = {
  index: number,
  linkText: string,
  taskLink: string,
  taskText: string,
  time: number,
  title: string,
}

export default styled(translate(QuestionAndAnswer))`
  ${styles}
`
