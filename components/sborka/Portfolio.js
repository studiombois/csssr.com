import React, { Fragment, PureComponent } from 'react'
import { bool } from 'prop-types'
import css from 'styled-jsx/css'
import cn from 'classnames'
import portfolioProjects from '../../data/sborka/porfolioProjects'
import { translate } from 'react-i18next'
import PictureForAllResolutions from '../PictureForAllResolutions'
import Arrow from '../../static/icons/arrow.svg'

const picture = css.resolve`
  picture {
    display: block;
    width: 100%;
    height: 1128px;
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    picture {
      height: 832px;
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    picture {
      height: 776px;
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    picture {
      height: 596px;
    }

    @media (max-width: 1023px) {
      picture {
        height: 37.25rem;
      }
    }
  }

  @media (max-width: 767px) {
    picture {
      height: 31rem;
    }
  }
`

class Portfolio extends PureComponent {
  static propTypes = {
    isMobile: bool,
  }

  state = {
    activeScrollItemIndex: 0,
  }

  handleShowPrevSlide = () => {
    const { activeScrollItemIndex } = this.state

    this.setState({
      activeScrollItemIndex: activeScrollItemIndex > 0
        ? activeScrollItemIndex - 1
        : 0,
    })
  }

  handleShowNextSlide = () => {
    const { activeScrollItemIndex } = this.state

    this.setState({
      activeScrollItemIndex: activeScrollItemIndex < portfolioProjects.length - 1
        ? activeScrollItemIndex + 1
        : portfolioProjects.length - 1,
    })
  }

  renderPortfolioProjects = (project, index) => {
    const { t, isMobile } = this.props
    const { activeScrollItemIndex } = this.state

    if ((!isMobile && index === activeScrollItemIndex) || isMobile) {
      return (
        <Fragment key={project.name}>
          <section>
            <PictureForAllResolutions
              className={picture.className}
              image={{ namespace: 'sborka/portfolio', key: project.name, alt: project.name }}
            />
          </section>

          <div>
            <h3
              className='font_h2-regular'
              dangerouslySetInnerHTML={{ __html: t(`sborka:portfolio.portfolioProjects.${project.name}.title`) }}
            />
            <p
              className='font_p16-regular'
              dangerouslySetInnerHTML={{ __html: t(`sborka:portfolio.portfolioProjects.${project.name}.text`) }}
            />
            <a
              className='font_link-list_16'
              href={project.href}
              target='_blank'
              dangerouslySetInnerHTML={{ __html: t(`sborka:portfolio.portfolioProjects.${project.name}.link`) }}
            />
          </div><style jsx>{`
            section {
              grid-column: 1 / span 12;
            }

            div {
              margin-top: -8.4375rem;
              grid-column: 2 / span 5;
              grid-row: 2;
            }

            p {
              margin-top: 0.5rem;
            }

            a {
              margin-top: 1rem;
            }

            @media (min-width: 1360px) and (max-width: 1919px) {
              div {
                margin-top: -5.4375rem;
              }
            }

            @media (min-width: 1280px) and (max-width: 1359px) {
              div {
                grid-column: 2 / span 4;
                margin-top: -4.4375rem;
              }
            }

            @media (min-width: 768px) and (max-width: 1279px) {
              div {
                grid-column: 2 / span 4;
                margin-top: -1.75rem;
              }

              p {
                margin-top: 1rem;
                font-size: 0.875rem;
                line-height: 1.5rem;
              }

              a {
                margin-top: 0.8125rem;
              }
            }

            @media (max-width: 767px) {
              section {
                grid-column: ${index * 4 + 1} / span 3;
              }

              div {
                grid-column: ${index * 4 + 1} / span 3;
                margin-top: 0.5rem;
              }

              p {
                margin-top: 1rem;
                font-size: 0.875rem;
                line-height: 1.5rem;
              }

              a {
                margin-top: 0.8125rem;
              }
            }
          `}</style>
        </Fragment>
      )
    }
  }

  render() {
    const { t } = this.props
    const { activeScrollItemIndex } = this.state
    // 3 колоки занимает каждый айтем
    // 1 колонка расстояния между ними, кроме последнего
    const gridColumns = 3 * portfolioProjects.length + (portfolioProjects.length - 1)

    return (
      <Fragment>
        <article className='grid-container'>
          <h2>
            {t('sborka:portfolio.title')}
          </h2>

          <div className='scroller-wrapper'>
            <div className='grid-container'>
              {portfolioProjects.map(this.renderPortfolioProjects)}
            </div>

            <div className='controlls'>
              <button
                className={cn({
                  is_invisible: activeScrollItemIndex === 0,
                })}
                onClick={this.handleShowPrevSlide}
              >
                <Arrow />
              </button>
              <button
                className={cn({
                  is_invisible: activeScrollItemIndex === portfolioProjects.length - 1,
                })}
                onClick={this.handleShowNextSlide}
              >
                <Arrow />
              </button>
            </div>
          </div>

        </article><style jsx>{`
          article {
            position: relative;
            margin-top: 7.9375rem;
            margin-left: auto;
            margin-right: auto;
            width: 1792px;
          }

          h2 {
            grid-column: 2 / span 4;
            font-family: Roboto Slab;
            font-size: 3rem;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: 4rem;
            letter-spacing: normal;
            color: #000000;
          }

          button {
            width: 4rem;
            height: 6rem;
            border: none;
            text-align: left;
            background: none;
            transition: transform 200ms
            cursor: pointer;
          }

          button:first-child {
            color: #f9575c;
          }

          button:first-child:hover {
            transform: translateX(-0.3125rem);
          }

          button:last-child {
            color: #87dbb7;
            transform: rotate(180deg);
          }

          button:last-child:hover {
            transform: rotate(180deg) translateX(-0.3125rem);
          }

          button.is_invisible {
            opacity: 0;
            pointer-events: none;
          }

          .scroller-wrapper {
            grid-column: 1 / span 12;
          }

          .controlls {
            position: absolute;
            top: 30.5rem;
            display: flex;
            justify-content: space-between;
            width: 100%;
            height: 6rem;
          }

          @media (min-width: 1360px) and (max-width: 1919px) {
            article {
              width: 1328px;
            }

            .controlls {
              top: 22.5rem;
            }
          }

          @media (min-width: 1280px) and (max-width: 1359px) {
            article {
              width: 1232px;
            }

            .controlls {
              top: 22.5rem;
            }
          }

          @media (min-width: 768px) and (max-width: 1279px) {
            article {
              margin-top: 5.5rem;
              width: 944px;
            }

            h2 {
              font-size: 1.5rem;
              line-height: 2rem;
            }

            .controlls {
              top: 15rem;
            }

            @media (max-width: 1023px) {
              article {
                width: 59rem;
              }
            }
          }

          @media (max-width: 767px) {
            article {
              margin-top: 5.5rem;
              width: 20.5rem;
            }

            h2 {
              grid-column: 2 / span 4;
              font-size: 1.5rem;
              line-height: 2rem;
              text-align: center;
            }

            div.grid-container {
              grid-template-columns: repeat(${gridColumns}, 3rem);
              grid-column: 1 / span ${gridColumns};
              width: auto;
              padding-left: 1rem;

              // 3rem занимает каждая колонка
              // 0.5rem занимает расстояние между ними
              // паддинги

              width: ${gridColumns * 3 + (0.5 * (gridColumns - 1)) + 4}rem;
            }

            .scroller-wrapper {
              overflow-x: auto;

              margin-top: 2rem;
              margin-left: -1rem;
              width: 22,5rem;
            }

            .controlls {
              display: none;
            }
          }
        `}</style>
        {picture.styles}
      </Fragment>
    )
  }
}

export default translate()(Portfolio)
