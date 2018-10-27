import React from 'react'
import { string } from 'prop-types'

const TitleAndList = ({ text, title }) =>
  <div>
    <h4 dangerouslySetInnerHTML={{ __html: title }} />
    <p className='font_p16-regular' dangerouslySetInnerHTML={{ __html: text }} />

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
