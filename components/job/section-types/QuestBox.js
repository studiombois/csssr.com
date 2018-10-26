import React from 'react'
import { array, string } from 'prop-types'
import Section from '../Section'

const QuestBox = ({ text, title, sections }) =>
  <div>
    <h3>{title}</h3>
    {text}

    {sections.map(section => <Section {...section} />)}
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
