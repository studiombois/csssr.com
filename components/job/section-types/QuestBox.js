import React, { Fragment } from 'react'
import { array, string } from 'prop-types'
import FormRow from '../FormRow'
import Section from '../Section'
import formatText from '../../../utils/formatText'

const QuestBox = ({ text, title, sections }) => (
  <Fragment>
    <FormRow>
      <h2 className="font_h2-regular">{title}</h2>
      <p className="font_p16-regular" dangerouslySetInnerHTML={{ __html: formatText(text) }} />
    </FormRow>

    {sections.map((section, index) => (
      <Section key={index} {...section} asRow isChild />
    ))}
    <style jsx>{`
      h2 {
        margin-top: 6.0625rem;
      }

      p {
        margin-top: 0.5rem;
        margin-bottom: -0.4375rem;
      }

      @media (max-width: 767px) {
        h2 {
          margin-top: 3.4375rem;
        }

        p {
          margin-top: 0.5rem;
          padding-bottom: 0;
          font-size: 0.875rem;
          line-height: 1.5rem;
        }
      }
    `}</style>
  </Fragment>
)

QuestBox.propTypes = {
  text: string,
  title: string,
  sections: array,
}

export default QuestBox
