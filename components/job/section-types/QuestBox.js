import React, { Fragment } from 'react'
import { array, string } from 'prop-types'
import FormRow from '../FormRow'
import Section from '../Section'

const QuestBox = ({ text, title, sections }) =>
  <Fragment>
    <FormRow>
      <h3 className='font_h2-regular'>{title}</h3>
      <p className='font_p16-regular' dangerouslySetInnerHTML={{ __html: text }}/>
    </FormRow>

    {sections.map((section, index) => <Section {...section} sectionIndex={index + 1} asRow />)}
    <style jsx>{`
      h3 {
        margin-top: 6.0625rem;
      }

      p {
        margin-top: 0.5rem;
      }
    `}</style>
  </Fragment>

QuestBox.propTypes = {
  text: string,
  title: string,
  sections: array,
}

export default QuestBox
