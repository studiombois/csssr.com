import React, { PureComponent, Fragment } from 'react'
import { object, string, bool } from 'prop-types'
import { withRouter } from 'next/router'
import { disablePageScroll, enablePageScroll, clearQueueScrollLocks, getPageScrollBarWidth } from 'scroll-lock'
import translate from '../utils/translate-wrapper'
import getHeaderLinks from '../utils/getHeaderLinks'
import SideBar from './SideBar'
import HeaderContent from './HeaderContent'

class Header extends PureComponent {
  static propTypes = {
    router: object,
    logoAlt: string,
    logoSup: string,
    isLogoLink: bool,
    isBurgerVisible: bool,
    menuName: string,
    sectionName: string,
  }

  state = {
    logoAlt: 'CSSSR logo',
    showHeader: true,
    pinHeader: !this.props.isMsBrowser, // Мы хотим всегда показывать хедер на IE
    toggleHeaderAnimations: false,
    isSideBarOpened: false,
    isLogoLink: false,
    isBurgerVisible: false,
  }

  isScrollToSection = false
  lastScrollTop = 0

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll)
    this.scrollbarWidth = getPageScrollBarWidth()
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll)

    clearQueueScrollLocks()
    enablePageScroll()
  }

  componentDidUpdate(prevProps, prevState) {
    const { isSideBarOpened } = this.state

    if (isSideBarOpened === prevState.isSideBarOpened) {
      return
    }

    if (isSideBarOpened) {
      disablePageScroll(document.body)

    } else {
      enablePageScroll(document.body)
    }
  }

  handleSideBarToggle = () => {
    this.setState(previousState => ({
      isSideBarOpened: !previousState.isSideBarOpened,
    }))
  }

  handleSideBarClose = e => {
    const isSideBar = !!e.target.classList && e.target.classList.contains('sidebar')
    if (this.state.isSideBarOpened && isSideBar) {
      this.setState({
        isSideBarOpened: false,
      })
    }
  }

  handleScrollToSection = () => {
    this.isScrollToSection = true
    const timeout = setTimeout(() => {
      this.isScrollToSection = false
      clearTimeout(timeout)
    }, 700)
  }

  handleScroll = event => {
    const { target: { scrollingElement } } = event
    const { showHeader } = this.state
    const headerHeight = 65
    const scrollTop = (scrollingElement === document.body.parentNode || scrollingElement === document.body) && scrollingElement.scrollTop

    if ((scrollTop > this.lastScrollTop && scrollTop > headerHeight) || this.isScrollToSection) {
      // eslint-disable-next-line
      showHeader && this.setState({
        showHeader: false,
        pinHeader: false,
      })
    } else if (scrollTop === 0) {
      this.setState({
        pinHeader: true,
        toggleHeaderAnimations: false,
      })
    } else {
      // eslint-disable-next-line
      !showHeader && this.setState({
        showHeader: true,
        pinHeader: false,
        toggleHeaderAnimations: true,
      })
    }

    this.lastScrollTop = scrollTop
  }

  handleHeaderFocus = () => {
    if (!this.state.showHeader) {
      this.setState({
        showHeader: true,
        toggleHeaderAnimations: true,
      })
    }
  }

  render() {
    const {
      router: { pathname },
      logoAlt,
      logoSup,
      isLogoLink,
      isBurgerVisible,
      menuName,
      sectionName,
    } = this.props
    const { showHeader, pinHeader, isSideBarOpened, toggleHeaderAnimations } = this.state
    const links = getHeaderLinks(pathname)

    return (
      <Fragment>
        <SideBar
          onToggle={this.handleSideBarToggle}
          isOpened={isSideBarOpened}
          onClose={this.handleSideBarClose}
          menuName={menuName}
        />
        <HeaderContent
          links={links}
          pathname={pathname}
          showHeader={showHeader}
          pinHeader={pinHeader}
          logoAlt={logoAlt}
          logoSup={logoSup}
          scrollbarWidth={this.scrollbarWidth}
          isLogoLink={isLogoLink}
          isBurgerVisible={isBurgerVisible}
          isSideBarOpened={isSideBarOpened}
          toggleHeaderAnimations={toggleHeaderAnimations}
          onFocus={this.handleHeaderFocus}
          onSideBarToggle={this.handleSideBarToggle}
          onScrollToSection={this.handleScrollToSection}
          sectionName={sectionName}
        />
      </Fragment>
    )
  }
}

export default withRouter(translate()(Header))
