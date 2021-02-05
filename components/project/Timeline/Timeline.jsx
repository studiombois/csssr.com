import React, { useState, useEffect, useRef } from 'react'
import { string, object } from 'prop-types'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './Timeline.styles'

import Heading from '../../ui-kit/core-design/Heading'
import Text from '../../ui-kit/core-design/Text'
import Grid from '../../ui-kit/core-design/Grid'

import { L10nConsumer } from '../../../utils/l10nProvider'
import { DeviceConsumer } from '../../../utils/deviceProvider'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const Timeline = ({
  className,
  l10n: { translations },
  isMobile,
  content: { heading, periodList },
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
    <section className={className}>
      <Grid>
        <Heading.H2
          type="slab"
          size="m"
          dangerouslySetInnerHTML={{ __html: heading(translations) }}
          className="heading"
        />

        <div className={cn(`container`, { animated: !isMobile && isVisible })} ref={itemRef}>
          <ul className="period-list">
            {periodList(translations).map((period) => (
              <li key={period.id} className="period-item">
                {period.date ? (
                  <Text as="span" className="period">
                    {period.date}
                  </Text>
                ) : (
                  <>
                    <Text as="span" className="period">
                      {period.firstDate}
                    </Text>
                    <Text as="span" className="period">
                      {period.secondDate}
                    </Text>
                  </>
                )}
              </li>
            ))}
          </ul>

          <div className="process">
            <ul className="scale-list">
              {periodList(translations).map((period) => (
                <li key={period.id} className="scale-item">
                  <div className="scale" />
                </li>
              ))}
            </ul>

            <ul className="title-list">
              {periodList(translations).map((period) => (
                <li key={period.id} className="title-item">
                  <Text as="span" className="title">
                    {period.title}
                  </Text>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Grid>
    </section>
  )
}

Timeline.propTypes = {
  className: string,
  content: object,
}

export default L10nConsumer(
  DeviceConsumer(
    MsBrowserConsumer(styled(Timeline)`
      ${styles}
    `),
  ),
)
