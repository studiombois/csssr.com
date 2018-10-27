import React from 'react'
import { string } from 'prop-types'

const Text = ({ text }) =>
  <div>
    <p className='font_p16-regular' dangerouslySetInnerHTML={{ __html: text }} />
    <style jsx>{`
    	div:before {
    	  content: 'text '
    	}
    `}</style>
  </div>

Text.propTypes = {
  text: string,
}

export default Text
