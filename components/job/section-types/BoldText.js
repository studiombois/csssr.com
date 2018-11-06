import React, { Fragment } from 'react'
import { string } from 'prop-types'
import formatText from '../../../utils/formatText'

const BoldText = ({ text }) =>
  <Fragment>
    <p className='font_p24-strong' dangerouslySetInnerHTML={{ __html: formatText(text) }} />
    <style jsx>{`
      p {
        margin-top: 1.3125rem;
        margin-bottom: 2rem;
      }
    `}</style>
  </Fragment>

BoldText.propTypes = {
  text: string,
}

export default BoldText
