import React from 'react'
import { array, string } from 'prop-types'
import FormRow from '../FormRow'
import Section from '../Section'

const QuestBox = ({ text, title, sections }) =>
  <div>
    <FormRow>
      <h3 className='font_h2-regular'>{title}</h3>
      <p className='font_p16-regular' dangerouslySetInnerHTML={{ __html: text }}/>
    </FormRow>

    {sections.map(section => <Section {...section} asRow />)}
    <style jsx>{`
      div {
        border: 1px solid red;
      }
      div:before {
        content: 'questbox '
      }
    `}</style>
  </div>

QuestBox.propTypes = {
  text: string,
  title: string,
  sections: array,
}

export default QuestBox
