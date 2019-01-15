import React, { Fragment, PureComponent } from 'react'
import { bool } from 'prop-types'
import cn from 'classnames'
import Transition from 'react-transition-group/Transition'
import portfolioProjects from '../../data/sborka/porfolioProjects'
import { translate } from 'react-i18next'
import Arrow from '../../static/icons/arrow.svg'
import limit from '../../utils/limit'
import PortfolioItem from './PortfolioItem'

const getAnimationProperties = slideTo => {
  const animationDuration = 300
  const defaultStyles = {
    gridColumn: '1 / span 12',
    gridRow: 1,
    display: 'block',
    opacity: 0,
    transition: `
      opacity ${animationDuration}ms linear,
      transform ${animationDuration}ms linear
    `,
  }

  const enteringTransfromStylesBySlideDirection = {
    right: 'translateX(5%)',
    left: 'translateX(-5%)',
  }

  const exitingTransfromStylesBySlideDirection = {
    right: 'translateX(-5%)',
    left: 'translateX(5%)',
  }

  const transitionStylesByAnimationState = {
    entering: {
      opacity: 0,
      transform: enteringTransfromStylesBySlideDirection[slideTo],
    },
    entered: { opacity: 1, transform: 'translateX(0)' },
    exiting: {
      opacity: 0,
      transform: exitingTransfromStylesBySlideDirection[slideTo],
    },
    exited: { opacity: 0, transform: 'translateX(0)' },
  }

  return ({
    animationDuration,
    animationStyles: {
      default: defaultStyles,
      byAnimationState: transitionStylesByAnimationState,
    },
  })
}

class Portfolio extends PureComponent {
  static propTypes = {
    isMobile: bool,
  }

  state = {
    activeScrollItemIndex: 0,
    slideTo: 'right',
  }

  handleChangeSlide = step => () => {
    const { activeScrollItemIndex } = this.state

    this.setState({
      activeScrollItemIndex: limit(activeScrollItemIndex + step, 0, portfolioProjects.length - 1),
      slideTo: step === 1 ? 'right' : 'left',
    })
  }

  renderPortfolioProjects = (project, index) => {
    const { isMobile } = this.props
    const { activeScrollItemIndex, slideTo } = this.state
    const { animationDuration, animationStyles } = getAnimationProperties(slideTo)
    const Project = () =>
      <PortfolioItem
        name={project.name}
        href={project.href}
        index={index}
      />

    if (isMobile) {
      return (
        <Fragment key={project.name}>
          <Project />
        </Fragment>
      )
    }

    return (
      <Transition
        key={project.name}
        in={index === activeScrollItemIndex}
        timeout={animationDuration}
      >
        {state =>
          <div
            className='grid-container'
            style={{
              ...animationStyles.default,
              ...animationStyles.byAnimationState[state],
            }}
          >
            <Project />
          </div>
        }
      </Transition>
    )
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
                className={cn({ is_invisible: activeScrollItemIndex === 0 })}
                onClick={this.handleChangeSlide(-1)}
              >
                <Arrow />
              </button>
              <button
                className={cn({ is_invisible: activeScrollItemIndex === portfolioProjects.length - 1 })}
                onClick={this.handleChangeSlide(1)}
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
            transition: transform 200ms;
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
              margin-top: 10.9375rem;
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
              width: auto;
              padding-left: 1rem;
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
        <style jsx>{`
          @media (max-width: 767px) {
            div.grid-container {
              grid-template-columns: repeat(${gridColumns}, 3rem);
              grid-column: 1 / span ${gridColumns};

              // 3rem занимает каждая колонка
              // 0.5rem занимает расстояние между ними
              // паддинги
              width: ${gridColumns * 3 + (0.5 * (gridColumns - 1)) + 4}rem;
            }
          }
        `}</style>
      </Fragment>
    )
  }
}

export default translate()(Portfolio)
