import React, { Fragment, PureComponent } from 'react'
import { string } from 'prop-types'
import translate from '../../utils/translate-wrapper'

class Process extends PureComponent {
  static propTypes = {
    title: string,
  }

  render() {
    const { title } = this.props

    return (
      <Fragment>
        <section id='process' className='grid-container'>
          <h2>{title}</h2>
        </section><style jsx>{`
          section {
            margin-top: 9.8rem;
            margin-left: auto;
            margin-right: auto;
            width: 1792px;
            height: 1280px;
            background: #f0f;
          }

          h2 {
            grid-column: 2 / span 11;
            grid-row: 1;
            margin-top: 10.8rem;
            font-size: 3rem;
            font-family: 'Roboto Slab', serif;
            font-weight: normal;
          }

          @media (min-width: 1360px) and (max-width: 1919px) {
            section {
              margin-top: 9rem;
              width: 1328px;
              height: 1315px;
            }

            h2 {
              margin-top: 12.9rem;
            }
          }

          @media (min-width: 1280px) and (max-width: 1359px) {
            section {
              margin-top: 8.7rem;
              width: 1232px;
              height: 1315px;
            }

            h2 {
              margin-top: 13.1rem;
            }
          }
        `}</style>
      </Fragment>
    )
  }
}

export default translate()(Process)
