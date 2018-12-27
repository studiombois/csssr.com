import React, { Fragment, PureComponent } from 'react'
import { translate } from 'react-i18next'
import css from 'styled-jsx/css'
import cn from 'classnames'
import cupMock from '../../data/school/cup-mock'
import Picture from '../Picture'
import limit from '../../utils/limit'

const picture = css.resolve`
  picture {
    grid-column: 2 / span 1;
    z-index: -1;
    margin-top: 1rem;
    height: 48px;
    justify-self: center;
    transition: height 0.5s ease;
  }

  img {
    height: 100%;
    width: auto;
    object-fit: contain;
  }

  .active {
    height: 9rem;
    transition: height 0.4s ease;
  }


  @media (min-width: 768px) and (max-width: 1279px) {
    picture {
      grid-column: 11 / span 1;
      margin-left: -2.5rem;
      height: 3rem;
    }
  }

  @media (max-width: 767px) {
    picture {
      grid-column: span 1;
      grid-row: 1;
      margin-top: 1.875rem;
      height: 3rem;
    }

    .active {
      grid-column: span 2;
      height: 9rem;
      margin-top: -1.5rem;
      transition: height 0.3s ease, margin-top 0.3s ease;
    }
  }
`

class Cups extends PureComponent {
  state = {
    active: 0,
  }

  rafId = null

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId)
    }

    this.rafId = requestAnimationFrame(() => {
      const padding = 100
      const active = this.state.active
      const windowHeight = window.innerHeight
      const cupsBoundings = document.getElementById('cups').getBoundingClientRect()
      const cupHeight = cupsBoundings.height < 400 ? 400 : cupsBoundings.height
      const newActive = limit(
        parseInt((windowHeight / 2 - cupsBoundings.top + padding) / (cupHeight / 5), 10),
        0,
        cupMock.items.length - 1
      )

      if (active !== newActive) {
        this.setState({
          active: newActive,
        })
      }
    })
  }

  renderCup = ({ image }, index) => {
    const { t } = this.props
    const active = this.state.active === index

    return (
      <Picture
        key={index}
        className={cn(picture.className, { active })}
        image={{ namespace: 'school', key: image, alt: t('school:imgAlt.cup') }}
      />
    )
  }

  render() {
    const active = cupMock.items[this.state.active]
    return (
      <Fragment>
        <section className='grid-container' id='cups'>
          {cupMock.items.map(this.renderCup)}

          <div className='grid-container'>
            <span
              className='font_subhead-slab'
              dangerouslySetInnerHTML={{ __html: active.title }}
            />
          </div>
        </section>

        <style jsx>{`
          section {
            position: relative;
            margin-left: auto;
            margin-right: auto;
            margin-top: 6rem;
            width: 1792px;
            height: 26rem;
          }

          div {
            position: absolute;
            height: 100%;
          }

          span {
            grid-column: 5 / span 6;
            margin-top: 10.3125rem;
          }

          @media (min-width: 1360px) and (max-width: 1919px) {
            section {
              width: 1328px;
            }
          }

          @media (min-width: 1280px) and (max-width: 1359px) {
            section {
              width: 1232px;
            }
          }

          @media (min-width: 768px) and (max-width: 1279px) {
            section {
              margin-top: 3rem;
              width: 944px;
            }

            span {
              grid-column: 4 / span 5;
              margin-top: 10.1875rem;
            }

            @media (max-width: 1023px) {
              section {
                width: 59rem;
              }
            }
          }

          @media (max-width: 767px) {
            section {
              margin-top: 14.6875rem;
              width: 20.5rem;
              height: 25.875rem;
            }

            div {
              text-align: center;
            }

            span {
              grid-column: 2 / span 4;
              margin-top: 10.4375rem;
            }
           }
        `}</style>
        {picture.styles}
      </Fragment>
    )
  }
}

export default translate()(Cups)
