import React, { Fragment, PureComponent } from 'react'
import { translate } from 'react-i18next'
import css from 'styled-jsx/css'
import cn from 'classnames'
import cupMock from './mock/cup-mock'
import PictureForAllResolutions from '../PictureForAllResolutions'

const picture = css.resolve`
  picture {
    grid-column: 2 / span 1;
    z-index: -1;
    margin-top: 1rem;
    margin-left: 0rem;
    height: 48px;
    justify-self: center;
    transition: height 0.2s ease;
  }
  
  .active {
    height: 144px;
    transition: height 0.2s ease;
  }
  

  @media (max-width: 1279px) {
    picture {
      height: 48px;
    }

    @media (max-width: 1023px) {
      picture {
        height: 48px;
      }
    }
  }

  @media (max-width: 767px) {
    picture {
      grid-column: span 1;
      grid-row: 1;
      margin-top: 1.875rem;
      height: 48px;
    }
    .active {
      height: 100px;
      margin-top: -9px;
    }
  }
`

class Cups extends PureComponent {
  state = {
    active: 2,
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
      const newActive = parseInt((windowHeight / 2 - cupsBoundings.top + padding) / (cupHeight / 5), 10)
      if (active !== newActive && newActive >= 1 && newActive <= 5) {
        this.setState({
          active: newActive,
        })
      }
    })
  }

  renderItem = ({
    id,
    image,
  }) => {
    const { t } = this.props
    const active = this.state.active === id
    return (
      <PictureForAllResolutions
        key={id}
        className={cn(picture.className, {
          active,
        })}
        image={{ namespace: 'school', key: image, alt: t('school:imgAlt.school') }}
      />
    )
  }

  render() {
    const active = cupMock.items[this.state.active - 1]
    return (
      <Fragment>
        <section className='grid-container' id='cups'>
          {
            cupMock.items.map(this.renderItem)
          }
          <h1 className='font_h1-slab'>
            <span className='font_subhead-slab'>
              { !!active && active.title}
            </span>
          </h1>

        </section>
        <style jsx>{`
          section {
            position: relative;
            margin-left: auto;
            margin-right: auto;
            padding-top: 1.5rem;
            width: 1792px;
            margin-bottom: 2rem;
          }

          h2 {
            grid-column: 5 / span 4;
            grid-row: 1;
            margin-bottom: 5.5rem;
            text-align: center;
          }

          p {
            grid-column: 3 / span 8;
            text-align: center;
            grid-row: 2;
          }

          .font_h1-slab {
            grid-column: 5 / span 6;
            grid-row: 2 / span 5;
            padding-top: 0.5rem;
            position: absolute;
            align-self: center;
            line-height: 1.60rem;
            margin-top: -4rem;
          }

          .font_h2-regular {
            grid-column: 4 / span 4;
            grid-row: 2;
            text-align: left;
            margin-top: 14rem;
          }

          .point {
            grid-column: 4 / span 5;
            grid-row: 2;
            text-align: left;
            margin-top: 17rem;
          }

          .font_p16-regular {
            grid-column: 1 / span 12;
            grid-row: 1;
            text-align: left;
            margin-bottom: 1rem;
          }

          @media (min-width: 1360px) and (max-width: 1919px) {
            section {
              width: 1328px;
            }

            h2 {
              grid-column: 4 / span 6;
            }

          }

          @media (min-width: 1280px) and (max-width: 1359px) {
            section {
              width: 1232px;
            }

            h2 {
              grid-column: 4 / span 6;
            }

          }

          @media (min-width: 768px) and (max-width: 1279px) {
            section {
              width: 944px;
            }

            h2 {
              margin-bottom: 2.5rem;
            }

            @media (max-width: 1023px) {
              section {
                width: 59rem;
              }

            }
          }

          @media (max-width: 767px) {
            section {
              padding-top: 5rem;
              margin-bottom: 8rem;
              width: 18.5rem;
              text-align: center;
              height: 40vh;
            }

            h2,
            p,
            footer {
              grid-column: 1 / span 6;
            }

            .font_h1-slab {
              margin-top: 8rem;
              grid-column: 2 / span 4;
              grid-row: 2 / span 5;
              padding-top: 0.5rem;
              align-self: center;
              line-height: 1.60rem;
            }

            h2 {
              margin-bottom: 1.1875rem;
            }

           }
        `}</style>
        {picture.styles}
      </Fragment>
    )
  }
}

export default translate()(Cups)
