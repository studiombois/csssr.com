import React from 'react'
import { array, string } from 'prop-types'
import Section from '../Section'

const Quest = ({ fileSize, fileExt, fileName, fileLink, text, title, sections }) =>
  <div>
    <h3>{title}</h3>
    {text}

    <p>{fileSize}</p>
    <p>{fileExt}</p>
    <a
      href={fileLink}
      target='_blank'
    >
      {fileName}
    </a>

    {sections.map(section => <Section {...section} />)}
    <style jsx>{`
			div {
				border: 1px solid black;
			}
    	div:before {
    	  content: 'quest '
    	}
    `}</style>
  </div>

Quest.propTypes = {
  fileSize: string,
  fileExt: string,
  fileName: string,
  fileLink: string,
  text: string,
  title: string,
  sections: array,
}

export default Quest
