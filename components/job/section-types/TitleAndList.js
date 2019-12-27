import React, { Fragment } from 'react'
import { string, arrayOf } from 'prop-types'
import formatText from '../../../utils/formatText'

const TitleAndList = ({ list, title, isChild }) => {
  const Header = isChild ? 'h3' : 'h2'

  return (
    <Fragment>
      <Header
        className={isChild ? 'font_h3-regular' : 'font_h2-regular'}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <ul className="have-square-bullets">
        {list.map((item, index) => (
          <li
            className="font_p16-regular"
            key={index}
            dangerouslySetInnerHTML={{ __html: formatText(item) }}
          />
        ))}
      </ul>
      <style jsx>{`
        h2,
        h3 {
          margin-top: 2.0625rem;
          padding: 0;
        }

        ul {
          margin-top: 0.5rem;
        }

        li:not(:first-child) {
          margin-top: 1rem;
        }

        @media (max-width: 767px) {
          h2,
          h3 {
            margin-top: 2.4375rem;
            font-size: 1rem;
          }

          ul {
            margin-top: 0.5625rem;
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
  )
}

TitleAndList.propTypes = {
  title: string,
  list: arrayOf(string),
}

export default TitleAndList
