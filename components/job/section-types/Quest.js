import React from 'react'
import { array, string } from 'prop-types'
import Section from '../Section'

const Quest = ({ fileSize, fileExt, fileName, fileLink, text, title, sections }) =>
  <div>
    <h2 className='font_h2-regular' dangerouslySetInnerHTML={{ __html: title }} />
    <p className='font_p16-regular' dangerouslySetInnerHTML={{ __html: text }} />
    <p className='font_p16-regular' dangerouslySetInnerHTML={{ __html: fileSize }} />
    <p className='font_p16-regular' dangerouslySetInnerHTML={{ __html: fileExt }} />

    <a
      href={fileLink}
      target='_blank'
      className='font_link-list_16'
    >
      {fileName}
    </a>

    {sections.map(section => <Section {...section} asRow />)}
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
