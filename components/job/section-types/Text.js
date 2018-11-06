import React, { Fragment } from 'react'
import { string } from 'prop-types'
import formatText from '../../../utils/formatText'

const Text = ({ text }) =>
  <Fragment>
    <p className='font_p16-regular' dangerouslySetInnerHTML={{ __html: formatText(text) }} />
    <style jsx>{`
      :global(ul) + p {
        margin-top: 2.5rem;
      }

      p {
        margin-top: 0.5rem;
      }
    `}</style>
  </Fragment>

Text.propTypes = {
  text: string,
}

export default Text
