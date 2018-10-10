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
          <a
            href={href}
            target='_blank'
            className='font_link-list_28'
          >
            {label}
          </a>
        </li>
      )}
    </ul><style jsx>{`
      span {
        margin-bottom: 2rem;
        display: block;
      }

      li:not(:last-child) {
        margin-bottom: 1rem;
      }

      a {
        position: relative;
        display: inline-block;
      }

      a::after {
        position: absolute;
        top: 0.5625rem;
        right: -0.5rem;
        display: none;
        width: 0.25rem;
        height: 0.25rem;
        background-color: #0076ff;
        content: ''
      }

      a:hover::after {
        display: block;
      }

      @media (min-width: 368px) and (max-width: 1279px) {
        span {
          margin-bottom: 0.5rem;
        }

        li:not(:last-child) {
          margin-bottom: 0;
        }
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
