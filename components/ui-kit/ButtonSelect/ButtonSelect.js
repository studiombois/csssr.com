import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import translate from '../../../utils/translate-wrapper'
import { string, arrayOf, shape, bool, func } from 'prop-types'
import cn from 'classnames'
import Button from '../Button'
import ButtonSelectList from './ButtonSelectList'
import CrossIcon from '../../../static/icons/cross.svg'
import ThreePointIcon from '../../../static/icons/threePoint.svg'
import isAppleDevice from '../../../utils/isAppleDevice'
import { whiteButtonStyles, whiteButtonClassName } from './styles/stylesForWhiteButton'
import { blueButtonStyles, blueButtonClassName } from './styles/stylesForBlueButton'
import ContactModal from '../../ContactModal'

const stopBodyScrolling = shouldStop => {
  const stopEventDefaultBehavior = e => e.preventDefault()

  return shouldStop
    ? document.body.addEventListener('touchmove', stopEventDefaultBehavior, false )
    : document.body.removeEventListener('touchmove', stopEventDefaultBehavior, false )
}

class ButtonSelect extends PureComponent {
  static propTypes = {
    buttonText: string,
    showButtonOnNode: string,
    hideButtonOnNode: string,
    links: arrayOf(shape({
      label: string,
      href: string,
      external: bool,
    })),
    pageName: string,
    isMobile: bool,
    t: func,
  }

  state = {
    isDropdownVisible: false,
    showScrollButton: false,
    showContactModal: false,
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
    this.setState({
      isDropdownVisible: !this.state.isDropdownVisible,
    })
  }

  handleHideDropdown = () => {
    this.setState({
      isDropdownVisible: false,
    })
  }

  handleLinkClick = dataLayerEvent => {
    if (window.dataLayer) {
      window.dataLayer.push({ event: dataLayerEvent })
    }

    this.handleHideDropdown()
  }

  handleHideContactModal = () => {
    this.setState({
      showContactModal: false,
    })

    document.body.style.overflow = 'initial'
  }

  handleShowContactModal = () => {
    if (window.dataLayer) {
      window.dataLayer.push({ event: 'floating_button_form' })
    }

    document.body.style.overflow = 'hidden'

    this.setState({
      showContactModal: true,
    })
  }

  render() {
    const { buttonText, t, pageName } = this.props
    const { isDropdownVisible } = this.state

    return (
      <div
        id='hire-us-button'
        className={cn(blueButtonClassName, whiteButtonClassName, {
          'button-wrapper': true,
          'button-wrapper_is_invisible': !this.state.showScrollButton,
          'button-wrapper_is_dropdown-visible': isDropdownVisible,
        })}
      >
        <ButtonSelectList
          isDropdownVisible={isDropdownVisible}
          isAppleDevice={isAppleDevice()}
          onLinkClick={this.handleLinkClick}
          onCloseButtonClick={this.handleHideDropdown}
        />

        <Button
          className={blueButtonClassName}
          onClick={this.handleShowContactModal}
        >
          {buttonText}
        </Button>

        <Button
          name='more-links'
          ariaLabel={t('common:moreLinks')}
          onClick={this.handleToggleDropdown}
          className={whiteButtonClassName}
          theme='secondary'
        >
          { isDropdownVisible
            ? <CrossIcon width='1.5rem'/>
            : <ThreePointIcon width='3rem' height='3rem'/>
          }
        </Button>

        {/* Поместил форму сюда, что бы не изменять state на уровне всей страницы */}
        {typeof window !== 'undefined' && this.state.showContactModal &&
          ReactDOM.createPortal(
            <ContactModal
              onClose={this.handleHideContactModal}
              pageName={pageName}
            />,
            document.getElementById('main')

          )
        }

        <style jsx>{`
          .button-wrapper {
            position: fixed;
            bottom: 4rem;
            right: 4rem;
            z-index: 8999;
            display: flex;
            flex-wrap: wrap;
            width: 312px;
            transform: translateY(0);
            transition: transform 0.3s ease-out;
          }

          .button-wrapper_is_invisible {
            transform: translateY(calc(100% + 15rem));
          }

          @media (min-width: 1360px) and (max-width: 1919px) {
            .button-wrapper {
              width: 248px;
            }
          }

          @media (min-width: 1280px) and (max-width: 1359px) {
            .button-wrapper {
              width: 232px;
            }
          }

          @media (min-width: 768px) and (max-width: 1279px) {
            .button-wrapper {
              width: 232px;
            }

            @media (max-width: 1023px) {
              .button-wrapper {
                width: 14.5rem;
              }
            }
          }

          @media (max-width: 767px) {
            .button-wrapper {
              position: fixed;
              bottom: 0;
              width: 20.5rem;
              right: 1rem;
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
        `}</style>
        {blueButtonStyles}
        {whiteButtonStyles}
      </div>
    )
  }
}

export default translate()(ButtonSelect)
