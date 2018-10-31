import React, { Fragment } from 'react'
import { string, arrayOf } from 'prop-types'

const TitleAndList = ({ list, title }) =>
  <Fragment>
    <h2 className='font_h2-regular' dangerouslySetInnerHTML={{ __html: title }} />
    <ul>
      {list.map((item, index) => (
        <li className='squareItem font_p16-regular' key={index} dangerouslySetInnerHTML={{ __html: item }} />
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
    `}</style>
  </Fragment>

TitleAndList.propTypes = {
  title: string,
  list: arrayOf(string),
}

export default TitleAndList
