import React, { Fragment } from 'react'
import { string, func, bool } from 'prop-types'
import cn from 'classnames'
import Fade from 'react-reveal/Fade'
import styled from '@emotion/styled'
import styles from './Nav.styles'

import Link from '../../../ui-kit/core-design/Link'
import Heading from '../../../ui-kit/core-design/Heading'
import Text from '../../../ui-kit/core-design/Text'
import Back from '../../../../static/icons/header/back.svg'

import headerLinks from '../../../../data/headerLinks'

import translate from '../../../../utils/translate-wrapper'
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
  t,
  lng,
}) => {
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
    >
      {isMobile && (
        <button className="button_back" onClick={onBackButtonClick}>
          <Back className="icon_back" />

          {t('common:header.backLink')}
        </button>
      )}

      <nav className={cn('nav', `nav_${activeItem}`, `nav_${activeItem}_${lng}`)}>
        <ul>
          {activeItem &&
            menu
              .find(({ id }) => id === activeItem)
              .links.map(({ id, icon: Icon, title, description, href }) => {
                if (lng === 'ru' && id === 'express') {
                  return
                }

                return (
                  <Wrapper key={id} {...animationProps}>
                    <li className="nav-item">
                      <Link className="link" href={`/${lng}/${href}`} isNextLink>
                        <Icon className="icon" />

                        <Heading
                          className="title"
                          as="div"
                          type="regular"
                          size="m"
                          dangerouslySetInnerHTML={{
                            __html: t(title),
                          }}
                        />

                        {description && (
                          <Text
                            className="description"
                            as="p"
                            type="regular"
                            size="m"
                            dangerouslySetInnerHTML={{ __html: t(description) }}
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
  lng: string,
  t: func,
}

export default translate(
  MsBrowserConsumer(
    DeviceConsumer(styled(Nav)`
      ${styles}
    `),
  ),
)
