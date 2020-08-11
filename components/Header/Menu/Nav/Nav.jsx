import React, { Fragment } from 'react'
import { withRouter } from 'next/router'
import { bool, func, string } from 'prop-types'
import cn from 'classnames'
import Fade from 'react-reveal/Fade'
import styled from '@emotion/styled'
import styles from './Nav.styles'

import Link from '../../../ui-kit/core-design/Link'
import Heading from '../../../ui-kit/core-design/Heading'
import Text from '../../../ui-kit/core-design/Text'
import { ReactComponent as Back } from '../../../../static/icons/header/back.svg'

import headerLinks from '../../../../data/headerLinks'

import { L10nConsumer } from '../../../../utils/l10nProvider'
import { DeviceConsumer } from '../../../../utils/deviceProvider'
import { MsBrowserConsumer } from '../../../../utils/msBrowserProvider'

const { menu } = headerLinks
const Nav = ({
  className,
  activeItem,
  animationDirection,
  onBackButtonClick,
  isMobile,
  isIe11,
  router,
  l10n: { translations, language },
}) => {
  const linkRegExp = /^(ftp|http|https):\/\/[^ "]+$/
  const Wrapper = isIe11 ? Fragment : Fade
  const animationProps = isIe11
    ? {}
    : isMobile
    ? {
        right: true,
        duration: 200,
      }
    : {
        left: animationDirection === 'left',
        right: animationDirection === 'right',
        duration: 200,
        distance: '20px',
      }

  return (
    <div
      className={cn(className, {
        visible: activeItem,
      })}
      data-testid="Header:nav.dropdown"
    >
      {isMobile && (
        <button className="button_back" onClick={onBackButtonClick}>
          <Back className="icon_back" />

          {translations.common.header.backLink}
        </button>
      )}

      <nav className={cn('nav', `nav_${activeItem}`, `nav_${activeItem}_${language}`)}>
        <ul>
          {activeItem &&
            menu
              .find(({ id }) => id === activeItem)
              .links.map(({ id, icon: Icon, title, description, href }) => {
                if (language === 'ru' && id === 'express') {
                  return
                }

                return (
                  <Wrapper key={id} {...animationProps}>
                    <li
                      className={cn('nav-item', {
                        'nav-item_active': router.pathname === `/${language}/${href}`,
                      })}
                    >
                      <Link
                        data-testid={`Header:nav:link.${id}`}
                        className="link"
                        href={linkRegExp.test(href) ? href : `/${language}/${href}`}
                        isNextLink={!linkRegExp.test(href)}
                        target={linkRegExp.test(href) ? '_blank' : '_self'}
                        rel={linkRegExp.test(href) ? 'noopener noreferrer' : null}
                      >
                        <Icon className={cn('icon', `icon_${id}`)} />

                        <Heading
                          className="title"
                          as="div"
                          type="regular"
                          size="m"
                          dangerouslySetInnerHTML={{
                            __html: title(translations),
                          }}
                        />

                        {description && (
                          <Text
                            className="description"
                            as="p"
                            type="regular"
                            size="m"
                            dangerouslySetInnerHTML={{ __html: description(translations) }}
                          />
                        )}
                      </Link>
                    </li>
                  </Wrapper>
                )
              })}
        </ul>
      </nav>
    </div>
  )
}

Nav.propTypes = {
  className: string,
  activeItem: string,
  animationDirection: string,
  onBackButtonClick: func,
  isMobile: bool,
  isIe11: bool,
}

export default withRouter(
  L10nConsumer(
    MsBrowserConsumer(
      DeviceConsumer(styled(Nav)`
        ${styles}
      `),
    ),
  ),
)
