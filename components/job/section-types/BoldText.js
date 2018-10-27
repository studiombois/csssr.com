import React from 'react'
import { string } from 'prop-types'

const BoldText = ({ text }) =>
  <div>
    <p dangerouslySetInnerHTML={{ __html: text }} />
    <style jsx>{`
      div {
        font-weight: 800;
      }
    	div:before {
    	  content: 'bold '
    	}
    `}</style>
  </div>

BoldText.propTypes = {
  text: string,
}

export default BoldText
