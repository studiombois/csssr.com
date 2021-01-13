import React, { useState, useEffect, useRef } from 'react'
import { string, object } from 'prop-types'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './Assurance.styles'

import { PictureSmart } from '@csssr/csssr.images/dist/react'
import Heading from '../../ui-kit/core-design/Heading'
import SubHeading from '../../ui-kit/core-design/SubHeading'
import Text from '../../ui-kit/core-design/Text'
import Grid from '../../ui-kit/core-design/Grid'

import { L10nConsumer } from '../../../utils/l10nProvider'
import { DeviceConsumer } from '../../../utils/deviceProvider'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const Assurance = ({
  className,
  l10n: { translations, language },
  isMobile,
  content: { quality, roi, images },
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const itemRef = useRef()

  useEffect(() => {
    const callback = function ([entry]) {
      if (entry.intersectionRatio > 0 && !isVisible) {
        setIsVisible(true)
      }
    }

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: [0],
    }
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(callback, options)
      observer.observe(itemRef.current)

      return () => {
        observer.disconnect()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Grid as="section" className={className}>
      <div className="container">
        <div className="assurance-wrapper">
          <div className="quality">
            <Heading.H2
              type="slab"
              size="m"
              dangerouslySetInnerHTML={{ __html: quality.heading(translations) }}
              className="heading"
            />
            <SubHeading
              as="p"
              type="slab"
              size="m"
              dangerouslySetInnerHTML={{ __html: quality.subheading(translations) }}
              className="subheading"
            />
            <Text
              dangerouslySetInnerHTML={{ __html: quality.message(translations) }}
              className="message"
            />
          </div>
          <div className="roi">
            <Text
              as="span"
              dangerouslySetInnerHTML={{ __html: roi.procent(translations) }}
              className="percent"
            />
            <Text
              as="span"
              dangerouslySetInnerHTML={{ __html: roi.label(translations) }}
              className="label"
            />
            <Text
              dangerouslySetInnerHTML={{ __html: roi.description(translations) }}
              className="description"
            />
          </div>
        </div>

        <div
          className={cn(`picture-container`, { animated: !isMobile && isVisible })}
          ref={itemRef}
        >
          <PictureSmart
            requireImages={isMobile ? images.screenMobile : images.screenDesktop}
            alt={images.screenAlt(translations)}
          />
          {!isMobile && (
            <div className="screen-container screen-container_left">
              <PictureSmart
                requireImages={language === 'ru' ? images.designerRu : images.designerEn}
                alt={images.designerAlt(translations)}
              />
            </div>
          )}

          <div className="screen-container screen-container_right">
            <PictureSmart
              requireImages={language === 'ru' ? images.projectsRu : images.projectsEn}
              alt={images.projectsAlt(translations)}
            />
          </div>
        </div>
      </div>
    </Grid>
  )
}

Assurance.propTypes = {
  className: string,
  content: object,
}

export default L10nConsumer(
  DeviceConsumer(
    MsBrowserConsumer(styled(Assurance)`
      ${styles}
    `),
  ),
)
