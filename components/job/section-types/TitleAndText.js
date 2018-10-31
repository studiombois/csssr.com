import React, { Fragment } from 'react'
import { string } from 'prop-types'

const TitleAndList = ({ text, title }) =>
  <Fragment>
    <h2 className='font_h2-regular' dangerouslySetInnerHTML={{ __html: title }} />
    <p className='font_p16-regular' dangerouslySetInnerHTML={{ __html: text }} />

    <style jsx>{`
      h2 {
        margin-top: 2.0625rem;
      }

      p {
        margin-top: 0.5rem;
      }
    `}</style>
  </Fragment>

TitleAndList.propTypes = {
  text: string,
  title: string,
}

export default TitleAndList
