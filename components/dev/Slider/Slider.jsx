import React, { PureComponent } from 'react'
import { arrayOf, string, number } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Slider.styles'
import { css } from '@emotion/core'
import cn from 'classnames'
import translate from '../../../utils/translate-wrapper'
import Arrow from '../../../static/icons/arrow.svg'
import CrossdomainLink from '../../../static/icons/crossdomain_link.svg'
import getScrollbarWidth from '../../../utils/getScrollbarWidth'
import limit from '../../../utils/limit'

class Slider extends PureComponent {
  static propTypes = {
    className: string,
    id: string,
    slides: arrayOf(number),
    href: string,
  }

  state = {
    activeSlide: 1,
  }

  componentDidMount() {
    this.scrollbarWidth = getScrollbarWidth()
  }

  handleChangeSlide = step => () => {
    const { activeSlide } = this.state
    const { slides } = this.props

    this.setState({
      activeSlide: limit(activeSlide + step, 1, slides.length),
    })
  }

  render() {
    const { className, t, id, slides, href } = this.props
    const { activeSlide } = this.state
    const slideTitle = t(`dev:portfolio.projects.${id}.title`)

    return (
      <section className={className}>
        <div className="slider">
          <div
            className="image-container"
            css={css`
              height: calc(21.8125rem + ${this.scrollbarWidth}px);
            `}
          >
            {slides.map(slide => (
              <img
                key={`${id}_${slide}`}
                css={css`
                  transform: translateX(${-100 * (activeSlide - 1)}%);
                `}
                alt={`${t('dev:portfolio.slidesAlt')}${slideTitle}`}
                src={require(`../../../static/images/dev/portfolio/${id}_${slide}.jpg`)}
              />
            ))}
          </div>

          <div className="controls">
            <button
              name="previous-slide"
              aria-label={t('dev:portfolio.previousSlide')}
              className={cn({ is_invisible: activeSlide === 1 })}
              onClick={this.handleChangeSlide(-1)}
              tabIndex={activeSlide === 1 ? '-1' : '0'}
            >
              <Arrow width="100%" height="100%" />
            </button>
            <button
              name="next-slide"
              aria-label={t('dev:portfolio.nextSlide')}
              className={cn({ is_invisible: activeSlide === slides.length })}
              onClick={this.handleChangeSlide(1)}
              tabIndex={activeSlide === slides.length ? '-1' : '0'}
            >
              <Arrow width="100%" height="100%" />
            </button>
          </div>

          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener nofollow"
              aria-label={`${t('dev:portfolio.openSlide')} ${slideTitle}`}
            >
              <CrossdomainLink width="100%" height="100%" />
            </a>
          )}
        </div>

        <h4
          className="font_subhead-regular"
          dangerouslySetInnerHTML={{
            __html: t(`dev:portfolio.projects.${id}.title`),
          }}
        />
        <p
          className="font_p16-regular"
          dangerouslySetInnerHTML={{
            __html: t(`dev:portfolio.projects.${id}.text`),
          }}
        />
      </section>
    )
  }
}

export default styled(translate()(Slider))`
  ${styles}
`
