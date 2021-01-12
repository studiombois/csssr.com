import React, { useState, useEffect } from 'react'
import { object, string } from 'prop-types'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import styled from '@emotion/styled'
import styles from './Challenge.styles'

import Grid from '../../ui-kit/core-design/Grid'
import Heading from '../../ui-kit/core-design/Heading'
import Text from '../../ui-kit/core-design/Text'

import { L10nConsumer } from '../../../utils/l10nProvider'
import { DeviceConsumer } from '../../../utils/deviceProvider'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'
const Challenge = ({
  className,
  l10n: { translations, language },
  isMobile,
  content: { images, text },
}) => {
  const [offset, setOffset] = useState(0)
  const [offsetMin, setOffsetMin] = useState(0)
  const [offsetMax, setOffsetMax] = useState(0)
  const isWindowContext = typeof window !== 'undefined'

  useEffect(() => {
    const handleResize = () => {
      if (isWindowContext && window.innerWidth >= 1920) {
        setOffsetMin(1000)
        setOffsetMax(2100)
      } else if (isWindowContext && window.innerWidth >= 1360 && window.innerWidth < 1920) {
        setOffsetMin(1150)
        setOffsetMax(2000)
      } else if (isWindowContext && window.innerWidth >= 1260 && window.innerWidth < 1360) {
        setOffsetMin(1250)
        setOffsetMax(2050)
      } else if (isWindowContext && window.innerWidth >= 768 && window.innerWidth < 1260) {
        setOffsetMin(700)
        setOffsetMax(1290)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isWindowContext])

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.pageYOffset

      if (offset >= offsetMin && offset <= offsetMax) {
        setOffset(offset)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [offsetMin, offsetMax])

  return (
    <Grid className={className} as="section">
      <div className="profile">
        <div className="sticky-box">
          <div className="wrapper">
            <div className="picture-container">
              <div
                style={{
                  transform: isMobile ? 'translateY(0)' : `translateY(-${offset - offsetMin}px)`,
                }}
              >
                <PictureSmart
                  requireImages={language === 'ru' ? images.profileRu : images.profileEn}
                  alt={images.profileAlt(translations)}
                />
              </div>
            </div>
            <PictureSmart
              requireImages={images.laptop}
              alt={images.laptopAlt(translations)}
              className="laptop-image"
            />
          </div>
        </div>
      </div>

      <div className="info">
        <Heading.H2
          type="slab"
          size="m"
          dangerouslySetInnerHTML={{ __html: text.challenge.heading(translations) }}
          className="heading"
        />
        <Text
          type="strong"
          dangerouslySetInnerHTML={{ __html: text.challenge.text(translations) }}
          className="info-text"
        />

        <Heading.H2
          type="slab"
          size="m"
          dangerouslySetInnerHTML={{ __html: text.task.heading(translations) }}
          className="heading"
        />
        <Text
          type="strong"
          dangerouslySetInnerHTML={{ __html: text.task.text(translations) }}
          className="info-text"
        />

        <Heading.H2
          type="slab"
          size="m"
          dangerouslySetInnerHTML={{ __html: text.result.heading(translations) }}
          className="heading"
        />
        <div className="result-container">
          <div className="result-wrapper">
            <Text
              as="span"
              dangerouslySetInnerHTML={{ __html: text.result.months.number(translations) }}
              className="result-number"
            />
            <Text
              as="span"
              dangerouslySetInnerHTML={{ __html: text.result.months.description(translations) }}
              className="result-description"
            />
          </div>
          <div>
            <Text
              as="span"
              dangerouslySetInnerHTML={{ __html: text.result.releases.number(translations) }}
              className="result-number"
            />
            <Text
              as="span"
              dangerouslySetInnerHTML={{ __html: text.result.releases.description(translations) }}
              className="result-description"
            />
          </div>
        </div>

        <div className="quote-wrapper">
          <Text
            type="strong"
            dangerouslySetInnerHTML={{ __html: text.quote.text(translations) }}
            className="quote-text"
          />
          <Text
            type="strong"
            as="span"
            dangerouslySetInnerHTML={{ __html: text.quote.author(translations) }}
            className="quote-author"
          />
          <Text
            as="span"
            dangerouslySetInnerHTML={{ __html: text.quote.role(translations) }}
            className="quote-role"
          />
        </div>
      </div>
    </Grid>
  )
}

Challenge.propTypes = {
  className: string,
  content: object,
}

export default L10nConsumer(
  DeviceConsumer(
    MsBrowserConsumer(styled(Challenge)`
      ${styles}
    `),
  ),
)
