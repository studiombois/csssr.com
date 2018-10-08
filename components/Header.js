import React, { PureComponent, Fragment } from 'react'
import { object, string } from 'prop-types'
import { withRouter } from 'next/router'
import { translate } from 'react-i18next'
import headerLinks from '../data/headerLinks'
// import SideBar from './SideBar'
import HeaderContent from './HeaderContent'

class Header extends PureComponent {
  static propTypes = {
    router: object,
    sectionName: string,
  }

  state = {
    showHeader: true,
    pinHeader: true,
    toggleHeaderAnimations: false,
    isSideBarOpened: false,
  }

  lastScrollTop = 0

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll)
  }

  componentDidUpdate(prevProps, prevState) {
    const { isSideBarOpened } = this.state

    if (isSideBarOpened === prevState.isSideBarOpened) {
      return
    }

    if (isSideBarOpened) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'initial'
    }
  }

  handleSideBarToggle = () => {
    this.setState(previousState => ({
      isSideBarOpened: !previousState.isSideBarOpened,
    }))
  }

  handleSideBarClose = e => {
    const isSideBar = e.target.classList.toString().match(/sidebar/)

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
    const { router: { pathname }, sectionName, lng } = this.props
    const { showHeader, pinHeader, toggleHeaderAnimations } = this.state
    const links = headerLinks[lng].dev

    return (
      <Fragment>
        {/* <SideBar
          onToggle={this.handleSideBarToggle}
          isOpened={this.state.isSideBarOpened}
          onClose={this.handleSideBarClose}
        /> */}
        <HeaderContent
          links={links}
          pathname={pathname}
          sectionName={sectionName}
          showHeader={showHeader}
          pinHeader={pinHeader}
          toggleHeaderAnimations={toggleHeaderAnimations}
          onSideBarToggle={this.handleSideBarToggle}
        />
      </Fragment>
    )
  }
}

export default withRouter(translate()(Header))
