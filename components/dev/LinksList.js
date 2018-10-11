import React, { Fragment } from 'react'
import { string, arrayOf, shape } from 'prop-types'

const LinksList = ({ title, links }) =>
  <Fragment>
    <span className='font_perforator-10-regular'>
      {title}
    </span>

    <ul>
      {links.map(({ href, label }) =>
        <li key={`nav-link-${href}-${label}`}>
          {href && <a
            href={href}
            target='_blank'
            className='font_link-list_28'
          >
            {label}
          </a>}
          {!href && <span
            className='font_link-list_28'
          >
            {label}
          </span>}
        </li>
      )}
    </ul><style jsx>{`
      span {
        margin-bottom: 2rem;
        display: block;
      }

      span.font_link-list_28 {
        margin-bottom: 0;
        display: inline-block;
        color: #4a4a4a;
        text-decoration: none;
      }

      span.font_link-list_28:hover::after {
        display: none;
      }

      li:not(:last-child) {
        margin-bottom: 1rem;
      }

      a {
        display: inline-block;
      }
    `}</style>
  </Fragment>


LinksList.propTypes = {
  className: string,
  links: arrayOf(shape({
    href: string,
    label: string,
  })),
}


export default LinksList
