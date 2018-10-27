import React from 'react'
import { string, arrayOf } from 'prop-types'

const TitleAndList = ({ list, title }) =>
  <div>
    <h4 dangerouslySetInnerHTML={{ __html: title }} />
    <ul className='ul'>
      {list.map((item, index) => (
        <li className='li font_p16-regular' key={index} dangerouslySetInnerHTML={{ __html: item }} />
      ))}
    </ul>
    <style jsx>{`
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
