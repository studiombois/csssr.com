import React, { Fragment } from 'react'
import { array, string } from 'prop-types'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './QuestBox.styles'
import FormRow from '../../FormRow'
import Section from '../../Section'
import formatText from '../../../../utils/formatText'

const QuestBox = ({ className, text, title, sections }) => (
  <Fragment>
    <FormRow>
      <h2 className={cn(className, 'font_h2-regular')}>{title}</h2>
      <p
        className={cn(className, 'font_p16-regular')}
        dangerouslySetInnerHTML={{ __html: formatText(text) }}
      />
    </FormRow>

    {sections.map((section, index) => (
      <Section key={index} {...section} asRow isChild />
    ))}
  </Fragment>
)

QuestBox.propTypes = {
  text: string,
  title: string,
  sections: array,
}

export default styled(QuestBox)`
  ${styles}
`
