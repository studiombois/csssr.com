import React from 'react'
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

const { menu } = headerLinks
const Nav = ({
  className,
  activeItem,
  animationDirection,
  onBackButtonClick,
  isMobile,
  t,
  lng,
}) => {
  const animationProps = isMobile
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

      <nav className={cn('nav', `nav_${activeItem}`)}>
        <ul>
          {activeItem &&
            menu
              .find(({ id }) => id === activeItem)
              .links.map(({ id, icon: Icon, title, description, href }) => (
                <Fade key={id} {...animationProps}>
                  <li className="nav-item">
                    <Link className="link" href={`${lng}/${href}`} isNextLink>
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
                </Fade>
              ))}
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
  lng: string,
  t: func,
}

export default translate()(
  DeviceConsumer(styled(Nav)`
    ${styles}
  `),
)
