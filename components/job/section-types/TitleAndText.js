import React, { Fragment } from 'react'
import { string } from 'prop-types'
import formatText from '../../../utils/formatText'

const TitleAndList = ({ text, title }) => (
  <Fragment>
    <h2 className="font_h2-regular" dangerouslySetInnerHTML={{ __html: title }} />
    <p className="font_p16-regular" dangerouslySetInnerHTML={{ __html: formatText(text) }} />

    <style jsx>{`
      h2 {
        margin-top: 2.0625rem;
      }

      p {
        margin-top: 0.5rem;
      }

      @media (max-width: 767px) {
        h2 {
          margin-top: 2.25rem;
        }

        p {
          margin-top: 0.4375rem;
          padding-bottom: 0;
          font-size: 0.875rem;
          line-height: 1.5rem;
        }
      }
    `}</style>
  </Fragment>
)

TitleAndList.propTypes = {
  text: string,
  title: string,
}

export default TitleAndList
