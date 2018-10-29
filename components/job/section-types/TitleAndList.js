import React from 'react'
import { string, arrayOf } from 'prop-types'

const TitleAndList = ({ list, title }) =>
  <div>
    <h2 className='font_h2-regular' dangerouslySetInnerHTML={{ __html: title }} />
    <ul className='ul'>
      {list.map((item, index) => (
        <li className='li font_p16-regular' key={index} dangerouslySetInnerHTML={{ __html: item }} />
      ))}
    </ul><style jsx>{`
      li:not(:last-child) {
        margin-bottom: 1rem;
      }

    	div:before {
    	  content: 'list '
    	}
    `}</style>
  </div>

TitleAndList.propTypes = {
  title: string,
  list: arrayOf(string),
}

export default TitleAndList
