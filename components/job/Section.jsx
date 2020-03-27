import React from 'react'
import { string } from 'prop-types'
import FormRow from './FormRow'
import BoldText from './section-types/BoldText'
import Quest from './section-types/Quest'
import QuestBox from './section-types/QuestBox'
import QuestionAndAnswer from './section-types/QuestionAndAnswer'
import Text from './section-types/Text'
import TextField from './section-types/TextField'
import TitleAndList from './section-types/TitleAndList'
import TitleAndText from './section-types/TitleAndText'

const typeToComponent = {
  boldText: BoldText,
  quest: Quest,
  questBox: QuestBox,
  questionAndAnswer: QuestionAndAnswer,
  text: Text,
  textField: TextField,
  titleAndList: TitleAndList,
  titleAndText: TitleAndText,
}

const Section = ({ type, asRow, ...others }) => {
  const Component = typeToComponent[type]
  if (asRow && type !== 'questionAndAnswer' && type !== 'questBox' && type !== 'quest') {
    return (
      <FormRow>
        <Component {...others} />
      </FormRow>
    )
  }
  return <Component {...others} />
}

Section.propTypes = {
  type: string,
}

export default Section
