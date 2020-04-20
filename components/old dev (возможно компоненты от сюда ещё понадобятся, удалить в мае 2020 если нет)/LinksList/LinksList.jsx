import React, { PureComponent } from 'react'
import { string, arrayOf, shape } from 'prop-types'
import styled from '@emotion/styled'
import styles from './LinksList.styles'

class LinksList extends PureComponent {
  static propTypes = {
    className: string,
    links: arrayOf(
      shape({
        href: string,
        label: string,
      }),
    ),
  }

  state = {
    isListVisible: false,
    isTablet: false,
  }

  componentDidMount() {
    this.tabletMediaQuery = window.matchMedia('(min-width: 768px) and (max-width: 1279px)')
    this.tabletMediaQuery.addListener(this.handleMediaMatch)
    this.handleMediaMatch(this.tabletMediaQuery)
  }

  componentWillUnmount() {
    this.tabletMediaQuery.removeListener(this.handleMediaMatch)
  }

  handleMediaMatch = ({ matches }) =>
    this.setState({
      isTablet: matches,
    })

  handleToggleListVisability = () =>
    this.setState({
      isListVisible: !this.state.isListVisible,
    })

  render() {
    const { className, title, links } = this.props
    const { isListVisible, isTablet } = this.state

    return (
      <div className={className}>
        <span className="font_perforator-10-regular">
          {title}
          <button
            className={isListVisible ? 'button_state_opened' : ''}
            onClick={this.handleToggleListVisability}
          />
        </span>

        <ul className={isListVisible ? 'list_state_visible' : ''}>
          {links.map(({ href, label, shortLabel }) => (
            <li key={`nav-link-${href}-${label}`}>
              {href && (
                <a
                  href={href}
                  target="_blank"
                  className="font_link-list_28"
                  rel="noopener nofollow"
                >
                  {isTablet && shortLabel ? shortLabel : label}
                </a>
              )}
              {!href && (
                <span className="font_link-list_28">
                  {isTablet && shortLabel ? shortLabel : label}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default styled(LinksList)`
  ${styles}
`
