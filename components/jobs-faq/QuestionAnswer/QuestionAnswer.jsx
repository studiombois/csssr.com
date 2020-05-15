import * as React from 'react'
import { array, bool, string } from 'prop-types'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './QuestionAnswer.styles'
import List from '../../ui-kit/core-design/List'
import ListItem from '../../ui-kit/core-design/ListItem'
import Text from '../../ui-kit/core-design/Text'

import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const OriginQuestionAnswer = ({ answer, className, isContentVisible }) => {
  return (
    <div className={cn(className, { visible: isContentVisible })}>
      {answer.map((answerObject, index) => {
        if (typeof answerObject === 'string') {
          return (
            <Text
              key={index}
              className="text"
              type="regular"
              size="m"
              dangerouslySetInnerHTML={{ __html: answerObject }}
            />
          )
        }
        return (
          <List className="list" key={index}>
            {answerObject.map((answerItem, index) => (
              <ListItem
                className="list-item"
                key={index}
                dangerouslySetInnerHTML={{ __html: answerItem }}
              />
            ))}
          </List>
        )
      })}
    </div>
  )
}

OriginQuestionAnswer.propTypes = {
  answer: array,
  className: string,
  isIe11: bool,
  isContentVisible: bool,
}

const QuestionAnswer = MsBrowserConsumer(styled(OriginQuestionAnswer)`
  ${styles.base}
  ${styles.ie11}
`)

export { QuestionAnswer }
export default QuestionAnswer
