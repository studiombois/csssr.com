import React from 'react'
import { string } from 'prop-types'

const Text = ({ text }) =>
  <div>
    {text}
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
