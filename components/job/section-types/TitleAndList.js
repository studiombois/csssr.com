import React from 'react'
import { string, arrayOf } from 'prop-types'

const TitleAndList = ({ list, title }) =>
  <div>
    {title}
    <ul>
      {list.map((item, index) => (
        <li key={index}>
          {item}
        </li>
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
