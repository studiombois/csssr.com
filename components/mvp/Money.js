import React, { Fragment, PureComponent } from 'react'
import { string } from 'prop-types'
import translate from '../../utils/translate-wrapper'
import css from 'styled-jsx/css'
import PictureForAllResolutions from '../PictureForAllResolutions'

const picture = css.resolve`
  picture {
    margin-top: -3.5rem;
    grid-column: 7 / span 5;
    grid-row: 2;
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    picture {
      margin-top: -3.8rem;
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    picture {
      margin-top: -0.8rem;
    }
  }
`

class Money extends PureComponent {
  static propTypes = {
    imageAlt: string,
    text: string,
    title: string,
  }

  render() {
    const { title, text, imageAlt } = this.props

    return (
      <Fragment>
        <article className='grid-container'>
          <h2>{title}</h2>
          <p>{text}</p>
          <PictureForAllResolutions
            className={picture.className}
            image={{ namespace: 'mvp', key: 'money', alt: imageAlt }}
          />
        </article><style jsx>{`
          article {
            margin-top: 5rem;
            margin-left: auto;
            margin-right: auto;
            width: 1792px;
          }

          h2 {
            grid-column: 2 / span 11;
            grid-row: 1;
            margin-bottom: 1.5rem;
            font-size: 3rem;
            font-family: 'Roboto Slab', serif;
            font-weight: normal;
          }

          p {
            position: relative;
            z-index: 2;
            grid-column: 2 / span 6;
            grid-row: 2;
            font-family: 'Roboto', sans-serif;
            font-size: 1.5rem;
            font-weight: normal;
            line-height: 2.55rem;
            color: #4a4a4a;
          }

          @media (min-width: 1360px) and (max-width: 1919px) {
            article {
              margin-top: 5.1rem;
              width: 1328px;
            }
          }

          @media (min-width: 1280px) and (max-width: 1359px) {
            article {
              margin-top: 5.2rem;
              width: 1232px;
            }
          }
        `}</style>
        {picture.styles}
      </Fragment>
    )
  }
}

export default translate()(Money)
