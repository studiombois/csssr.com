import React, { PureComponent } from 'react'
import Transition from 'react-transition-group/Transition'
import translate from '../../utils/translate-wrapper'
import { node, string, arrayOf, shape, bool, func } from 'prop-types'
import cn from 'classnames'
import ClickOutside from './ClickOutside'
import Email from '../../static/icons/email.svg'
import Telegram from '../../static/icons/telegram.svg'
import Facebook from '../../static/icons/facebook.svg'
import CrossIcon from '../../static/icons/cross.svg'
import isAppleDevice from '../../utils/isAppleDevice'

// TODO: вынести в компоненты Hire
const links = [{
  label: 'Email',
  href: '#hire-us',
}, {
  label: 'Telegram',
  href: 'http://t.me/sputnik_one_bot',
}, {
  label: 'Facebook',
  href: 'https://m.me/csssr',
  external: true,
}]

const iconsByLabel = {
  Email: <Email />,
  Telegram: <Telegram />,
  Facebook: <Facebook />,
}

const stopBodyScrolling = shouldStop => {
  const stopEventDefaultBehavior = e => e.preventDefault()

  return shouldStop
    ? document.body.addEventListener('touchmove', stopEventDefaultBehavior, false)
    : document.body.removeEventListener('touchmove', stopEventDefaultBehavior, false)
}

class ButtonSelect extends PureComponent {
  static propTypes = {
    children: node,
    showButtonOnNode: string,
    hideButtonOnNode: string,
    links: arrayOf(shape({
      label: string,
      href: string,
      external: bool,
    })),
    isMobile: bool,
    t: func,
  }

  state = {
    isDropdownVisible: false,
    showScrollButton: false,
  }

  rafId = null

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  componentDidUpdate(prevProps, prevState) {
    const { isDropdownVisible } = this.state
    const { isMobile } = this.props

    if (isDropdownVisible === prevState.isDropdownVisible) {
      return
    }

    if (isMobile) {
      document.body.style.overflow = isDropdownVisible ? 'hidden' : 'initial'
      document.body.style.cursor = 'pointer'

      if (isAppleDevice()) {
        // eslint-disable-next-line
        isDropdownVisible ? stopBodyScrolling(true) : stopBodyScrolling(false)
      }
    } else {
      document.body.style.overflow = 'initial'
      document.body.style.cursor = 'default'
    }
  }

  handleScroll = () => {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId)
    }

    this.rafId = requestAnimationFrame(() => {
      const { showButtonOnNode, hideButtonOnNode } = this.props
      const bottomPadding = 250
      const featureBoundings = document.getElementById(showButtonOnNode).getBoundingClientRect()
      const formBoundings = document.getElementById(hideButtonOnNode).getBoundingClientRect()
      const formOffsetTop = formBoundings.top - formBoundings.height - bottomPadding

      if (featureBoundings.top >= 450 || formOffsetTop <= 0) {
        this.setState({
          showScrollButton: false,
          isDropdownVisible: false,
        })
      } else if (formOffsetTop && !this.state.showScrollButton) {
        this.setState({
          showScrollButton: true,
        })
      }
    })
  }

  handleToggleDropdown = () => {
    if (window.dataLayer) {
      window.dataLayer.push({ event: 'floating_button' })
    }

    this.setState({
      isDropdownVisible: !this.state.isDropdownVisible,
    })
  }

  handleHideDropdown = () => {
    this.setState({
      isDropdownVisible: false,
    })
  }

  render() {
    const { children, t } = this.props
    const { isDropdownVisible } = this.state
    const animationDuration = 300

    return (
      <div
        id='hire-us-button'
        className={cn({
          'button-wrapper': true,
          'button-wrapper_is_invisible': !this.state.showScrollButton,
          'button-wrapper_is_dropdown-visible': isDropdownVisible,
        })}
      >
        <button
          className='font_button-label'
          onClick={this.handleToggleDropdown}
        >
          {children}
          <span>
            <CrossIcon />
          </span>
        </button>

        <Transition in={isDropdownVisible} timeout={animationDuration}>
          {animationState => isDropdownVisible &&
            <ClickOutside onOutsideClick={this.handleHideDropdown}>
              <ul className={`is_${animationState}`}>
                <li dangerouslySetInnerHTML={{ __html: t('common:floatingButton.mobileText') }} />
                {links.map(({ label, href, external }) =>
                  <li key={label}>
                    <a
                      href={href}
                      onClick={this.handleHideDropdown}
                      target={external ? '_blank' : null}
                      rel='noopener'
                    >
                      {iconsByLabel[label]}
                      <span>
                        {label}
                      </span>
                    </a>
                  </li>
                )}
              </ul>
            </ClickOutside>
          }
        </Transition>
        <style jsx>{`
          button {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 3rem;
            background: none;
            border: none;
            cursor: pointer;
            user-select: none;
          }

          button  {
            color: #ffffff;
            background-color: #0076ff;
            transition: background-color 0.3s ease-out, color 0.1s ease-out;
          }

          button:hover {
            background-color: #0254d8;
          }

          button span {
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            display: block;
            width: 1.5rem;
            height: 1.5rem;
            color: transparent;
            transition: color 0.2s ease-out;
          }

          ul {
            height: 0;
            padding: 0;
            background-color: #0076ff;
            transition: height 0.3s ease-out;
            overflow: hidden;
          }

          ul.is_entering {
            height: 0
          }

          ul.is_entered {
            padding-top: 1rem;
            padding-bottom: 0.5rem;
            height: 10rem;
          }

          li {
            padding: 0.5rem 1rem;
          }

          li:hover {
            background-color: #0254d8;
          }

          li {
            margin-top: 0.5rem;
          }

          li:first-child {
            display: none;
          }

          li:first-child,
          li:nth-child(2) {
            margin-top: 0;
          }

          a {
            display: flex;
            align-items: center;
            height: 1.5rem;
            font-family: Roboto;
            font-size: 1rem;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.5rem;
            letter-spacing: normal;
            color: #ffffff;
            cursor: pointer;
          }

          a span {
            margin-left: 0.5rem;
            display: inline-block;
          }

          .button-wrapper {
            position: fixed;
            bottom: 4rem;
            right: 4rem;
            width: 272px;
            z-index: 8999;
            transform: translateY(0);
            transition: transform 0.3s ease-out;
          }

          .button-wrapper_is_invisible {
            transform: translateY(calc(100% + 15rem));
          }

          .button-wrapper_is_dropdown-visible button {
            color: transparent;
            background-color: #0076ff;
            cursor: default;
            user-select: none;
          }

          .button-wrapper_is_dropdown-visible button span {
            color: #fff;
            cursor: pointer;
          }

          @media (min-width: 1360px) and (max-width: 1919px) {
            .button-wrapper {
              width: 208px;
            }
          }

          @media (min-width: 1280px) and (max-width: 1359px) {
            .button-wrapper {
              width: 192px;
            }
          }

          @media (min-width: 768px) and (max-width: 1279px) {
            .button-wrapper {
              width: 192px;
            }

            @media (max-width: 1023px) {
              .button-wrapper {
                width: 12rem;
              }
            }
          }

          @media (max-width: 767px) {
            button {
              margin-top: auto;
            }

            ul.is_entering {
              height: 0
            }

            ul.is_entered {
              padding-top: 0;
              padding-bottom: 2.5rem;
              height: 18.5rem;
            }

            .button-wrapper {
              position: fixed;
              bottom: 2rem;
              width: 13.5rem;
              right: calc(50% - 13.5rem / 2);
            }

            .button-wrapper_is_dropdown-visible {
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              z-index: 10000;
              display: flex;
              flex-direction: column;
              width: 100%;
              background-color: rgba(0, 0, 0, 0.69);
            }

            .button-wrapper_is_dropdown-visible button {
              background-color: transparent;
              transition: none;
              -webkit-tap-highlight-color: transparent;
            }

            .button-wrapper_is_dropdown-visible button span {
              display: none;
            }

            .button-wrapper_is_dropdown-visible ul {
              background-color: white;
            }

            .button-wrapper_is_dropdown-visible ul li {
              margin-top: 1.5rem;
            }

            .button-wrapper_is_dropdown-visible ul li:first-child {
              margin-top: 2.875rem;
              padding-top: 0;
              padding-bottom: 0;
              display: block;
              height: 1.5rem;
              font-family: Roboto;
              font-size: 1rem;
              font-weight: normal;
              font-style: normal;
              font-stretch: normal;
              line-height: 1.5rem;
              letter-spacing: normal;
              cursor: default;
            }

            .button-wrapper_is_dropdown-visible ul li:hover {
              background-color: white;
            }

            .button-wrapper_is_dropdown-visible ul li a {
              color: black;
            }
          }
        `}</style>
      </div>
    )
  }
}

export default translate()(ButtonSelect)
