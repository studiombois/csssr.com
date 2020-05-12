import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import { L10nConsumer } from '../../../utils/l10nProvider'
import { arrayOf, bool, shape, string } from 'prop-types'
import cn from 'classnames'
import { clearQueueScrollLocks, disablePageScroll, enablePageScroll } from 'scroll-lock'
import styled from '@emotion/styled'
import styles, { blueButtonStyles, whiteButtonStyles } from './ButtonSelect.styles'
import Button from '../core-design/Button'
import ButtonSelectList from './ButtonSelectList'
import CrossIcon from '../../../static/icons/cross.svg'
import ThreePointIcon from '../../../static/icons/threePoint.svg'
import isAppleDevice from '../../../utils/isAppleDevice'
import ContactModal from '../../ContactModal'

class ButtonSelect extends PureComponent {
  static propTypes = {
    buttonText: string,
    showButtonOnNode: string,
    hideButtonOnNode: string,
    links: arrayOf(
      shape({
        label: string,
        href: string,
        external: bool,
      }),
    ),
    pageName: string,
    isMobile: bool,
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

    clearQueueScrollLocks()
    enablePageScroll()
  }

  componentDidUpdate(prevProps, prevState) {
    const { isDropdownVisible } = this.state
    const { isMobile } = this.props

    if (isDropdownVisible === prevState.isDropdownVisible) {
      return
    }

    if (isMobile) {
      if (isDropdownVisible) {
        disablePageScroll(document.body)
      } else {
        enablePageScroll(document.body)
      }
    } else {
      enablePageScroll(document.body)
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

  handleLinkClick = (dataLayerEvent) => {
    if (window.dataLayer) {
      window.dataLayer.push({ event: dataLayerEvent })
    }

    this.handleHideDropdown()
  }

  handleHideContactModal = () => {
    this.setState({
      showContactModal: false,
    })

    enablePageScroll(document.body)
  }

  handleShowContactModal = () => {
    if (window.dataLayer) {
      window.dataLayer.push({ event: 'floating_button_form' })
    }

    disablePageScroll(document.body)

    this.setState({
      showContactModal: true,
    })
  }

  handlePreventSmoothScroll = () => {
    document.documentElement.classList.add('disable-smooth-scroll')

    const scrollStylesTimer = setTimeout(() => {
      document.documentElement.classList.remove('disable-smooth-scroll')

      clearTimeout(scrollStylesTimer)
    })
  }

  render() {
    const {
      className,
      buttonText,
      pageName,
      isMobile,
      l10n: { translations },
    } = this.props
    const { isDropdownVisible } = this.state

    return (
      <div
        data-scroll-lock-fill-gap
        id="hire-us-button"
        data-testid="buttonSelect:block.listAndText"
        className={cn(className, {
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

        {isMobile ? (
          <Button
            as="a"
            href="#hire-us"
            css={blueButtonStyles}
            onClick={this.handlePreventSmoothScroll}
            testid="buttonSelect:button.showModal"
          >
            {buttonText}
          </Button>
        ) : (
          <Button
            css={blueButtonStyles}
            onClick={this.handleShowContactModal}
            testid="buttonSelect:button.showModal"
            tabIndex="-1"
          >
            {buttonText}
          </Button>
        )}

        <Button
          name="more-links"
          ariaLabel={translations.common.moreLinks}
          onClick={this.handleToggleDropdown}
          css={whiteButtonStyles}
          kind="secondary"
          testid="buttonSelect:button.toggle.moreLinks"
          tabIndex="-1"
        >
          {isDropdownVisible ? (
            <CrossIcon width="1.5rem" />
          ) : (
            <ThreePointIcon width="3rem" height="3rem" />
          )}
        </Button>

        {/* Поместил форму сюда, что бы не изменять state на уровне всей страницы */}
        {typeof window !== 'undefined' &&
          this.state.showContactModal &&
          ReactDOM.createPortal(
            <ContactModal onClose={this.handleHideContactModal} pageName={pageName} />,
            document.getElementById('main'),
          )}
      </div>
    )
  }
}

export default styled(L10nConsumer(ButtonSelect))`
  ${styles}
`
