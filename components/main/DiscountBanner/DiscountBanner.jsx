import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { bool, string } from 'prop-types'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'
import cn from 'classnames'
import styles from './DiscountBanner.styles'

import Grid from '../../ui-kit/core-design/Grid'
import ContactModal from '../../ContactModal'
import { PictureSmart } from '@csssr/csssr.images/dist/react'

import bannerData from '../../../data/main/discountBanner'

import { ReactComponent as CloseButton } from '../../../static/icons/main/cross.svg'

import { L10nConsumer } from '../../../utils/l10nProvider'
import { DeviceConsumer } from '../../../utils/deviceProvider'

const DiscountBanner = ({ className, isMobile, isTablet, l10n: { translations }, pageName }) => {
  const [isHidden, setHidden] = useState(false)
  const [isContactModalVisible, toggleContactModalVisibility] = useState(false)

  return (
    <div
      className={cn(className, {
        _hidden: isHidden,
      })}
    >
      <Grid>
        <PictureSmart
          className="image"
          requireImages={bannerData.images}
          alt={bannerData.imgAlt}
          testId="discountBanner:picture"
        />

        <div className="banner-info">
          {isMobile ? (
            <span
              dangerouslySetInnerHTML={{ __html: bannerData.titleLink(translations) }}
              className="heading"
              onClick={() => toggleContactModalVisibility(true)}
            />
          ) : (
            <p
              dangerouslySetInnerHTML={{ __html: bannerData.title(translations) }}
              className="heading"
            />
          )}

          <span
            dangerouslySetInnerHTML={{ __html: bannerData.description(translations) }}
            className="description"
          />
        </div>

        <span
          dangerouslySetInnerHTML={{ __html: bannerData.arrowText(translations) }}
          className="arrow-text"
        />

        <CloseButton className="close-button" onClick={() => setHidden(true)} />

        {typeof window !== 'undefined' &&
          isContactModalVisible &&
          ReactDOM.createPortal(
            <ContactModal
              onClose={() => toggleContactModalVisibility(false)}
              pageName={pageName}
            />,
            document.getElementById('main'),
          )}

        <Global
          styles={() => css`
            .hero-wrap.hero-wrap_en {
              margin-top: ${isHidden ? '0' : '104px'};
            }

            ${isTablet &&
            css`
              .hero-wrap.hero-wrap_en {
                margin-top: ${isHidden ? '0' : '5.25rem'};
              }
            `}

            ${isMobile &&
            css`
              .hero-wrap.hero-wrap_en {
                margin-top: ${isHidden ? '0' : '5rem'};
              }
            `}
          `}
        />
      </Grid>
    </div>
  )
}

DiscountBanner.propTypes = {
  className: string,
  isMobile: bool,
}

export default L10nConsumer(
  DeviceConsumer(
    styled(DiscountBanner)`
      ${styles}
    `,
  ),
)
