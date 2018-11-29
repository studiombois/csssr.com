import React, { Fragment } from 'react'
import { string, arrayOf } from 'prop-types'
import formatText from '../../../utils/formatText'

const TitleAndList = ({ list, title }) =>
  <Fragment>
    <h2 className='font_h2-regular' dangerouslySetInnerHTML={{ __html: title }} />
    <ul className='have-square-bullets'>
      {list.map((item, index) => (
        <li className= 'font_p16-regular' key={index} dangerouslySetInnerHTML={{ __html: formatText(item) }} />
      ))}
    </ul><style jsx>{`
      h2 {
        margin-top: 2.0625rem;
      }

      ul {
        margin-top: 0.5rem;
      }

      li:not(:first-child) {
        margin-top: 1rem;
      }

      @media (max-width: 767px) {
        h2 {
          margin-top: 2.4375rem;
        }

        ul {
          margin-top: 0.5rem;
        }

        li {
          margin-top: 0;
          padding-bottom: 0;
          font-size: 0.875rem;
          line-height: 1.5rem;
        }

        li:not(:first-child) {
          margin-top: 0.5rem;
        }
      }
    `}</style>
  </Fragment>

TitleAndList.propTypes = {
  title: string,
  list: arrayOf(string),
}

export default TitleAndList
