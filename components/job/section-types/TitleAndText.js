import React from 'react'
import { string } from 'prop-types'

const TitleAndList = ({ text, title }) =>
  <div>
    {title}
    {text}

    <style jsx>{`
    	div:before {
    	  content: 'titleAndText '
    	}
    `}</style>
  </div>

TitleAndList.propTypes = {
  text: string,
  title: string,
}

export default TitleAndList
