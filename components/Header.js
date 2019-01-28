import React, { PureComponent, Fragment } from 'react'
import { object, string, bool } from 'prop-types'
import { withRouter } from 'next/router'
import translate from '../utils/translate-wrapper'
import getHeaderLinks from '../utils/getHeaderLinks'
import getScrollbarWidth from '../utils/getScrollbarWidth'
import SideBar from './SideBar'
import HeaderContent from './HeaderContent'

class Header extends PureComponent {
  static propTypes = {
    router: object,
    sectionName: string,
    logoHref: string,
    logoAlt: string,
    logoSup: string,
    isLogoLink: bool,
    isBurgerVisible: bool,
  }

  state = {
    logoAlt: 'CSSSR logo',
    showHeader: true,
    pinHeader: true,
    toggleHeaderAnimations: false,
    isSideBarOpened: false,
    isLogoLink: false,
    isBurgerVisible: false,
  }

  lastScrollTop = 0

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll)

    this.scrollbarWidth = getScrollbarWidth()
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll)

    document.body.style.overflow = 'initial'
    document.body.style.paddingRight = 0
  }

  componentDidUpdate(prevProps, prevState) {
    const { isSideBarOpened } = this.state

    if (isSideBarOpened === prevState.isSideBarOpened) {
      return
    }

    document.body.style.overflow = isSideBarOpened ? 'hidden' : 'initial'
    document.body.style.paddingRight = isSideBarOpened ? `${this.scrollbarWidth}px` : 0
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

  handleScroll = event => {
    const { target: { scrollingElement } } = event
    const { showHeader } = this.state
    const headerHeight = 65
    const scrollTop = (scrollingElement === document.body.parentNode || scrollingElement === document.body) && scrollingElement.scrollTop

    if (scrollTop > this.lastScrollTop && scrollTop > headerHeight) {
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

  render() {
    const {
      router: { pathname },
      sectionName,
      logoHref,
      logoAlt,
      logoSup,
      isLogoLink,
      isBurgerVisible,
    } = this.props
    const { showHeader, pinHeader, isSideBarOpened, toggleHeaderAnimations } = this.state
    const links = getHeaderLinks(pathname)

    return (
      <Fragment>
        <SideBar
          onToggle={this.handleSideBarToggle}
          isOpened={isSideBarOpened}
          onClose={this.handleSideBarClose}
        />
        <HeaderContent
          links={links}
          pathname={pathname}
          sectionName={sectionName}
          showHeader={showHeader}
          pinHeader={pinHeader}
          logoHref={logoHref}
          logoAlt={logoAlt}
          logoSup={logoSup}
          scrollbarWidth={this.scrollbarWidth}
          isLogoLink={isLogoLink}
          isBurgerVisible={isBurgerVisible}
          isSideBarOpened={isSideBarOpened}
          toggleHeaderAnimations={toggleHeaderAnimations}
          onSideBarToggle={this.handleSideBarToggle}
        />
      </Fragment>
    )
  }
}

export default withRouter(translate()(Header))
